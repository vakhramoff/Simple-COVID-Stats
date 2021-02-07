import { ToLocaleStringPipe } from './to-locale-string.pipe';

describe('ToLocaleStringPipe', () => {
  it('create an instance', () => {
    const pipe = new ToLocaleStringPipe();
    expect(pipe).toBeTruthy();
  });
});
