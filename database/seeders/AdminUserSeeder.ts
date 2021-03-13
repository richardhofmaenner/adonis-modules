import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from "App/Models/User";

export default class AdminUserSeederSeeder extends BaseSeeder {

  public static developmentOnly = true

  public async run () {
    await User.create({
      email: 'hello@terillos.dev',
      password: 'P@ssw0rd'
    })
  }
}
