import * as fs from 'fs'

import { router } from '../src/index'

// Get the Schema from itty-router-openapi
const schema = router.schema

// Write the final schema
fs.writeFileSync('./public-api.json', JSON.stringify(schema, null, 2))
