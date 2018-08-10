<template>
  <div id="app">
    <h1>App</h1>

    <router-link to="/" class="router-link-item">Dashboard</router-link>
    <router-link to="/messages" class="router-link-item">Messages</router-link>

    <router-view></router-view>
  </div>
</template>