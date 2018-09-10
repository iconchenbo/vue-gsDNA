<template>
  <div id="header-wrap">
    <div class="header">
      <div class="header-content">
        <!--<div class="logo">-->
          <!--<a href="https://www.gesedna.com/" title="各色DNA" >-->
            <!--<img src="./images/geselogo-navigation-bar.png" alt="logo图"/>-->
          <!--</a>-->
        <!--</div>-->
        <div class="menu-pc-container">
          <ul class="menu-pc">
            <li class="menu-pc-item">
              <a href="https://www.gesedna.com/" title="各色DNA" >
                <img src="./images/geselogo-navigation-bar.png" alt="logo图"/>
              </a>
            </li>
            <li class="menu-pc-item first-item">
              <a href="#">
                购买检测包
              </a>
            </li>
            <li class="menu-pc-item">
              <a href="#">
                我的DNA
              </a>
            </li>
            <li class="menu-pc-item">
              <a href="#">
                有偿研究项目
              </a>
            </li>
            <li class="menu-pc-item">
              <a href="#">
                我的现状评估
              </a>
            </li>
            <li class="menu-pc-item">
              <a href="#">
                玩转各色
              </a>
            </li>
            <li class="menu-pc-item">
              <a href="#">
                个人主页
              </a>
            </li>
            <li class="menu-pc-item">
              <a href="#">
                登录
              </a>
            </li>
            <li class="menu-pc-item">
              <a href="#">
                EN
              </a>
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

<style scoped>
  #header-wrap{


  }
  .header{

  }
  .header-content{
    width: 760px;
    margin:0 auto;
    overflow: hidden;
    height: 97px;
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
  .menu-pc-container{
    /*margin-top: 38px;*/
  }
  .menu-pc{
    width: 760px;
    height: 97px;
    display: inline-block;
    overflow: hidden;
  }
  .menu-pc-item{
    float: left;
    margin-left: 23px;
  }
  .menu-pc-item>a{
    font-size: 14px;
    color: #1d3a66;
    font-weight: 600;
  }
  .menu-pc-item>a:hover{
    /*text-decoration: underline;*/
  }
  .first-item{
    margin-left: 80px;
  }

</style>
