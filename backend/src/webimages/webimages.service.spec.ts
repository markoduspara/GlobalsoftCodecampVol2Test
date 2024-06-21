import { Test, TestingModule } from '@nestjs/testing';
import { WebimagesService } from './webimages.service';

describe('WebimagesService', () => {
  let service: WebimagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WebimagesService],
    }).compile();

    service = module.get<WebimagesService>(WebimagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
