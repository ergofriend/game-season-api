import axios from 'axios'
import jestOpenAPI from 'jest-openapi'

import { routes } from '.'
import schema from '../../public-api.json'

jestOpenAPI(schema as unknown as never)

const SERVER_PORT = process.env.PORT || 8787
const SERVER_HOST = '127.0.0.1'
const SERVER_URL = `http://${SERVER_HOST}:${SERVER_PORT}`

describe('ip', () => {
  routes.forEach(({ path }) => {
    describe(path, () => {
      it(`/${path}/current`, async () => {
        const res = await axios.get(`${SERVER_URL}/${path}/current`)
        expect(res.status).toEqual(200)
        expect(res).toSatisfyApiSpec()
      })
      it(`/${path}/history`, async () => {
        const res = await axios.get(`${SERVER_URL}/${path}/history`)
        expect(res.status).toEqual(200)
        expect(res).toSatisfyApiSpec()
      })
      it(`/${path}/:season`, async () => {
        const res = await axios.get(`${SERVER_URL}/${path}/1`)
        expect(res.status).toEqual(200)
        expect(res).toSatisfyApiSpec()
      })
    })
  })
})
