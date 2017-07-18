exports.up = function (knex, Promise) {
  return knex.schema.createTable('posts', function (table) {
    table.increments('post_id').primary()
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('posts')
}
