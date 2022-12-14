import { Sequelize } from "sequelize";
import { BookmarkFactory } from "./bookmark";
import { UserFactory } from "./user";

const dbName = 'mydb';
const username = 'sqluser';
const password = 'password';

const sequelize = new Sequelize(dbName, username, password, {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});

BookmarkFactory(sequelize);
UserFactory(sequelize);

export const db = sequelize;