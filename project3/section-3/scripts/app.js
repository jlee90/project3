    $(document).ready(function() {

    $(".face").click(function() {
      var bg = $("#bg");
      if (bg.css("filter") === "none")
        bg.css("filter", "blur(8px)");
      else
        bg.css("filter", "none");

      $(".circle").toggle(1000);
      $('.lidT').animate({
        top: '-100'
      }, 800).delay(200).animate({
        top: '-40'
      }, 500).delay(200).animate({
        top: '-80'
      });
      $('.lidB').animate({
        bottom: '-100'
      }, 800).delay(200).animate({
        bottom: '-40'
      }, 500).delay(200).animate({
        bottom: '-80'
      });
      $('.pup').animate({
        'height': '40',
        'width': '40',
        top: '30',
        left: '30'
      }, 500).delay(1000).animate({
        'height': '20',
        'width': '20',
        top: '40',
        left: '40'
      })
    });

  }

);
