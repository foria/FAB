$(document).ready(function() {

    'use strict';

    // Calendar Date Picker
    // ======================
    var nowTemp = new Date();
    var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);

    function fillCalendarSelects(el, id){
        var splitDate = el.val().split('/');
        // console.log(splitDate);
        // console.log('#'+id+'-month');
        el.parent().find('#'+id+'-month').val(splitDate[0]);
        el.parent().find('#'+id+'-day').val(splitDate[1]);
        el.parent().find('#'+id+'-year').val(splitDate[2]);
        // console.log($('#'+id+'-month').val());
        // console.log($('#'+id+'-day').val());
        // console.log($('#'+id+'-year').val());
    }

    if($('.datepicker').length){

        $('.datepicker').each(function(){
            var date = $(this);
            var id = $(this).attr('id').split('-')[0];

            //if(!date.data('range')) {
                date.datepicker({
                    onRender: function(date) {
                        return date.valueOf() < now.valueOf() ? 'disabled' : '';
                    }
                }).on('changeDate', function() {
                    fillCalendarSelects($(this), id);
                    date.datepicker('hide');
                }).datepicker('setValue', now);
            //} else if(date.data('range') == 'from'){
            //     var date2 = $(this).attr('id').split('_')[0]+'_until';
            //     // var checkin = date;
            //     // var checkout;
            //     var checkin = date.datepicker({
            //       onRender: function(date) {
            //         return date.valueOf() < now.valueOf() ? 'disabled' : '';
            //       }
            //     }).on('changeDate', function(ev) {
            //       if (ev.date.valueOf() > checkout.date.valueOf()) {
            //         var newDate = new Date(ev.date)
            //         newDate.setDate(newDate.getDate() + 1);
            //         checkout.setValue(newDate);
            //       }
            //       checkin.hide();
            //       fillCalendarSelects($(this), id);
            //       $('#'+date2)[0].focus();
            //     }).data('datepicker');

            //     var checkout = $('#'+date2).datepicker({
            //       onRender: function(date) {
            //         return date.valueOf() <= checkin.date.valueOf() ? 'disabled' : '';
            //       }
            //     }).on('changeDate', function(ev) {
            //       checkout.hide();
            //       fillCalendarSelects($(this), date2);
            //     }).data('datepicker');
            // }

        });
    }


    // Time Picker
    // ======================
    function fillTimeSelects(el, id){
        var splitTime = el.val().split(/[\s,]+/);
        //console.log(splitTime[0] + ' ' + splitTime[1]);
        el.parent().find('#'+id+'-hours').val(splitTime[0]);
        el.parent().find('#'+id+'-part').val(splitTime[1]);
        //el.parent().find('#'+id+'-zone').val(splitDate[2]);
        // console.log($('#'+id+'-hours').val());
        // console.log($('#'+id+'-part').val());
        //console.log($('#'+id+'-zone').val());
    }

    if($('.timepicker').length){

        $('.timepicker').each(function(){
            var time = $(this);
            var id = $(this).attr('id').split('-')[0];

            time.timepicker({
                minuteStep: 5,
                showInputs: false,
                disableFocus: true
            }).on('changeTime.timepicker', function() {
                fillTimeSelects($(this), id);
                //date.datepicker('hide');
            })
        });
    }
})
