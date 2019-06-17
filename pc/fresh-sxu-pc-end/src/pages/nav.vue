<template>
    <div id="navRoot">
        <router-view></router-view>        

            
            <LeftNav></LeftNav>


    </div>
    
</template>

<script>

import LeftNav from '../components/leftNav2'
export default {
    components:{
        'LeftNav':LeftNav,
    }
}
</script>

<style>
    #navRoot{
        height: 100%;
        background: url(../assets/home1.jpg) fixed;
        background-size: 100% ;
    }

</style>
