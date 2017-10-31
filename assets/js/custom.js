$(document).ready(function(){
		var hasCheck = function(el) {
			var _parent = $(el).closest('.checkall-group'),
				_result = 0;
			$(_parent).find('.form-content .input-checkbox').each(function(in2,el2) {
				if ($(el2).is(':checked')) _result++;
			})
			if (_result>0) return false;
			return true;
		};

	$('.input-checkboxall').change(function(e){
		e.preventDefault();
		var _self = $(this);

		if (_self.is(':checked')) {
			_self.closest('.checkall-group').find('.form-content .input-checkbox').prop('checked', true);
//			_self.closest('.checkall-group').find('.form-header .checkboxall-label').html('清除');
		} else {
			_self.closest('.checkall-group').find('.form-content .input-checkbox').prop('checked', false);
//			_self.closest('.checkall-group').find('.form-header .checkboxall-label').html('全選');
		}
	})

	$('.input-checkbox').change(function(e){
		e.preventDefault();
		var _self = $(this);
		if (_self.is(':checked')) {
			_self.closest('.checkall-group').find('.form-header .input-checkboxall').prop('checked', true);
//			_self.closest('.checkall-group').find('.form-header .checkboxall-label').html('清除');
		} else {
			if (hasCheck(_self)) {
				_self.closest('.checkall-group').find('.form-header').find('.input-checkboxall').prop('checked', false);
//			_self.closest('.checkall-group').find('.form-header .checkboxall-label').html('全選');
			}
		}
	})

    $("#checkAll").change(function () {
        $("input:checkbox").prop('checked', $(this).prop("checked"));
    });

    function toggleIcon(e) {
    $(e.target)
        .prev('.panel-heading')
        .find(".glyphicon")
        .toggleClass('glyphicon-plus glyphicon-minus');
    }
    $('.panel-group').on('hidden.bs.collapse', toggleIcon);
    $('.panel-group').on('shown.bs.collapse', toggleIcon);
})
