<template>
    <div class="panel has-content detail" data-x-pos="0" data-y-pos="0">
        <Logo size="size-small" position="position-left"/>
        <sectionHeader post-title="Contact" class-name="contact" canvas="./animations/contactcanvas"></sectionHeader>
        <section class="block copy">
            <div class="slim-block">
                <p><strong>I’d love to hear from you!</strong> I’m interested in freelance work, new opportunities, and friendship.</p>
                <p><strong>If you’re interested in my code</strong>, you can find me on <a href="https://github.com/roberskine" target="_blank">GitHub</a>,<a href="https://codepen.io/roberskine" target="_blank">Codepen</a>, <a href="https://glitch.com/@RobErskine" target="_blank">Glitch</a>, and <a href="https://stackoverflow.com/users/1047958/rob-erskine" target="_blank">StackOverflow</a>.</p>
                <p><strong>If you’re interested in me personally</strong>, you can connect with me on <a href="https://linkedin.com/in/roberskine" target="_blank">LinkedIn</a>, <a href="https://twitter.com/erskinerob">Twitter</a>, and <a href="https://open.spotify.com/user/roberskine" target="_blank">Spotify</a>.</p><p>I'd also love to see your island in Animal Crossing! My <a href="https://www.nintendo.com/switch/" target="_blank">Nintendo Switch</a> friend code is SW-4030-6844-7525.</p>
                <br/>
                
                <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                    <div class="req">
                        <p>Feel free to send me a note below. <br/><br/>*All of these fields are required.</p>
                        <label>
                            <span class="label">Your name*:</span>
                            <input type="text" name="user name"/>
                        </label>
                        <label>
                            <span class="label">Your email*:</span>
                            <input type="email" name="user email"/>
                        </label>
                        <label>
                            <span class="label">Your interest*:</span>
                            <div class="select-wrapper">
                                <select name="interest">
                                    <option value="just sayin' hey">Just sayin’ hey</option>
                                    <option value="freelance work">Freelance work</option>
                                    <option value="new opportunities">New opportunities</option>
                                    <option value="friendship">Friendship :)</option>
                                    <option value="issue with your site">There's an issue with your site :(</option>
                                </select>
                            </div>
                        </label>
                        <label>
                            <span class="label">Your message*:</span>
                            <textarea name="message" rows="3"></textarea>
                        </label>
                    </div>
                    <div class="madlib">
                        <p>These are totally optional, but fill out the below to get a <em>100% free MadLib:</em></p>
                        <label>
                            <span class="label">Random noun:</span>
                            <input type="text" name="random noun" placeholder="cookie"/>
                        </label>
                        <label>
                            <span class="label">Random verb:</span>
                            <input type="text" name="random verb" placeholder="repair"/>
                        </label>
                        <label>
                            <span class="label">Random adjective 1:</span>
                            <input type="text" name="random adjective 1" placeholder="alive"/>
                        </label>
                        <label>
                            <span class="label">Random adjective 2:</span>
                            <input type="text" name="random adjective 2" placeholder="lazy"/>
                        </label>
                    </div>
                    <input type="hidden" name="form-name" value="contact">
                    <button type="submit">Fire away! <span class="label"><small>(to my inbox)</small></span></button>
                </form>

            </div>
        </section>
        <Footer/>
    </div>
</template>

