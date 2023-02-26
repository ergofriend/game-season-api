import { OpenAPIRoute, Path, Str } from '@cloudflare/itty-router-openapi'

import { Adaptor, CommonSeason, HandleProps } from '../type'
import { getCurrentSeason } from '../utils/getCurrentSeason'
import { newResponse } from '../utils/newResponse'

type Props<T extends CommonSeason> = {
  ip: string
  data: Record<number, T>
  SeasonSchema: object
  ProgressSchema: object
  getProgress: (season: T) => object
}

export const newAdaptor = <T extends CommonSeason>({
  ip,
  data,
  SeasonSchema,
  ProgressSchema,
  getProgress,
}: Props<T>): Adaptor => {
  const tags = [ip]
  const operationIP = ip.replace(' ', '-')
  class currentSeason extends OpenAPIRoute {
    static schema = {
      tags,
      summary: `Get Current Season`,
      operationId: `${operationIP}-current-season`,
      parameters: {},
      responses: {
        '200': {
          schema: {
            season: SeasonSchema,
            progress: ProgressSchema,
          },
        },
        '410': {
          description: 'Not found current season',
          schema: {
            message: new Str({ example: 'Not found current season' }),
          },
        },
      },
    }

    async handle() {
      const season = getCurrentSeason(data)
      if (!season) {
        return newResponse({ message: 'Not found current season' }, 410)
      }
      return newResponse({
        season,
        progress: getProgress(season),
      })
    }
  }

  class getSeason extends OpenAPIRoute {
    static schema = {
      tags,
      summary: `Get Season`,
      operationId: `${operationIP}-get-season`,
      parameters: {
        season: Path(Number, {
          description: 'Season number',
          required: true,
        }),
      },
      responses: {
        '200': {
          schema: {
            season: SeasonSchema,
          },
        },
        '404': {
          description: 'Not found season',
          schema: {
            message: new Str({ example: 'Not found season' }),
          },
        },
      },
    }

    async handle(props: HandleProps) {
      const seasonNumber = props.params['season']
      if (!seasonNumber)
        return newResponse({ message: 'Not found season' }, 404)

      const season: T | undefined = data[Number(seasonNumber)]
      if (!season) return newResponse({ message: 'Not found season' }, 404)
      return newResponse({ season })
    }
  }

  class getHistory extends OpenAPIRoute {
    static schema = {
      tags,
      summary: `Get Season History`,
      operationId: `${operationIP}-season-history`,
      parameters: {},
      responses: {
        '200': {
          schema: {
            history: [SeasonSchema],
          },
        },
      },
    }

    async handle() {
      const history = Object.values(data)
      return newResponse({ history })
    }
  }

  const adaptor: Adaptor = {
    currentSeason: currentSeason as unknown as OpenAPIRoute,
    getSeason: getSeason as unknown as OpenAPIRoute,
    getHistory: getHistory as unknown as OpenAPIRoute,
  }

  return adaptor
}
