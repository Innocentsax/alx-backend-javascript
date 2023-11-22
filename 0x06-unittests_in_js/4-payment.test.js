const sinon = require('sinon');
var { expect } = require('chai');

const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('Stubs.', function () {
  it('Ensures math is the same.', () => {
    const stubUtils = sinon.stub(Utils, 'calculateNumber');
    stubUtils.returns(10);
    const spyConsole = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(stubUtils.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(spyConsole.calledOnceWithExactly('The total is: 10')).to.be.true;

    stubUtils.restore();
    spyConsole.restore();
  });
});
