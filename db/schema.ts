// Intentionally empty by default.
// Add Drizzle tables here when the site actually needs a database.
// See examples/d1/db/schema.ts for an opt-in example.
import {sqliteTable,text,integer,primaryKey,index} from 'drizzle-orm/sqlite-core';
export const cart=sqliteTable('cart',{user:text('user').notNull(),product:text('product').notNull(),size:text('size').notNull(),quantity:integer('quantity').notNull() },t=>[primaryKey({columns:[t.user,t.product,t.size]})]);
export const orders=sqliteTable('orders',{id:text('id').primaryKey(),user:text('user').notNull(),customer:text('customer').notNull(),email:text('email').notNull(),address:text('address').notNull(),items:text('items').notNull(),total:integer('total').notNull(),status:text('status').notNull().default('Received'),created:text('created').notNull()},t=>[index('idx_orders_user_created').on(t.user,t.created)]);
export const prices=sqliteTable('prices',{product:text('product').primaryKey(),price:integer('price').notNull()});
export const settings=sqliteTable('settings',{key:text('key').primaryKey(),value:text('value').notNull()});
export const tryons=sqliteTable('tryons',{id:text('id').primaryKey(),user:text('user').notNull(),prediction:text('prediction'),created:text('created').notNull()},t=>[index('idx_tryons_user_created').on(t.user,t.created)]);
