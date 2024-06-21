import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WebimagesModule } from './webimages/webimages.module';
import 'dotenv/config';
import { WebImages } from './webimages/entities/webimages.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'fs-test-db',
      port: 3306,
      username: 'user',
      password: 'password',
      database: 'test_db',
      entities: [WebImages],
    }),
    WebimagesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
