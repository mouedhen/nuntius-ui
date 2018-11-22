<template>
    <el-container id="app">
      <el-header class="header">
        <nav-bar />
      </el-header>
      <el-main class="main">
        <component :is="layout">
          <router-view/>
        </component>
      </el-main>
      <el-footer class="footer">© 2018 SELEN KEYS Tous droits réservés.</el-footer>
    </el-container>
</template>

<script>
import NavBar from './components/NavBar'
const defaultLayout = 'default'

export default {
  components: { NavBar },
  computed: {
    layout () {
      return (this.$route.meta.layout || defaultLayout) + '-layout'
    }
  }
}
</script>
