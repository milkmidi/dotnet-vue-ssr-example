<template>
  <div class="messages">
    <Message v-for="(msg, index) in messages" :message="msg" :key="index" />
    <button @click="fetchMessages(lastFetchedMessageDate)">Fetch a message</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Message from './Message.vue';

export default {
  asyncData ({ store }) {
    return store.dispatch('fetchInitialMessages')
  },
  computed: mapGetters(['messages', 'lastFetchedMessageDate']),
  methods: mapActions(['fetchMessages']),
  mounted(){
    console.log(process.env.NODE_ENV);
  },
  components: { 
    Message 
  },
}
</script>

<style scoped>
.messages{
  border:1px solid black;
}
</style>
