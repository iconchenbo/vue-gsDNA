<template>
  <div id="blue-wrap">
    <div class="content-wrap">
     <h1>
       你从社交中获得快感的能力有多强?
     </h1>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped="scoped">
  #blue-wrap{
    width: 100%;
    background-color: #83cef2;
    height: 150px;
    position: relative;
  }
  .content-wrap{
    width: 900px;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
  .content-wrap>h1{
    font-size: 32px;
    color: #1d3a66;
    line-height: 150px;
    text-align: center;
  }
  @media screen and (max-width: 640px){
    #blue-wrap{
      height: 80px;
    }
    .content-wrap{
      width: 100%;
    }
    .content-wrap>h1{
      font-size: 18px;
      line-height: 80px;
    }
  }

</style>
