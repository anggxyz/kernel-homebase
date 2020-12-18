<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  background-color: #ffffff;
  height: 100vh;
  position: fixed;
  padding:0;
  margin:0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
#border-box{
  position: absolute;
  top: 20px;
  bottom: 20px;
  right: 20px;
  left: 20px;
  border: 3px solid #79F1B5;
  box-sizing: border-box;
  border-radius: 0px;
}

</style>
