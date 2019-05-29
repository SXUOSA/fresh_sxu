<template>
    <transition name="fade">
        <div id="fresh-sxu-home__wrap">
            <div id="fresh-sxu-home__title">
                <div id="fresh-sxu-home__big-title">
                    <div id="fresh-sxu-home__big-title--left">
                        <h1>山西大学</h1>
                    </div>
                    <div id="fresh-sxu-home__big-title--right">
                        <h1>迎新网</h1>
                    </div>
                </div>
                <div id="fresh-sxu-home__div"></div>
                <div id="fresh-sxu-home__small-title">
                    <h2>叮咚！在校生存指南已到，请注意查收 || 2019</h2>
                </div>
            </div>
            <div id="fesh-sxu-home__read">
                <span>开始阅读</span>
                <button v-on:click="startReading">></button>
            </div>
        </div>    
    </transition>
</template>

<script>
export default {
    data () {
        return {

        }
    },

    methods: {
        startReading() {
            this.$router.push("/nav");
        }
    }
}
</script>

<style>
    #fresh-sxu-home__wrap {
        height: 100%;
        width: 100%;
        background: url(../assets/home1.jpg);
        background-size: cover; 
        color: white;   
    }

    #fresh-sxu-home__big-title--left, #fresh-sxu-home__big-title--right {
        display: inline-block;
    }

    #fresh-sxu-home__big-title {
        text-align: center;
        /* padding-top: 30%; */
    }

    #fresh-sxu-home__title {
        padding-top: 10%;
        text-align: center;
    }

    #fresh-sxu-home__div {
        height: 1px;
        width: 30%;
        background: white;
        margin: 0 auto;
    }

    #fesh-sxu-home__read {
        margin-top: 200px;
        margin-right: 100px;
        float: right;
    }

    #fesh-sxu-home__read button{
        width: 50px;
        height: 50px;
        font-size: 20px;
        background-color: rgba(0, 0, 0, 0.8);
        border: none;
        color: white;
    }

    #fesh-sxu-home__read button:hover {
        transform: scale(1.1) translateX(20px);
        transition: all .5s;
        cursor: pointer;
    }

    .fade-enter-active, .fade-leave-active {
       transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>


