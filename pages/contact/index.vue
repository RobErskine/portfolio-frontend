<template>
    <div class="panel has-content" data-x-pos="0" data-y-pos="0">
        <HamburgerMenu />
        <sectionHeader post-title="Contact" class-name="contact" canvas="./animations/contactcanvas"></sectionHeader>
        <section class="block copy">
            <p><strong>I'd love to hear from you!</strong> I'm interested in freelance work, new opportunities, and friendship.</p>
            <p><strong>If you're interested in my code</strong>, you can find me on <a href="https://github.com/roberskine" target="_blank">GitHub</a>, <a href="https://codepen.io/roberskine" target="_blank">Codepen</a>, <a href="https://glitch.com/@RobErskine" target="_blank">Glitch</a>, and <a href="https://stackoverflow.com/users/1047958/rob-erskine" target="_blank">StackOverflow</a>.</p>
            <p><strong>If you're interested in me personally</strong>, you can connect with me on <a href="https://linkedin.com/in/roberskine" target="_blank">LinkedIn</a>, <a href="https://twitter.com/erskinerob">Twitter</a>, and <a href="https://open.spotify.com/user/roberskine" target="_blank">Spotify</a>.</p>
            <br/>
            <br/>
            <form name="contact" method="POST" data-netlify="true">
                <div class="req">
                    <p>Feel free to send me a note below. <br/><br/>*All of these fields are required.</p>
                    <label>
                        <span>Your name*:</span>
                        <input type="text" name="user name"/>
                    </label>
                    <label>
                        <span>Your email*:</span>
                        <input type="email" name="user email"/>
                    </label>
                    <label>
                        <span>Your interest*:</span>
                        <div class="select-wrapper">
                            <select name="interest">
                                <option value="just sayin' hey">Just sayin’ hey</option>
                                <option value="freelance work">Freelance work</option>
                                <option value="new opportunities">New opportunities</option>
                                <option value="friendship">Friendship :)</option>
                            </select>
                        </div>
                    </label>
                    <label>
                        <span>Your message*:</span>
                        <textarea name="message" rows="3"></textarea>
                    </label>
                </div>
                <div class="madlib">
                    <p>These are totally optional, but fill out the below to get a <em>100% free MadLib:</em></p>
                    <label>
                        <span>Random noun:</span>
                        <input type="text" name="random noun" placeholder="cookie"/>
                    </label>
                    <label>
                        <span>Random verb:</span>
                        <input type="text" name="random verb" placeholder="repair"/>
                    </label>
                    <label>
                        <span>Random adjective 1:</span>
                        <input type="text" name="random adjective 1" placeholder="alive"/>
                    </label>
                    <label>
                        <span>Random adjective 2:</span>
                        <input type="text" name="random adjective 2" placeholder="lazy"/>
                    </label>
                </div>
                <button type="submit">Fire away! <span><small>(to my inbox)</small></span></button>
            </form>
        </section>
    </div>
</template>

<style lang="scss">
    section.block{
        padding:2em 1em;
        &.copy{
            max-width:800px;
            margin:0 auto;
            p{
                margin-bottom:1em;
                line-height:1.375;
            }
        }
    }

    @media all and (min-width:600px){
        section.block{
            padding:4vw 1em;
        }
    }

    form{
        div > p{
            font-size:1.2em;
        }
        label,span{
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
            padding:0.5em 1em;
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

export default {
    components: {
        HamburgerMenu,
        sectionHeader
    }    
}
if(process.client){
    $("a[href^='http']").each(function() {
        $(this).css({
            background: "url(https://www.google.com/s2/favicons?domain=" + this.hostname + ") left center no-repeat",
            "padding-left": "20px"
        });    
    });

    $("form").submit(function(e) {
        e.preventDefault();

        var $form = $(this);
        $.post($form.attr("action"), $form.serialize()).then(function() {
            alert("Thank you!");
        });
    });
}
</script>