//grab variables
// describe('payments tests'), function() {
//     beforeEach(function () {
//         billAmtInput.value = 60;
//         tipAmtInput.value = 7;
//     });

//     it('should submit payment info', function () {
//         submitPaymentInfo();

//     expect(Object.keys(allPayments).length).toEqual(1);
//     expect(allPayments['payment1'].billAmt).toEqual('60');
//     expect(allPayments['payment1'].tipAmt).toEqual('7');
//     expect(allPayments['payment1'].tipPercent).toEqual(7);
        
//     });
// };

describe("payments tests", function() {
    beforeEach(function () {
      billAmtInput.value = 80;
      tipAmtInput.value = 7;
    });
  
    it('should submit payment info()', function () {
      submitPaymentInfo();
      expect(Object.keys(allPayments).length).toEqual(1);
      expect(allPayments['payment1'].billAmt).toEqual('80');
      expect(allPayments['payment1'].tipAmt).toEqual('7');
      expect(allPayments['payment1'].tipPercent).toEqual(9);
    });
  
    it('should not submit payment info() with empty input', function () {
      billAmtInput.value = '';
      submitPaymentInfo();
  
      expect(Object.keys(allPayments).length).toEqual(0);
    });
  
    it('should append payment table()', function () {
      let curPayment = createCurPayment();
      allPayments['payment1'] = curPayment;
  
      appendPaymentTable(curPayment);
  
      let curTdList = document.querySelectorAll('#paymentTable tbody tr td');
  
      expect(curTdList.length).toEqual(4);
      expect(curTdList[0].innerText).toEqual('$80');
      expect(curTdList[1].innerText).toEqual('$7');
      expect(curTdList[2].innerText).toEqual('9%');
    });
  
    it('should create current payment()', function () {
      let expectedPayment = {
        billAmt: '80',
        tipAmt: '7',
        tipPercent: 9,
      }
  
      expect(createCurPayment()).toEqual(expectedPayment);
    });
  
    it('should not create current payment()', function () {
      billAmtInput.value = '';
      tipAmtInput.value = '';
      let curPayment = createCurPayment();
  
      expect(curPayment).toEqual(undefined);
    });
  
    afterEach(function() {
      billAmtInput.value = '';
      tipAmtInput.value = '';
      paymentTbody.innerHTML = '';
      summaryTds[0].innerHTML = '';
      summaryTds[1].innerHTML = '';
      summaryTds[2].innerHTML = '';
      serverTbody.innerHTML = '';
      paymentId = 0;
      allPayments = {};
    });
  });