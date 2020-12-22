<template>
<div>
  <a href="/" class="underline-purple">Go Back</a>
  <div class="center">
    <span class="title">
      All Upcoming Events
    </span>
      <iframe class="airtable-embed" src="https://airtable.com/embed/shr7cMVaXyNSyuafL?backgroundColor=greenLight" frameborder="0" onmousewheel="" width="100%" height="100%" style="background: transparent; solid #ffffff;"></iframe>
  </div>
</div>
</template>

<script>

export default {
  name: 'Events'
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
  font-size: 1em;
  display: inline-block;
  padding-top: 0.3em;
  padding-bottom: 0.3em;
  padding-left: 1em;
  padding-right: 1em;
  border: 0;
  color: #212144;
  margin: 15px;
}
a.underline-purple {
  border-bottom: 3px solid #9090F1;
}
a.underline-purple:hover {
  border-bottom: 3px solid #474791;
}
a.bordered-button-green{
  border: 3px solid #79F1B5;
  box-sizing: border-box;
  border-radius: 16px;
}
a.bordered-button-green:hover {
  text-decoration: none;
  text-decoration-color: #9090F1;
  /* background: #00CA65; */
  border: 3px solid #00CA65;
  box-sizing: border-box;
  border-radius: 16px;
}
</style>
