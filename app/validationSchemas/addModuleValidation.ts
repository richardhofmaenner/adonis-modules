import {schema} from '@ioc:Adonis/Core/Validator'

const addModuleValidationSchema = schema.create({
  name: schema.string(),
  logoUrl: schema.string(),
  description: schema.string(),
  packageUrl: schema.string(),
  version: schema.enum(['v4', 'v5']),
})

export default addModuleValidationSchema
