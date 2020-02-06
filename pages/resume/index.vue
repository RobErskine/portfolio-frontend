<template>
    <div class="panel has-content detail" data-x-pos="0" data-y-pos="0">
        <Logo size="size-small" position="position-left"/>
        <sectionHeader post-title="Résumé" class-name="resume" canvas="./animations/resumecanvas"></sectionHeader>
        <section class="block copy resume">
            <aside>
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
    section.resume{
        aside,div.meat{
            div{
                margin-bottom:0.5em;
                padding-bottom:1em;
                border-bottom:1px solid lighten($dark,75%);
                &:last-of-type{
                    margin-bottom:0px;
                    padding-bottom:0px;
                    border-bottom:none;
                }
            }
            p{
                &:last-of-type{
                    margin-bottom:0px;
                }
            }
        }
        aside{
            margin-bottom:2em;
            padding-bottom:2em;
            border-bottom:1px solid lighten($dark,70%);
        }
    }

    @media all and (min-width: 700px){
        section.resume{
            display:flex;
            justify-content: space-around;
            margin:0 auto;
            aside{
                width:20%;
                border-bottom:none;
            }
            div.meat{
                width:75%;
                p{
                    max-width: $max-width;
                    max-width:80ch;
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
import posts from '~/queries/resume/getResume.gql';

// mixins
import everypage from '~/mixins/everypage';

export default {
    data (){
        return {
            title: 'Resume | Rob Erskine - Creative Developer',
            description: 'Resume for Rob Erskine, including advertising, marketing, user experience, design, and development work.',
            image: 'https://placehold.it/1200x630?text=TODO',
            // awards: entries[0].awards,
            // experiences: entries[0].experiences,
            // passionProjects: entries[0].passionProjects,
            // skills: entries[0].skills
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
    apollo: {
        entries: {
            query: posts,
            variables: {
                "section": "resume",
            }
        }
    },
    mounted () {
        everypage.setColors('#fff', '#ffd664');
    },
    destroyed (){
        everypage.setColors('#fff', '#333');
    }
}
</script>