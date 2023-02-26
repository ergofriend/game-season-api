import { OpenAPISpecObject } from 'openapi-validator'

import { router } from './router'

export const schema = router.schema as unknown as OpenAPISpecObject
