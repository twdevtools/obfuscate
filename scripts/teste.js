let $number = localStorage.getItem('number');

new MutationObserver(function ($el) {
	$el = $el[0].target.innerText;
	typeof $number === 'object' && (localStorage.setItem('number', '0'), ($number = 0));
	if ($el > $number) {
		$number++
		localStorage.setItem('boolean', 'true');
		window.location.reload();
	} else $number = $el;
}).observe($('#incomings_cell')[0], {
	subtree: true,
	childList: true,
});

const $boolean = localStorage.getItem('boolean');

$(function () {
	if ($boolean) {
		$('#select_all').trigger('click');
		$('input').each(function () {
			if (this.name === 'label') {
				$(this).trigger('click');
				return false;
			}
		}); (localStorage.setItem('boolean', ''), localStorage.setItem('number', $number));
	}
});
