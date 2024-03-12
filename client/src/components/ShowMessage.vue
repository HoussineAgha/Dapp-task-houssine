<template>
  <div>
    <h1>Message DApp</h1>
    <div>
      <label for="message">Message:</label>
      <input type="text" id="message" v-model="message" />
      <button @click="updateMessage">Update</button>
    </div>
    <div>
      <h2>Current Message:</h2>
      <p>{{ currentMessage }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MessageService from '../services/MessageService';

export default defineComponent({
  data() {
    return {
      message: '',
      currentMessage: '',
    };
  },
  methods: {
    async updateMessage() {
      const messageService = new MessageService();
      await messageService.setMessage(this.message);
      this.currentMessage = await messageService.getMessage();
    },
    async fetchMessage() {
      const messageService = new MessageService();
      this.currentMessage = await messageService.getMessage();
    },
  },
  mounted() {
    this.fetchMessage();
  },
});
</script>
