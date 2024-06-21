import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { resolve } from 'path';

config({ path: resolve(__dirname, '.env') });

const DataSourceConfig = new DataSource({
  type: 'mysql',
  host: 'localhost', //process.env.DB_HOST,
  port: 3306, //parseInt(process.env.DB_PORT),
  username: 'user', //process.env.MYSQL_USER,
  password: 'password', //process.env.MYSQL_PASSWORD,
  database: 'db', //process.env.MYSQL_DATABASE,
  migrations: ['./src/migrations/*'],
  synchronize: false,
  migrationsTableName: 'migrations',
});

export default DataSourceConfig;
