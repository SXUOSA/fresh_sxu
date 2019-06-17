<template>
    <div id="LifeInsideSXU">
        <div id="mostTop">

        </div>
        <!-- 住在山大 -->
        <div id="LivingInSXU">
            <div v-html="showText01" class="text" id="LivingInSXU-text"> </div>
            <div class="img" id="LivingInSXU-img"></div>
        </div>
        <!-- 吃在山大 -->
        <div id="EatInSXU">
            <div v-html="showText02" class="text" id="EatInSXU-text"></div>
            <div class="img" id="EatInSXU-img"></div>
        </div>
        <!-- 学生组织 -->
        <div id="Organization">
            <div v-html="showText03" class="text" id="Organization-text"></div>
            <div class="img" id="Organization-img"></div>
        </div>
        <!-- 多彩社团 -->
        <div id="Association">
            <div v-html="showText04" class="text" id="Association-text"></div>
            <div class="img" id="Association-img"></div>
        </div>
        <!-- 大型活动 -->
        <div id="Activity">
            <div v-html="showText05" class="text" id="Activity-text"></div>
            <div class="img" id="Activity-img"></div>
        </div>
        <!-- 便利生活 -->
        <div id="ConvenienceOfLive">
            <div v-html="showText06" class="text" id="ConvenienceOfLive-text"></div>
            <div class="img" id="ConvenienceOfLive-img">
                <button id="toNext" v-on:click="startReading()">
                    <span>
                        校外生活
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
import 住在山大 from '../doc/校内生活/住在山大'
import 吃在山大 from '../doc/校内生活/吃在山大'
import 学生组织 from '../doc/校内生活/学生组织'
import 多彩社团 from '../doc/校内生活/多彩社团'
import 大型活动 from '../doc/校内生活/大型活动'
import 便利生活 from '../doc/校内生活/便利生活'
export default {
    data() {
        return {
            showText01: '',
            showText02: '',
            showText03: '',
            showText04: '',
            showText05: '',
            showText06: '',
        }
    },
    beforeMount() {
        this.showText01 = markdown.toHTML(住在山大);
        this.showText02 = markdown.toHTML(吃在山大);
        this.showText03 = markdown.toHTML(学生组织);
        this.showText04 = markdown.toHTML(多彩社团);
        this.showText05 = markdown.toHTML(大型活动);
        this.showText06 = markdown.toHTML(便利生活);
    },
    methods: {
        startReading() {
            this.$router.push("/校外生活");
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
    }
}
</script>

<style>
    #LifeInsideSXU {
        width: calc(100vw - 70px);
        margin-left: 70px;
        position: absolute;
        top: 0;
    }

    #mostTop{
        height: 68px;
        background-color: #099;
    }

    #LivingInSXU {
        position: relative;
    }

    #EatInSXU{
        position: relative;
    }

    #Organization{
        position: relative;
    }

    #Association{
        position: relative;
    }

    #Activity{
        position: relative;
    }

    #ConvenienceOfLive{
        position: relative;
    }

    #LivingInSXU-text {

    }
    #LivingInSXU-img {
        background-image: url(../assets/过渡/校内生活/ZZSD.png); 
    }

    #EatInSXU-text {

    }

    #EatInSXU-img {
        background-image: url(../assets/过渡/校内生活/CZSD.jpg);         
    }

    #Organization-text{

    }

    #Organization-img{
        background-image: url(../assets/过渡/校内生活/XSZZ.jpg); 
    }

    #Association-text{

    }

    #Association-img{
        background-image: url(../assets/过渡/校内生活/DCST.jpg); 
    }

    #Activity-text{
    }

    #Activity-img{
        background-image: url(../assets/过渡/校内生活/DXHD.jpg); 

    }

    #ConvenienceOfLive-text{

    }

    #ConvenienceOfLive-img{
        background-image: url(../assets/过渡/校内生活/BLSH.jpg); 
    }

    #LivingInSXU::before{
        content: '住在山大';
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

    #EatInSXU::before{
        content: '吃在山大';
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

    #Organization::before{
        content: '学生组织';
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

    #Association::before{
        content: '多彩社团';
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

    #Activity::before{
        content: '大型活动';
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

    #ConvenienceOfLive::before{
        content: '便利生活';
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
        height: 500px;
        width: 100%;
        background: url(../assets/home.jpg) fixed no-repeat;
        background-size: calc(100vw - 10px);
        background-position:70px;
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
        float: right;
        margin-top: 415px;
        margin-right: 55px;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 30px;
    }

    #toNext:hover{
        transform: scale(1.1) translateX(20px);
        transition: all .5s;
        cursor: pointer;
        border: #fff solid 2px;
    }
    p{
        text-indent: 2em;
    }

    #LifeInsideSXU img{
        float: right;
        height: 200px;
    }

    #Association-text strong:nth-child(9) {
        margin-top: 55px;
    }

    #Organization-text strong:nth-child(1) {
        margin: 0;
    }

    #Association-text strong:nth-child(1) {
        margin: 0;
    }

    #Activity-text strong:nth-child(1) {
        margin: 0;
    }

    #ConvenienceOfLive-text strong:nth-child(1) {
        margin: 0;
    }

    #LifeInsideSXU strong{
        margin-top: 25px;
        display: block;  
    }
</style>