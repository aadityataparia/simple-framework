describe('websocket', function() {
  before(async () => {
    await page.goto(`${PATH}/`, { waitUntil: 'networkidle0' });
  });

  it('works with fallback', async () => {
    const message = await page.evaluate(async (path) => {
      const sock = Sifrr.Fetch.socket(`ws://localhost:0909/`, undefined, {
        url: `${path}/ok.json`,
        method: 'get'
      });
      const first = await sock.send({ ok: true });
      const fb = sock._fallback;
      return {
        first,
        fb,
        second: await sock.send({ ok: true })
      };
    }, PATH);

    expect(message.first).to.deep.equal({ from: 'file' });
    expect(message.fb).to.equal(true);
    expect(message.second).to.deep.equal({ from: 'file' });
  });

  it('throws error without fallback', async () => {
    const message = await page.evaluate(async () => {
      const sock = Sifrr.Fetch.socket(`ws://localhost:0909/`);
      return await sock.send({ ok: true }).catch(e => e.message).then(m => m);
    });

    expect(message).to.equal('No fallback provided for websocket failure.');
  });
});

let wsserver;
const wsport = 3333;

describe('websockets', () => {
  before(async () => {
    wsserver = require('../public/wsserver')(wsport);
    await page.goto(`${PATH}/loadtest.html`, { waitUntil: 'networkidle0' });
  });

  after(async () => {
    // How to close uws server?
    require('uWebSockets.js').us_listen_socket_close(wsserver.socket);
  });

  it('connections to ws', async () => {
    const state = await page.evaluate(async (port) => {
      const sock = Sifrr.Fetch.socket(`ws://localhost:${port}/`);
      return await sock._openSocket();
    }, wsport);

    assert.equal(state, true);
  });

  it('gets back the data', async () => {
    const message = await page.evaluate(async (port) => {
      const sock = Sifrr.Fetch.socket(`ws://localhost:${port}/`);
      return await sock.send({ ok: true });
    }, wsport);

    expect(message.dataYouSent).to.deep.equal({ ok: true });
  });

  it('gets back correct data', async () => {
    const message = await page.evaluate(async (port) => {
      const sock = Sifrr.Fetch.socket(`ws://localhost:${port}/`);
      return {
        ok: await sock.send({ ok: true }),
        notok: await sock.send({ ok: false })
      };
    }, wsport);

    expect(message.ok.dataYouSent).to.deep.equal({ ok: true });
    expect(message.notok.dataYouSent).to.deep.equal({ ok: false });
  });

  it('load test', async () => {
    const result = await page.evaluate(async () => {
      return await window.testSocket(1000, 1);
    });

    expect(result.total).to.equal(1000);
    expect(result.time).to.be.at.most(400);
  });
});