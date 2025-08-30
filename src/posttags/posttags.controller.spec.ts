import { Test, TestingModule } from '@nestjs/testing';
import { PosttagsController } from './posttags.controller';
import { PosttagsService } from './posttags.service';

describe('PosttagsController', () => {
  let controller: PosttagsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PosttagsController],
      providers: [PosttagsService],
    }).compile();

    controller = module.get<PosttagsController>(PosttagsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
