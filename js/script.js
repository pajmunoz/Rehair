  $(function () {
    var $btnMenu = $(".btn-menu-resp");
    var $menu = $("#menu");
    var enlaces = $("#menu a");
    var head = $("header");
    var $top = $("#top");
    var $ancho = $(window).width();
    var $preload = $(".preload");
    /*preloader*/
    window.onload = function () {
      $preload.hide();
    };
      //console.log($ancho);

      $btnMenu.on("click", function () {
        $(document).find("#menu").fadeToggle();
          //.log($btnMenu);
        });
      /*desaparecer icon-gotop*/
      $(window).scroll(function () {
        var $scroll = $(document).scrollTop();


        var efecto = $("#primera").offset().top;


        if ($scroll >= (efecto - 50)) {

          $top.css("opacity", "1");

        } else {

          $top.css("opacity", "0");
        }

      });
      /*ir arriba*/
      $top.on("click", function () {
        $("html , body").animate({
          "scrollTop": 0
        }, 200, "easeInOutQuart");
      });
      /*enlaces*/
      enlaces.on("click", function (e) {

        e.preventDefault();
        var t = $(this);
        var tbox = t.attr("href");
        var topCaja = $(tbox).offset().top - 70;
        var $document = $("html , body");

        $document.stop().animate({
          scrollTop: topCaja
        }, 1000, 'easeInOutQuart');

        if ($ancho <= 1023) {
          $(document).find("#menu").fadeToggle();
        }
      });
      /*c2call*/
      // var $numeroTel = $("[data-tel]");
      // var cambiarEste = $numeroTel.attr("data-tel");
      // var mystring = cambiarEste.replace('-', '');
      // if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      //   var $paraBtn = $(".btn-llamar");
      //   $paraBtn.append('<a href="tel:+5411' + mystring + '"><button class="icon-telefono espacio btn-gracias">LLAMANOS!</button></a>');
      // }
      /*aparecer*/
      $.getScript('https://cdn.jsdelivr.net/scrollreveal.js/3.0.9/scrollreveal.min.js', function () {
        window.sr = ScrollReveal();
        sr.reveal(".aparecer-arriba", {
          duration: 500,
          useDelay: "always"
        });
        sr.reveal(".aparecer-derecha", {
          duration: 500,
          useDelay: "always",
          origin: "left"
        });
        sr.reveal(".aparecer-izquierda", {
          duration: 500,
          useDelay: "always",
          origin: "right",
          delay: 500,
          easing: 'cubic-bezier(0.17, 0.67, 0.83, 0.67)'
        });
        sr.reveal(".aparecer-abajo", {
          duration: 500,
          useDelay: "always",
          origin: "top"
        });
        sr.reveal(".aparecer-delay", {
          duration: 500
        }, 50);
      });
      var intervalID = window.setInterval(myCallback, 1800);

      function myCallback() {
        var c = document.getElementById("submit");
        var t = c.getAttribute("value");
        if (t === "PROBALO AHORA") {
          c.setAttribute("value", "COMPLETÁ LOS CAMPOS");
        } else {
          c.setAttribute("value", "PROBALO AHORA");
        }

      }
      var $numeroTel = $("[data-tel]");
      var cambiarEste = $numeroTel.attr("data-tel");
      var mystring = cambiarEste.replace('-', '');

      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        var $paraBtn = $(".btn-llamar");
        $paraBtn.append('<a href="tel:+5411' + mystring + '"><button1 class="btn-llamar centro hasta-web espacio icon-telefono btn-gracias">LLAMANOS!</button1></a>');
      }
    });
