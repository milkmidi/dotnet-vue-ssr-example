<template>
  <div id="app">
    <h1 class="h1">Dotnet Core Vue SSR Example</h1>

    <router-link to="/" class="router-link-item">Dashboard</router-link>
    <router-link to="/messages" class="router-link-item">Messages</router-link>

    <router-view></router-view>
  </div>
</template>

<style scoped>
.h1{
  font-size: 60px;
}
</style>
