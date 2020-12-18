<template>
<div>
  <a href="/" class="underline-purple">Go Back</a>
  <div class="center">
    <span class="title">
      All upcoming Juntos
    </span>
    <iframe class="airtable-embed" src="https://airtable.com/embed/shrtwp4spJW575Jy3?backgroundColor=greenLight" frameborder="0" onmousewheel="" width="100%" height="100%" style="background: transparent; solid #ffffff;"></iframe>
  </div>
</div>
</template>

<script>

export default {
  name: 'Juntos'
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Miriam+Libre:wght@700&display=swap');

.center {
  background-color: #ffffff;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
}
.title {
  font-family: 'Miriam Libre', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #212144;
  font-size: 2em;
  padding: 20px;
}
a {
  text-decoration: none;
  font-family: 'Miriam Libre', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 1.0em;
  display: inline-block;
  padding-top: 1em;
  padding-bottom: 1em;
  padding-left: 1.5em;
  padding-right: 1.5em;
  border: 0;
  color: #212144;
  margin: 10px;
}
a.underline-purple {
  border-bottom: 3px solid #9090F1;
}
a.underline-purple:hover {
  border-bottom: 3px solid #474791;
}
</style>
