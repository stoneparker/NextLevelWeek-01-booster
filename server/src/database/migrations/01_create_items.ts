import Knex from 'knex';

export async function up(knex: Knex) { // tipo do knex é o Knex importado
   // CRIAR A TABELA
   return knex.schema.createTable('items', table => {
      table.increments('id').primary();
      table.string('image').notNullable();
      table.string('title').notNullable();
   })
}

export async function down(knex: Knex) {
   // CONTRÁRIO DO UP
   return knex.schema.dropTable('items');
}