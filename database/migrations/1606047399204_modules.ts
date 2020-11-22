import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Modules extends BaseSchema {
  protected tableName = 'modules'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name', 100)
      table.string('logoUrl', 255)
      table.text('description')
      table.string('packageUrl', 255)
      table.enum('version', ['v4', 'v5'])
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
