<template>
    <div id="prepareSXU">
        <div id="mostTop">

        </div>
        <!-- 物品准备 -->
        <div id="Goods">
            <div v-html="showText01" class="text" id="Goods-text"></div>
            <div class="img" id="Goods-img"></div>
        </div> 
        <!-- 报到流程 -->
        <div id="Process">
            <div v-html="showText02" class="text" id="Process-text"></div>
            <div class="img" id="Process-img"></div>
        </div>
        <!-- 到校方式 -->
        <div id="Way">
            <div v-html="showText03" class="text" id="Way-text"></div>
            <div class="img" id="Way-img"></div>
        </div>
       <!-- 军训小贴士 -->
        <div id="Train">
            <div v-html="showText04" class="text" id="Train-text"></div>
            <div class="img" id="Train-img">
                <button id="toNext" v-on:click="startReading()">
                    <span>
                        校内生活
                    </span>
                    <span>
                        <Icon type="ios-arrow-forward" />
                    </span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
const markdown = require( "markdown" ).markdown;
const EventBus = require("eventbusjs");
import 物品准备 from '../doc/入学准备/物品准备';
import 报到流程 from '../doc/入学准备/报到流程';
import 到校方式 from '../doc/入学准备/到校方式';
import 军训小贴士 from '../doc/入学准备/军训小贴士';

export default {
    data() {
      return {
          showText01: '',
          showText02: '',
          showText03: '',
          showText04: '',
          showText05: '',
      }  
    },
    beforeMount() {
        this.showText01 = markdown.toHTML(物品准备);
        this.showText02 = markdown.toHTML(报到流程);
        this.showText03 = markdown.toHTML(到校方式);
        this.showText04 = markdown.toHTML(军训小贴士);
        document.title = '山西大学新生手册-入学准备';
    },
    methods: {
        startReading() {
            this.$router.push("/校内生活");
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }

    }
}
</script>

<style>
    #prepareSXU {
        width: calc(100vw - 70px);
        margin-left: 70px;
        position: absolute;
        top: 0;
    }

    #mostTop{
        height: 68px;
        background-color: #099;
    }

    #Train{
        position: relative;
    }

    #Way {
        position: relative;
    }

    #Process{
        position: relative;
    }

    #Goods{
        position: relative;
    }

    #Way-text {
        padding-top: 40px;
        padding-bottom: 40px;
        min-height: 600px;
    }

    #Way-img {
        background-image: url(http://202.207.208.171/publish/bkzsv2/images/2019-07/cddb0207a02e4f7dadf0c8d2ea28b69b.jpg); 
    }

    #Process-text {
        padding-top: 40px;
        padding-bottom: 40px;
        min-height: 600px;
    }
    #Process-img {
        background-image: url(http://202.207.208.171/publish/bkzsv2/images/2019-07/da6fbf0a34ef419c8bd53576e8e6a33e.jpg);        
    }

    #Goods-text{
        padding-top: 40px;
        padding-bottom: 40px;
        min-height: 600px;
    }

    #Goods-img{
        background-image: url(http://202.207.208.171/publish/bkzsv2/images/2019-07/d88f160d4fa045b6be772e0293b8e6b0.png);
    }

    #Train-text{
        padding-top: 40px;
        padding-bottom: 40px;
        min-height: 600px;
    }

    #Train-img{
        background-image: url(http://202.207.208.171/publish/bkzsv2/images/2019-07/f1f5fb623bfd4bcfa0c1d3646eb6bf89.jpg);
        
    }

    #Goods::before{
        content: '物品准备';
        position: absolute;
        top:-53px;
        color: #099;
        font-size: 25px;
        width: 140px;
        height: 53px;
        background: #fff;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        text-align: center;
        line-height: 53px;
        right: 10vw;
    }

    #Process::before{
        content: '报到流程';
        position: absolute;
        top:-53px;
        color: #099;
        font-size: 25px;
        width: 140px;
        height: 53px;
        background: #fff;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        text-align: center;
        line-height: 53px;
        right: 10vw;
    }

    #Way::before{
        content: '到校方式';
        position: absolute;
        top:-53px;
        color: #099;
        font-size: 25px;
        width: 140px;
        height: 53px;
        background: #fff;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        text-align: center;
        line-height: 53px;
        right: 10vw;
    }

    #Train::before{
        content: '军训小贴士';
        position: absolute;
        top:-53px;
        color: #099;
        font-size: 25px;
        width: 140px;
        height: 53px;
        background: #fff;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        text-align: center;
        line-height: 53px;
        right: 10vw;
    }

#QQ::before{
        content: '新生群';
        position: absolute;
        top:-53px;
        color: #099;
        font-size: 25px;
        width: 140px;
        height: 53px;
        background: #fff;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        text-align: center;
        line-height: 53px;
        right: 10vw;
    }

    .img {
        height: 700px;
        width: 100%;
        background: fixed no-repeat;
        background-size: calc(100vw - 10px);
        background-position:100% 100%;
    }
    .text {
        width: 92%;
        display: block;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 19px;
        line-height: 30px;
        letter-spacing: 1px;
        margin-top:10px;
        margin-bottom: 10px;
        margin-left: 3%;      
    }
 
     #toNext{
        width: 208px;
        height: 70px;
        background: rgba(0, 0, 0, 0);
        color: #fff;
        border: #000;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 30px;
        position: absolute;
        right: 60px;
        bottom: 30px;
    }

    #toNext:hover{
        transform: scale(1.1) translateX(20px);
        transition: all .5s;
        cursor: pointer;
        border: #fff solid 2px;
    }

   p{
        text-indent: 2em;
        line-height: 32px;
        margin: 19px 0 !important;
    }

    h4 {
        margin-top: 50px;
        margin-bottom: 10px;
    }

    h5 {
        font-size: 18px;
        margin-top: 8px;
        margin-bottom: 5px;
    }
   
</style>