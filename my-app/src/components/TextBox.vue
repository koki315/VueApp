<template>
  <div class="form">
    <textarea
      id="textarea"
      cols="100"
      rows="5"
      placeholder="ここに入力してください。"
      v-model="message"
    ></textarea>
    <div class="button-container">
      <Button buttonName="投稿" @onClick="posted" :disabled="disabled"></Button>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button";
import MessageModel from "@/models/Message";
export default {
  data() {
    return {
      message: "",
      disabled: this.initialDisabled,
    };
  },
  props: {
    onPost: {
      type: Function,
      required: true,
    },
    initialDisabled:{
      type:Boolean,
      default:false
    }
  },

  components: {
    Button: Button,
    
  },
  methods: {
    async posted() {
      this.disabled = true
      if (!this.message) {
        alert("Message can't be blank !");
        this.disabled = false
      } else {
        const post = await MessageModel.save({
          body:this.message
        });
        console.log(post);
        this.onPost(post);
        this.message = "";
        this.disabled = false
        return post;
      }
    },
  },
};
</script>

<style>
textarea {
  width: 100%;
  border: 1px solid rgba(50, 50, 50);
  border-radius: 5px;
  resize: none;
}
.form {
  padding: 10px 20px 30px;
  border-bottom: 20px #c0c0c0 solid;
}
.button-container {
  text-align: right;
}
</style>
