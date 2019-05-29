<template>
    <div class="fresh-sxu-left-nav__wrap">
        <div v-for="item in navs">
            <button v-on:click="goto(item.path)">{{item.name}}</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            navs: [{
                name: 'abc',
                path: '/abc'
            }, {
                name: 'home',
                path: '/'
            }, {
                name: '404',
                path: '/404'
            }]
        }
    },
    
    methods: {
        goto: function(path) {
            this.$router.push(path);
        }
    }
}
</script>

<style>
    .fresh-sxu-left-nav__wrap {
        width: 300px;
        height: 100%;    
        position: fixed;
    }
</style>


