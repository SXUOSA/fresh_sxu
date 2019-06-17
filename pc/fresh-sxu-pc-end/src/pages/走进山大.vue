<template>
  <div id="enterSXU">
        <div id="mostTop">
        </div>
        <!-- 欢迎 -->
        <div id="welcome">
            
            <div v-html="showText01" class="text" id="welcome-text">
            </div>
            <div class="img" id="welcome-img"></div>
        </div>
        <!-- 坞城 -->
        <div id="WuC" >
            <div v-html="showText02" class="text" id="WuC-text"> </div>
            <p  class="text" id="WuC-text">
                <a href="http://dol.sxu.edu.cn/" target="_blank">文学院</a>
                <a href="http://xwxy.sxu.edu.cn/" target="_blank">新闻学院</a>
                <a href="http://history.sxu.edu.cn/" target="_blank">历史文化学院</a>
                <a href="http://zxxy.sxu.edu.cn/" target="_blank">哲学社会学学院</a>
                <a href="http://zzx.sxu.edu.cn/" target="_blank">政治与公共管理学院</a>
                <a href="http://wy.sxu.edu.cn/" target="_blank">外国语学院</a>
                <a href="http://jky.sxu.edu.cn/" target="_blank">教育科学学院</a>
                <a href="http://jgxy.sxu.edu.cn/" target="_blank">经济与管理学院</a>
                <a href="http://fxy.sxu.edu.cn/" target="_blank">法学院</a>
                <a href="http://cmxy.sxu.edu.cn/ " target="_blank">初民学院</a>
                <a href="http://math.sxu.edu.cn/" target="_blank">数学科学学院</a>
                <a href="http://scit.sxu.edu.cn/" target="_blank">计算机与信息技术学院</a>
                <a href="http://wdxy.sxu.edu.cn/" target="_blank">物理电子工程学院</a>
                <a href="http://hxx.sxu.edu.cn/" target="_blank">化学化工学院</a>
                <a href="http://life.sxu.edu.cn/" target="_blank">生命科学学院</a>
                <a href="http://hzy.sxu.edu.cn/" target="_blank">环境与资源学院</a>
                <a href="http://tyy.sxu.edu.cn/" target="_blank">体育学院</a>
                <a href="http://aom.sxu.edu.cn/" target="_blank">音乐学院</a>
                <a href="http://afa.sxu.edu.cn/" target="_blank">美术学院</a>
                <a href="http://hjgc.sxu.edu.cn/" target="_blank">环境工程系</a>
            </p>
           
            <div class="img" id="WuC-img"></div>
        </div>
        <!-- 大东关 -->
        <div id="DDG">
            <div v-html="showText03" class="text" id="DDG-text"></div>
            <div class="img" id="DDG-img"></div>
        </div>
        <!-- 东山 -->
        <div id="DS">
            <div v-html="showText04" class="text" id="DS-text"></div>
            <div class="img" id="DS-img">
                <button id="toNext" v-on:click="startPrepareSXU()">
                    <span>
                        入学准备
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
import 百年山大 from '../doc/走进山大/百年山大'
import 坞城篇 from '../doc/走进山大/坞城篇'
import 大东关篇 from '../doc/走进山大/大东关篇'
import 东山篇 from '../doc/走进山大/东山篇'
export default {
    data() {
      return {
          showText01: '',
          showText02: '',
          showText03: '',
          showText04: '',
      }  
    },
    beforeMount() {
        this.showText01 = markdown.toHTML(百年山大);
        this.showText02 = markdown.toHTML(坞城篇);
        this.showText03 = markdown.toHTML(大东关篇);
        this.showText04 = markdown.toHTML(东山篇);
    },
    methods: {
        startPrepareSXU() {
            this.$router.push("/入学准备");
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
    }
}
</script>

<style>
    #enterSXU {
        width: calc(100vw - 87px);
        margin-left: 70px;
        position: absolute;
        top: 0;
    }

    #mostTop{
        height: 68px;
        background-color: #099;
    }

    #welcome {
        position: relative;
    }

    #WuC {
        position: relative;
    }

    #DDG {
        position: relative;
    }

    #DS{
        position: relative;
    }

    #welcome-text{
        text-align: center;    
    
    }

    #welcome-img{
        background-image: url(../assets/过渡/走进山大/BNSD.jpg);
    }

    #WuC-img {
        background-image: url(../assets/过渡/走进山大/WCP.jpg);
    }

    #WuC-text {

    }

    #DDG-img {
        background-image: url(../assets/过渡/走进山大/DDGP.jpg);
    }

    #DDG-text {

    }

    #DS-img {
        background-image: url(../assets/过渡/走进山大/DSP.jpg);
    }

    #DS-text {

    }

    #welcome::before {
        content: '百年山大';
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
    
    #WuC::before{
        content: '坞城篇';
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

    #DDG::before{
        content: '大东关篇';
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

    #DS::before{
        content: '东山篇';
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
        cursor: default;
        position: relative;
    }

    #WuC a{
        cursor: pointer;
        display: block;
        clear: both;
        position: relative;
        color: #6699cc;
    }

    #WuC a:nth-child(odd){
        left: 15%;
    }

    #WuC a:nth-child(even){
        left: calc(60vw - 70px);
        top:-30px;
    }

    #WuC a:hover{
        color: blue;
        text-decoration: none;
    }

    #WuC p:nth-child(2) {
        margin-top: 30px;
    }
    
</style>