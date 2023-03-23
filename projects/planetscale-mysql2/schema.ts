import { mysqlTable, text } from 'drizzle-orm/mysql-core';
import { int } from 'drizzle-orm/mysql-core';

export const users = mysqlTable('users', {
    id: int('id').autoincrement().primaryKey(),
    name: text('name').notNull(),
    age: int('age'),
    occupation: text('occupation')
})
