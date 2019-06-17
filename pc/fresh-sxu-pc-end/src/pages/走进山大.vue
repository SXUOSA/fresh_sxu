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
            <div v-html="showText02" class="text" id="WuC-text"></div>
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
        background-image: url(../assets/过渡/走进山大/百年山大.jpg);
    }

    #WuC-img {
        background-image: url(../assets/过渡/走进山大/坞城篇.jpg);
    }

    #WuC-text {

    }

    #DDG-img {
        background-image: url(../assets/过渡/走进山大/大东关篇.jpg);
    }

    #DDG-text {

    }

    #DS-img {
        background-image: url(../assets/过渡/走进山大/东山篇.jpg);
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