<template>
    <div id="root">
        <div id="logo">

        </div>
        <div id="different">
            新生手册
        </div>
        <div id="main">
            <ul>
                <li>
                    <div @click="goToTop()">
                        <router-link to="/走进山大">
                            <div class="bigTitle" id="oneBig" @click="openSmall('#oneSmall')" name="1">
                                走进山大
                                <span class="icon">
                                    <Icon type="ios-arrow-down" v-if="isShowIconHidden1"/>
                                    <Icon type="ios-arrow-up" v-if="isShowIconSee1"/>
                                </span>
                            </div>
                        </router-link>
                    </div>
                    <ul id="oneSmall">
                        <li class="smallTitle" @click="goTo('#welcome')">百年山大</li>
                        <li class="smallTitle" @click="goTo('#WuC')">坞城篇</li>
                        <li class="smallTitle" @click="goTo('#DDG')">大东关篇</li>
                        <li class="smallTitle" @click="goTo('#DS')">东山篇</li>
                    </ul>
                </li>
                <li>
                    <div @click="goToTop()">
                        <router-link to="/入学准备">
                            <div class="bigTitle" @click="openSmall('#twoSmall')" name="2">
                                入学准备
                                <span class="icon">
                                    <Icon type="ios-arrow-down" v-if="isShowIconHidden2"/>
                                    <Icon type="ios-arrow-up" v-if="isShowIconSee2"/>
                                </span>
                            </div>
                        </router-link>
                    </div>
                    <ul id="twoSmall">
                        <li class="smallTitle" @click="goTo('#Goods')">物品准备</li>
                        <li class="smallTitle" @click="goTo('#Process')">报到流程</li>
                        <li class="smallTitle" @click="goTo('#Way')">到校方式</li>
                        <li class="smallTitle" @click="goTo('#Train')">军训小贴士</li>
                    </ul>
                </li>
                <li>
                    <div @click="goToTop()">
                        <router-link to="/校内生活">
                            <div class="bigTitle" @click="openSmall('#threeSmall')" name="3">
                                校内生活
                                <span class="icon">
                                    <Icon type="ios-arrow-down" v-if="isShowIconHidden3"/>
                                    <Icon type="ios-arrow-up" v-if="isShowIconSee3"/>
                                </span>
                            </div>
                        </router-link>
                    </div>
                    <ul id="threeSmall">
                        <li class="smallTitle" @click="goTo('#LivingInSXU')">住在山大</li>
                        <li class="smallTitle" @click="goTo('#EatInSXU')">吃在山大</li>
                        <li class="smallTitle" @click="goTo('#Organization')">学生组织</li>
                        <li class="smallTitle" @click="goTo('#Association')">多彩社团</li>
                        <li class="smallTitle" @click="goTo('#Activity')">大型活动</li>
                        <li class="smallTitle" @click="goTo('#ConvenienceOfLive')">便利生活</li>
                    </ul>
                </li>
                <li>
                    <div @click="goToTop()">
                        <router-link to="/校外生活">
                            <div class="bigTitle" @click="openSmall('#fourSmall')" name="4">
                                校外生活
                                <span class="icon">
                                    <Icon type="ios-arrow-down" v-if="isShowIconHidden4"/>
                                    <Icon type="ios-arrow-up" v-if="isShowIconSee4"/>
                                </span>
                            </div>
                        </router-link>
                    </div>
                    <ul id="fourSmall">
                        <li class="smallTitle" @click="goTo('#Business')">周边商圈</li>
                        <li class="smallTitle" @click="goTo('#Scenery')">风景名胜</li>
                        <li class="smallTitle" @click="goTo('#ServiceNet')">服务网点</li>
                    </ul>
                </li>
                <li>
                    <div @click="goToTop()">
                        <router-link to="/其他信息">
                            <div class="bigTitle" @click="openSmall('#fiveSmall')" name="5">
                                其他信息
                                <span class="icon">
                                    <Icon type="ios-arrow-down" v-if="isShowIconHidden5"/>
                                    <Icon type="ios-arrow-up" v-if="isShowIconSee5"/>
                                </span>
                            </div>
                        </router-link>
                    </div>
                    <ul id="fiveSmall">
                        <li class="smallTitle" @click="goTo('#Map')">校园地图</li>
                        <li class="smallTitle" @click="goTo('#SelfImprovement')">自我提升</li>
                        <li class="smallTitle" @click="goTo('#Suggestion')">学习建议</li>
                    </ul>
                </li>
                <li>
                    <div @click="goToTop()">
                        <router-link to="/关于我们">
                            <div class="bigTitle" name="6" @click="closeAll()">
                                关于我们
                            </div>
                        </router-link>
                    </div>
                </li>
                <li>
                    <div @click="goToTop()">
                        <router-link to="/">
                            <div class="bigTitle" name="7">
                                返回首页
                            </div>
                        </router-link>
                    </div>
                </li>
            </ul>
        </div>
    </div>

