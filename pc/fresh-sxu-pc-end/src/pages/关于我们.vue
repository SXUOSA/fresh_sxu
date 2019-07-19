<template>
    <div id="aboutUs">
        <h1>关于我们</h1>
        <P>山西大学&nbsp;&nbsp;新生手册</P>
        <p>技术支持：山西大学计算机与信息技术学院创新创业中心——开源软件协会</P>
        <p>代码开源：<a href ="https://github.com/SXUOSA/fresh_sxu" target=_blank>GitHub</a></P>

        <hr>
        <br>
        <h2>贡献者（排名不分先后）:</h2>
        <br>
        <h3>特别感谢以下组织与同学参与本新生手册的撰写工作</h3>
        <p>山西大学学生社团联合会&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <p>山西大学计算机与信息技术学院创新创业中心——开源软件协会： </p>
        <p>郭梓莹&nbsp;&nbsp;&nbsp;&nbsp;石&nbsp;&nbsp;佳</p>
        <br>
        <h3>网站设计&实现</h3>
        <p>山西大学计算机与信息技术学院创新创业中心——开源软件协会： </p>
        <p>崔晋瑜&nbsp;&nbsp;&nbsp;&nbsp;李政兴&nbsp;&nbsp;&nbsp;&nbsp;杨九懿&nbsp;&nbsp;&nbsp;&nbsp;王&nbsp;&nbsp;青&nbsp;&nbsp;&nbsp;&nbsp;雷晨龙&nbsp;&nbsp;&nbsp;&nbsp;李润泽&nbsp;&nbsp;&nbsp;&nbsp;张博淇&nbsp;&nbsp;&nbsp;&nbsp;尹智轩</p>
        <br>
        <h3>图片来源(遗漏了一些红领巾，欢迎来报道)</h3>
        <p>牛泽海&nbsp;&nbsp;&nbsp;&nbsp;冯&nbsp;&nbsp;旭&nbsp;&nbsp;&nbsp;&nbsp;宋小奚&nbsp;&nbsp;&nbsp;&nbsp;王星凯&nbsp;&nbsp;&nbsp;&nbsp;王金凤&nbsp;&nbsp;&nbsp;&nbsp;山西大学学生社团联合会&nbsp;&nbsp;&nbsp;&nbsp;山西大学电视台&nbsp;&nbsp;&nbsp;&nbsp;山西大学电台</p>
        <br>
        <h3>设计参考</h3>
        <p><a href ="http://www.qsc.zju.edu.cn/freshman/" target=_blank>浙江大学新生手册</a></p>
        <p><a href ="http://life.shanghaitech.edu.cn/fresh/" target=_blank>上海科技大学迎新网</a></p>
        <br>
        <h3>补充</h3>
        <p class="indent">此新生手册于2019年6月完成第一版，由于各种不可抗力因素，上线略晚，内容准备仓促，我们将会继续迭代，若存在浏览体验不好的情况，望海涵。欢迎大家提出意见，如果有好的想法或者想参与新生手册的更新迭代，请随时联系负责人：QQ312685096，VX15235364658</p>
        <p class="indent">如果有好看的图片也欢迎投稿！！邮箱：sxuHcyq@163.com</p>
        <p class="indent">另外，欢迎大家加入山西大学开源软件协会，一起玩耍，一起成长！</p>
        <br>
        <br>
    </div>
</template>

<script>
export default {
    beforeMount() {
        document.title = '山西大学新生手册-关于我们';
    }
}
</script>
>

<style>
    #aboutUs{
        width: calc(100vw - 87px);
        margin-left: 70px;
        position: absolute;
        top: 0;
        padding:0 3%;
        color: #000;
    }

    #aboutUs h1 {
        font-size: 50px;
        text-align: left;
        text-indent: 0;
    }

    #aboutUs h2 {
        font-size: 40px;
    }

    #aboutUs h3 {
        font-size: 30px;
    }

    #aboutUs p {
        font-size: 20px;
        margin: 1em 0;
    }

    #aboutUs hr {
        margin:1em 0;
    }

    #aboutUs a {
        color: #6699cc;
        font-size: 20px;
        text-decoration: underline;
    }

    #aboutUs a:hover {
        color: blue;
        text-decoration: none;
    }

    .indent {
        text-indent: 2em;
    }
</style>

