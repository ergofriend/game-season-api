import { spawn } from 'child_process'

import { TEST_SERVER_PORT } from './env'

export default () => {
  const child = spawn(`kill -9 $(lsof -t -i:${TEST_SERVER_PORT})`, [], {
    detached: true,
    stdio: 'ignore',
    shell: true,
  })
  child.unref()
}
