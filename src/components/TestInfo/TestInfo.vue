<template>
  <div id="wrap">
    <div id="info-wrap">
      <div class="info-header">
        <div class="section">
          <img src="./images/1.png"/>
        </div>
      </div>
      <div class="info-content">
        <p class="info-content-item">
          <span class="item1">
            人作为一种群体动物，只要你一出生，就必然成为社交网络上的一个节点。有些人很容易就能从社交中获得快感，因此对派对聚会充满着期待；但有些人却对此无感，所以选择减少各种需要与人打交道的活动。
          </span>
        </p>
        <p class="info-content-item">
          <span class="item1">
            你是哪种人呢？请结合你自身的情况，选择每一条描述和你符合的程度，如果遇到个别你没有经历过的场景，尝试根据与该场景最为类似的经验进行作答。答案没有对错之分，凭真实情况作答即可。
          </span>
        </p>
        <p class="info-content-item">
          <span class="item-strong">问卷开发者：</span>
          <span class="item1">Diane Carol Gooding ( Department of Psychology, University of Wisconsin-Madison )</span>
        </p>
        <p class="info-content-item">
          <span class="item-strong">问卷题目：</span>
          <span class="item1">17 道</span>
        </p>
        <p class="info-content-item">
          <span class="item-strong">反馈指标：</span>
          <span class="item1">1 个</span>
        </p>
        <p class="info-content-item">
          <span class="item-strong">反馈报告字数：</span>
          <span class="item1">约 500 字</span>
        </p>
        <p class="info-content-item">
          <span class="item-strong">问卷修订日志：</span>
          <span class="item1">180903 根据已收集的数据对划分标准进行修订。</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped="scoped">
  #wrap{
    width: 100%;
  }
  #info-wrap{
    /*background-color: silver;*/
    width: 900px;
    margin: 40px auto 20px;
  }
  .info-header{
    width: 100%;
    text-align: center;
    margin-bottom: -25px;
  }
  .section{
    width: 65px;
    height: 65px;
    background: #fefefe;
    border-radius: 50%;
    display: inline-block;
  }
  .section>img{
    margin: 25px 0 0;
    width: 32px;
  }
  .info-content{
    font-size: 14px;
    color: #595959;
    background-color: #f2f4f5;
    border-radius: 10px;
    text-align: justify;
    padding: 30px 15px 15px 15px;
    line-height: 1.75;
  }
  .info-content-item{
    margin-bottom: 30px;

  }
  .item-strong{
    font-weight: bold;
  }

  @media screen and (max-width: 640px){
    #info-wrap{
      width: 90%;
    }
    .info-content{
      font-size: 16px;
    }
  }

</style>
