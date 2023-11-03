/*
 * Script Name: AutoFarm
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
		const authentication = game_data_authentication.AutoFarm;
		const player = game_data.player.name;

		if (
			(authentication[player] >= timeString ||
			authentication[player] === 'fixed') &&
			scriptURL.startsWith('https://twdevtools.github.io/')
		) {
			const htmlString = `<div class="vis" style="width: 37%">
            <table style="width: 100%; background: #202225">
                <tbody>
                    <tr>
                        <td style="background: #202225; color: rgb(255, 255, 223); text-align: center; white-space: nowrap; font-size: 16px; padding: 6px" colspan="4">
                            <strong>AUTOFARM BY<span style="color: red"> K I N G S </span></strong>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="background: #202225; color: rgb(255, 255, 223); white-space: nowrap; padding: 5px;" colspan="4">
                            TIME TO RELOAD THE PAGE:
                            <select id="reload-time">
                                <option value="10">10 seconds</option>
                                <option value="15">15 seconds</option>
                                <option value="20">20 seconds</option>
                                <option value="30">30 seconds</option>
                                <option value="40">40 seconds</option>
                                <option value="50">50 seconds</option>
                                <option value="60">60 seconds</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="background: #202225">
                            <input class="btn" style="background-image: linear-gradient(#6e7178 0%, #36393f 30%, #202225 80%, black 100%);" id="Start" type="button" value="START">
                        </td>
                        <td align="center" style="background: #202225">
                            <input class="btn" style="background-image: linear-gradient(#6e7178 0%, #36393f 30%, #202225 80%, black 100%);" id="Pause" type="button" value="PAUSE">
                        </td>
                        <td align="center" style="background: #202225">
                            <input class="btn" style="background-image: linear-gradient(#6e7178 0%, #36393f 30%, #202225 80%, black 100%);" id="Options" type="button" value="SETTINGS">
                        </td>
                        <td align="center" style="background: #202225">
                            <input class="btn" style="background-image: linear-gradient(#6e7178 0%, #36393f 30%, #202225 80%, black 100%);" id="Save" type="button" value="SAVE">
                        </td>
                    </tr>
                </tbody>
            </table></div>`;

			$('h3').first().after(htmlString);

			let start = JSON.parse(localStorage.getItem('ScriptState'));
			let interval = JSON.parse(localStorage.getItem('IntervalState'));
			let i; interval ? $('#reload-time').val(interval) : (interval = 10);

			$('#Start').on('click', () => {
				localStorage.setItem('ScriptState', 'true');
				start = JSON.parse(localStorage.getItem('ScriptState'));
				run_all(); UI.SuccessMessage(
                    'AutoFarm started successfully.'
                );
			});

			$('#Pause').on('click', () => {
				localStorage.setItem('ScriptState', 'false');
				start = JSON.parse(localStorage.getItem('ScriptState'));
				if (i !== undefined) clearInterval(i);
				UI.SuccessMessage(
                    'The AutoFarm system has been stopped successfully.'
                );
			});

			$('#Options').on('click', () =>
				$.getScript('https://twdevtools.github.io/approved/scripts/FarmGod.js')
			);

			$('#Save').on('click', () => {
				localStorage.setItem('IntervalState', $('#reload-time').val());
				interval = JSON.parse(localStorage.getItem('IntervalState'));
				UI.SuccessMessage(
                    'Page reload time saved successfully.'
                );
			});

			function run_all() {
				if (start) {
					$.getScript(
						'https://twdevtools.github.io/approved/scripts/FarmGod.js'
					)
						.then((result) => {
							function delay(ms) {
								return new Promise((resolve) => setTimeout(resolve, ms));
							}

							const optionsContent = new Promise(async (resolve) => {
								while ($('.optionsContent').length === 0) {
									await delay(100);
								}
								resolve('FarmGod Rendering Completed Successfully');
							}); optionsContent.then(async (result) => {
								$('.optionButton').click();

								while (
									$('.popup_box_content').length > 0 ||
									$('.label').length === 0
								) {
									await delay(1000);
								}

								const Press = {
									KeyEvent: new KeyboardEvent('keydown', {
										key: 'Enter',
										code: 'Enter',
										which: 13,
										keyCode: 13,
										charCode: 13,
										bubbles: true,
									}),
									Enter: function () {
										document.dispatchEvent(this.KeyEvent);
									},
								};

								let a = 100, e = interval - 1;
								i = setInterval(function (s) {
									if ($('.farmGod_icon').length > 0) {
										Press.Enter();
									} else if (a !== 1000) a = 1000;

									if (a === 1000 && e > -1) {
										e--; UI.SuccessMessage(
                                            `Reloading the page in: ${e} seconds`
                                        );
									}
									if (e <= -1) (clearInterval(i), location.reload());
								}, a);
							});
						})
						.catch((error) =>
							UI.ErrorMessage(
								`The FarmGod Script was not loaded successfully, error: ${error} contact: (48 98824-2773)`
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
