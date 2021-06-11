
$('.dropdown > a').click(function(){
  location.href = this.href;
});


//hover for dropdown items in main navbar
if ($(document).innerWidth() >= 992) {




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

}


function expand(toggleValue) {

  return function(e){

    $(this).html() == "Collapse All" ? $(this).html('Expand All') : $(this).html('Collapse All');
    $(`.expandAll${toggleValue} .collapse`).collapse('toggle');

    if ( $(this).html() == 'Collapse All') {
      $(`.changeIcon${toggleValue}`).replaceWith(`<i class="far fa-compress-arrows-alt blue changeIcon${toggleValue}"></i>`)
    }

    if ( $(this).html() == 'Expand All') {
      $(`.changeIcon${toggleValue}`).replaceWith(`<i class="fal fa-expand-alt blue changeIcon${toggleValue}"></i>`);
    }


    if ($(this).html() == 'Collapse All' && $(this).is('.white')) {

      $(`.changeIcon${toggleValue}`).replaceWith(`<i class="far fa-compress-arrows-alt white changeIcon${toggleValue}"></i>`)
    }


    if ($(this).html() == 'Expand All' && $(this).is('.white')){
      $(`.changeIcon${toggleValue}`).replaceWith(`<i class="fal fa-expand-alt white changeIcon${toggleValue}"></i>`);
    }



  }
}

$('#toggleAccordion1').keypress(expand(1)).click(expand(1));
$('#toggleAccordion2').keypress(expand(2)).click(expand(2));
$('#toggleAccordion3').keypress(expand(3)).click(expand(3));
$('#toggleAccordion4').keypress(expand(4)).click(expand(4));
$('#toggleAccordion5').keypress(expand(5)).click(expand(5));


$('#toggleAccordion6').keypress(expand(6)).click(expand(6));
$('#toggleAccordion7').keypress(expand(7)).click(expand(7));
$('#toggleAccordion8').keypress(expand(8)).click(expand(8));
$('#toggleAccordion9').keypress(expand(9)).click(expand(9));
$('#toggleAccordion10').keypress(expand(10)).click(expand(10));
$('#toggleAccordion11').keypress(expand(11)).click(expand(11));




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
  //
  // if ($('.block15, .block20').hasClass('active')) {



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

  // }


})





$('.back-to-top').click(() => {
  scrollfn("#overview");
})

