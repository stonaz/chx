/*
 * Galleria Classic Theme v. 1.5 2010-10-28
 * http://galleria.aino.se
 *
 * Copyright (c) 2010, Aino
 * Licensed under the MIT license.
 */

(function($) {

Galleria.addTheme({
    name: 'classic',
    author: 'Galleria',
    version: '1.5',
    css: 'galleria.classic.css',
    defaults: {
        transition: 'fade',
        thumb_crop: 'height',
        thumb_fit: false,
        image_crop: 'height',
        max_scale_ratio: 1,
        height:575,
        width:'auto',
        debug:true,
		// set this to false if you want to show the caption all the time:
        _toggle_info: false
    },
    init: function(options) {
        
        // add some elements
        this.addElement('info-link','info-close');
        this.append({
            'info' : ['info-link','info-close']
        });
        
        // cache some stuff
        var toggle   = this.$('image-nav-left,image-nav-right,counter'),
            info     = this.$('info-link,info-close,info-text'),
            click    = Galleria.TOUCH ? 'touchstart' : 'click';
        
        // show loader & counter with opacity
        this.$('loader,counter').show().css('opacity',1)

        // some stuff for non-touch browsers
        if (! Galleria.TOUCH ) {

            // fade thumbnails
            this.$('thumbnails').children().hover(function() {
                $(this).not('.active').children().stop().fadeTo(100, 1);
            }, function() {
                $(this).not('.active').children().stop().fadeTo(400, 1);
            });
            
            this.addIdleState( this.get('image-nav-left'), { left:-50 });
            this.addIdleState( this.get('image-nav-right'), { right:-50 });
            this.addIdleState( this.get('counter'), { opacity:0 });
        }
        
        // toggle info
        if ( options._toggle_info ) {
            info.bind( click, function() {
                info.toggle();
            });
        }

        // bind some stuff
        this.bind(Galleria.THUMBNAIL, function(e) {
            $(e.thumbTarget).parent(':not(.active)').children().css({'opacity':1})
        });
        
        this.bind(Galleria.LOADSTART, function(e) {
            if (!e.cached) {
                this.$('loader').show().fadeTo(200, .4);
            }
            
            this.$('info').toggle( this.hasInfo() );
            
            $(e.thumbTarget).css({'opacity':1}).parent().siblings().children().css({'opacity':1});
        });
        
        this.bind(Galleria.LOADFINISH, function(e) {
            this.$('loader').fadeOut(200);
        });
    }
});

})(jQuery);
