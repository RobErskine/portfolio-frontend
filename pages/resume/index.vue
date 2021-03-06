<template>
    <div class="panel has-content detail" data-x-pos="0" data-y-pos="0">
        <Logo size="size-small" position="position-left"/>
        <sectionHeader post-title="Résumé" class-name="resume" canvas="./animations/resumecanvas"></sectionHeader>
        <section class="block copy resume">
            <aside class="copy">
                <div v-for="skill in entries[0].skills">
                    <h3>{{skill.skillTitle}}</h3>
                    <div v-html="skill.skillsList"></div>
                </div>
            </aside>
            <div class="meat">
                <div>
                    <h2>Experiences</h2>
                    <div v-for="experience in entries[0].experiences">
                        <h3>{{experience.resumeTitle}}</h3>
                        <time>{{experience.dateStart}} - {{experience.dateEnd}}</time>
                        <div v-html="experience.description"></div>
                    </div>
                </div>
                <div>
                    <h2>Awards</h2>
                    <div v-for="award in entries[0].awards">
                        <h3>{{award.awardTitle}}</h3>
                        <time>{{award.dateStart}}</time>
                        <div v-html="award.description"></div>
                    </div>
                </div>
                <div>
                    <h2>Passion Projects</h2>
                    <div v-for="project in entries[0].passionProjects">
                        <h3>{{project.projectTitle}}</h3>
                        <time>{{project.dateStart}}</time>
                        <div v-html="project.description"></div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
    </div>
</template>

<style lang="scss">
    section.block.resume{
        aside,div.meat{
            p{
                &:last-of-type{
                    margin-bottom:0px;
                }
            } 
        }
        div.meat{
            & > div > div{
                margin-bottom:1em;
                padding-bottom:1.5em;
                border-bottom:1px solid lighten($dark,75%);
                &:last-of-type{
                    border-bottom:0px;
                    padding-bottom:0px;
                    margin-bottom:0px;
                }
            }
            & > div{
                margin-bottom:2em;
                padding-bottom:2em;
            }
            time{
                display:block;
                padding:0.45em 0px 0.35em;
            }
            h2{
                margin-bottom:0.5em;
            }
        }
        aside{
            margin-bottom:2em;
            padding-bottom:2em;
            border-bottom:1px solid lighten($dark,70%);
            h3{
                margin-bottom:0.25em;
            }
            li{
                margin-bottom:0.25em;
            }
            display:flex;
            justify-content:space-between;
        }
    }

    @media all and (min-width: 700px){
        section.block.resume{
            display:flex;
            justify-content: space-around;
            margin:0 auto;
            aside{
                width:20%;
                border-bottom:none;
                display:block;
            }
            div.meat{
                width:75%;
                p{
                    max-width: $max-width;
                    max-width:80ch;
                }
            }
            div{
                margin-bottom:0.5em;
                padding-bottom:1em;
                border-bottom:1px solid lighten($dark,75%);
                position:relative;
                time{
                    position:absolute;
                    top:0px;
                    left:0px;
                    transform: rotate(-90deg) translateX(-40%) translateY(-250%);
                    color:lighten($dark,50%);
                    font-size:0.85em;
                }
                &:last-of-type{
                    margin-bottom:0px;
                    padding-bottom:0px;
                    border-bottom:none;
                }
            }
        }
    }
</style>

<script>
// components
import sectionHeader from '~/components/SectionHeader.vue'
import HamburgerMenu from '~/components/HamburgerMenu.vue'
import Logo from '~/components/Logo.vue'
import Footer from '~/components/Footer.vue'

// gql query
import resume from '~/queries/resume/getResume.gql';

// mixins
import everypage from '~/mixins/everypage';

export default {
    data (){
        return {
            title: 'Resume | Rob Erskine - Creative Developer',
            description: 'Resume for Rob Erskine, including advertising, marketing, user experience, design, and development work.',
            image: 'https://storage.googleapis.com/robs_portfolio/seo/resume.jpg',
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
        Logo,
        Footer
    },
    mounted () {
        everypage.externalLinks();
        everypage.setColors('#fff', '#ffd664');
    },
    destroyed (){
        everypage.setColors('#fff', '#333');
    },
    apollo: {
        entries: {
            query: resume,
            variables: {
                "section": "resume",
            }
        }
    }
}
</script>