'use strict';

gemini.suite('loginPage', (suite) => {
  suite
    .setUrl('/')
    .setCaptureElements('#root')
    .capture('plain')
    .capture('focusedNickname', (actions, find) => {
      actions.click(find('#name'));
    })
    .capture('withNameEntered', (actions) => {
      actions.sendKeys('#name', 'pewpew');
    })
    .capture('createdUser', (actions) => {
      actions.wait(1000);
      actions.click('.src-components-UserForm-__UserForm-module___buttonCreateAccount');
    });
});
