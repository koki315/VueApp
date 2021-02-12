<template>
  <div class="main">
    <TextBox />
    <MessageList/>
  </div>
</template>

<script>
import TextBox from "@/components/TextBox";
import MessageList from "@/components/MessageList";

export default {
  components: {
    TextBox,
    MessageList
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