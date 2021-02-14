<template>
  <div class="main">
    <TextBox :onPost="dataTransfer" />
    <MessageList :messages="reverseMessages" />
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
  computed: {
    reverseMessages() {
      return this.messages.slice().reverse();
    },
  },
};
</script>

<style>
.main {
  text-align: center;
  width: calc(100% - 300px);
  overflow: scroll;
}
</style>
