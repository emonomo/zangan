// 換圖輪播
const AUTOPLAY_CLASS = "slider--autoplay";

// Remove autoplay class on stop
Flickity.prototype.stopPlayer = function () {
  this.player.stop();
  this.element.classList.remove(AUTOPLAY_CLASS);
};

let flkty = new Flickity("#carousel", {
  autoPlay: 6000,
  prevNextButtons: true,
  pageDots: true,
  setGallerySize: false,
  pauseAutoPlayOnHover: false,
  wrapAround: true,
  l18nPageDot: "Slide %",
  l18nPrevious: "Vorherige Slide",
  l18nNext: "Nächste Slide",
  on: {
    ready: function () {
      this.element.classList.add(AUTOPLAY_CLASS);
      setTimeout(() => {
        this.element.classList.add("slider--init");
      }, 10);
    } } });


// 視差效果
$('.img-parallax').each(function(){
    var img = $(this);
    var imgParent = $(this).parent();
    function parallaxImg () {
      var speed = img.data('speed');
      var imgY = imgParent.offset().top;
      var winY = $(this).scrollTop();
      var winH = $(this).height();
      var parentH = imgParent.innerHeight();
  
  
      // The next pixel to show on screen      
      var winBottom = winY + winH;
  
      // If block is shown on screen
      if (winBottom > imgY && winY < imgY + parentH) {
        // Number of pixels shown after block appear
        var imgBottom = ((winBottom - imgY) * speed);
        // Max number of pixels until block disappear
        var imgTop = winH + parentH;
        // Porcentage between start showing until disappearing
        var imgPercent = ((imgBottom / imgTop) * 100) + (50 - (speed * 50));
      }
      img.css({
        top: imgPercent + '%',
        transform: 'translate(-50%, -' + imgPercent + '%)'
      });
    }
    $(document).on({
      scroll: function () {
        parallaxImg();
      }, ready: function () {
        parallaxImg();
      }
    });
  });