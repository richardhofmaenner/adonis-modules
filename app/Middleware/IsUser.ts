import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Logger from "@ioc:Adonis/Core/Logger";

export default class IsUser {
  public async handle (ctx: HttpContextContract, next: () => Promise<void>) {
    if (ctx.auth === null) {
      ctx.response.redirect('/admin/login')
      Logger.info(ctx.auth.user?.email)
      Logger.info('User is not logged in.')
    }

    await next()
  }
}
