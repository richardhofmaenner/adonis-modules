import {HttpContextContract} from "@ioc:Adonis/Core/HttpContext";
import Module from "App/Models/Module";

export default class HomeController {
  async show(ctx: HttpContextContract) {

    const inReviewModules = await Module.query().where('in_review', true)
    const onlineModules = await Module.query().where('is_online', true).andWhere('in_review', false)
    const disabledModules = await Module.query().where('is_online', false).andWhere('in_review', false)


    return ctx.view.render('admin/index', {
      title: 'Dashboard | Adonis Modules',
      countInReviewModules: inReviewModules.length,
      countOnlineModules: onlineModules.length,
      countDisabledModules: disabledModules.length
    })
  }
}
