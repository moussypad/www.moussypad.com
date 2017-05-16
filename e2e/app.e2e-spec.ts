import { Www.Moussypad.ComPage } from './app.po';

describe('www.moussypad.com App', () => {
  let page: Www.Moussypad.ComPage;

  beforeEach(() => {
    page = new Www.Moussypad.ComPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
