<template>
    <div class="panel has-content" data-x-pos="-1" data-y-pos="0">
        <HamburgerMenu />

        <sectionHeader post-title="About Me" class-name="about" canvas="./animations/aboutcanvas"></sectionHeader>
        <div class="about-page">
            <section class="block copy">
                <div class="block block-width">
                    <p>Rob forced a bot to analyze over 100,000 lines of <a href="https://github.com/roberskine">his code on Github</a>, as well as all of his <a href="https://twitter.com/erskinerob" target="_blank" rel="noreferrer noopener">tweets on Twitter</a>, and this is what it came up with:</p>
                    <p>Rob forced a bot to analyze over 100,000 lines of his code on Github, as well as all of his tweets on Twitter, and this is what it came up with:</p>
                    <pre>
                    <span class="noun">ROB</span> is a <span class="noun">HUMAN CREATIVE TECHNOLOGIST</span> who comes up with creative in HTML, CSS, JAVASCRIPT, PHP and NODE. <span class="noun">ROB</span> has worked on campaigns for the <a href="https://www.hhcc.com/work/american-lung-association-ad-council/saved-by-the-scan">AMERICAN LUNG ASSOCIATION</a>, <a href="https://www.hhcc.com/work/bank-of-america">BANK OF AMERICA</a>, BRIGHAM AND WOMEN’S HOSPITAL, DUNKIN DONUTS, FRONTIER COMMUNICATIONS, <a href="https://www.hhcc.com/work/johnson-johnson">JOHNSON & JOHNSON</a>, LIBERTY MUTUAL, <a href="https://www.hhcc.com/work/novartis">NOVARTIS</a>, <a href="https://www.hhcc.com/work/party-city">PARTY CITY</a>,  <a href="https://www.hhcc.com/work/planet-fitness">PLANET FITNESS</a>, and <a href="https://www.hhcc.com/work/tempur-sealy">TEMPUR+SEALY</a>. <br/>
                    He also deeply <span class="verb">CARES</span> about <a href="https://www.hhcc.com/accessibility">ACCESSIBILITY</a>, <a href="https://codepen.io/hhcc/post/better-search">PERFORMANCE</a>, <a href="https://www.hhcc.com/performance-optimization-schedule">ANALYTICS</a>, <a href="https://www.instagram.com/p/BOa7-VPAIA4/">SHIBA INU PUPPIES</a>, and <a href="https://twitter.com/ErskineRob/status/1093284461851095041">BRANDS PRETENDING TO EXHIBIT HUMAN EMOTIONS ON SOCIAL MEDIA</a>.
                    <span class="noun">ROB</span>’s skills INCLUDE CREATIVE DESIGN and DEVELOPMENT, USER INTERFACE/EXPERIENCE, MEASUREMENT, <a href="https://www.americaninno.com/boston/how-to-get-out-of-a-bad-date-baebot-automated-text-response/">HAPHAZARDLY CREATING MY EXISTENCE</a>, and what I would call “<a href="http://lmgtfy.com/?q=rob+erskine+is+super+cool">BEING REALLY GOOD AT USING GOOGLE</a>”. Based on <span class="noun">HIS</span> code <span class="noun">HIS</span> favorite <span class="noun">DEBUG</span> method is <span class="verb">console.log(‘why the f won’t tHIS WORK’);</span>. <span class="noun">HE</span> claims he can cook because he <span class="verb">STUDIED</span> at <a href="http://blogs.jwu.edu/engineering/insiders-tips-from-engineering-and-design-alums-">JOHNSON & WALES UNIVERSITY</a> but he really <a href="https://www.instagram.com/p/oeSWlHpWW4/">CAN NOT</a>, but he did learn all about ADVERTISING, DESIGN, and MARKETING while there though.
                    <span class="noun">ROB</span> has also been <span class="verb">AWARDED</span> some <span class="adjective">SUPERFICIAL HUMAN “AWARDS”</span> including, a <span class="adjective">FEATURE</span> in <a href="https://www.commarts.com/project/24657/senator-for-the-day">COMMUNICATION ARTS for his work on SENATOR FOR A DAY</a>, as well as numerous <span class="noun">MITX INTERACTIVE</span> and <span class="noun">AD CLUB HATCH ADVERTISING BOWLS</span>.
                    While <span class="noun">ROB</span> is not <span class="verb">WORKING</span> at <span class="noun">HILL HOLLIDAY</span>, <span class="noun">HE</span> <span class="verb">SERVES</span> on the <a href="https://worldoceanschool.org">BOARD OF DIRECTORS for WORLD OCEAN SCHOOL</a>, a non-profit that supports at-risk youth aboard a 100yr <span class="adjective">OLD</span> schooner in Boston and St. Croix. <span class="noun">HE</span> also <span class="adjective">SUPPORTS</span> <a href="https://github.com/roberksine">MULTIPLE OPEN-SOURCE PROJECTS</a>, some of which have over <a href="https://packagist.org/packages/hillholliday/craft-user-manual">2,000 INSTALLS</a>. <span class="noun">ROB</span> wants to <span class="verb">PUSH</span> the <span class="noun">BOUNDARIES</span> of what <span class="noun">DIGITAL</span> & <span class="noun">CREATIVE</span> can do.
                    </pre>
                    <p>
                    Rob's original professional bio can be seen below:
                    </p>
                    <p>
                    @Erskinerob is a true internet hero at Hill Holliday. He takes the title of “Creative Technologist” to the extreme with his wide range of work on APIs, chatbots and personalized websites. He’s an integral member of the digital strategy and tech innovation team, who has brought standards, accessibility, and design-at-scale to the wider team. While this Johnson & Wales graduate may be an awful cook, he’s turned his B.S. in Graphic design and Digital Media into an award-winning portfolio that consists of realtime digital billboards, multilingual content management systems, and even AAA video game titles. Rob works on every client under the sun, from the City of Boston, to Chili’s, Necco, LG, John Hancock, Invokana, and Bank of America.
                        </p>            
                </div>
            </section>
            <div class="about-me">
                <figure>
                    <img src="~/assets/images/rob-erskine-is-cute.png" alt="Wow Rob Erskine is cute." class="foreground">
                    <img src="~/assets/images/fenway-park.jpg" alt="" class="background">
                </figure>
                <figcaption>
                    <span>Me, having the best time, watching the Boston Red Sox lose. (I am a hardcore Philadelhpia Phillies phan)</span>
                </figcaption>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
