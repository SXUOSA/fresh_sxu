<template>
    <div id="LifeOutsideSXU">
        <div id="mostTop">

        </div>
        <!-- 周边商圈-->
        <div id="Business">
            <div v-html="showText01" class="text" id="Business-text"></div>
            <div class="img" id="Business-img"></div>
        </div>
        <!-- 风景名胜 -->
        <div id="Scenery">
             <p class="text" id="Scenery-text" >
                太原旅游景点大全：
                <a href="https://taiyuan.cncn.com/jingdian/" target="_blank">https://taiyuan.cncn.com/jingdian/</a>
             </p>
             <p class="text" id="Scenery-text">
                山西旅游景点大全：
                <a href="https://shanxi.cncn.com/jingdian/" target="_blank">https://shanxi.cncn.com/jingdian/</a>
            </p>
        <div v-html="showText02" class="text" id="Scenery-text"></div>
                <div class="img" id="Scenery-img"></div>
        </div>
        <!-- 服务网点 -->
        <div id="ServiceNet">
            <div v-html="showText03" class="text" id="ServiceNet-text"></div>
            <div class="img" id="ServiceNet-img">
                <button id="toNext" v-on:click="startReading()">
                    <span>
                        其他信息
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
import 周边商圈 from '../doc/校外生活/周边商圈'
import 风景名胜 from '../doc/校外生活/风景名胜'
import 服务网点 from '../doc/校外生活/服务网点'
export default {
    data() {
        return {
            showText01: '',
            showText02: '',
            showText03: '',
        }
    },
    beforeMount() {
        this.showText01 = markdown.toHTML(周边商圈);
        this.showText02 = markdown.toHTML(风景名胜);
        this.showText03 = markdown.toHTML(服务网点);
        document.title = '山西大学新生手册-校外生活';
    },
    methods: {
        startReading() {
            this.$router.push("/其他信息");
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
    }
}
</script>

<style>
    #LifeOutsideSXU {
    width: calc(100vw - 70px);
    margin-left: 70px;
    position: absolute;
    top: 0;
    }

    #mostTop{
        height: 68px;
        background-color: #099;
    }

    #Business {
        position: relative;
    }

    #Scenery {
        position: relative;
    }

    #ServiceNet{
        position: relative;
    }

    #Business-text {
        padding-top: 40px;
        padding-bottom: 40px;
        min-height: 600px;
    }

    #Business-img {
        background-image: url(http://202.207.208.171/publish/bkzsv2/images/2019-07/12a1c1d5b5684c9d8c204acfc7705707.jpg);
    }

    #Scenery-text {
        padding-top: 40px;
        padding-bottom: 40px;
    }

    #Scenery-img {
        background-image: url(http://202.207.208.171/publish/bkzsv2/images/2019-07/c38dd82d48374d23960bc1c409fa2d63.jpg);                
    }

    #ServiceNet-text{
        padding-top: 40px;
        padding-bottom: 40px;
        min-height: 600px;
    }

    #ServiceNet-img{
        background-image: url(http://202.207.208.171/publish/bkzsv2/images/2019-07/df11d837bde64a9a99bed190f78432a6.jpg);
    }

    #Business::before{
        content: '周边商圈';
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

    #Scenery::before{
        content: '风景名胜';
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
    #Scenery a{
        cursor: pointer;
        clear: both;
        position: relative;
        color: #6699cc;
    }

    #ServiceNet::before{
        content: '服务网点';
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

</style>