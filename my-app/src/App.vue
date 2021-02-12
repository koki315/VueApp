<template>
  <div id="app">
    <Header> </Header>
    <div class="container">
      <SideMenu />
      <Main></Main>
    </div>
  </div>
</template>

<script>
import "normalize.css";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import Main from "./components/Main";

export default {
  components: {
    Header: Header,
    SideMenu,
    Main,
  },
};
</script>

<style>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.container {
  top: 60px;
  position: fixed;
  width: 100%;
  display: flex;
}
</style>
