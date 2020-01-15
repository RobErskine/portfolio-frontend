<template>
    <div class="panel has-content detail" data-x-pos="0" data-y-pos="0">
        <sectionHeader post-title="Contact" class-name="contact" canvas="./animations/contactcanvas"></sectionHeader>
        <section class="block copy">
            <div class="slim-block">
                <p><strong>I'd love to hear from you!</strong> I'm interested in freelance work, new opportunities, and friendship.</p>
                <p><strong>If you're interested in my code</strong>, you can find me on <a href="https://github.com/roberskine" target="_blank">GitHub</a>, <a href="https://codepen.io/roberskine" target="_blank">Codepen</a>, <a href="https://glitch.com/@RobErskine" target="_blank">Glitch</a>, and <a href="https://stackoverflow.com/users/1047958/rob-erskine" target="_blank">StackOverflow</a>.</p>
                <p><strong>If you're interested in me personally</strong>, you can connect with me on <a href="https://linkedin.com/in/roberskine" target="_blank">LinkedIn</a>, <a href="https://twitter.com/erskinerob">Twitter</a>, and <a href="https://open.spotify.com/user/roberskine" target="_blank">Spotify</a>.</p>
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
        &:before{
            content:"";
            display:block;
            height:1px;
            width:100%;
            background-color:darken($light,15%);
            transform:rotate($rotate) translateY(-3em);
        }
        padding-top:3em;
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
        }
        input,div.select-wrapper,textarea{
            border:2px solid darken($light,15%);
            width:100%;
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
</style>

<script>
import sectionHeader from '~/components/SectionHeader.vue'
import HamburgerMenu from '~/components/HamburgerMenu.vue'
import Footer from '~/components/Footer.vue'

import everypage from '~/mixins/everypage'

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
        Footer
    },
    mixins: [everypage],
    mounted: function(){
        everypage.externalLinks();
    
        $("form").submit(function(e) {
            e.preventDefault();

            var $form = $(this),
                name = $form.find('input[name="user name"]').val(),
                email = $form.find('input[type="email"]').val(),
                interest = $form.find('select option:selected').text();
            $.post($form.attr("action"), $form.serialize()).then(function() {
                $form.html('<div class="thanks"><h2>Thanks for hitting me up, <span class="name">'+ name +'</span>.<br/><br/></h2><p>I should be getting a note from your email ('+ email +') about the option you selected: '+ interest +'.</p><p>I usually get back to these messages within 24 hours. Looking forward to talking to ya soon!</p><p>Best,<br/> Rob</p></div>');
            });
        });
    }
}
</script>