<style lang="scss">
    span.name{
        text-transform: capitalize;
    }

    form{
        position:relative;
        overflow:hidden;
        padding-top:4em;
        padding-bottom:1em;
        &:before{
            content:"";
            display:block;
            height:1px;
            width:100%;
            background-color:darken($light,15%);
            transform:rotate($rotate) translateY(-3em);
        }
        div > p{
            font-size:1.2em;
        }
        label,span.label{
            display:block;
            margin-bottom:0.25em;
        }
        label{
            margin-bottom:1em;
        }
        input,select,textarea,button{
            appearance:none;
            background-color:darken($light,10%);
            width:100%;
            padding:0.5em 0.5em;
            font-size:1.1em;
            outline:none;
            border-radius:0px;
            border:none;
            border-radius:0.5em 1em;
        }
        select{
            border-radius:0px;
        }
        input,div.select-wrapper,textarea{
            border:2px solid darken($light,15%);
            width:100%;
            border-radius:0.5em 1em;
            &:focus,
            &:active{
                border:2px solid darken($light,25%);
            }
        }
        textarea{
            resize:vertical;
        }
        div.select-wrapper{
            overflow:hidden;
            position:relative;
            select{
                width:120%;
            }
            &:after{
                content:"⇣";
                pointer-events: none;
                position:absolute;
                top:50%;
                right:1em;
                transform:translateY(-50%);
            }
        }
        button{
            background-color:$primary;
            color:$light;
            font-weight:700;
            border-radius:2em;
            box-shadow: 0.33vw 0.5vw 0vw $primaryDark;
            width:auto;
            display:inline-block;
            margin:0 auto;
            padding:0.5em 3em;
            transform:rotate($rotate);
            cursor:pointer;
        }
    }

    @media all and (min-width: 800px){
        form{
            display:flex;
            flex-wrap:wrap;
            align-items:space-between;
            justify-content:space-between;
            div.req{
                width:60%;
            }
            div.madlib{
                width:35%;
            }
        }
    }

    .confetti-container{
        position:absolute;
        pointer-events:none;
        top:3em;
        left:0px;
        bottom:0px;
        right:0px;
        width:100%;
    }

    .confetti {
        width: 2vh;
        height: 2vh;
        background-color: #ff5c57;
        position: absolute;
        top:0px;
        left: 50%;
        animation:confetti 5s linear -2s infinite;
        transform-origin: left top;
        overflow:hidden;
    }

    .confetti:nth-child(1) {
        background-color: #00b5e9; left: 10%; animation-delay: 0;
    }
    .confetti:nth-child(2) {
        background-color: #00da8e; left: 20%; animation-delay: -5s;
    }
    .confetti:nth-child(3) {
        background-color: #ffbb53; left: 30%; animation-delay: -3s;
    }
    .confetti:nth-child(4) {
        background-color: #ff5c57; left: 40%; animation-delay: -2.5s;
    }
    .confetti:nth-child(5) {
        background-color: #00b5e9; left: 50%; animation-delay: -4s;
    }
    .confetti:nth-child(6) {
        background-color: #00da8e; left: 60%; animation-delay: -6s;
    }
    .confetti:nth-child(7) {
        background-color: #ffbb53; left: 70%; animation-delay: -1.5s;
    }
    .confetti:nth-child(8) {
        background-color: #ff5c57; left: 80%; animation-delay: -4s;
    }
    .confetti:nth-child(9) {
        background-color: #00b5e9; left: 90%; animation-delay: -3.5s;
    }
    .confetti:nth-child(10) {
        background-color: #00da8e; left: 100%; animation-delay: -2.5s;
    }

    .confetti:nth-child(11) {
        background-color: palette(orange); left: 10%; animation-delay: -3.25s;
    }

    .confetti:nth-child(12) {
        background-color: #00b5e9; left: 75%; animation-delay: -8s;
    }

    .confetti:nth-child(13) {
        background-color: #00da8e; left: 40%; animation-delay: -1.25s;
    }

    .confetti:nth-child(14) {
        background-color: palette(orange); left: 40%; animation-delay: -1.25s;
    }

    .confetti:nth-child(15) {
        background-color: #00da8e; left: 55%; animation-delay: 1.25s;
    }

    .confetti:nth-child(16) {
        background-color: #00da8e; left: 30%; animation-delay: -0.5s;
    }

    .confetti:nth-child(17) {
        background-color: #00b5e9; left: 95%; animation-delay: -1s;
    }

    .confetti:nth-child(18) {
        background-color: #ff5c57; left: 50%; animation-delay: -3.25s;
    }

    .confetti:nth-child(19) {
        background-color: palette(orange); left: 5%; animation-delay: -4s;
    }

    .confetti:nth-child(20) {
        background-color: #ffbb53; left: 66%; animation-delay: -2s;
    }

    @keyframes confetti {
        0% { transform: rotateZ(15deg) rotateY(0deg) translate(0,-2vh); }
        25% { transform: rotateZ(5deg) rotateY(360deg) translate(-5vw,20vh); }
        50% { transform: rotateZ(15deg) rotateY(720deg) translate(5vw,60vh); }
        75% { transform: rotateZ(5deg) rotateY(1080deg) translate(-10vw,80vh); }
        100% { transform: rotateZ(15deg) rotateY(1440deg) translate(10vw,110vh); }
    }
</style>

<script>
import sectionHeader from '~/components/SectionHeader.vue'
import HamburgerMenu from '~/components/HamburgerMenu.vue'
import Footer from '~/components/Footer.vue'
import Logo from '~/components/Logo.vue'

import everypage from '~/mixins/everypage'

import {Howl, Howler} from 'howler';

export default {
    data (){
        return {
            title: 'Contact | Rob Erskine - Creative Developer',
            description: 'Get in contact with Rob Erskine for design, development, or other technical needs. Interested in freelance, new opportunities, and friendship, of course :)',
            image: 'https://placehold.it/1200x630?text=TODO'
        }
    },
    head (){
        return {
            title: this.title,
            meta: [
                { hid: 'og:title', name: 'og:title', content:this.title },
                { hid: 'twitter:title', name: 'twitter:title', content:this.title },
                { hid: 'description', name: 'description', content: this.description },
                { hid: 'og:description', name: 'og:description', content: this.description },
                { hid: 'og:image', name: 'og:image', content: this.image },
                { hid: 'twitter:image', name: 'og:image', content: this.image }
            ]
        }
    },
    components: {
        HamburgerMenu,
        sectionHeader,
        Footer,
        Logo
    },
    mixins: [everypage],
    mounted: function(){
        everypage.externalLinks();
        everypage.setColors('#fff','#007bb9');

        var fanfare = new Howl({
            src: ["/audio/fanfare.mp3"],
            volume: 0.1,
        });
    
        $("form").submit(function(e) {
            e.preventDefault();

            var $form = $(this),
                name = $form.find('input[name="user name"]').val(),
                email = $form.find('input[type="email"]').val(),
                interest = $form.find('select option:selected').text();
            $.post($form.attr("action"), $form.serialize()).then(function() {
                $form.html('<div class="thanks"><h2>Thanks for hitting me up, <span class="name">'+ name +'</span>.<br/><br/></h2><p>I should be getting a note from your email ('+ email +') about the option you selected: '+ interest +'.</p><p>I usually get back to these messages within 24 hours. Looking forward to talking to ya soon!</p><p>Best,<br/> Rob</p></div><section class="confetti-container"> <div class="confetti"></div><div class="confetti"></div><div class="confetti"></div><div class="confetti"></div><div class="confetti"></div><div class="confetti"></div><div class="confetti"></div><div class="confetti"></div><div class="confetti"></div><div class="confetti"></div><div class="confetti"></div><div class="confetti"></div><div class="confetti"></div><div class="confetti"></div><div class="confetti"></div><div class="confetti"></div><div class="confetti"></div><div class="confetti"></div><div class="confetti"></div><div class="confetti"></div></section>');
                fanfare.play();
            });
        });
    },
    destroyed(){
        everypage.setColors('#fff','#333');
    }
}
</script>