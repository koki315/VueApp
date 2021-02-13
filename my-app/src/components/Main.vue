<template>
  <div class="main">
    <TextBox />
    <MessageList :messages="dummyMessages" />
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
      dummyMessages: [
        { body: "abc", date: "1"},
        { body: "abc", date: "123"},
        { body: "abc", date: "123"},
        { body: "abc", date: "123"},
        { body: "abc", date: "123"},
        { body: "abc", date: "123"},
        { body: "abc", date: "123"},
        { body: "abc", date: "123"},
        { body: "abc", date: "123"},
        { body: "abc", date: "123"},
      ],
    };
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