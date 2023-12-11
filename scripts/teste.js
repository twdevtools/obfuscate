const scriptURL = document.currentScript.src;

$.getScript(
  'https://twdevtools.github.io/database/scripts/authentication.js',
  function () {
    const _0x2ac4da =
      game_data_authentication['_0x5602e5'][game_data['player']['name']];
    console.log(_0x2ac4da);
    const [_0xa0273e, _0x59dc7a, _0x40383d] = $('#serverDate')
      ['text']()
      ['split']('/');
    const _0x9dc241 = new Date(_0x40383d + '/' + _0x59dc7a + '/' + _0xa0273e);

    _0x2ac4da !== undefined &&
      function () {
        if (
          (_0x2ac4da >= _0x9dc241 || _0x2ac4da === 'fixed') &&
          scriptURL['startsWith']('https://twdevtools.github.io/')
        ) {
        }
      };
  }
);
		
