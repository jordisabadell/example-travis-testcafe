import { Selector } from 'testcafe';

fixture `Getting Started`
    .page `https://example-travis-testcafe.web.app/`;

    test('Page load', async t => {
        await t
            .typeText('#q', 'Some word')
            .click('#search');
    });