//<!-- 長期短期選擇 -->

var marker = document.querySelector('#chose .marker');
var item = document.querySelectorAll('#chose nav a');

function indicator(e){
marker.style.left = e.offsetLeft+"px";
marker.style.width = e.offsetWidth+"px";
}

item.forEach(Link => {
	Link.addEventListener('click',(e)=>{
		e.preventDefault();
		indicator(e.target);
	});
})
/* 
item.forEach(Link => {
	Link.addEventListener('click',(e)=>{
	indicator(e.target);
  })
})*/


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
  
