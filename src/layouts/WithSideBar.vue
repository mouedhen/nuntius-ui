<template>
  <div class="dashboard">
    <div class="side-bar">
      <side-bar />
    </div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script>
import SideBar from '../components/SideBar'

export default {
  components: { SideBar }
}
</script>

<style scoped>
  .dashboard {
    position: relative;
    min-height: calc(100vh - 122px);
    padding: 1rem;
  }
  .side-bar {
    background: #cccccc;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 200px;
  }
  .content {
    margin-left: 200px;
  }
</style>
