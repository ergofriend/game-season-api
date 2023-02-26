import jestOpenAPI from 'jest-openapi'

import { routes } from '.'
import { router, SERVER_URL } from '../router'
import { schema } from '../schema'

const dummyRequest = async (path: string) => {
  const target = `${SERVER_URL}/${path}`
  const request = new Request(target, {
    method: 'GET',
  })
  const response: Response = await router.handle(request)
  return {
    status: response.status,
    req: {
      path: target,
      method: request.method,
    },
    body: await response.json(),
  }
}

beforeAll(() => {
  jestOpenAPI(schema)
})

describe('ip', () => {
  routes.forEach(({ path }) => {
    describe(path, () => {
      it(`/${path}/current`, async () => {
        const res = await dummyRequest(`${path}/current`)
        expect(res.status).toEqual(200)
        expect(res).toSatisfyApiSpec()
      })
      it(`/${path}/history`, async () => {
        const res = await dummyRequest(`${path}/history`)
        expect(res.status).toEqual(200)
        expect(res).toSatisfyApiSpec()
      })
      it(`/${path}/:season (200)`, async () => {
        const res = await dummyRequest(`${path}/1`)
        expect(res.status).toEqual(200)
        expect(res).toSatisfyApiSpec()
      })
      it(`/${path}/:season (404)`, async () => {
        const res = await dummyRequest(`${path}/999999`)
        expect(res.status).toEqual(404)
        expect(res).toSatisfyApiSpec()
      })
    })
  })
})
