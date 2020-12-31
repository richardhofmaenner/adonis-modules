import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class IsGuest {
  public async handle (ctx: HttpContextContract, next: () => Promise<void>) {
    // code for middleware goes here. ABOVE THE NEXT CALL
    if (ctx.auth === null) {
      ctx.response.redirect('/admin')
    }
    await next()
  }
}
