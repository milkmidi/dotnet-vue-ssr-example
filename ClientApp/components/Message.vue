<script>
  export default {
    props: ['message']
  }
</script>

<template>
  <div>
    <h1>Messages</h1>
    <h2>{{ message.title }}</h2>
    <p>{{ message.text }}</p>
  </div>
</template>

<style scoped>
h1{
  color:green;
}
</style>


