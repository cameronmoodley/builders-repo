import { BuildersPlatformPage } from './app.po';

describe('builders-platform App', () => {
  let page: BuildersPlatformPage;

  beforeEach(() => {
    page = new BuildersPlatformPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
