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
      <Button buttonName="投稿" @onClick="posted"></Button>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button";
export default {
  data() {
    return {
      message: "",
    };
  },
  props: {
    onPost: {
      type: Function,
      required: true,
    },
  },

  components: {
    Button: Button,
  },
  methods: {
    posted() {
      if (!this.message) {
        alert("Message can't be blank !");
      } else {
        alert("thx");
        let post = {
          body: this.message,
          date: new Date().toLocaleString(),
        };
        this.onPost(post);
        this.message = ""
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
}
.form {
  padding: 10px 20px 30px;
  border-bottom: 20px #c0c0c0 solid;
}
.button-container {
  text-align: right;
}
</style>
