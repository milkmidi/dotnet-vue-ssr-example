<script>
export default {
  mounted(){
    console.log(process.env.NODE_ENV);
  }
}
</script>


<template>
  <div id="app">
    <div class="container">
      <h1 class="h1">Dotnet Core Vue SSR Example</h1>

      <router-link to="/" class="router-link-item">Dashboard</router-link>
      <router-link to="/messages" class="router-link-item">Messages</router-link>

      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.h1{
  font-size: 60px;
}
</style>
