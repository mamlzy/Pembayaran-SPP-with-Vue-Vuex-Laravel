<template>
  <div id="app">
    <div class="container-scroller">
      <Navbar v-if="isLoggedIn"/>
      <!-- End Navbar -->
      <!-- Wrapper -->
      <div 
        class="container-fluid page-body-wrapper"
        :class="{
          'full-page-wrapper': !isLoggedIn
        }">
        <!-- Sidebar -->
        <Sidebar v-if="isLoggedIn"/>
        <!-- End Sidebar -->
        <div 
          :class="{
            'main-panel': isLoggedIn,
            'content-wrapper d-flex align-items-center auth': !isLoggedIn
        }">
          <div 
            :class="{
              'content-wrapper': isLoggedIn,
              'row flex-grow': !isLoggedIn
          }">
            <router-view></router-view>
          </div>
          <Footer v-if="isLoggedIn"/>
        </div>
      </div>
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
  data() {
    return {
      isLoggedIn: false
    }
  },
  mounted() {
    this.isLoggedIn = !!localStorage.getItem('auth') // !! means return boolean
  },
  updated() {
    this.isLoggedIn = !!localStorage.getItem('auth') // !! means return boolean
  }
}
</script>

<style>
/* .modal-body {
  overflow-y: visible !important;
} */
.modal-content {
  background-color: white !important;
}
</style>
