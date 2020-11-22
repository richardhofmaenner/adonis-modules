// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import {HttpContextContract} from '@ioc:Adonis/Core/HttpContext'

export default class ListModulesController {
  async get (ctx: HttpContextContract) {
    const state = {
      title: 'Hello from Controller',
    }
    return ctx.view.render('index', state)
  }
}
