<template>
    <div id="page-1">
      <div id="logo"></div>
      <!-- <img src="../assets/kernel-logo.png"> -->
      <div id="buttons">
        <a href="https://airtable.com/shrLPYeW8XBx6aZUx" class="bordered-button-green" target="_new">Propose a Junto</a>
        <router-link class="bordered-button-green" to="/juntos">All upcoming Juntos</router-link>
        <router-link class="bordered-button-green" to="/events">All Events</router-link>
        <!-- <a href="" class="bordered-button-green">All Events</a> -->
      </div>
      <div id="buttons">
        <a href="https://bit.ly/kernel0x" class="underline-purple" target="_new">Explorer</a>
        <a href="https://kernel.community" class="underline-purple" target="_new">Learn</a>
        <a href="https://kernel-blog.vercel.app" class="underline-purple" target="_new">Blog</a>
        <a href="https://www.airmeet.com/e/0d733160-bc9a-11ea-adb7-31ace487329c" class="underline-purple" target="_new">Virtual Hangout</a>
      </div>
      <div id="announcement">
        <div class="text">
          <span style="text-decoration:underline;">
          December 18th, 2020:
          </span>
            <br/>Something's brewing ☕️
        </div>
      </div>
      <!-- <div id="tv">
        <div id="title">Watch Livestream</div>
        <iframe width="720" height="405" src="https://www.youtube.com/embed/?listType=playlist&list=PLvTrX8LNPbPlSr-gW83A2QXUNeLOxyBbd" frameborder="0" allowfullscreen></iframe>
      </div> -->
      <a href="https://airtable.com/shr9ryq2w0zU7Wv6p?prefill_Types=Workshop,Junto,Breakout%20session,Fireside" class="fill-button-purple" target="_new">Sign up to receive updates</a>
    </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      msg: 'KERNEL Homebase'
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Miriam+Libre:wght@700&display=swap');
 @import url('https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300&display=swap');
#announcement {
  text-align: center;
  border-radius: 16px;
  height: 100px;
  width: 500px;
  line-height: 1.5em;
  background-color: bisque;
  margin: 15px;
}
.text {
  margin: 15px;
  font-family: 'Libre Franklin', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#tv {
  margin-top: 50px;
}
#page-1 {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
}
#title {
  font-family: 'Miriam Libre', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #212144;
  font-size: 2em;
}
#logo {
  /* position: absolute; */
  width: 361.11px;
  height: 118.08px;
  left: 269px;
  top: 107px;
  background-image: url('../assets/kernel-logo.png');
  /* background-color: bisque; */
  margin: 15px;
}
#buttons {
  margin-bottom: 15px;
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
a.fill-button-purple {
  color: #ffffff;
  background: #9090F1;
  border-radius: 16px;
}
a.fill-button-purple:hover {
  background: #474791;
  border-radius: 16px;
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
