import { Module } from '@nestjs/common';
import { WebimagesService } from './webimages.service';
import { WebimagesController } from './webimages.controller';
import { WebImages } from './entities/webimages.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [WebimagesController],
  providers: [WebimagesService],
  imports: [TypeOrmModule.forFeature([WebImages])],
})
export class WebimagesModule {}
