import * as fs from 'fs'

import { schema } from '../src/schema'

const path = process.argv[2]

if (!path || !path.endsWith('.json')) {
  console.log(`path: ${path}`)
  console.error('Please provide a path to the schema json file.')
  process.exit(1)
}

fs.writeFileSync(path, JSON.stringify(schema, null, 2))
