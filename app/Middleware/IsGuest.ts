import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class IsGuest {
  public async handle (ctx: HttpContextContract, next: () => Promise<void>) {
    if (ctx.auth.isAuthenticated) {
      ctx.response.redirect('/admin')
    }
    await next()
  }
}
