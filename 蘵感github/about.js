//滾動至指定位置啟動動畫
/*$(window).scroll(function () {
	var h = $(window).height() - 800;

	if ($(this).scrollTop() > h) {
		$('.card:nth-child(1)').css("animation-name", "card-group_1");
		$('.card:nth-child(2)').css("animation-name", "card-group_2");
		$('.card:nth-child(3)').css("animation-name", "card-group_3");
		$('.card:nth-child(4)').css("animation-name", "card-group_4"); 
		}
});
*/
$(window).scroll(function () {
	var h = $(window).height() - 800;
  
	if ($(this).scrollTop() > h) {
	  $('.card:nth-child(1)').css("animation-name", "card-group_1").one("animationend", function() {
		$(this).addClass("animation-finished");
	  });
	  $('.card:nth-child(2)').css("animation-name", "card-group_2").one("animationend", function() {
		$(this).addClass("animation-finished");
	  });
	  $('.card:nth-child(3)').css("animation-name", "card-group_3").one("animationend", function() {
		$(this).addClass("animation-finished");
	  });
	  $('.card:nth-child(4)').css("animation-name", "card-group_4").one("animationend", function() {
		$(this).addClass("animation-finished");
	  });
	} else {
	  $('.card').removeClass("animation-finished").css("animation-name", "");
	}
  });
  


//  圖片淡入動畫  <!-- jQuery Smoove -->
$('.smoove').smoove({
	offset:'40%',
	// moveX: '200px',
	// moveY: '200px'
 });
 $('.smoove_2').smoove({
	offset:'45%',
 });


// <!-- FAQ -->
// Toggle Collapse
$('.faq li .question').click(function () {
	$(this).find('.plus-minus-toggle').toggleClass('collapsed');
	$(this).parent().toggleClass('active');
  });
  

