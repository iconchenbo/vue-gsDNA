<template>
  <div class="wrap">
    <div class="content">
      <nav class="nav">
        <ul class="ul_content">
          <li class="wrap_li">
            <div class="div">
              <div class="line"></div>
              <a href=" " class="li_a">
              购买检测包
              </a>
           </div>
          </li>
          <li class="wrap_li">
            <div class="div">
              <div class="line"></div>
              <a href="#" class="li_a">
              购买检测包
              </a>
            </div>
          </li>
          <li class="wrap_li position_li">
            <div class="div">
              <div class="line"></div>
              <a href="#" class="li_a">
              购买检测包
            </a>
            </div>
            <ul class="li_ul">
              <li>购买检测包</li>
              <li>购买检测包</li>
              <li>购买检测包</li>
              <li>购买检测包</li>
              <li>购买检测包</li>
            </ul>
          </li>
          <li class="wrap_li">
            <div class="div">
              <div class="line"></div>
              <a href="#" class="li_a">
              购买检测包
              </a>
            </div>
          </li>
          <li class="wrap_li">
            <div class="div">
              <div class="line"></div>
              <a href="#" class="li_a">
              购买检测包
              </a>
            </div>
          </li>
          <li class="wrap_li">
            <div class="div">
              <div class="line"></div>
              <a href="#" class="li_a">
              购买检测包
              </a>
            </div>
          </li>
          <li class="wrap_li">
            <div class="div">
              <div class="line"></div>
              <a href="#" class="li_a">
              购买检测包
              </a>
            </div>
          </li>
          <li class="wrap_li">
            <div class="div">
              <div class="line"></div>
              <a href="#" class="li_a">
              EN
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>

</script>

<style>
  .nav {
    width: 100%;
  }
  .nav,.ul_content,.wrap_li {
    height: 97px;
  }
  a {
    text-decoration: none;
  }
  .ul_content {
    font-size: 0;
    margin: auto;
    width: 745px;
    background: #d6ff92;
  }
  .wrap_li:first-child {
    margin-left: 0;
  }
  .wrap_li {
    line-height: 97px;
    text-align: center;
    font-size: 14px;
    display: inline-block;
    margin-left: 30px;
    cursor: pointer;
    position: relative;
  }
  .div {
    height: 97px;
  }
  .div:hover .line {
    display: block;
  }
  .line {
    display: none;
    height: 4px;
    width: 100%;
    position: absolute;
    top: 0;
    background-color: #7e8c8d;
  }
  .position_li {
    position: relative;
  }
  .li_ul {
    background: #fbf8f8;
    list-style: none;
    position: absolute;
    top: 97px;
    display: none;
    width: 100px;
  }
  .li_ul>li {
    height: 50px;
    font-size: 14px;
    line-height: 50px;
    text-align: center;
  }
  .position_li:hover .li_ul {
    display: block;
  }
</style>
