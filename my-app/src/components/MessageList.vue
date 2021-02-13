<template>
  <div class="message-list">
    <template v-for="(message, index) in importedMessages">
      <Message :key="index" :body="message.body" :date="message.date" />
    </template>
  </div>
</template>

<script>
import Message from "@/components/Message";
export default {
  components: {
    Message,
  },
  props: {
    messages: {
      type: Array,
      required: true,
      validator:(messages) => {    
          return messages.forEach((message, index) => {
          if (typeof message.body !== "string" || typeof message.date !== "string") {
            console.log('=================');
            console.log('false');
            console.log('=================');
            return false;
          }
          console.log('=================');
          console.log(index);
          console.log('true');
          console.log('=================');
          return true;
        });
        
      },
    },
  },
  data() {
    return {
      importedMessages: this.messages,
    };
  },
};
Message;
</script>

<style>
</style>