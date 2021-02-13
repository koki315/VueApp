<template>
  <div class="main">
    <TextBox :onPost="dataTransfer" />
    <MessageList :messages="messages" />
  </div>
</template>

<script>
import TextBox from "@/components/TextBox";
import MessageList from "@/components/MessageList";
export default {
  components: {
    TextBox,
    MessageList,
  },
  data() {
    return {
      messages: [],
    };
  },
  methods: {
    dataTransfer(data) {
      this.messages.push(data);
    },
  },
};
</script>

<style>
.main {
  text-align: center;
  width: calc(100% - 250px);
  overflow: scroll;
}
</style>
