import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

<<<<<<< HEAD
  getParagraphText() {
=======
  getTitleText() {
>>>>>>> 7a675035078d9a7286d53c6ffab12a1e40b6ecd7
    return element(by.css('app-root h1')).getText();
  }
}
