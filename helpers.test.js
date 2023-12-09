describe('helpers tests', function() {
    beforeEach(function () {
        billAmtInput.value = 55;
        tipAmtInput.value = 37;
        submitPaymentInfo();
      });

    it('should sum tip total', function(){
        expect(sumPaymentTotal('tipAmt')).toEqual(37);
        billAmtInput.value=110;
        tipAmtInput.value =74;
        submitPaymentInfo();
        expect(sumPaymentTotal('tipAmt')).toEqual(111);
    });

    it('should sum bill total', function() {
        expect(sumPaymentTotal('billAmt')).toEqual(55);

        billAmtInput.value=110;
        tipAmtInput.value =74;
        submitPaymentInfo();
        expect(sumPaymentTotal('billAmt')).toEqual(165);
    });

    it('should sum tip percent', function () {
        expect(sumPaymentTotal('tipPercent')).toEqual(67);
        billAmtInput.value = 55;
        tipAmtInput.value = 37;
        submitPaymentInfo();
        expect(sumPaymentTotal('tipPercent')).toEqual(134);
      });
    
      it('should calculate tip percent', function () {
        expect(calculateTipPercent(80, 22)).toEqual(28);
        expect(calculateTipPercent(111, 11)).toEqual(10);
      });
    
      it('should append Td', function () {
        let newTr = document.createElement('tr');
        appendTd(newTr, 'test');
        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('test');
      });
    
      it('should append delete btn', function () {
        let newTr = document.createElement('tr');
        appendDeleteBtn(newTr);
        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('X');
      });
    
      afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        allPayments = {};
        paymentId = 0;
      });
})