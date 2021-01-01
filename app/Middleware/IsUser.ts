import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Logger from "@ioc:Adonis/Core/Logger";

export default class IsUser {
  public async handle (ctx: HttpContextContract, next: () => Promise<void>) {
    if (ctx.auth === null) {
      return ctx.response.redirect('/admin/login')
    }

    await next()
  }
}
