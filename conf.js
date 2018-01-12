exports.config = {
  onPrepare: function () {
    browser.ignoreSynchronization = true;
  },
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['specs/*']
};
