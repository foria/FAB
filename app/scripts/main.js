$(document).ready(function() {

    'use strict';


    // Flexslider init
    // ======================
    if($('.flexslider').length){
        $('.flexslider').flexslider({
            prevText: '',
            nextText: ''
        });
    }

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


    // Sortable list init
    // ======================
    if($('.sortable').length){
        $('.sortable').sortable()
    }


    // Purchase Steps
    // ======================
    if($('.purchase_steps').length){
        var step_num = $('.purchase_steps').find('.step_num');
        var step_tot = $('.purchase_steps').find('.step_tot');

        step_num.text('1');
        step_tot.text($('.purchase_steps').children('section').length);
        $('.purchase_steps section[data-step="1"]').toggle();

        $('.purchase_steps section').find('button').on('click', function(e){
            e.preventDefault();
            console.log('yo');
            $(this).parent().toggle().parent().find('section[data-step="' + $(this).data('step') + '"]').toggle();
            step_num.text( $(this).data('step') );
        })
    }


    // Upload File init
    // ======================
    if($('#fileupload').length){
        $('#fileupload').fileupload({
            dataType: 'json',
            done: function (e, data) {
                $.each(data.result.files, function (index, file) {
                    $('<p/>').text(file.name).appendTo(document.body);
                });
            }
        });
    }


    // Fancybox init
    // ======================
    if($('.fancybox').length){
        $('.fancybox').fancybox();
    }


    // Scroll down function
    // ======================
    $('.scroll-down').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
    });


    // Carousel testimonials init
    // ======================
    if($('.testimonials').length){
        $('.testimonials').flexslider({
          animation: 'slide',
          animationLoop: false,
          itemWidth: 323.4,
          itemMargin: 0,
          controlsContainer: $('.testimonials__nav'),
          minItems: 3, // use function to pull in initial value
          maxItems: 3 // use function to pull in initial value
        });
    }

})
