<template>
  <div>
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
  components: { 
    Message 
  },
}
</script>
