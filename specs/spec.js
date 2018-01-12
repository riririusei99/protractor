describe('My First Test', function() {
  it('Search riririusei99', function() {
    browser.get('http://teamspirit.hatenablog.com/');

    element(by.css('input[type=text')).sendKeys('riririusei99');
    element(by.css('input[type=submit]')).click();

    // Waits for the title to be 'riririusei99'.
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.titleContains('riririusei99'), 5000);

    expect(browser.getTitle()).toEqual('riririusei99 の検索結果 - TeamSpirit Developer Blog');

  });
});
