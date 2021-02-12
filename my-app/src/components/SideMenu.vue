<template>
  <div class="sidemenu">
    <ul>
      <li>全体連絡</li>
      <li>雑談</li>
      <li>自己紹介</li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
.sidemenu {
  width: 250px;
  height: 100%;
  text-align: center;
  border-right: 2px solid rgba(50, 50, 50);
}
.sidemenu {
  background: #eee;
}
.sidemenu ul li {
  border-bottom: 2px solid rgba(50, 50, 50);
  padding: 20px 0;
  cursor: pointer;
  font-size: 18px;
}
.sidemenu ul li:hover {
  background: rgba(50, 50, 50);
  color: #eee;
}
.sidemenu ul li:active {
  background: rgba(50, 50, 50);
  color: #eee;
}
</style>