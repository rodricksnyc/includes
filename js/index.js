


  //hover for dropdown items in main navbar

  var $dropdown = $(".navbar .nav-item");
  var $dropdownToggle = $(".dropdown-toggle");
  var $dropdownMenu = $(".dropdown-menu");
  var showClass = "show";

  $(window).on("load resize", function() {
    if (this.matchMedia("(min-width: 992px)").matches) {
      $dropdown.hover(
        function() {
          var $this = $(this);
          $this.addClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "true");
          $this.find($dropdownMenu).addClass(showClass);

          $('.nav-link.dropdown-toggle').not('.active').closest('.nav-item').find('.dropdown-menu').addClass('lightGold')
          $('.nav-link.dropdown-toggle.active').closest('.nav-item').find('.dropdown-menu').addClass('goldBackground')

        },
        function() {
          var $this = $(this);
          $this.removeClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "false");
          $this.find($dropdownMenu).removeClass(showClass);
        }
      );
    } else {
      $dropdown.off("mouseenter mouseleave");
    }
  });


$('.openTab2').click(function(e){
  e.preventDefault()
 $('#nav [data-type="students"]').tab('show')

})

$('.openTab1').click(function(e){
  e.preventDefault()
 $('#nav [data-type="projects"]').tab('show')

})

$('.openTab3').click(function(e){
  e.preventDefault()
 $('#nav [data-type="partners"]').tab('show')

})

$('.openTab4').click(function(e){
  e.preventDefault()
 $('#nav [data-type="products"]').tab('show')

})





//animations for landing page
$(window).on('scroll', function() {

	var screenTop = $(window).scrollTop();
	var screenBottom = $(window).scrollTop() + window.innerHeight;

	$('section').each(function() {
		var elementTop = $(this).offset().top;
		var elementBottom = $(this).offset().top + $(this).outerHeight();

		if ((screenBottom > elementTop + ($(this).find('.heros').height() / 2  )) && (screenTop < elementBottom)) {
			$('section').removeClass('active')
			$(this).addClass('active')
		}
		else {
			$(this).removeClass('active')
		}
	})


	if ($('.block5').hasClass('active')) {


const counters = document.querySelectorAll('.counter');
const speed = 500

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target')
    const count = +counter.innerText

  	const inc = target / speed

    if (count < target) {

    			counter.innerText = Math.ceil(count + inc)

    			setTimeout(updateCount, 1);
    		} else {
    			counter.innerText = target;
    		}

  }
  	updateCount();



})

}

})



$(window).on('load', function() {



	if ($('.block15, .block20').hasClass('active')) {



const counters = document.querySelectorAll('.counter');
const speed = 500

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target')
    const count = +counter.innerText

  	const inc = target / speed

    if (count < target) {

    			counter.innerText = Math.ceil(count + inc)

    			setTimeout(updateCount, 1);
    		} else {
    			counter.innerText = target;
    		}

  }
  	updateCount();




})

}


})




$('.back-to-top').on('click', function() {
  scrollfn("#overview");
})


$(window).scroll(function () {
  ((window.pageYOffset || document.documentElement.scrollTop) > 100) ? $('.back-to-top').css({ opacity: 1, visibility: "visible" }) : $('.back-to-top').css({ opacity: 0, visibility: "hidden" });
});

function scrollfn(e) {
  let $target = $(e),
  offSet = e === "#overview" ? 0 : $target.offset().top;
  $('html, body').stop().animate({
    'scrollTop': offSet
  }, 1200, 'swing');


}


//508 tabbing

$("a, button, input, [tabIndex='0'], #one, .closeRadio, .card-link").on("keyup", function (e) {
  var code = (e.keyCode ? e.keyCode : e.which);
  if (code == 9) {
    $(this).css('outline', 'dashed 3px #4599ff')
  }

})
$("a, button, input, [tabIndex='0'], #one, .closeRadio, .card-link").on('focusout', function() {
  $(this).css('outline', 'none')
})



//active links


var path = window.location.href

$('.navbar-nav li .nav-link').each(function() {
  if (this.href === path) {
    $(this).addClass('active');
  }
  else {
    $(this).removeClass('active');
  }

});




$('#slideOut2 .modal-header a').attr('tabindex', '-1')

var open = function() {


  $('.changeTitle').html('Rate your Experience')
  $('.contactUsOverlay').show();

  $('#theform input').each(function () {
    $(this).attr('tabindex', '0');
  });
  $('.radio-inline input').each(function () {
    $(this).attr('tabindex', '0');
  });

  $('#slideOut2 .modal-header a').attr('tabindex', '0')

  $('.form-check-input').attr('tabindex', '0');

  $('.form-control').attr('tabindex', '0');

  $('#closeThisPlease').attr('tabindex', '0');

  $('#sendMessage').attr('tabindex', '0');

  $('.modal-content').addClass('opened')
  $("#slideOut2").addClass('showslideOut2');
  $("#one").addClass('blueTab');
  $("#two").removeClass('blueTab');

  $('.navbar').addClass('zIndex0')
  $('.firstBlock').addClass('hide1').fadeOut()
  $('.secondBlock').removeClass('hide1').fadeIn()

  setTimeout(function() {
    $('body').addClass('showContact')
  }, 300)

  $('#slideOut2 .modal-content').css('background', 'linear-gradient(207.41deg, #61D5FF -15.35%, #89E0A9 104.75%)')

}
$('#one').keypress(
  open

).click(
  open
);




