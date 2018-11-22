<template>
  <div class="home">
    <div class="centred">
      <h1>404</h1>
      <p>Not Found</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style scoped>
  .home {
    min-height: calc(100vh - 122px);
    padding: 16px;
    position: relative;
  }

  h1 {
    font-size: 4rem;
    text-transform: uppercase;
    letter-spacing: 5px;
    margin: 0;
  }

  p {
    margin: 0;
    color: #828282;
    font-size: 2rem;
    text-transform: uppercase;
  }

  .centred {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
</style>
