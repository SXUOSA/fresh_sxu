<template>
    <div id="OtherSXU">
        <div id="mostTop">

        </div>
        <!-- 校园地图 -->
        <div id="Map">
            <div v-html="showText01" class="text" id="Map-text"></div>

            <img src="../assets/map.jpg">

            <div class="img" id="Map-img"></div>
        </div>
        <!-- 自我提升 -->
        <div id="SelfImprovement">
            <div v-html="showText02" class="text" id="SelfImprovement-text"></div>
            <p class="text">
                详请参考山西大学官网vpn使用指南: <a href="http://its.sxu.edu.cn/cjwt/rdwtjd/58216.htm" target="_blank">http://its.sxu.edu.cn/cjwt/rdwtjd/58216.htm</a>
            </p>
            <div class="img" id="SelfImprovement-img"></div>
        </div>
        <!-- 学习建议 -->
        <div id="Suggestion">
            <div v-html="showText03" class="text" id="Suggestion-text"></div>
            <p class="text">
                <a href="https://www.zhihu.com/question/281895917/answer/588128474" target="_blank">有什么好的建议给即将上大学的学生？ - 巴啦啦的回答 - 知乎</a>
            </p>
            <p class="text">    
                <a href="https://www.zhihu.com/question/281895917/answer/484100307" target="_blank">有什么好的建议给即将上大学的学生？ - 李情画的回答 - 知乎</a>
            </p>
            <div class="img" id="Suggestion-img">
                <button id="toNext" v-on:click="startReading()">
                    <span>
                        关于我们
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
import 校园地图 from '../doc/其他信息/校园地图'
import 自我提升 from '../doc/其他信息/自我提升'
import 学习建议 from '../doc/其他信息/学习建议'
export default {
    data() {
        return {
            showText01: '',
            showText02: '',
            showText03: '',
        }
    },
    beforeMount() {
        this.showText01 = markdown.toHTML(校园地图);
        this.showText02 = markdown.toHTML(自我提升);
        this.showText03 = markdown.toHTML(学习建议);
    },
    methods: {
        startReading() {
            this.$router.push("/关于我们");
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
    }
}
</script>

<style>
    #OtherSXU {
        width: calc(100vw - 70px);
        margin-left: 70px;
        position: absolute;
        top: 0;
    }
    #mostTop{
        height: 68px;
        background-color: #099;
    }

    #Map {
        position: relative;
    }

    #SelfImprovement {
        position: relative;
    }

    #Suggestion{
        position: relative;
    }

    #Map-text{

    }
    #Map img{
    height: 900px;
    width: 97%;
    margin : 10px 10px 15px 15px;
    background: url(/static/img/home.4568f8f.jpg) fixed no-repeat;
    background-size: calc(100vw - 10px);
    }
    #Map-img{
        background-image: url(../assets/过渡/其他信息/XNDT.jpg);
    }

    #SelfImprovement-text {

    }

    #SelfImprovement-img {
        background-image: url(../assets/过渡/其他信息/ZWTS.jpg);
    }

    #Suggestion-text {

    }

    #Suggestion-img {
        background-image: url(../assets/过渡/其他信息/XXJY.jpg);
    }

    #Map::before{
        content: '校园地图';
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

    #SelfImprovement::before{
        content: '自我提升';
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

    #Suggestion::before{
        content: '学习经验';
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
        background: url(../assets/home.jpg) fixed no-repeat;
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

    #SelfImprovement a {
        color: #6699cc;
    }

    #SelfImprovement a:hover {
        color: blue;
    }

    #Suggestion a {
        color: #6699cc;
    }

    #Suggestion a:hover {
        color: blue;
    }
    p{
        text-indent: 2em;
        line-height: 2em;
    }
</style>