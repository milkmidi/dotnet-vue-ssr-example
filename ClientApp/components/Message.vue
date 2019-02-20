<script>
  export default {
    props: ['message']
  }
</script>

<template>
  <div class="message">
    <p class="title">{{ message.title }}</h2>
    <p class="text">{{ message.text }}</p>
  </div>
</template>

<style scoped>
.message{
  border: 1px solid black;
}
.title{
  font-size: 20px
}
.text{
  font-size: 16px
}
</style>


