//<!-- 長期短期選擇 -->

var marker = document.querySelector('#chose .marker');
var item = document.querySelectorAll('#chose nav a');

function indicator(e){
marker.style.left = e.offsetLeft+"px";
marker.style.width = e.offsetWidth+"px";
}

item.forEach(Link => {
	Link.addEventListener('click',(e)=>{
	indicator(e.target);
  })
})

// <!-- FAQ -->
// Toggle Collapse
$('.faq li .question').click(function () {
	$(this).find('.plus-minus-toggle').toggleClass('collapsed');
	$(this).parent().toggleClass('active');
  });
  
