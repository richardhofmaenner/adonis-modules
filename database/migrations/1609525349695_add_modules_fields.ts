import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Modules extends BaseSchema {
  protected tableName = 'modules'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.boolean('in_review').defaultTo('false').notNullable().after('version')
      table.boolean('is_online').defaultTo('true').notNullable().after('in_review')
    })
  }

  public async down () {}
}
