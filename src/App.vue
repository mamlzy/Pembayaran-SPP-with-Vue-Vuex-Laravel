<template>
  <div id="app">
    <div class="container-scroller">
      <!-- NavBar -->
      <Navbar />
      <!-- End Navbar -->
      <!-- Wrapper -->
      <div class="container-fluid page-body-wrapper">
        <!-- Sidebar -->
        <Sidebar />
        <!-- End Sidebar -->
        <div class="main-panel">
          <div class="content-wrapper">
            <router-view></router-view>
          </div>
          <Footer />
        </div>
      </div>
      <!-- End Wrapper -->
    </div>
  </div>
</template>
<script>
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

export default {
  components: {
    Navbar, Sidebar, Footer
  },
}
</script>

<style>

</style>
