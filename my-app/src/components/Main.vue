<template>
  <div class="main">
    <TextBox />
    <MessageList :messages="dummyMessages"/>
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
        { name: "abc", date: "1223" },
        { name: "abc", date: "1223" },
        { name: "abc", date: "1223" },
        { name: "abc", date: "1223" },
        { name: "abc", date: "1223" },
        { name: "abc", date: "1223" },
        { name: "abc", date: "1223" },
        { name: "abc", date: "1223" },
        { name: "abc", date: "1223" },
        { name: "abc", date: "1223" },
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