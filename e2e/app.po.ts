import { browser, element, by } from 'protractor';

export class RandomNumberTickerPage {
    navigateTo() {
        return browser.get('/');
    }

    getParagraphText() {
        return element(by.css('app-root p')).getText();
    }

    getElementById(id: string) {
        return element(by.id(id));
    }
}