</template>

<script>
const EventBus = require('eventbusjs');
export default {
    data() {
        return {
            isShowIconHidden1:true,
            isShowIconSee1:false,
            isShowIconHidden2:true,
            isShowIconSee2:false,
            isShowIconHidden3:true,
            isShowIconSee3:false,
            isShowIconHidden4:true,
            isShowIconSee4:false,
            isShowIconHidden5:true,
            isShowIconSee5:false,
        }
    },

    mounted() {
        EventBus.addEventListener('changePage', page => {
            this.openSmall(page);
        })
    },

    methods:{
        goTo(selector) {
            
            let jump = document.querySelectorAll(selector);
            let total = jump[0].offsetTop - 68;
            let distance = document.documentElement.scrollTop || document.body.scrollTop;

            let step = total / 50
            if (total > distance) {
            smoothDown()
            } else {
            let newTotal = distance - total
            step = newTotal / 50
            smoothUp()
            }

            function smoothDown () {
            if (distance < total) {
                    distance += step
        　　　　　　　document.body.scrollTop = distance
                    document.documentElement.scrollTop = distance
                    setTimeout(smoothDown, 10)
                } else {
                    document.body.scrollTop = total
                    document.documentElement.scrollTop = total
                }
            }function smoothDown () {
            if (distance < total) {
                    distance += step
        　　　　　　　document.body.scrollTop = distance
                    document.documentElement.scrollTop = distance
                    setTimeout(smoothDown, 10)
                } else {
                    document.body.scrollTop = total
                    document.documentElement.scrollTop = total
                }
            }

            function smoothUp () {
                if (distance > total) {
                    distance -= step
        　　　　　　　document.body.scrollTop = distance
                    document.documentElement.scrollTop = distance
                    setTimeout(smoothUp, 10)
                } else {
                    document.body.scrollTop = total
                    document.documentElement.scrollTop = total
                }
            } 
        },

        openSmall(ID) {
            if (ID == '#oneSmall') {
                if (this.isShowIconHidden1) {
                    this.isShowIconHidden1 = false;
                } else {
                    this.isShowIconHidden1 = true;
                }
                if (this.isShowIconSee1) {
                    this.isShowIconSee1 = false;
                } else {
                    this.isShowIconSee1 = true;
                }
                /*
                垃圾方法
                */
                if (this.isShowIconSee2) {
                        document.querySelectorAll('#twoSmall>li').forEach(function(element){
                        element.classList.toggle('list-hover');
                    })
                }  

                if (this.isShowIconSee3) {
                        document.querySelectorAll('#threeSmall>li').forEach(function(element){
                        element.classList.toggle('list-hover');
                    })
                }

                if (this.isShowIconSee4) {
                        document.querySelectorAll('#fourSmall>li').forEach(function(element){
                        element.classList.toggle('list-hover');
                    })
                }
                if (this.isShowIconSee5) {
                        document.querySelectorAll('#fiveSmall>li').forEach(function(element){
                        element.classList.toggle('list-hover');
                    })
                }
                this.isShowIconHidden2 = true,
                this.isShowIconSee2 = false,
                this.isShowIconHidden3 = true,
                this.isShowIconSee3 = false,
                this.isShowIconHidden4 = true,
                this.isShowIconSee4 = false,
                this.isShowIconHidden5 = true,
                this.isShowIconSee5 = false       
            } else if (ID == '#twoSmall') {
                if (this.isShowIconHidden2) {
                    this.isShowIconHidden2 = false;
                } else {
                    this.isShowIconHidden2 = true;
                }
                if (this.isShowIconSee2) {
                    this.isShowIconSee2 = false;
                } else {
                    this.isShowIconSee2 = true;
                }
                /*
                垃圾方法
                */
                if (this.isShowIconSee1) {
                        document.querySelectorAll('#oneSmall>li').forEach(function(element){
                        element.classList.toggle('list-hover');
                    })
                }  

                if (this.isShowIconSee3) {
                        document.querySelectorAll('#threeSmall>li').forEach(function(element){
                        element.classList.toggle('list-hover');
                    })
                }

                if (this.isShowIconSee4) {
                        document.querySelectorAll('#fourSmall>li').forEach(function(element){
                        element.classList.toggle('list-hover');
                    })
                }
                if (this.isShowIconSee5) {
                        document.querySelectorAll('#fiveSmall>li').forEach(function(element){
                        element.classList.toggle('list-hover');
                    })
                }
                this.isShowIconHidden1 = true,
                this.isShowIconSee1 = false,
                this.isShowIconHidden3 = true,
                this.isShowIconSee3 = false,
                this.isShowIconHidden4 = true,
                this.isShowIconSee4 = false,
                this.isShowIconHidden5 = true,
                this.isShowIconSee5 = false
            } else if (ID == '#threeSmall') {
                if (this.isShowIconHidden3) {
                    this.isShowIconHidden3 = false;
                } else {
                    this.isShowIconHidden3 = true;
                }
                if (this.isShowIconSee3) {
                    this.isShowIconSee3 = false;
                } else {
                    this.isShowIconSee3 = true;
                }
                /*
                垃圾方法
                */
                if (this.isShowIconSee2) {
                        document.querySelectorAll('#twoSmall>li').forEach(function(element){
                        element.classList.toggle('list-hover');
                    })
                }  

                if (this.isShowIconSee1) {
                        document.querySelectorAll('#oneSmall>li').forEach(function(element){
                        element.classList.toggle('list-hover');
                    })
                }

                if (this.isShowIconSee4) {
                        document.querySelectorAll('#fourSmall>li').forEach(function(element){
                        element.classList.toggle('list-hover');
                    })
                }
                if (this.isShowIconSee5) {
                        document.querySelectorAll('#fiveSmall>li').forEach(function(element){
                        element.classList.toggle('list-hover');
                    })
                }
                this.isShowIconHidden1 = true,
                this.isShowIconSee1 = false,
                this.isShowIconHidden2 = true,
                this.isShowIconSee2 = false,
                this.isShowIconHidden4 = true,
                this.isShowIconSee4 = false,
                this.isShowIconHidden5 = true,
                this.isShowIconSee5 = false
            } else if (ID == '#fourSmall') {
                if (this.isShowIconHidden4) {
                    this.isShowIconHidden4 = false;
                } else {
                    this.isShowIconHidden4 = true;
                }
                if (this.isShowIconSee4) {
                    this.isShowIconSee4 = false;
                } else {
                    this.isShowIconSee4 = true;
                }
                /*
                垃圾方法
                */
                if (this.isShowIconSee2) {
                        document.querySelectorAll('#twoSmall>li').forEach(function(element){
                        element.classList.toggle('list-hover');
                    })
                }  

                if (this.isShowIconSee1) {
                        document.querySelectorAll('#oneSmall>li').forEach(function(element){
                        element.classList.toggle('list-hover');
                    })
                }

                if (this.isShowIconSee3) {
                        document.querySelectorAll('#threeSmall>li').forEach(function(element){
                        element.classList.toggle('list-hover');
                    })
                }
                if (this.isShowIconSee5) {
                        document.querySelectorAll('#fiveSmall>li').forEach(function(element){
                        element.classList.toggle('list-hover');
                    })
                }
                this.isShowIconHidden1 = true,
                this.isShowIconSee1 = false,
                this.isShowIconHidden2 = true,
                this.isShowIconSee2 = false,
                this.isShowIconHidden3 = true,
                this.isShowIconSee3 = false,
                this.isShowIconHidden5 = true,
                this.isShowIconSee5 = false
            } else if (ID == '#fiveSmall') {
                if (this.isShowIconHidden5) {
                    this.isShowIconHidden5 = false;
                } else {
                    this.isShowIconHidden5 = true;
                }
                if (this.isShowIconSee5) {
                    this.isShowIconSee5 = false;
                } else {
                    this.isShowIconSee5 = true;
                }
                /*
                垃圾方法
                */
                if (this.isShowIconSee2) {
                        document.querySelectorAll('#twoSmall>li').forEach(function(element){
                        element.classList.toggle('list-hover');
                    })
                }  

                if (this.isShowIconSee1) {
                        document.querySelectorAll('#oneSmall>li').forEach(function(element){
                        element.classList.toggle('list-hover');
                    })
                }

                if (this.isShowIconSee3) {
                        document.querySelectorAll('#threeSmall>li').forEach(function(element){
                        element.classList.toggle('list-hover');
                    })
                }
                if (this.isShowIconSee4) {
                        document.querySelectorAll('#fourSmall>li').forEach(function(element){
                        element.classList.toggle('list-hover');
                    })
                }
                this.isShowIconHidden1 = true,
                this.isShowIconSee1 = false,
                this.isShowIconHidden2 = true,
                this.isShowIconSee2 = false,
                this.isShowIconHidden3 = true,
                this.isShowIconSee3 = false,
                this.isShowIconHidden4 = true,
                this.isShowIconSee4 = false
            }
            
            document.querySelectorAll(ID + '>li').forEach(function(element){
                element.classList.toggle('list-hover');
            })
        },

        goToTop() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        },

        closeAll() {
                if (this.isShowIconSee1) {
                        document.querySelectorAll('#oneSmall>li').forEach(function(element){
                        element.classList.toggle('list-hover');
                    })
                }
                if (this.isShowIconSee2) {
                        document.querySelectorAll('#twoSmall>li').forEach(function(element){
                        element.classList.toggle('list-hover');
                    })
                }  

                if (this.isShowIconSee3) {
                        document.querySelectorAll('#threeSmall>li').forEach(function(element){
                        element.classList.toggle('list-hover');
                    })
                }

                if (this.isShowIconSee4) {
                        document.querySelectorAll('#fourSmall>li').forEach(function(element){
                        element.classList.toggle('list-hover');
                    })
                }
                if (this.isShowIconSee5) {
                        document.querySelectorAll('#fiveSmall>li').forEach(function(element){
                        element.classList.toggle('list-hover');
                    })
                }
                this.isShowIconHidden1 = true,
                this.isShowIconSee1 = false,
                this.isShowIconHidden2 = true,
                this.isShowIconSee2 = false,
                this.isShowIconHidden3 = true,
                this.isShowIconSee3 = false,
                this.isShowIconHidden4 = true,
                this.isShowIconSee4 = false,
                this.isShowIconHidden5 = true,
                this.isShowIconSee5 = false
        }

    }
}
</script>

