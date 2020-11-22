import {HttpContextContract} from '@ioc:Adonis/Core/HttpContext'
import addModuleValidationSchema from '../../validationSchemas/addModuleValidation'
import Module from 'App/Models/Module'
import {validator} from "@ioc:Adonis/Core/Validator";

export default class ListModulesController {
  async addModule (ctx: HttpContextContract) {
    // checks if AUTH_KEY exists and checks if Authorization header does not matches AUTH_KEY
    // if the Authorization Header not matches the AUTH_KEY it will return a 401 status
    if (process.env.AUTH_KEY !== null
      && ctx.request.header('Authorization')?.replace('Bearer ', '') !== process.env.AUTH_KEY) {
      return ctx.response.status(401)
    } else {

      try {
        await validator.validate({
          schema: addModuleValidationSchema,
          data: ctx.request.all(),
        })
      } catch (e) {
        return ctx.response.status(400).json(e.messages)
      }

      const fields = ctx.request.all()
      const newModule = await new Module()
      newModule.name = fields.name
      newModule.description = fields.description
      newModule.logoUrl = fields.logoUrl
      newModule.packageUrl = fields.packageUrl
      newModule.version = fields.version

      await newModule.save()

      return ctx.response.status(200).json({'hello': 'World'})
    }
  }

  async get (ctx: HttpContextContract) {
    const allModules = await Module.all()
    const state = {
      title: 'AdonisJS Framework Modules',
      modules: allModules,
    }
    return ctx.view.render('index', state)
  }
}
