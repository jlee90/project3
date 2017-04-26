	$(document).ready(function(){
	
	$("#circle").click(function(){
	var bg=$("#bg");
	var containter=$("#containter");
	bg.css("filter","blur(5px)");
	containter.css("opacity","0");
	
	var up=$("#up");
	var down=$("#down");
	up.animate({height:'50%'},2000);
	down.animate({height:'50%'},2000);
	up.animate({height:'0%'},2000); 
	down.animate({height:'0%'},2000,function(){
	
	containter.css('opacity','1');
	bg.css('filter','blur(0px)');
	}
	); 
	
	
	} );
	
	});
