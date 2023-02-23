import axios from 'axios'
import jestOpenAPI from 'jest-openapi'

import { routes } from '.'
import schema from '../../public-api.json'
import { TEST_SERVER_URL } from '../../tests/env'

jestOpenAPI(schema as unknown as never)

describe('ip', () => {
  routes.forEach(({ path }) => {
    describe(path, () => {
      it(`/${path}/current`, async () => {
        const res = await axios.get(`${TEST_SERVER_URL}/${path}/current`)
        expect(res.status).toEqual(200)
        expect(res).toSatisfyApiSpec()
      })
      it(`/${path}/history`, async () => {
        const res = await axios.get(`${TEST_SERVER_URL}/${path}/history`)
        expect(res.status).toEqual(200)
        expect(res).toSatisfyApiSpec()
      })
      it(`/${path}/:season`, async () => {
        const res = await axios.get(`${TEST_SERVER_URL}/${path}/1`)
        expect(res.status).toEqual(200)
        expect(res).toSatisfyApiSpec()
      })
    })
  })
})
