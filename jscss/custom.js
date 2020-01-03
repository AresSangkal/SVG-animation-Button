jQuery(document).ready(function(){
  
    $(".btn-svg").each(function(){
      var 
        $this = $(this),
        width = $this.outerWidth(),
        height = $this.outerHeight(),
        $svg = $this.find('svg'),
        $rect = $svg.find('rect'),
        totalPerimeter = width*2+height*2;

      $svg[0].setAttribute('viewBox', '0 0 '+width+' '+height);
      $rect.attr('width', width);
      $rect.attr('height', height);
      $rect.css({ 
        strokeDashoffset: totalPerimeter,
        strokeDasharray: totalPerimeter
      });
    });
    
  });