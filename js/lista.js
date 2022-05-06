var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    $('.myimgdivshowhide').hide();
	$('.myimgdivshowhide2').hide();
    $('.myimgdivshowhide3').hide();
    } else {
      panel.style.display = "block";
    }
  });
}
$(document).ready(function(){
    $('.myimgdivshowhide').hide();
	$('.myimgdivshowhide2').hide();
    $('.myimgdivshowhide3').hide();
    $('#target').click(function(){
        $('.myimgdivshowhide').show();
        $('.myimgdivshowhide2').hide();
        $('.myimgdivshowhide3').hide();
 });
	$('#target2').click(function(){
        $('.myimgdivshowhide').hide();
   		$('.myimgdivshowhide2').show();
        $('.myimgdivshowhide3').hide();
	});
    $('#target3').click(function(){
        $('.myimgdivshowhide').hide();
   		$('.myimgdivshowhide2').hide();
           $('.myimgdivshowhide3').show();
	});
    

    
});