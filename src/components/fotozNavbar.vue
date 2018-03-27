<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <router-link to="/" class="navbar-item logo" >
              <svg id="fotoz-logo" viewBox="0 0 640 160" preserveAspectRatio="xMinYMax meet"><use xlink:href="#logo"></use></svg>
            </router-link>
          <div class="navbar-burger" v-bind:class="{'is-active': menuisActive}" data-target="navMenu" @click="toggleBurger">
          <span></span>
          <span></span>
          <span></span>
          </div>
        </div>
        <div class="navbar-menu" v-bind:class="{'is-active': menuisActive}" id="navMenu">
        <div class="navbar-start">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link"><span class="icon"><i class="fas fa-archive"></i></span><strong>ARCHIVE</strong></a>
            <div class="navbar-dropdown">
              <a class="navbar-item" href="">Laventis</a>
              <a class="navbar-item" href="">Paul</a>
              <a class="navbar-item" href="">Schmidt</a>
              <a class="navbar-item" href="">Schuetz</a>
              <hr class="navbar-divider">
              <a class="navbar-item">All Photos</a>
            </div>
          </div>
          <a class="navbar-item" href=""><span class="icon"><i class="fas fa-cloud-upload-alt"></i></span><strong>UPLOAD</strong></a>   
        </div>  
        
        <div class="navbar-end">
          <a class="navbar-item" href=""><span class="icon"><i class="fas fa-user"></i></span><strong>LOGIN</strong></a>
          <router-link to="/about" class="navbar-item"><span class="icon"><i class="fas fa-question-circle"></i></span><strong>ABOUT</strong></router-link>
        </div>
        </div>
    </nav>
</template>

<script>

export default {
  name: 'fotoz-navbar',
  data () {
    return {
      menuisActive: false
    }
  },
  methods: { 
    toggleBurger: function(){
      this.menuisActive = !this.menuisActive
    }
  }
}
</script>

<style>
.navbar-item, .navbar-link{
  color:  #3273dc;
}
.navbar-dropdown a.navbar-item:hover{
  color: #3273dc;
}
svg{
  fill: currentColor;
}
a.logo{
  color: #3273dc;
}
#fotoz-logo{
  width: 14rem;
}
.navbar-item.logo path#text{
  fill: #3273dc;
}
g#Rectangle-2{
  fill: lighten(black, 90%);
}
g#Rectangle{
  fill: white;
}
path#text{
  fill: #3273dc;
}
</style>