<style>


    #root{
        height: 100%;
        position: fixed;
        background: rgba(0, 0, 0, 0.8);
        width: 70px;
        color: #f5f5f5;
        font-family: Arial, Helvetica, sans-serif;
        transition: all 0.75s;
    }

    #root:hover{
        width: 180px;
        transition: all .75s;
    }

    #root ul {
        list-style: none;
    }

    #logo{
        width: 70px;
        height: 140px;
        background: url(http://bkzs.sxu.edu.cn/images/2019-07/17e9f387cd8b4ebd95130cb0db94aab4.gif) no-repeat;
        opacity: 0;
        background-size: 57%;
        background-position: center;
    }

    #root:hover #logo{
        opacity: 1;
        width: 180px;
        transition: all 0.75s;
    }

    #main{
        opacity: 0;
        white-space: nowrap;
        overflow: hidden;
    }

    #root:hover #main{
        opacity: 1;
        transition: all .75s;
    }

    #different{
        width: 18px;
        padding: 50px 27px;
        position: absolute;
        top: 0;
        font-size: 16px;
    }

    #root:hover #different{
        opacity: 0;
        transition: all .75s;
    }

    #root a {
        color: #fff !important;
    }

    .bigTitle {
        font-size: 14px;
        padding: 10px 24px;
        font-weight: 600;
        width: 170px;
        letter-spacing: 7px;
        position: relative;
        text-align: center;
        cursor: pointer;
    }

    .bigTitle:hover {
        color: #099;
        transition: all 0.75s;
    }

    .icon {
        position: absolute;
        right: 10px;
    }

    .smallTitle {
        font-size: 14px;
        padding: 0px 24px;
        letter-spacing: 4px;
        width: 160px;
        text-align: center;
        opacity: 0;
        height: 0px;
        line-height: 31px;
        overflow: hidden;
        transition: all 0.75s;
        cursor: pointer;
    }

    .smallTitle:hover {
        color: #099;
    }

    /*
    下拉菜单
    */
    .list-hover {
        height: 31px !important;
        opacity: 1;
        transition: 0.75s all;
    }

</style>
