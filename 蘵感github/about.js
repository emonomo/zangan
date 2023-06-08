//滾動至指定位置啟動動畫
/*$(window).scroll(function () {
	var h = $(window).height() - 800;

	if ($(this).scrollTop() > h) {
		$('.card:nth-child(1)').css("animation-name", "card-group_1");
		$('.card:nth-child(2)').css("animation-name", "card-group_2");
		$('.card:nth-child(3)').css("animation-name", "card-group_3");
		$('.card:nth-child(4)').css("animation-name", "card-group_4"); 
		}
});*/

function animateCards() {
    const cardGroup = document.querySelector('.card-group');
    cardGroup.classList.add('animating');
  }

  function removeAnimation() {
    const cardGroup = document.querySelector('.card-group');
    cardGroup.classList.remove('animating');
  }



  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 300) { // Specify the desired scroll trigger height
      animateCards();
   }else{
      removeAnimation();
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
  

