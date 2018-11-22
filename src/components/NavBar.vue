<template>
  <div>
    <el-menu
      class="nav-bar"
      background-color="#0B6E4F"
      text-color="#f2f2f2"
      active-text-color="#f2f2f2"
      router
      mode="horizontal">
      <el-menu-item index="/" class="logo">Nuntius</el-menu-item>
      <el-menu-item class="right" index="logout">Se Déconnecter</el-menu-item>
      <el-menu-item class="right" index="login">Se Connecter</el-menu-item>
      <el-menu-item class="right" index="profile">User</el-menu-item>
      <!-- for testing -->
      <el-menu-item class="right" index="dashboard">Dashboard</el-menu-item>

    </el-menu>
  </div>
</template>

<style scoped>
  .right {
    float: right !important;
  }
  .logo {
    font-weight: 900;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-size: 16px;
  }
</style>
