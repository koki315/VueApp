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
      validator: (messages) => {
        return messages.every((message) => {
          // everyメソッドすべてがtrueを返したらtrueを返す。falseが一件でもあればfalse
          if(typeof message.date !== 'string'){
            return false
          }
           if(typeof message.body !== 'string'){
            return false
          }
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

<style></style>
