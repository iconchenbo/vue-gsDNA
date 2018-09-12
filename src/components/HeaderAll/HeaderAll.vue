<template>
  <div id="header-wrap">
    <div class="header">
      <div class="header-content">
        <div class="logo">
          <a href="https://www.gesedna.com/" title="各色DNA" >
            <img src="./images/geselogo-navigation-bar.png" alt="logo图"/>
          </a>
        </div>
        <div class="menu-pc-container">
          <ul class="menu-pc">
            <!--<li class="menu-pc-item">
              <a href="https://www.gesedna.com/" title="各色DNA" >
                <img src="./images/geselogo-navigation-bar.png" alt="logo图"/>
              </a>
            </li>-->
            <li class="wrap-li">
              <div class="menu-pc-item first-item">
                <div class="line"></div>
                <a href="#">
                   购买检测包
                </a>
              </div>
            </li>

            <li class="wrap-li position_li">
              <div class="menu-pc-item">
                <div class="line"></div>
                <a href="#">
                  我的DNA
                  <span class="iconfont icon-arrow-down"></span>
                </a>
              </div>
              <ul class="li_ul">
                <li>我的基因画像</li>
                <li>基因检测解果示例</li>
                <li>我的基因数据</li>
                <li>免费解读</li>
              </ul>
            </li>
            <li class="wrap-li">
              <div class="menu-pc-item">
                <div class="line"></div>
                <a href="#">
                  有偿研究项目
                </a>
              </div>
            </li>
            <li class="wrap-li">
              <div class="menu-pc-item">
                <div class="line"></div>
                <a href="#">
                  我的现状评估
                </a>
              </div>
            </li>
            <li class="wrap-li">
              <div class="menu-pc-item">
                <div class="line"></div>
                <a href="#">
                  玩转各色
                </a>
              </div>
            </li>
            <li class="wrap-li">
              <div class="menu-pc-item">
                <div class="line"></div>
                <a href="#">
                  个人主页
                </a>
              </div>
            </li>
            <li class="wrap-li">
              <div class="menu-pc-item">
                <div class="line"></div>
                <a href="#">
                  登陆
                </a>
              </div>
            </li>
            <li class="wrap-li">
              <div class="menu-pc-item">
                <div class="line"></div>
                <a href="#">
                  EN
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div class="menu-mobile-container">
          <a href="#">
            <div class="menu-mobile">

            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped="scoped">

  .header{
    box-shadow: 0 0 20px 0 rgba(0,0,0,0.4);
  }

  .header-content{
    width: 900px;
    margin:0 auto;
    height: 94px;
  }
  .logo{
    float: left;
    vertical-align: middle;
  }
  .logo>a>img{
    margin-top: 28px;
    margin-left: 15px;
    display: block;
    width: 44px;
  }
  .logo>a>img:hover{
    opacity: 0.7;
  }
  .menu-pc{
    width: 830px;
    height: 94px;
    font-size: 0;
    margin-left:70px;
    /*background-color: yellowgreen;*/
  }
  .wrap-li:first-child{
    margin-left: 100px;
  }
  .wrap-li {
    line-height: 94px;
    text-align: center;
    font-size: 14px;
    display: inline-block;
    margin-left: 30px;
    cursor: pointer;
    position: relative;
  }
  .menu-pc-item>a{
    font-size: 14px;
    color: #1d3a66;
    font-weight: 600;
  }
  .menu-pc-item{
    height: 94px;
  }
  .menu-pc-item:hover .line{
    /*display: block;*/
    height: 6px;
    transition: height .5s;
  }
  .line {
    /*display: none;*/
    height: 0;
    transition: height .5s;
    width: 100%;
    position: absolute;
    top: 0;
    background-color: #00aeef;
  }
  .position_li {
    position: relative;
  }
  .li_ul {
    background: #fff;
    list-style: none;
    position: absolute;
    top: 93px;
    display: none;
    width: 200px;
    border: 1px solid #bbb;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    z-index: 5;
  }
  .li_ul>li {
    border-bottom: 1px solid #eaeaea;
    height: 40px;
    font-size: 12px;
    line-height: 40px;
    text-align: left;
    padding-left: 15px;
  }
  .li_ul>li:hover{
    color: #00aeef;
  }
  .li_ul>li:last-child{
    border-bottom: none;
  }
  .position_li:hover .li_ul {
    display: block;
  }
  .iconfont{
    font-size: 10px;
  }
  @media screen and (max-width: 640px){
    .menu-pc-container{
      display: none;
    }
    .menu-mobile-container{
      position: absolute;
      right: 20px;
      top:40px;
      display: block;

    }
    .menu-mobile{
      width: 25px;
      height: 5px;
      border-top: 10px double gray;
      /*padding-top: 10px;*/
      border-bottom: 3px solid gray;
    }
  }
</style>
