<template>
    <div class="form">
      <textarea
        id=""
        cols="100"
        rows="5"
        placeholder="ここに入力してください。"
      ></textarea>
      <div class="button-container">
        <Button buttonName="投稿"></Button>
      </div>
    </div>
</template>

<script>
import Button from '@/components/Button'
export default {
  components:{
    Button: Button
  }
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
  border-bottom: 20px #C0C0C0 solid;
}
.button-container{
  text-align: right;
}
</style>