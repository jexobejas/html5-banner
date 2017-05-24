import { Html5BannersPage } from './app.po';

describe('html5-banners App', function() {
  let page: Html5BannersPage;

  beforeEach(() => {
    page = new Html5BannersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
