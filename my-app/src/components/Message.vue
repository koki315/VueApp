<template>
  <div class="message">
    <div>{{ date }}</div>
    <div>{{ body }}</div>
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

<style>
.message {
  text-align: left;
  cursor: pointer;
  padding: 20px 20px 60px;
  border-bottom: 1px solid rgba(50, 50, 50);
}
.message:hover {
  background: #eee;
}
.date{
  text-align: right;
  color: #C0C0C0 ;
  font-size: 12px;
}
</style>