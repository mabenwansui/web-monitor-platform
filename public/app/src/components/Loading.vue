<template>
  <div class="loading"><i/><i/><i/></div>
</template>
<script>
  export default {
    name: 'Loading'
  }
</script>
<style scoped lang="less">
  .loading{
    display: inline-block;
    i {
      background-color: #F86C52;
      width: 10px;
      height: 10px;
      border-radius: 100%;
      margin: 2px;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
      display: inline-block;
      animation: ball-beat 0.7s 0s infinite linear;
    }
    i:nth-child(2n-1) { -webkit-animation-delay: 0.35s; animation-delay: 0.35s; }
  }
  @-webkit-keyframes ball-beat {
    50% {
      opacity: 0.2;
      -webkit-transform: scale(0.75);
    }
    100% {
      opacity: 1;
      -webkit-transform: scale(1);
    } 
  }
  @keyframes ball-beat {
    50% {
      opacity: 0.2;
      transform: scale(0.75);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    } 
  }

</style>