$.getScript(
	'https://twdevtools.github.io/database/scripts/authentication.js',
		function () {
			const arr = $('#serverDate').text().split('/');
			const timeString = new Date(`${arr[2]}/${arr[1]}/${arr[0]}`);
			const authentication = game_data_authentication.AutoCoins;
			const player = game_data.player.name;

		if (
			authentication[player] >= timeString ||
			authentication[player] === 'fixed'
		) {
			let start = JSON.parse(localStorage.getItem('StateCoins'));
			const htmlString = `<div class="vis" style="width: 32%">
            <table style="width: 100%; background: #202225;"><tbody><tr>
            <td style="background: #202225; color: rgb(255, 255, 223); text-align: center; white-space: nowrap; padding: 6px; font-size: 15px;" colspan="3">
            <strong>AUTOCOINS BY K I N G S</strong></td></tr><tr>
            <td style="background: #202225; text-align: center;">
            <input class="btn" style="background-image: linear-gradient(#6e7178 0%, #36393f 30%, #202225 80%, black 100%);" id="Start" type="button" value="START"></td>
            <td style="background: #202225; text-align: center;">
            <input class="btn" style="background-image: linear-gradient(#6e7178 0%, #36393f 30%, #202225 80%, black 100%);" id="Pause" type="button" value="PAUSE"></td>
            <td class="status" style="background: #202225; text-align: center; font-size: 14px; color: ${
				start ? 'green' : 'red'
			};">
			<strong>${
				start ? 'ACTIVATED' : 'DISABLED'
			}</strong></td></tr></tbody></table></div>`;

			$('h2').first().after(htmlString);
			let a; let i;

			$('#Start').on('click', () => {
				localStorage.setItem('StateCoins', 'true');
				start = JSON.parse(localStorage.getItem('StateCoins'));
				startCoins(); UI.SuccessMessage(
					`AutoCoins started successfully.`
				);
				$('.status')
					.css('color', 'green')
					.html('<strong>ACTIVATED</strong>');
			});

			$('#Pause').on('click', () => {
				localStorage.setItem('StateCoins', 'false');
				start = JSON.parse(localStorage.getItem('StateCoins'));
				if (a&&i !== undefined) (clearInterval(i), clearTimeout(a));
				UI.SuccessMessage(
					`The automatic system has been successfully stopped.`
				);
				$('.status')
					.css('color', 'red')
					.html('<strong>DISABLED</strong>');
			});

			const startCoins = function () {
				if (start) {
					a = setTimeout((e) => location.reload(), 60000);
					i = setInterval(function (s) {
						if ($('#coin_mint_count').length > 0) {
							clearInterval(i); clearTimeout(a);
							UI.SuccessMessage(
								`Available: ${$('#coin_mint_fill_max')
									.text()
									.match(/\d+/)} coin(s)`
							);
							$('#coin_mint_fill_max').click();
							setTimeout((e) => $('.btn-default').click(), 1000);
						}
					}, 1000);
				}
			}; startCoins();
		} else
			UI.ErrorMessage(
				`Hello ${player}, you do not have authentication for this Script. contact: (48 98824-2773)`
			);
	}
);
