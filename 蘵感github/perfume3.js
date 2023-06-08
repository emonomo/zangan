// <!-- 師資的動畫 -->
$('.smoove_3').smoove({
	offset:'20%',
 });

//<!-- 長期短期選擇 -->

// var marker = document.querySelector('#chose .marker');
// var item = document.querySelectorAll('#chose nav a');

// function indicator(e){
// marker.style.left = e.offsetLeft+"px";
// marker.style.width = e.offsetWidth+"px";
// }

// item.forEach(Link => {
// 	Link.addEventListener('click',(e)=>{
// 		e.preventDefault();
// 		indicator(e.target);
// 	});
// })

// -----------------------------------------
function line() {
	var w = 0;
	$('#chose ul > li').each(function(index) {
		if($(this).hasClass('active')) {
			$('.marker').width($(this).width()).css('left', w);
		}
		w += $(this).width();
	});
}

$(function() {
	line();
});

$('span').on('click', function() {
	$('li').removeClass('active');
	$(this).parent().addClass('active');	
	line();
});
//<!-- 課程切換選項 -->

//上面按鈕隨著點選切換顏色，按下一個按鈕本來的會回到原背景圖
	function changeBackground(clickedButton) {
		var buttons = document.getElementsByClassName('chosen');
	
		// 遍历所有按钮
		for (var i = 0; i < buttons.length; i++) {
		var button = buttons[i];
		var buttonId = button.id;
	
		// 判断当前按钮是否为点击的按钮
		if (buttonId === clickedButton) {
			button.style.backgroundImage = "url('./img/course_item/block_click.svg')"; // 切换背景图为新的背景图
		} else {
			button.style.backgroundImage = "url('./img/course_item/block_default.svg')"; // 切换背景图为默认背景图
		}
		}
	}

//選單切換    隨著上面按鈕點選，切換下方資訊欄
let courseShort = document.querySelector('#list');
let courseLong = document.querySelector('#list2');

	function showShort(){
		courseShort.style.display = 'block'; //顯示
		courseLong.style.display = 'none';  //隱藏
		}
	function showLong(){
		courseLong.style.display = 'block'; //顯示
		courseShort.style.display = 'none';  //隱藏
		}


//隨著上面按鈕點選，切換下方資訊欄
	let classA = document.querySelector('#classA');
	let classB = document.querySelector('#classB');
	let classC = document.querySelector('#classC');

	function changeClassA(){
			classA.style.display = 'block'; //顯示
			classB.style.display = 'none';  //隱藏
			classC.style.display = 'none';  //隱藏
		}
	function changeClassB(){
			classB.style.display = 'block'; //顯示
			classA.style.display = 'none';  //隱藏
			classC.style.display = 'none';  //隱藏
		}
	function changeClassC(){
			classC.style.display = 'block'; //顯示
			classA.style.display = 'none';  //隱藏
			classB.style.display = 'none';  //隱藏
		}

// <!-- FAQ -->
// Toggle Collapse
$('.faq li .question').click(function () {
	$(this).find('.plus-minus-toggle').toggleClass('collapsed');
	$(this).parent().toggleClass('active');
  });
  
  
// <!-- go top -->
    //滑動置頂

	$(document).ready(function () {
		  //滑動置頂
		  $('#gotop').click(function(){
			$('html,body').animate({scrollTop:0},1500);
		  })
		  //置頂按鈕淡出淡入
		  $(window).scroll(function(){
			if($(this).scrollTop()>200){
			  $('#gotop').stop().fadeTo('fast',1);   //.fadeTo(1000,1) => 1000是一秒，沒有給速度的話要給空值 ""(預設為0.4秒)
			}else{
			  $('#gotop').stop().fadeOut();
			}
		  })
	  });
