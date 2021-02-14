<template>
  <div class="message">
    <div class="message-date">{{ date }}</div>
    <p class="messsage-body">{{ body }}</p>
  </div>
</template>

<script>

export default {
  props:{
    body:{
      type:String,
      required:true
    },
    date:{
      type:String,
      required:true
    },
  }
};
</script>

<style scoped>
.message {
  text-align: left;
  cursor: pointer;
  padding: 20px 20px 40px;
  border-bottom: 1px solid rgba(50, 50, 50);
}
.message:hover {
  background: #eee;
}
.message-date{
  text-align: right;
  color: #C0C0C0 ;
  font-size: 0.8em;
}
.messsage-body{
  margin-top: 5px;
  white-space: pre-line;
}
</style>