<template>
  <Navbar></Navbar>

  <router-view></router-view>
  <Footer></Footer>
  <!-- <ScrollTop></ScrollTop> -->
</template>

<script>
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
// import ScrollTop from "./layout/ScrollTop";

export default {
  name: "app",
  components: {
    Navbar,
    Footer,
    // ScrollTop,
  },
};
</script>

<style></style>
