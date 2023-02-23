import { spawn } from 'child_process'

import waitPort from 'wait-port'

import { TEST_SERVER_HOST, TEST_SERVER_PORT } from './env'

const main = async () => {
  const child = spawn(
    `yarn wrangler dev --host ${TEST_SERVER_HOST} --port ${TEST_SERVER_PORT} --local`,
    [],
    {
      detached: true,
      stdio: 'ignore',
      shell: true,
    },
  )
  child.unref()

  const result = await waitPort({
    host: TEST_SERVER_HOST,
    port: TEST_SERVER_PORT,
    path: '/health',
  })
  result.open ? console.log('Server is up') : console.log('Server is down')
}
// void main()

export default main
