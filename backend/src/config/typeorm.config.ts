import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { resolve } from 'path';

config({ path: resolve(__dirname, '.env') });

const DataSourceConfig = new DataSource({
  type: 'mysql',
  host: 'fs-test-db',
  port: 3306,
  username: "user",
  password: "password",
  database: "test_db",
  migrations: ['./src/migrations/*'],
  synchronize: false,
  migrationsTableName: 'migrations',
});

export default DataSourceConfig;
