<template>
    <div class="img1" id="LifeOutSXUI">
        <LeftNav2/>
        <button id="toNext1" v-on:click="LifeOutSXU()">
            <span>
                校外生活
            </span>
            <span>
                <Icon type="ios-arrow-forward" />
            </span>
        </button>
    </div>
</template>
<script>
import LeftNav2 from '../../components/navLeft2'    
export default {
    components:{
        'LeftNav2':LeftNav2,
    },
    methods: {
        LifeOutSXU() {
            this.$router.push("./吃");
        }
    }
}
</script>
<style>
    #LifeOutSXUI{
        background: url(../../assets/校外生活.png);
        background-size: 100vw;
    }
    #toNext1{
        /* position: absolute; */
        width: 208px;
        height: 70px;
        /* background: rgba(0, 0, 0, 0.5); */
        background: rgba(0, 0, 0, 0);
        color: #fff;
        border: #000;
        /* top:70%;
        right:10%; */
        float: right;
        margin-top: 500px;
        margin-right: 35px;
        /* margin-top: -35px;
        margin-left: -104px; */
        font-family: Arial, Helvetica, sans-serif;
        font-size: 30px;
    }

    #toNext1:hover{
        transform: scale(1.1) translateX(20px);
        transition: all .5s;
        cursor: pointer;
        /* background: rgba(0, 0, 0, 0.6); */
        border: #fff solid 2px;
    }

    .img1 {
    height: 100vh;
    /* width: 100vw; */
    background-size: 100vw;
    background: no-repeat fixed;
    /* margin-bottom: 0px; */
    /* border: 1px solid black; */
    /* border:1px solid black; */
    /* background: url(../../assets/home.jpg) fixed no-repeat; */
    }
</style>
