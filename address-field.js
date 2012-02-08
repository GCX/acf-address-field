;(function($) {
	
	function split_acf_name(name) {
		var matches = name.match(/\[.*?(?=\])/g);
		for(var i=0; i<matches.length; i++)
			matches[i] = matches[i].replace('[', '');
		return matches;
	}
	
	function update_item_layout(item) {
		if(item.parents('ul.missing').size() > 0) {
			item.find('input').remove();
		}
		else if($('input', item).size() == 0) {
			item.append(
					$('<input type="hidden" />')
						.val(item.attr('name'))
			);
		}
		
		var field = item.closest('.field');
		var key = field.find('input[name="address_layout_key"]').val();
		
		$('ul.row li.item input', field).each(function() {
			var $this = $(this);
			var col = $this.closest('li.item').index();
			var row = $this.closest('div.address_layout').children('ul.row').index($this.closest('ul.row'));
			$this.val($this.closest('li.item').attr('name'));
			$this.attr('name', 'fields['+key+'][address_layout]['+row+']['+col+']');
		});
	}
	
	// This sets the default values, ACF clears them on new fields
	// see http://www.advancedcustomfields.com/support/discussion/1247/field-input-defaults-removed-when-clicking-add-field.
	$('#acf_fields #add_field').live('click',function(){
		
		setTimeout(function() {
			var new_field = $('#acf_fields div.field_clone').prev('.field');
			
			$('.address_label:input, .address_default_value:input, .address_class:input, .address_separator:input', new_field).each(function() {
				var $this = $(this),
					names = split_acf_name($this.attr('name')),
					component = '';
				
				if($this.hasClass('address_label'))
					component = 'label';
				else if($this.hasClass('address_default_value'))
					component = 'default_value';
				else if($this.hasClass('address_class'))
					component = 'class';
				else
					component = 'separator';

				$this.val( acf_address_field_defaults[ names[2] ][ component ] );
					
			}).change();
			
		}, 100);
			
	});
	
	$('#acf_fields .address_enabled input[type="checkbox"]').live('change', function() {
		var $this = $(this),
			field = $this.closest('.field'),
			matches = split_acf_name($this.attr('name')),
			layout_item = $('li.item[name="' + matches[2] + '"]', field),
			missing_row = $('ul.row.missing', field);
		
		if($this.is(':checked')) {
			layout_item.removeClass('disabled');
		}
		else {
			layout_item
				.addClass('disabled')
				.remove()
				.appendTo(missing_row);
		}
		update_item_layout(layout_item);
	});
	
	$('#acf_fields input.address_label[type="text"]').live('keyup', function() {
		var $this = $(this),
			field = $this.closest('.field'),
			matches = split_acf_name($this.attr('name')),
			layout_item = $('li.item[name="' + matches[2] + '"]', field);
		
			layout_item.text($this.val());
	});
	
	function init_address_layout(address_layout) {
		if( !address_layout.is('.address_layout') )
			return;
		
		if( $('ul.row', address_layout).data('sortable') )
			return;
		
		$('ul.row', address_layout).sortable({
			connectWith: ".row",
			placeholder: "placeholder",
			start: function(event, ui) {
				ui.placeholder.html('&nbsp;');
			},
			update: function(event, ui) {
				update_item_layout(ui.item);
			}
		}).disableSelection();
	}
	
	$('#acf_fields .field_type select.select').live('change', function() {
		var $this = $(this),
			field = $this.closest('.field');
		
		if($this.val() == 'address-field') {
			init_address_layout( $('.address_layout', field) );
		}
	});
	
})(jQuery)