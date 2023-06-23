

// $(document).ready(function () {
//     $("#cart").hide(); // 隐藏 #cart 初始状态
//   });
  
//   $("#button").click(function () {
//     // 隐藏其他页面内容
//     $("#introduce").hide();
//     $("#marquee").hide();
//     $("#teacher").hide();
//     $("#select").hide();
//     $("#course").hide();
//     $(".clssDetail").hide();
//     $(".faq_box").hide();
//     $("#button").hide();
  
//     // 显示 #cart
//     $("#cart").show();

//   // 滚动到 #cart 的顶部位置
//   // $('html, body').animate({
//   //   scrollTop: $("#cart").offset().top }, 0);
//     $('html, body').animate({ scrollTop: 0 }, 0); // 0 表示没有滚动动画，直接跳转到目标位置
//   });

//Html Template

  var product_list_template = "<div class='chosen'><a class='detail'><h3 class='class_name'>{{class_name}}</h3><div class='box_inner'><h1 class='name'>{{name}}</h1><h2 class='course_content'>{{course_content}}</h2></div><div class='price'><p>$</p><h3>{{price}}</h3></div><div class='cart'><div data-pdid='{{id}}' class='cart_icon'><img src='img/course_item/newcar.svg'></div></div></div>";

  var cart_list_template = "<div class='shop-item'><h2>{{name}}</h2><h3 class='friday'>{{course_content}}</h3><div class='money'><h4>$</h4><h1>{{price}}</h1></div><input class='box' data-list='{{listid}}' data-prod='{{prodtag}}' type='number' min='1' value='{{quantity}}'/><div class='subtotal'><h4>$</h4>{{subtotal}}</div> <div data-delid='{{delid}}' data-prodid='{{prodid}}' class='mini'></div></div></div>";
  
  var cart_total_template = "<div class='total'><hr><div class='total_money'><div class='price'>{{total}}</div></div><li><div class='btn-confirm'>進行結帳 →</div></div>";
  
  var follow_list_template = "<li class='follow-item'>{{name}}<div class='price'>{{price}}</div><div data-delid='{{delid}}' data-pdid='{{pdid}}' class='btn-fdel'> <i class='fas fa-times'></i></div></li>";
  
  //Data Setting
  var products=[
    {class_name:"A",name:"高腰牛仔短褲",course_content: "週五 下午14:00-16:00共6堂<br>3/3、3/10、3/17、3/24、3/31、4/7",price:1000,cart:false, follow:false},
    {class_name:"B",name:"綁帶A字長裙",course_content: "週五 下午14:00-16:00共6堂<br>3/3、3/10、3/17、3/24、3/31、4/7", price:1500, cart:false, follow:false},
    {class_name:"C",name:"短版針織外套", price:599, src:"./img/course_item/newcar.svg", cart:false, follow:false},
    {class_name:"D",name:"風衣長洋裝", price:2205, src:"./img/course_item/newcar.svg", cart:false, follow:false},
   
  ];
  
  var cart_list = [];
  var cart_item_number = 0;
  var follow_list = [];
  
  
  //Page slide
  // $(".home").click(function(){
  //   $(".page-frame").css("left","0");
  // });
  // $("#button").click(function(){
  //   $(".page-frame").css("left","-100%");
  // });
  // $("#follow").click(function(){
  //   $(".page-frame").css("left","-200%");
  // });
  
  //Show Product
  for(var i=0; i< products.length; i++){
    var current_prod_html = 
        product_list_template.replace("{{class_name}}", products[i].class_name)
                            .replace("{{name}}", products[i].name)
                            .replace("{{course_content}}", products[i].course_content)
                            .replace("{{price}}", products[i].price)
                            .replace("{{id}}", i)
                            .replace("{{fpdid}}", i);                       
    $("#list").append(current_prod_html);
  }
  
  var intervalFunc;
  var count = 0;
  //Cart number scale animation
  function scaleSize(){
    intervalFunc = 
      setInterval(function(){
        count++;
        if(count<50){
          $(".num-cart").css("transform","scale(1.5)");
        }else{
          $(".num-cart").css("transform","scale(1)");
        }
        if(count> 100){
          stopInterval();
        }
      },10);
  }
  
  //Stop interval
  function stopInterval(){
    clearInterval(intervalFunc); 
    count = 0;
  }
  //Get product into cart
  $(".cart_icon").click(function(){
    var select_prod = $(this).attr("data-pdid");
    
    if(!products[select_prod].cart){
      cart_item_number++;
      scaleSize();
      products[select_prod].cart = !products[select_prod].cart;
      cart_list.push({
          name: products[select_prod].name,
          price: products[select_prod].price,
          course_content: products[select_prod].course_content,
          prodid: select_prod,
          quantity: 1
      });
      $(".num-cart").text(cart_item_number);
      $($(this)).addClass("cart-full");
    }
    showCart();
  });
  
  

  
  function showCart(){
    $("#cartlist").html("");
    var total_price = 0;
    for(var i=0; i< cart_list.length;i++){
      var current_cart_item = cart_list[i];
      total_price += parseInt(current_cart_item.price) * current_cart_item.quantity;
      var current_cart_list =
          cart_list_template.replace("{{prodid}}", cart_list[i].prodid)
                            .replace("{{prodtag}}", cart_list[i].prodid)
                            .replace("{{name}}", cart_list[i].name)
                            .replace("{{course_content}}", cart_list[i].course_content)
                            .replace("{{price}}", cart_list[i].price)
                            .replace("{{subtotal}}", cart_list[i].price * cart_list[i].quantity)
                            .replace("{{delid}}", i)
                            .replace("{{listid}}", i)
                            .replace("{{quantity}}", cart_list[i].quantity);
      $("#cartlist").append(current_cart_list);
    }
    var current_total = cart_total_template.replace("{{total}}", total);
    $("#cartlist").append(current_total);
    
    // Call remove function
    $(".mini").click(function(){
      var relate_prod = products[parseInt($(this).attr("data-prodid"))];
      removeItem(parseInt($(this).attr("data-delid")));
      $(".add-cart[data-pdid='"+parseInt($(this).attr("data-prodid"))+"']").removeClass("cart-full");
      relate_prod.cart = false;
    });
    
    // Detect quantity value change
    $(".shop-item input").change(function(){
      var prodid = $(this).attr("data-prod");
      var listid = $(this).attr("data-list");
      var quan = $(this).val();
      cart_list[listid].quantity = quan;
      itemTotal(prodid, listid, quan);
    });
     // 存储购物车数据到localStorage
     localStorage.setItem('cartData', JSON.stringify(cart_list));
  }

     
     
     
      // 获取报名按钮元素
      // var button = document.getElementById("button");
  
      // // 添加点击事件处理程序
      // button.addEventListener("click", function() {
      //   // 切换到CARTcart.html页面
      //   window.location.href = "CARTcart.html";
      // });

      // showCart();

  // $("#button").click(function(){
  //     showCart();
  // });
  // showCart();
  
  //Delete item
  function removeItem(delid){
    cart_list.splice(delid,1);
    cart_item_number--;
    $(".num-cart").text(cart_item_number);
    showCart();
  }
  
  //Change item total
  function itemTotal(prod, list, quan){
    cart_list[list].subtotal = parseInt(products[prod].price) * quan;
    showCart(); 
  }