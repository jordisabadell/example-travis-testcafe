import { Selector } from 'testcafe';

fixture `Getting Started`
    .page `https://kilometresolidari-static-web.firebaseapp.com/`;

    test('Google Custom Search test', async t => {
        await t
            .typeText('#q', 'Esquitx')
            .click('#search');
    });