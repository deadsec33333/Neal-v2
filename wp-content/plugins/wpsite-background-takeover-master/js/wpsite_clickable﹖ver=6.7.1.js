jQuery(document).ready(function($){

	// Record an impression

	var data = {
		'action': 'wps_bt_record_impression',
		'background_takeover_id': $('#' + wpsite_clickable_data.prefix_dash + 'background-takeover-id').attr('data-background-takeover-id')
	};
	// We can also pass the url value separately from ajaxurl for front end AJAX implementations
	$.post(wpsite_clickable_data.ajaxurl, data, function(response) {
		console.log(response);
	});

	// Redirect to page when body is clicked

	$(wpsite_clickable_data.dom_element).click(function(event){

		var target = $( event.target );

		// If use hover users the clickable zones

		if (target.is(wpsite_clickable_data.dom_element)) {

			// Add links to left an right side

			if (wpsite_clickable_data.link_option) {
				var width = $( document ).width();

				// Left side

				if (event.pageX <= (width / 2)) {
					trackClick('left');
					var win = window.open(wpsite_clickable_data.link_left, wpsite_clickable_data.link_url_left_target);
				}

				// Right side

				else {
					trackClick('right');
					var win = window.open(wpsite_clickable_data.link_right, wpsite_clickable_data.link_url_right_target);
				}
			}

			// Add link to both sides

			else {
				var win = window.open(wpsite_clickable_data.link_both, wpsite_clickable_data.link_url_left_target);
			}

			win.focus();
		}
	});

	// Change cursor to pointer when hovering over wallpaper takeover

	$(document).mousemove(function(event){
		var target = $( event.target );
		if (target.is(wpsite_clickable_data.dom_element)) {
			target.css('cursor', 'pointer');
		} else {
			$(wpsite_clickable_data.dom_element).css('cursor','auto');
		}
	});

	/**
	 * Tracks a click
	 *
	 * @access public
	 * @param mixed side
	 * @return void
	 */
	function trackClick(side) {
		var data = {
			'action': 'wps_bt_record_click',
			'side': side,
			'background_takeover_id': $('#' + wpsite_clickable_data.prefix_dash + 'background-takeover-id').attr('data-background-takeover-id')
		};
		// We can also pass the url value separately from ajaxurl for front end AJAX implementations
		$.post(wpsite_clickable_data.ajaxurl, data, function(response) {
			console.log(response);
		});
	}
});