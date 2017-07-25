import { OngeraPage } from './app.po';

describe('ongera App', function() {
  let page: OngeraPage;

  beforeEach(() => {
    page = new OngeraPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
