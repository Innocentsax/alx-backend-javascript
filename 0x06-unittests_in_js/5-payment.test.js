const sinon = require('sinon');
var { expect } = require('chai');

const sendPaymentRequestToApi = require('./5-payment');
//const Utils = require('./utils');

describe('Hooks.', function () {
  let spyConsole;
  beforeEach(function () {
    // Runs before each test in this block.
    spyConsole = sinon.spy(console, 'log');
  });

  afterEach(function () {
    // Runs after each test in this block.
    spyConsole.restore();
  });

  it('Logs 120 with 100, 20.', () => {
    sendPaymentRequestToApi(100, 20);

    expect(spyConsole.calledOnceWithExactly('The total is: 120')).to.be.true;
    expect(spyConsole.calledOnce).to.be.true;
  });

  it('Logs 20 with 10, 10.', () => {
    sendPaymentRequestToApi(10, 10);

    expect(spyConsole.calledOnceWithExactly('The total is: 20')).to.be.true;
    expect(spyConsole.calledOnce).to.be.true;
  });
});
