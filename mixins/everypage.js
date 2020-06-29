export default {
    externalLinks: function () {
        setTimeout(function(){
            $('body').find("p a[href^='http'],li a[href^='http'], blockquote a[href^='http'], figcaption a[href^='http']").each(function() {
                $(this).prepend('<span class="favicon" aria-hidden="true" style="background-image:url(https://www.google.com/s2/favicons?domain=' + this.hostname + ')" ></span>');
                $(this).attr('target','_blank');
            });
        },1000); // todo: find out how to get rid of set timeout to get working
    },
    setColors: function(color, tint){
        document.documentElement.style.setProperty('--color', color);
        document.documentElement.style.setProperty('--tint-color', tint);
    }
}