import {schema} from '@ioc:Adonis/Core/Validator';
import {rules} from "@ioc:Adonis/Core/Validator";

const loginValidationSchema = schema.create({
  email: schema.string({}, [
    rules.email(),
    rules.required()
  ]),
  password: schema.string({}, [
    rules.minLength(8),
    rules.maxLength(128)
  ])
})

export default loginValidationSchema
