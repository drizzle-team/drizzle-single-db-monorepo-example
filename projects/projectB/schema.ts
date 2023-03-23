import { mysqlTableCreator, text } from 'drizzle-orm/mysql-core';
import { int } from 'drizzle-orm/mysql-core';

const projectAMySqlTable = mysqlTableCreator((name) =>`projectB_${name}`)

export const users = projectAMySqlTable('users', {
    id: int('id').autoincrement().primaryKey(),
    name: text('name').notNull(),
    age: int('age'),
    occupation: text('occupation')
})