var open2 = function() {

  $('.changeTitle').html('Need Help?')
  $('.contactUsOverlay').show();

  $('#theform input').each(function () {
    $(this).attr('tabindex', '0');
  });
  $('.radio-inline input').each(function () {
    $(this).attr('tabindex', '0');
  });

  $('#slideOut2 .modal-header a').attr('tabindex', '0')

  $('.form-check-input').attr('tabindex', '0');

  $('.form-control').attr('tabindex', '0');

  $('#closeThisPlease').attr('tabindex', '0');

  $('#sendMessage').attr('tabindex', '0');

  $('.modal-content').addClass('opened')
  $("#slideOut2").addClass('showslideOut2');
  $("#two").addClass('blueTab');
  $("#one").removeClass('blueTab');

  $('.firstBlock').removeClass('hide1').fadeIn()
  $('.secondBlock').addClass('hide1').fadeOut()
  $('.navbar').addClass('zIndex0')

  $('#slideOut2 .modal-content').css('background', 'linear-gradient(65.95deg, #FBD431 -8.91%, #BAE386 115.33%)')

  setTimeout(function() {
    $('body').addClass('showContact')
  }, 300)

}
$('#two').keypress(
  open2

).click(
  open2
);




$('.contactUsOverlay').on('click', function(e) {



  if($('body').hasClass('showContact')) {

    $('.navbar').removeClass('zIndex0')

    $('#slideOut2 .form-control').attr('tabindex', '-1');

    $('#slideOut2 .modal-header a').attr('tabindex', '-1')

    $('#closeThisPlease').attr('tabindex', '-1');

    $('#sendMessage').attr('tabindex', '-1');
    $('.form-check-input').attr('tabindex', '-1');

    $("#slideOut2").removeClass('showslideOut2');
    $('.contactUsOverlay').hide();
    $("#one, #two").removeClass('blueTab');

    setTimeout(function() {
      $('body').removeClass('showContact')
    }, 300)

  }
})


var close = function() {
  $('.contactUsOverlay').hide();
  $('#slideOut2 .form-control').attr('tabindex', '-1');
  $('#closeThisPlease').attr('tabindex', '-1');
  $('#sendMessage').attr('tabindex', '-1');
  $("#slideOut2").removeClass('showslideOut2');
  $('.form-check-input').attr('tabindex', '-1');
  $('#slideOut2 .modal-header a').attr('tabindex', '-1')

  $("#one, #two").removeClass('blueTab');

  $('.navbar').removeClass('zIndex0')

}

$('#close').keypress(
  close

).click(
  close
);


$("#closeThisPlease").on("keyup", function (e) {
  var code = (e.keyCode ? e.keyCode : e.which);
  if (code == 13) {

    $('#one').focus().css('outline', 'dashed 3px #4599ff')
    $('.navbar').removeClass('zIndex0')
  }

})



// $('.textArea').keydown(function (event) {
//    $('#sendMessage .buttonOverlay').remove()
//    $('#sendMessage').addClass('blueBackground')
//
// });
// $('.textArea2').keydown(function (event) {
//     $('#sendMessage2 .buttonOverlay').remove()
//      $('#sendMessage2').addClass('blueBackground')
//
// });





$('#slideOut2 input').on('keyup', function(e) {

  var code = (e.keyCode ? e.keyCode : e.which);
  if (code == 9 ) {

    $('#slideOut2 input').change(function (e) {

      setReasonActive();

    })

    function setReasonActive() {
      $('#slideOut2 input').each(function () {
        if ($(this).prop('checked')) {
          $(this).parents('.form-check').css('background' ,'rgba(255, 255, 255, 0.3)');

        } else {
          $(this).parents('.form-check').css( 'background' ,'transparent')
        }
      })
    }

    setReasonActive()


  }
})





$('#slideOut2 input').change(function (e) {

  setReasonActive();

})

function setReasonActive() {
  $('#slideOut2 input').each(function () {
    if ($(this).prop('checked')) {
      $(this).closest('.form-check').find('i').css('font-weight', '600')
      $(this).parents('.form-check').css('background' ,'rgba(255, 255, 255, 0.3)');

    } else {
      $(this).parents('.form-check').css( 'background' ,'transparent')
      $(this).closest('.form-check').find('i').css('font-weight', '400')
    }
  })
}

setReasonActive()


$(".form-check").on("keyup", function (e) {

  var code = (e.keyCode ? e.keyCode : e.which);
  if (code == 9) {
    $('.form-check').each(function() {
      $(this).addClass('focusClass')
    });

  }

})



if ($(document).innerWidth() <= 767) {

  $('.openTab').html('<i class="fas fa-envelope"></i>')
  $('#one').css('right', '-10px')

}



//validate and send message on contact form and toast message


$("#theform").validate(
  {
    rules:
    {
      email:
      {
        required: true,
        email: true

      }

    }
  });



  $('#sendMessage2').click(function (e) {

    if(!$('#formControl1').val() == '' && !$('#formControl2').val() == '' )    {
      e.preventDefault()

      $(contactChildren).attr('tabindex', '-1')

      $('#theform input').each(function () {
        $(this).attr('tabindex', '-1');
      });

      $("#slideOut").removeClass('showSlideOut');



    }


  });






  $('#theform input').keydown(function (event) {
    if(!$('#formControl1').val() == '' && !$('#formControl2').val() == '' )  {

      // $('#sendMessage').addClass('activated')


      $('#sendMessage2 .buttonOverlay').remove()
      $('#sendMessage2').addClass('blueBackground')


    }

  })

  $("#slideOut .form-check").on("keyup", function (e) {

    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 9) {
      $('.form-check').each(function() {
        $(this).addClass('focusClass')
      });

    }

  })


  $(".survey-container .form-check").on("keyup", function (e) {

    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 9) {
      $('.form-check').each(function() {
        $(this).addClass('focusClass')
      });

    }

  })

  //end contact form
