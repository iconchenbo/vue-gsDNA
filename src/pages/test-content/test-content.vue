<template>
  <div id="wrap-test">
     <!--头部All-->
    <HeaderAll/>

    <!--蓝色背景标题-->
    <BlueTitle/>

    <!--测试消息-->
    <TestInfo/>

    <!--测试题目-->
    <TestTopic/>

    <!--底部All-->
    <FooterAll/>


  </div>
</template>

<script>
//  import HeaderAll from '../../components/HeaderAll/HeaderAll.vue'
  import HeaderAll from '../../components/HeaderAll/HeaderNav.vue'
  import BlueTitle from '../../components/BlueTitle/BlueTitle.vue'
  import TestInfo from '../../components/TestInfo/TestInfo.vue'
  import TestTopic from '../../components/TestTopic/TestTopic.vue'
  import FooterAll from '../../components/FooterAll/FooterAll.vue'

  export default {

    components:{
      HeaderAll,
      BlueTitle,
      TestInfo,
      TestTopic,
      FooterAll

    }

  }
</script>

<style>
  #wrap-test{

    background-color: white;
  }


</style>
