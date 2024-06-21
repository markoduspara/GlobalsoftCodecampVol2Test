import { Test, TestingModule } from '@nestjs/testing';
import { WebimagesController } from './webimages.controller';
import { WebimagesService } from './webimages.service';

describe('WebimagesController', () => {
  let controller: WebimagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WebimagesController],
      providers: [WebimagesService],
    }).compile();

    controller = module.get<WebimagesController>(WebimagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
