export default {
    externalLinks: function () {
        $("p a[href^='http'],li a[href^='http']").each(function() {
            $(this).prepend('<span class="favicon" style="background-image:url(https://www.google.com/s2/favicons?domain=' + this.hostname + ')" ></span>');
        });
    }
}