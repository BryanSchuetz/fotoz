<template>
  <div id="app">
    <fotoz-svg/>
    <fotoz-navbar/>
    <div v-if=" this.$route.path == '/' ">
      <section class="hero is-primary is-medium is-bold">
        <div class="hero-body">
          <div class="container">
            <h1 class="title site-title">Those Old Family Photos </h1>
            <div class="icons"><span class="icon is-large fa-3x"><i class="fas fa-camera-retro"></i></span> <span class="icon is-large fa-3x"><i class="fas fa-images"></i></span></div>
            <h2 class="subtitle">
              Let's work together to build an <em>annotated</em> collection of all these old family photos. <strong>Tag each image with who, what, where, when</strong>—if you have other old family pics, upload them. Favorite the ones you want to keep and then <strong>download an archive for your own use</strong>.
            </h2>
          </div>
        </div>
      </section>
    </div> 
    <section class="section">
      <div class="container content">
        <router-view></router-view>
      </div>
    </section>
  </div>
</template>

<script>
import fotozSvg from './components/fotozSvg.vue'
import fotozNavbar from './components/fotozNavbar.vue'

export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    fotozSvg, fotozNavbar
  }
}
</script>

<style lang="scss">
$primary: #3273dc;
$navbar-height: 80px;
$navbar-background-color: lighten(#DFDDDF, 10%);
@import '~bulma/bulma';
.icons{
  text-align: center;
  margin-bottom: 1rem;
  .icon:first-child{
  margin-right: 2rem;
  }
}
.site-title{
  text-align: center;
}
</style>
