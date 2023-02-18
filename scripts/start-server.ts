import { spawn } from 'child_process'

const PORT = process.env.PORT ?? 8787

const child = spawn(`yarn wrangler dev --port ${PORT}`, [], {
  detached: true,
  stdio: 'ignore',
  shell: true,
})
child.unref()
