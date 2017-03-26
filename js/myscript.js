
/* range slider */
var rangeSlider = function(){
  var slider = $('.range-slider'),
      range = $('.range-slider__range'),
      value = $('.range-slider__value');
    
  slider.each(function(){

    value.each(function(){
      var value = $(this).prev().attr('value');
      $(this).html(value);
    });

    range.on('input', function(){
      $(this).next(value).html(this.value);
    });
    
  });
  
};

rangeSlider();



function myFunctionresult() {
  var y = document.getElementById("val1").value;
  var z = document.getElementById("val2").value;
  var a = document.getElementById("val3").value;
  var x = y * ( z * 5 / 100 ) * a;
  var b = Math.round(x);
  b = "₹"+b;
  document.getElementById("result").innerHTML = b;
}

function mouseUp() {
    document.getElementById("pressbutton").click();
}
function mousetrg() {
    document.getElementById("pressbutton").click();
}

/* range slider */

/* navigation */

function myFunction() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
          x.className += " responsive";
      } else {
          x.className = "topnav";
      }
  }

/* navigation */

  /**
 * @name jQuery showPopup plugin
 * @author Vlad Kozelsky
 * @description Show modal window
 * @version 1.0
 */

(function($) {
    $.showYtVideo = function(options) {

        options = $.extend({
            modalSize: 'm',
            shadowOpacity: 0.5,
            shadowColor: '#000',
            clickOutside: 1,
            closeButton: 1,
            videoId: ''
        }, options);

        var modal = $('<div class="modal size-' + options.modalSize + '"></div>');
        var closeButton = $('<div class="modal-close">&#215;</div>');

        if (options.closeButton) {
            closeButton.appendTo(modal);   
        }
        
        var modalBg = $('<div class="modal-bg"></div>');
        
        modal.appendTo('body');
        modalBg.appendTo('body');

        var videoWidth = modal.width();
        var videoHeight = modal.height();
        var modalWidth = modal.outerWidth();
        var modalHeight = modal.outerHeight();


        if (options.videoId) {
            var iframe = $('<iframe width="'
                + videoWidth
                + '" height="'
                + videoHeight
                + '" src="https://www.youtube.com/embed/'
                + options.videoId
                + '" frameborder="0" allowfullscreen></iframe>');

            iframe.appendTo(modal);      
        } else {
            console.error('showYtVideo plugin error: videoId not specified');
        }

        modal.css({
            marginLeft: -modalWidth/2,
            marginTop: -modalHeight/2
        });

        modalBg.css({
            opacity: options.shadowOpacity,
            backgroundColor: options.shadowColor
        });


        closeButton.on('click', function() {
            $(this).parent().fadeOut(350, function() {
                $(this).detach();
                modalBg.detach();
            })
        });
        

        if (options.clickOutside) {
            $(document).mouseup(function(e) {
                if (!modal.is(e.target) && modal.has(e.target).length === 0) {
                    modal.fadeOut(350, function() {
                        $(this).detach();
                        modalBg.detach();
                    });
                }
            });
        }
    }   
})(jQuery);

/* popup video */