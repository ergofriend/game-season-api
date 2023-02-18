import * as fs from 'fs'

import { router } from '../src/index'

// Get the Schema from itty-router-openapi
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
const schema = router.schema

// Optionaly: update the schema with some costumizations for publishing

// Write the final schema
fs.writeFileSync('./public-api.json', JSON.stringify(schema, null, 2))
