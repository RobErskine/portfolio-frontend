<template>
    <nav class="main-nav">
        <button class="button js-zoom">
            <span class="copy">Menu</span>
            <span class="burger"></span>
        </button>
    </nav>
</template>

<style lang="scss">
nav.main-nav{
    position:fixed;
    top:1em;
    right:1em;
    z-index:99999;
    button.button{
        appearance:none;
        border:0px;
        background-color:$primary;
        box-shadow:0.33vw 0.5vw 0vw $primaryLight;
        font-size:1.5em;
        margin:0.5em;
        letter-spacing:0px;
        color:$light;
        font-weight:700;
        transform:rotate($rotate);
        overflow:hidden;
        transition:all 0.3s ease-in-out;
        padding:0.4em 1em 0.5em 2em;
        border-radius: 1em;
        cursor:pointer;
        span.copy{
            position:relative;
            left:0em;
        }
    }
    span.burger,
    span.burger:before,
    span.burger:after{
        position:absolute;
        width:1.25em;
        height:0.166em;
        top:0px;
        left:0px;
        margin-top:-0.125em;
        background-color:$light;
        border-radius:0.5em;
        transition:all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
        transform-origin:50% 50%; 
    }
    span.burger:before,
    span.burger:after{
        content:"";
        display:block;
        height:0.16em;
    }
    span.burger:before{
        margin-top:-0.33em;
    }
    span.burger:after{
        margin-top:0.36em;
    }
    span.burger{
        top:51%;
        left:0.5em;
    }
    span.copy{
        display:block;
        max-width:200px;
        transition:all 0.4s ease-in-out;
        padding-left:0px;
    }
}

.menu-open nav.main-nav{
    button.button{
        padding-left:1.3em;
        span.copy{
            max-width:0px;
            left:1em;
        }
        span.burger{
            background-color:rgba($light,0);
        }
        span.burger:before{
            transform:rotate(45deg) translateX(0.3em) translateY(0.2em)
        }
        span.burger:after{
            transform:rotate(-45deg) translateX(0.3em) translateY(-0.2em)
        }
    }
}

@media all and (min-width: 700px){
    nav.main-nav{
        button.button{
            font-size:1.6em;
        }
    }
}
</style>

<script>
export default {

}

if(process.client){
    const $body = $('body');
    var doc = document;

    // Elements
    var $site = $('.site-wrap');
    var $wrap = $('.panel-wrap');

    var $panel = $('.panel');

    var $zoom = $('.js-zoom');

    var $nav_up = $('.js-up'),
    $nav_left = $('.js-left'),
    $nav_right = $('.js-right'),
    $nav_down = $('.js-down');

    var animation = 'animate--shrink';

    // Tracking
    var x = 0,
        y = 0;

    function setPos(x,y){
        // $wrap.css('transform','translateX(' + x + '00%) translateY(' + y + '00%)');
        // setTimeout( function(){
        //     $wrap.removeClass('animate');
        // }, 600);
    }

    setPos();

    function moveUp(){
        $wrap.addClass('animate');
        pos_y++;
        setPos();
    }

    function moveLeft(){
        $wrap.addClass('animate');
        pos_x++;
        setPos();
    }

    function moveRight(){
        $wrap.addClass('animate');
        pos_x--;
        setPos();
    }

    function moveDown(){
        $wrap.addClass('animate');
        pos_y--;
        setPos();
    }
    
    $zoom.on('click', function(event){
        setTimeout(function(){
            $('body').toggleClass('show-all');
            $site.toggleClass('animating');
            $body.toggleClass('menu-open');
            $site.attr('style','transform: rotateY(deg) rotateX(0deg) scale(1) translateX(12vw) translateZ(0)');
        },100);

        $panel.each(function(){
            $(this).animate({
                scrollTop: 0
            }, 600)
        });

        setTimeout(function(){
            $site.removeClass('animating');
        },700);
    });

    $(window).on('keyup', function(event){
        if(event.keyCode == 27){
            closeZoom();
        }
    });

    var currentMousePos = { x: -1, y: -1 };
    var tiltPos = {x : 0, y: 0};
    var half = {x : 0, y: 0};

    var hover = function($el){
        half.x = $(window).width() / 2;
        half.y = $(window).height() / 2;
        
        tiltPos.x = Math.floor((currentMousePos.x - half.x) / 30);
        tiltPos.y = Math.floor((currentMousePos.y - half.y) / 30);

        $el.attr('style','transform: rotateY('+tiltPos.x+'deg) rotateX('+tiltPos.y+'deg) scale(0.25) translateX(12vw) translateZ(0)');
    }

    $(document).mousemove(function(event) {
        currentMousePos.x = event.pageX;
        currentMousePos.y = event.pageY;

        if($body.hasClass('menu-open')){
            hover($site);
        }
    });


    // zoom in to selected position
    function setPanelAndZoom(x,y){
        x = -x,
        y = y;

        setPos(x,y);
    }

    function closeZoom(){
        $('body').removeClass('show-all');
        $site.removeClass('show-all').attr('style','transform: rotateY(deg) rotateX(0deg) scale(1) translateX(12vw) translateZ(0)');
        $body.removeClass('menu-open');
    }

    // when a panel is clicked, do the thing
    $('body').on('click', '.site-wrap .panel', function(event){
        event.preventDefault();
        var x = $(this).data('x-pos');
        var y = $(this).data('y-pos');

        closeZoom();
        setPanelAndZoom(x,y);
    });
}
</script>