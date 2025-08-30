import { Test, TestingModule } from '@nestjs/testing';
import { PosttagsService } from './posttags.service';

describe('PosttagsService', () => {
  let service: PosttagsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PosttagsService],
    }).compile();

    service = module.get<PosttagsService>(PosttagsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
