new MutationObserver(function ($el) {
	typeof $this === 'undefined' && ($this = 0);
	if ($el[0].target.innerText > $this) {
		window.location.reload();
		$(window).on('load', function (e) {
			$('#select_all').trigger('click');
			$('input').each(function () {
				this.name === 'label' && $(this).trigger('click');
			}); $this++;
		});
	} else $this--;
}).observe($('#incomings_cell')[0], {
	subtree: true,
	childList: true,
});
