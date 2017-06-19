import { RandomNumberTickerPage } from './app.po';

describe('random-number-ticker App', () => {
  let page: RandomNumberTickerPage;

  beforeEach(() => {
    page = new RandomNumberTickerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
