<<<<<<< HEAD
import { browser, by, element } from 'protractor';
=======
import { browser, element, by } from 'protractor';
>>>>>>> d21d88c804b638aad77c21e40766016f1dc80ea2

export class Html5BannersPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
