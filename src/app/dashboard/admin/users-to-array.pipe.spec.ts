import { UsersToArrayPipe } from './users-to-array.pipe';

describe('UsersToArrayPipe', () => {
  it('create an instance', () => {
    const pipe = new UsersToArrayPipe();
    expect(pipe).toBeTruthy();
  });
});
