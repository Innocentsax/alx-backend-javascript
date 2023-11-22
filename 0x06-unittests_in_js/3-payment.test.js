const sinon = require('sinon');
var { expect } = require('chai');

const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('Spy', function () {
  it('Ensures math is the same.', () => {
    const spyUtils = sinon.spy(Utils, 'calculateNumber');
    const spyConsole = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(spyUtils.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(spyConsole.calledOnceWithExactly('The total is: 120')).to.be.true;

    spyUtils.restore();
    spyConsole.restore();
  });
});
