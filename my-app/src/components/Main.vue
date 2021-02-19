<template>
  <div class="main">
    <TextBox :onPost="dataTransfer" />
    <MessageList :messages="reverseMessages" />
    <Loading v-if="loading"/>
    <p class="no-messages" v-else-if="!loading && messages.length === 0">投稿がありません。</p>
  </div>
</template>

<script>
import TextBox from "@/components/TextBox";
import MessageList from "@/components/MessageList";
import MessageModel from "@/models/Message";
import Loading from "@/components/Loading"
export default {
  components: {
    TextBox,
    MessageList,
    Loading
  },
  data() {
    return {
      messages: [],
      loading:this.initialLoading
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
  async created() {
    console.log("created");
    const fetches = await MessageModel.fetchMessage();

    fetches.forEach((fetch) => {
      this.messages.push(fetch);
    });
    this.loading = false
  },
  
   props:{
    initialLoading:{
      default:true
    }
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
