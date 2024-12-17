<template>
<footer class="main-footer">
    <div class="block">
        <span>&copy; {{getYear()}} Rob Erskine!</span>
        <div>
            <ul>
                <li>
                    <nuxt-link to="/">Home</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/about">About</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/colophon">Colophon</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/contact">Contact</nuxt-link>
                </li>
            </ul>
        </div>
    </div>
</footer>
</template>

<style lang="scss">
footer.main-footer{
    padding: 0 1em 5em;
    margin-top:3em;
    position:relative;
    font-size:1.2em;
    transform:rotate($rotate);
    text-align:center;
    &:before{
        content:"";
        display:block;
        width:110%;
        height:2px;
        background-color: currentColor;
        position:absolute;
        top:-1.5em;
        left:0px;
        right:0px;
    }
    div.block{
        display:flex;
        flex-direction: column;
        max-width:$max-width;
        margin:0 auto;
    }
    a{
        color:currentColor;
        margin-bottom:0.5em;
        display:block;
        text-decoration:none;
        border-bottom:1px solid transparent;
        &:hover{
            border-bottom:1px solid currentColor;
        }
    }
    span{
        margin-bottom:1em;
    }
}

@media all and (min-width: 700px){
    footer.main-footer{
        padding-bottom:0em;
        margin-top:5em;
        div.block{
            flex-direction: row;
            justify-content: space-between;
            position:relative;
            align-items:center;
            //right:-1em;
            & > div{
                right:2em;
            }
        }
        ul{
            display:flex;
            flex-direction:row;
            li{
                margin-left:1em;
                &:first-child{
                    margin-left:1px;
                }
            }
        }
    }
}
</style>

<script>
export default {
    name: "Footer",
    props: [
        
    ],
    computed: {
    },
    methods: {
        getYear() {
            return new Date().getFullYear()
        }
    }
}
</script>