$('.back-to-top').on('keypress', () => {
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

$("a, button, input, [tabIndex='0'], #one, .closeRadio, .card-link, select").on("keyup", function (e) {
  var code = (e.keyCode ? e.keyCode : e.which);
  if (code == 9) {
    $(this).css('outline', 'dashed 3px #4599ff')
  }

})
$("a, button, input, [tabIndex='0'], #one, .closeRadio, .card-link, select").on('focusout', function() {
  $(this).css('outline', 'none')
})


$("a").on("keyup", function (e) {
  var code = (e.keyCode ? e.keyCode : e.which);
  if (code == 9) {
    $(this).find('.whiteBubble').css('outline', 'dashed 3px #4599ff')
  }

})
$("a").on('focusout', function() {
  $(this).find('.whiteBubble').css('outline', 'none')
})







//active links tab pane on nav click start


var path = window.location.href.split(location.search||location.hash||/[?#]/)[0]


$('.navbar-nav li .nav-link').each(function() {
  if (this.href == path) {
    $(this).addClass('active');
  }
  else {
    $(this).removeClass('active');
  }

});

if ($(document).innerWidth() > 1024) {


$("ul.nav-tabs > li > a").on("shown.bs.tab", function(e) {
  var id = $(e.target).attr("href").substr(1);
  id = id.substring(0, id.length-10);
  window.location.hash = id;
});

}

var hash = (window.location.hash);
$('.nav-tabs a[href="' + hash + '-tab"]').tab('show');


var hash = window.location.hash;
hash && $('.nav-tabs a[href="' + hash + '"]').tab('show')


$('.nav-tabs a').not('.blueNav .nav-tabs a').click(() => {


  window.location.hash = this.hash;


});


$(window).on('load', () => {
  // $('html, body').scrollTop(0)
  // $('html, body').animate({scrollTop: $("#Home").offset().top}, 500);
})



$('.openTab1').click(function(e){
  e.preventDefault()
  $('.nav-tabs [data-type="projects"]').tab('show')

})

$('.openTab2').click(function(e){
  e.preventDefault()
  $('.nav-tabs [data-type="students"]').tab('show')

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

//active links tab pane on nav click end

$('.navbar-nav a').click(() => {

  if ($('a[data-type="students"]').is('.active')){
    // alert("sdiguybdsibi")
  }


})

$('a[data-type="students"]').click(() => {

  $('.imgBottomLeft').show()
  $('.imgBottom').addClass('students').show()
});


$('a[data-type="projects"]').click(() => {

  $('.imgBottomLeft').hide()
  $('.imgBottom').removeClass('students').show()
});


$('.nav-tabs [data-type="products"], .nav-tabs [data-type="partners"]').click(() => {

  $('.imgBottomLeft').hide()
  $('.imgBottom').hide()
});






//contact form

$('#slideOut2 .modal-header a').attr('tabindex', '-1')


var contactChildren = $("#slideOut2 .modal-header [tabIndex], #slideOut2 .modal-body [tabIndex], #slideOut2").each(function() {
  $(this).attr('tabindex', '-1')
})


var contactTabs = $("#slideOut2 a").each(function() {
  $(this).attr('tabindex', '-1')

})


var open = function() {


  $(contactChildren, contactTabs).attr('tabindex', '0')


  $('#theform input').each(function () {
    $(this).attr('tabindex', '0');
  });


  $('.changeTitle').html('We’d like to hear your feedback!')
  $('.contactUsOverlay').show();



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


  $(contactChildren, contactTabs).attr('tabindex', '0')


  $('#theform input').each(function () {
    $(this).attr('tabindex', '0');
  });

  $('.changeTitle').html('Need Help?')
  $('.contactUsOverlay').show();


  $('#closeThisPlease').attr('tabindex', '0');

  $('#sendMessage').attr('tabindex', '0');

  $('.modal-content').addClass('opened')
  $("#slideOut2").addClass('showslideOut2');
  $("#two").addClass('blueTab');
  $("#one").removeClass('blueTab');

  $('.firstBlock').removeClass('hide1').fadeIn()
  $('.secondBlock').addClass('hide1').fadeOut()


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

    $(contactChildren, contactTabs).attr('tabindex', '-1')

    $('#closeThisPlease').attr('tabindex', '-1');

    $('#sendMessage').attr('tabindex', '-1');


    $("#slideOut2").removeClass('showslideOut2');
    $('.contactUsOverlay').hide();
    $("#one, #two").removeClass('blueTab');

    setTimeout(function() {
      $('body').removeClass('showContact')
    }, 300)

  }
})


var close = function() {

  $(contactChildren, contactTabs).attr('tabindex', '-1')

  $('.contactUsOverlay').hide();

  $('#closeThisPlease').attr('tabindex', '-1');
  $('#sendMessage').attr('tabindex', '-1');
  $("#slideOut2").removeClass('showslideOut2');

  $("#one, #two").removeClass('blueTab');



}

$('#close, .form').keypress(
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



if ($(document).innerWidth() <= 991) {

$(".navbar-nav .dropdown-toggle").attr("aria-expanded","true");
$(".navbar-nav .dropdown-menu").addClass('show')

  $('.openTab').html('<i class="fas fa-envelope"></i>')
  $('#one').css('right', '-10px')

}



var hash = 1;

$(".ques").each(function(i){
  var count = "ques" + (++hash)

  $(this).attr("href",  "#" + count);


  $(this).closest('.card').find('.collapse').attr("id", count);
});








$('#nav .nav-tabs').append('<li class="slide-line"></li>').show()
$('#nav5 .nav-tabs').append('<li class="slide-line5"></li>').show()
$('#nav4 .nav-tabs').append('<li class="slide-line4"></li>').show()

var lineWidth = $('#nav .nav-tabs .nav-link.active').width()
var lineWidth5 = $('#nav5 .nav-tabs .nav-link.active').width()
var lineWidth4 = $('#nav4 .nav-tabs .nav-link.active').width()

$('#nav li.slide-line').css('width', lineWidth)
$('#nav4 li.slide-line4').css('width', lineWidth4)
$('#nav5 li.slide-line5').css('width', lineWidth5)


$(document).on('mouseenter', '#nav .nav-tabs li a', function () {

  var $this = $(this),

  offset = $this.offset(),

  offsetBody = $('#nav .nav-tabs').offset();


  TweenMax.to($('#nav .nav-tabs .slide-line'), 0.5, {
    css:{
      width: $this.outerWidth()+'px',
      x: (offset.left-offsetBody.left)+'px'

    },
    overwrite:"all",

    ease:Back.easeOut
  });

}).on('mouseleave', '#nav .nav-tabs li', function () {

  var $this = $(this),

  $active = $this.parent().find("a.active"),

  offset = $active.offset(),

  offsetBody = $('#nav .nav-tabs').offset();


  TweenMax.to($('#nav .nav-tabs .slide-line'), 0.5, {
    css:{
      width: $this.outerWidth()+'px',
      x: (offset.left-offsetBody.left)+'px'

    },
    overwrite:"all",
    ease:Power4.easeInOut
  });
});


$(document).on('mouseenter', '#nav5 .nav-tabs li a', function () {

  var $this = $(this),

  offset = $this.offset(),

  offsetBody = $('#nav5 .nav-tabs').offset();


  TweenMax.to($('#nav5 .nav-tabs .slide-line5'), 0.5, {
    css:{
      width: $this.outerWidth()+'px',
      x: (offset.left-offsetBody.left)+'px'

    },
    overwrite:"all",

    ease:Back.easeOut
  });

}).on('mouseleave', '#nav5 .nav-tabs li', function () {

  var $this = $(this),

  $active = $this.parent().find("a.active"),

  offset = $active.offset(),

  offsetBody = $('#nav5 .nav-tabs').offset();


  TweenMax.to($('#nav5 .nav-tabs .slide-line5'), 0.5, {
    css:{
      width: $this.outerWidth()+'px',
      x: (offset.left-offsetBody.left)+'px'

    },
    overwrite:"all",
    ease:Power4.easeInOut
  });
});

$(document).on('mouseenter', '#nav4 .nav-tabs li a', function () {

  var $this = $(this),

  offset = $this.offset(),

  offsetBody = $('#nav4 .nav-tabs').offset();


  TweenMax.to($('#nav4 .nav-tabs .slide-line4'), 0.5, {
    css:{
      width: $this.outerWidth()+'px',
      x: (offset.left-offsetBody.left)+'px'

    },
    overwrite:"all",

    ease:Back.easeOut
  });

}).on('mouseleave', '#nav4 .nav-tabs li', function () {

  var $this = $(this),

  $active = $this.parent().find("a.active"),

  offset = $active.offset(),

  offsetBody = $('#nav4 .nav-tabs').offset();


  TweenMax.to($('#nav4 .nav-tabs .slide-line4'), 0.5, {
    css:{
      width: $this.outerWidth()+'px',
      x: (offset.left-offsetBody.left)+'px'

    },
    overwrite:"all",
    ease:Power4.easeInOut
  });
});


//validate and send message on contact form and toast message


// $("#theform").validate(
//   {
//     rules:
//     {
//       email:
//       {
//         required: true,
//         email: true
//
//       }
//
//     }
//   });
//


// $('#sendMessage2').click(function (e) {
//
//   if(!$('#formControl1').val() == '' && !$('#formControl2').val() == '' )    {
//     e.preventDefault()
//
//     $(contactChildren).attr('tabindex', '-1')
//
//     $('#theform input').each(function () {
//       $(this).attr('tabindex', '-1');
//     });
//
//     $("#slideOut").removeClass('showSlideOut');
//
//
//
//   }
//
//
// });






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
