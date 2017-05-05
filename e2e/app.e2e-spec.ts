import { A2todoPage } from './app.po';

describe('a2todo App', () => {
  let page: A2todoPage;

  beforeEach(() => {
    page = new A2todoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