section.block{
    padding:4vw 2em;
}

div.block-width{
    max-width: 1200px;
    margin:0 auto;
}

figure{
    border-radius:1.5em 3em;
    overflow:hidden;
}

pre{
    white-space:pre-line;
}

p,pre{
    margin-bottom:1.2em;
    font-size:1.5em;
    line-height:1.375;
}

p,pre{
    a{
        color:inherit;
        text-decoration:none;
        background-size:  100% 15%;
        background-repeat: repeat-x;
        background-position: left 0% bottom 5%;
        background-image: linear-gradient(90deg, $primary 0%, $secondary 50%);
        transition:all 0.25s ease-in-out;
        overflow:visible;
        &:hover{
            background-size:  120% 100%;
            color:#fff;
        }
    }
}

div.about-me{
    background-size:cover;
    overflow:visible;
    padding:1.5em 3em;
    position:relative;
    max-width:40%;
    width:100%;
    float:right;
    transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
    transform: perspective(300px); 
    -webkit-perspective: 300;
    border-radius:1.5em 3em;
    &:after{
        content:"";
        display:block;
        padding-top:133.375%;
    }
    img{
        position:absolute;
        bottom:0px;
        right:0px;
        width:100%;
    }
    img.background{
        top:0px;
        left:0px;
        z-index:1;
        border-radius:1.5em 3em;
    }
    img.foreground{
        width:90%;
        z-index:2;
        transform: translateZ(80px) translateY(15px) translateX(-25px) scale(0.625);
        border-radius:1.5em 3em;
    }
}
</style>

<script>
// components
import sectionHeader from '~/components/SectionHeader.vue'
import HamburgerMenu from '~/components/HamburgerMenu.vue'

// query
import posts from '~/queries/work/getWork.gql';

export default {
    components: {
        HamburgerMenu,
        sectionHeader,
    },
    apollo: {
        entries: {
            query: posts,
            variables: {
                "section": "work",
                "orderBy": "postdate Desc",
                "relatedTo": 25
            }
        }
    }
}

if(process.client){
    $('div.about-me').each(function(){
        $(this).tilt({
            maxTilt: 10
        });
    });
}
</script>