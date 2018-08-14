<template>
  <div class="messages">
    <h1>Messages</h1>
    <Message v-for="(msg, index) in messages" :message="msg" :key="index" />
    <button class="btn btn-default" @click="fetchMessages(lastFetchedMessageDate)">Fetch a message</button>
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
  },
  components: { 
    Message 
  },
}
</script>

<style scoped>
h1{
  font-size: 50px;
}
</style>
