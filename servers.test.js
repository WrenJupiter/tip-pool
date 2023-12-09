describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialize
    serverNameInput.value = 'Alex';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alex');
  });

  it('should update server table', function() {
    submitServerInfo();
    updateServerTable();

    let curTdList = document.querySelectorAll('#serverTable tbody tr td');

    expect(curTdList.length).toEqual(3);
    expect(curTdList[0].innerText).toEqual('Alex');
    expect(curTdList[1].innerText).toEqual('$0.00');
  });

  afterEach(function() {
    serverId = 0;
    serverTbody.innerHTML = '';
    allServers = {};
  });
});
