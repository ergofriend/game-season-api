export const TEST_SERVER_PORT = process.env.PORT
  ? Number(process.env.PORT)
  : 8787
export const TEST_SERVER_HOST = '127.0.0.1'
export const TEST_SERVER_URL = `http://${TEST_SERVER_HOST}:${TEST_SERVER_PORT}`
