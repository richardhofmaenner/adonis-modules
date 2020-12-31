import {HttpContextContract} from "@ioc:Adonis/Core/HttpContext";
import loginValidationSchema from "App/validationSchemas/loginValidation";

export default class AuthController {
  async login(ctx: HttpContextContract) {
    const fields = await ctx.request.validate({
      schema: loginValidationSchema
    })

    await ctx.auth.attempt(fields.email, fields.password)

    return ctx.response.redirect('/admin')
  }

  async showLoginForm(ctx: HttpContextContract) {
    const data = {
      title: 'Sign in'
    }

    return ctx.view.render('admin/login', data)
  }

  async logout(ctx: HttpContextContract) {
    await ctx.auth.logout()

    ctx.session.flash({
      success: 'You have successfully logged out.'
    })

    return ctx.response.redirect('/admin/login')
  }
}
