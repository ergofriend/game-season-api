import * as fs from 'fs'

import { schema } from '../src/schema'

fs.writeFileSync('./public-api.json', JSON.stringify(schema, null, 2))
