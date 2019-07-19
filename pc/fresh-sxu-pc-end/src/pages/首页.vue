<template>
    <div id="homeRoot">
        <div id="homePicture">

        </div>
        <!-- <img src="../assets/SY_text.png" alt="" srcset="" id="homePicture"> -->
        <button id="homeBottun" v-on:click="startReading()">
            <span>
                开始阅读
            </span>
            <span>
                <Icon type="ios-arrow-forward" />
            </span>
        </button>
    </div>
</template>

<script>
export default {
    beforeMount() {
        document.title = '山西大学 新生手册';
    },
    methods: {
        startReading() {
            this.$router.push("/nav");
        }
    }
}
</script>

<style>
    #homeRoot{
        background: url(http://bkzs.sxu.edu.cn/images/2019-07/35982080e0bc4df88657e01e05e7c20b.jpg) no-repeat;
        width: 100vw;
        height: 100vh;
        background-size: 100% 100%;
        position: relative;
        overflow: hidden;
    }
/* 1260
868 */
    #homePicture{
        position: absolute;
        left: 50%;
        margin-left: -524px;
        margin-top:-295px;
        width: 1048px;
        height: 100vh;
        top:50%;
        /* margin-top: -294.75; */
        /* height: 300px; */
        background: url(http://bkzs.sxu.edu.cn/images/2019-07/25bf5b5aabbd4037857b86811838ec62.png);
        background-size: 100%;
    }

    /* #homeRoot::after{
        display: block;
        content: "";
        padding-bottom: 20%;
    } */

    span{
        display: inline !important;
    }

    #homeBottun{
        position: absolute;
        width: 208px;
        height: 70px;
        /* background: rgba(0, 0, 0, 0.5); */
        background: rgba(0, 0, 0, 0);
        color: #fff;
        border: #000;
        top:70%;
        right:10%;
        margin-top: -35px;
        margin-left: -104px;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 30px;
    }

    #homeBottun:hover{
        transform: scale(1.1) translateX(20px);
        transition: all .5s;
        cursor: pointer;
        /* background: rgba(0, 0, 0, 0.6); */
        border: #fff solid 2px;
    }
</style>
