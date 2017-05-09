$(document).ready(function() {
    
    $('.safety-accordion-section').addClass('vc_active');
      function shortString(string) {
            return '#menu-'+string+'_footer_menu>li.menu-item.menu-item-type-post_type.menu-item-object-page.menu-item-has-children>.sub-menu';
        }
    function shortStringOther(string) {
            return '#menu-'+string+'_footer_menu>li.menu-item.menu-item-type-post_type.menu-item-object-page.menu-item-has-children';
        }

    $(window).resize(function() {

      if ($(this).width() < 782) {
            $(shortStringOther('about, rider-hub, impact')).removeClass("toggle-active");
            $('.safety-accordion-section').removeClass('vc_active');
      } else {
            $(shortString('about, rider-hub, impact')).show();
            $(shortStringOther('about, rider-hub, impact')).addClass("toggle-active");
            $('.safety-accordion-section').addClass('vc_active');
        }
    });
    
    $(window).scroll(function() {
       if ($(this).scrollTop() > 147) {
           $('ul-class>').addClass('fixed-postion');
       } else {
           $('ul-class').removeClass('fixed-position');
       }
    });
    
});