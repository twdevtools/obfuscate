/*
 * Script Name: MASS SCAVENGE
 * Version: v1
 * Last Updated: 2023-11-03
 * Author: K I N G S
 * Author Contact: 48-98824-2773
 */

/*--------------------------------------------------------------------------------------
 * This script can NOT be cloned and modified without permission from the script author.
 --------------------------------------------------------------------------------------*/

const scriptURL = document.currentScript.src;

$.getScript(
	'https://twdevtools.github.io/database/scripts/authentication.js',
	function () {
		const arr = $('#serverDate').text().split('/');
		const timeString = new Date(`${arr[2]}/${arr[1]}/${arr[0]}`);
		const authentication = game_data_authentication.AutoScav;
		const player = game_data.player.name;

		if (
			(authentication[player] >= timeString ||
				authentication[player] === 'fixed') &&
			scriptURL.startsWith('https://twdevtools.github.io/')
		) {
			const htmlString = `<div class="vis" style="width: 37%; margin-bottom: 16px">
            <table style="width: 100%; background: #202225;"><tbody><tr>
            <td style="background: #202225; color: rgb(255, 255, 223); text-align: center; white-space: nowrap; font-size: 16px; padding: 6px" colspan="4">
            <strong>MASS SCAVENGE BY<span style="color: red;"> K I N G S </span></strong></td></tr><tr>
            <td align="center" style="background: #202225; color: rgb(255, 255, 223); white-space: nowrap; padding: 5px;" colspan="4">
            TIME TO RELOAD THE PAGE:
            <select id="reload-time">
            <option value="600">10 minutes</option>
            <option value="900">15 minutes</option>
            <option value="1200">20 minutes</option>
            <option value="1800">30 minutes</option>
            <option value="2400">40 minutes</option>
            <option value="3000">50 minutes</option>
            <option value="3600">60 minutes</option>
            </select></td></tr><tr>
            <td style="background: #202225; text-align: center;">
            <input class="btn" style="background-image: linear-gradient(#6e7178 0%, #36393f 30%, #202225 80%, black 100%);" id="Start" type="button" value="START"></td>
            <td style="background: #202225; text-align: center;">
            <input class="btn" style="background-image: linear-gradient(#6e7178 0%, #36393f 30%, #202225 80%, black 100%);" id="Pause" type="button" value="PAUSE"></td>
            <td style="background: #202225; text-align: center;">
            <input class="btn" style="background-image: linear-gradient(#6e7178 0%, #36393f 30%, #202225 80%, black 100%);" id="Options" type="button" value="SETTINGS"></td>
            <td style="background: #202225; text-align: center;">
            <input class="btn" style="background-image: linear-gradient(#6e7178 0%, #36393f 30%, #202225 80%, black 100%);" id="Save" type="button" value="SAVE"></td></tr></tbody></table></div>`;

			$('h3').first().after(htmlString);

			let start = JSON.parse(localStorage.getItem('ScavengeState'));
			let interval = JSON.parse(localStorage.getItem('ScavengeInterval'));
			let s; let i; interval ? $('#reload-time').val(interval) : (interval = 600);

			$('#Start')
				.off('click')
				.on('click', () => {
					localStorage.setItem('ScavengeState', 'true');
					start = JSON.parse(localStorage.getItem('ScavengeState'));
					run_all();
					UI.SuccessMessage(
                        'Mass Scavenge started successfully.'
                    );
				});

			$('#Pause')
				.off('click')
				.on('click', () => {
					localStorage.setItem('ScavengeState', 'false');
					start = JSON.parse(localStorage.getItem('ScavengeState'));
					if (s && i !== undefined) clearTimeout(s), clearInterval(i);
					UI.SuccessMessage(
						'The Mass Scavenge system has been stopped successfully.'
					);
				});

			$('#Options')
				.off('click')
				.on('click', () =>
					$.getScript('https://shinko-to-kuma.com/scripts/massScavenge.js')
				);

			$('#Save')
				.off('click')
				.on('click', () => {
					localStorage.setItem('ScavengeInterval', $('#reload-time').val());
					interval = JSON.parse(localStorage.getItem('ScavengeInterval'));
					UI.SuccessMessage(
                        'Page reload time saved successfully.'
                    );
				});

			function run_all() {
				if (start) {
					$.getScript('https://shinko-to-kuma.com/scripts/massScavenge.js')
						.then((result) => {
							function delay(ms) {
								return new Promise((resolve) => setTimeout(resolve, ms));
							}

							const optionsContent = new Promise(async (resolve) => {
								while ($('#massScavengeSophie').length === 0) {
									await delay(100);
								}
								resolve('Mass Scavenge Rendering completed successfully');
							});
							optionsContent.then(async (result) => {
								$('#sendMass').click();

								while ($('#massScavengeFinal').length === 0) {
									await delay(1000);
								}

								i = setInterval(function (a) {
									console.log('teste')
									if ($('.btnSophie').length > 0) {
										$('#sendMass').click();
									} else {
										clearInterval(i);
										s = setTimeout(
											(off) => location.reload(),
											(interval - 1) * 1000
										);
									}
								}, 2000);
							});
						})
						.catch((error) =>
							UI.ErrorMessage(
								`Mass Scavenge Script was not loaded successfully, error: ${error}, contact: (48 98824-2773)`
							)
						);
				}
			}; run_all();
		} else
			UI.ErrorMessage(
				`Hello ${player}, you do not have authentication for this Script. contact: (48 98824-2773)`
			);
	}
);
