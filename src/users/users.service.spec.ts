import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a user', () => {
    const user = { id: 1, email: 'testing@hotmail.com' };
    expect(service.create(user)).toEqual(user);
  });

  it('should return all users', () => {
    const user01 = { id: 1, email: 'testing@hotmail.com' };
    const user02 = { id: 2, email: 'testing@hotmail.com' };
    service.create(user01);
    service.create(user02);

    expect(service.findAll()).toEqual([user01, user02]);
  });
});
