import {HttpContextContract} from "@ioc:Adonis/Core/HttpContext";

export default class HomeController {
  async show(ctx: HttpContextContract) {
    return ctx.view.render('admin/index')
  }
}
