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
        background: url(http://202.207.208.171/publish/bkzsv2/images/2019-07/56dc5cfed5a34725b533d051258627d7.jpg) fixed;
        background-size: 100% ;
    }

</style>
