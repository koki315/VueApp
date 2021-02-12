<template>
  <div class="message">
    <div class="date">{{ month }}, {{ day }}</div>
    <div>message</div>
  </div>
</template>

<script>
var posted = new Date();

export default {
  data() {
    return {
      month: posted.getMonth() + 1,
      day: posted.getDate(),
    };
  },
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