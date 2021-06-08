


//hover for dropdown items in main navbar

$('.dropdown > a').click(function(){
  location.href = this.href;
});

var $dropdown = $(".navbar .nav-item");
var $dropdownToggle = $(".dropdown-toggle");
var $dropdownMenu = $(".dropdown-menu");
var showClass = "show";
// var last = $('#drop3')
var lastD = $('#drop3').closest('.dropdown').find('.dropdown-menu').addClass('last')

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




        // var width1 = $(this).find('.nav-link').width()
        //
        // var width2 = $(this).find('.dropdown-menu').width()
        //
        // $(last).css('width', lastD)


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


// $('.navbar-nav .dropdown-menu:nth-child(3)').mouseenter(() => {

// })

//active links


var path = window.location.href.split(location.search||location.hash||/[?#]/)[0]

// path.hash="";

$('.navbar-nav li .nav-link').each(function() {
  if (this.href == path) {
    $(this).addClass('active');
  }
  else {
    $(this).removeClass('active');
  }

});


$("ul.nav-tabs > li > a").on("shown.bs.tab", function(e) {
  var id = $(e.target).attr("href").substr(1);
  id = id.substring(0, id.length-4);
  window.location.hash = id;
});

var hash = (window.location.hash);
$('.nav-tabs a[href="' + hash + '-tab"]').tab('show');


var hash = window.location.hash;
hash && $('.nav-tabs a[href="' + hash + '"]').tab('show')


$('.nav-tabs a').click(() => {


  window.location.hash = this.hash;


});



// $(window).on('load', () => {
//
//   $('html, body').animate({scrollTop : 0},800);
//
// })
//





$('.openTab2').click(function(e){
  e.preventDefault()
  $('.nav-tabs [data-type="students"]').tab('show')

})

$('.openTab1').click(function(e){
  e.preventDefault()
  $('.nav-tabs [data-type="projects"]').tab('show')

})

$('.openTab3').click(function(e){
  e.preventDefault()
  $('.nav-tabs [data-type="partners"]').tab('show')

})

$('.openTab4').click(function(e){
  e.preventDefault()
  $('.nav-tabs [data-type="products"]').tab('show')

})


$('.openTab5').click(function(e){
  e.preventDefault()
  $('.nav-tabs [data-type="vision"]').tab('show')

})

$('.openTab6').click(function(e){
  e.preventDefault()
  $('.nav-tabs [data-type="network"]').tab('show')

})

$('.openTab7').click(function(e){
  e.preventDefault()
  $('.nav-tabs [data-type="goals"]').tab('show')

})

$('.openTab8').click(function(e){
  e.preventDefault()
  $('.nav-tabs [data-type="leadership"]').tab('show')

})

$('.openTab9').click(function(e){
  e.preventDefault()
  $('.nav-tabs [data-type="expansion"]').tab('show')

})


$('.openTab10').click(function(e){
  e.preventDefault()
  $('.nav-tabs [data-type="prep"]').tab('show')

})

$('.openTab11').click(function(e){
  e.preventDefault()
  $('.nav-tabs [data-type="siic"]').tab('show')

})

$('.openTab12').click(function(e){
  e.preventDefault()
  $('.nav-tabs [data-type="academic"]').tab('show')

})

$('.openTab13').click(function(e){
  e.preventDefault()
  $('.nav-tabs [data-type="workforce"]').tab('show')

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





$('.back-to-top').click(() => {
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






//contact form

$('#slideOut2 .modal-header a').attr('tabindex', '-1')

var open = function() {


  $('.changeTitle').html('We’d like to hear your feedback!')
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



//rotate caret

$('.collapse').on('show.bs.collapse', function () {

  $('a[href="#' + this.id + '"] .caret-down').css({
    transform: "rotate(180deg)"
  });

});
$('.collapse').on('hide.bs.collapse', function () {

  $('a[href="#' + this.id + '"] .caret-down').css({
    transform: "rotate(0deg)"
  });

});




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



var hash = 1;

$(".ques").each(function(i){
  var count = "ques" + (++hash)

  $(this).attr("href",  "#" + count);


  $(this).closest('.card').find('.collapse').attr("id", count);
});




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



  var expand1 = function() {

    $(this).html() == "Collapse All" ? $(this).html('Expand All') : $(this).html('Collapse All');
    $('.expandAll1 .collapse').collapse('toggle');


    if ( $(this).html() == 'Collapse All') {
      $('.changeIcon').replaceWith('<i class="far fa-compress-arrows-alt blue changeIcon"></i>')


    }

    if ( $(this).html() == 'Expand All') {
      $('.changeIcon').replaceWith('<i class="fal fa-expand-alt blue changeIcon"></i>')
    }

  }

  $('#toggleAccordion').keypress(
    expand1

  ).click(
    expand1
  );


  var expand2 = function() {

    $(this).html() == "Collapse All" ? $(this).html('Expand All') : $(this).html('Collapse All');
    $('.expandAll2 .collapse').collapse('toggle');


    if ( $(this).html() == 'Collapse All') {
      $('.changeIcon2').replaceWith('<i class="far fa-compress-arrows-alt blue changeIcon2"></i>')


    }

    if ( $(this).html() == 'Expand All') {
      $('.changeIcon2').replaceWith('<i class="fal fa-expand-alt blue changeIcon2"></i>')
    }

  }

  $('#toggleAccordion2').keypress(
    expand2

  ).click(
    expand2
  );



  var expand3 = function() {

    $(this).html() == "Collapse All" ? $(this).html('Expand All') : $(this).html('Collapse All');
    $('.expandAll3 .collapse').collapse('toggle');


    if ( $(this).html() == 'Collapse All') {
      $('.changeIcon3').replaceWith('<i class="far fa-compress-arrows-alt blue changeIcon3"></i>')


    }

    if ( $(this).html() == 'Expand All') {
      $('.changeIcon3').replaceWith('<i class="fal fa-expand-alt blue changeIcon3"></i>')
    }

  }

  $('#toggleAccordion3').keypress(
    expand3

  ).click(
    expand3
  );


  var expand4 = function() {

    $(this).html() == "Collapse All" ? $(this).html('Expand All') : $(this).html('Collapse All');
    $('.expandAll4 .collapse').collapse('toggle');


    if ( $(this).html() == 'Collapse All') {
      $('.changeIcon4').replaceWith('<i class="far fa-compress-arrows-alt blue changeIcon4"></i>')


    }

    if ( $(this).html() == 'Expand All') {
      $('.changeIcon4').replaceWith('<i class="fal fa-expand-alt blue changeIcon4"></i>')
    }

  }

  $('#toggleAccordion4').keypress(
    expand4

  ).click(
    expand4
  );

  var expand5 = function() {

    $(this).html() == "Collapse All" ? $(this).html('Expand All') : $(this).html('Collapse All');
    $('.expandAll5 .collapse').collapse('toggle');


    if ( $(this).html() == 'Collapse All') {
      $('.changeIcon5').replaceWith('<i class="far fa-compress-arrows-alt blue changeIcon5"></i>')


    }

    if ( $(this).html() == 'Expand All') {
      $('.changeIcon5').replaceWith('<i class="fal fa-expand-alt blue changeIcon5"></i>')
    }

  }

  $('#toggleAccordion5').keypress(
    expand5

  ).click(
    expand5
  );



  var expand6 = function() {

    $(this).html() == "Collapse All" ? $(this).html('Expand All') : $(this).html('Collapse All');
    $('.expandAll6 .collapse').collapse('toggle');


    if ( $(this).html() == 'Collapse All') {
      $('.changeIcon6').replaceWith('<i class="far fa-compress-arrows-alt blue changeIcon6"></i>')


    }

    if ( $(this).html() == 'Expand All') {
      $('.changeIcon6').replaceWith('<i class="fal fa-expand-alt blue changeIcon6"></i>')
    }

  }

  $('#toggleAccordion6').keypress(
    expand6

  ).click(
    expand6
  );
