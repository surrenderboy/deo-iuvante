'use strict';

gemini.suite('loginPage', (suite) => {
  suite
    .setUrl('/first-time')
    .setCaptureElements('html')
    .capture('plain', actions => actions.wait(2000))
    .capture('focusedNickname', (actions) => {
      actions.focus('#name');
    })
    .capture('withNameEntered', (actions) => {
      actions.sendKeys('pewpew');
    });
});
