import { RandomNumberTickerPage } from './app.po';

describe('unique-random-number app', () => {
    let page: RandomNumberTickerPage;

    beforeEach(() => {
        page = new RandomNumberTickerPage();
    });

    // This is the only reliable way to know ticker is ticking. As the template re-renders every 2 seconds.
    it ('should not display the dummy ? placeholder', () => {
        page.navigateTo();

        const dummyPlaceHolder = page.getElementById('ticker-dummy-placeholder');
        expect(dummyPlaceHolder).toBeNull();
    });
});
