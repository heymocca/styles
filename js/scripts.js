$(document).ready(function() {
     $(".calculate__details").fadeIn(0);
     $(".calculate__accordion").click(function() {
          $(".calculate__details").next().slideUp('slow');
	  $(this).next().slideToggle();
	  var x=$(this).find(".arrow").eq(0);
          if(x.hasClass("arrow-up")){
	    x.removeClass("arrow-up").addClass("arrow-down");
	  }else{
		if(x.hasClass("arrow-down")){
	   	  x.removeClass("arrow-down").addClass("arrow-up");
	  	}
	 }
     });
});
