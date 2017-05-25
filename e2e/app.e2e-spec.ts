import { Html5BannersPage } from './app.po';

<<<<<<< HEAD
describe('html5-banners App', () => {
=======
describe('html5-banners App', function() {
>>>>>>> d21d88c804b638aad77c21e40766016f1dc80ea2
  let page: Html5BannersPage;

  beforeEach(() => {
    page = new Html5BannersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
