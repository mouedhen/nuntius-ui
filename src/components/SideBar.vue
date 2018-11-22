<template>
  <el-menu
    router
    class="menu-vertical"
    background-color="#f2f2f2"
    text-color="#222222">
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <span>Tableau de bord</span>
    </el-menu-item>
  </el-menu>
</template>

<style scoped>
  .menu-vertical {
    height: 100%;
    overflow-y: scroll;
  }

  .menu-vertical::-webkit-scrollbar {
    width: 5px;
    height: 8px;
    background-color: #e2e2e2; /* or add it to the track */
  }

  .menu-vertical::-webkit-scrollbar-thumb {
    background: #aaaaaa;
  }
</style>
