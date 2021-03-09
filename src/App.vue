<template>
  <div id="app page-top">
    <!-- Page Wrapper -->
    <div id="wrapper">
      <Sidebar></Sidebar>
      <!-- Content Wrapper -->
      <div id="content-wrapper" class="d-flex flex-column">
          <!-- Main Content -->
          <div id="content">
            <Topbar></Topbar>
              <!-- Begin Page Content -->
              <div class="container-fluid">
                <router-view></router-view>
              </div>
              <!-- END Page Content -->
          </div>
      </div>
    </div>
    <!-- END Page Wrapper -->
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'

export default {
  components: {
    Sidebar,
    Topbar
  }
}
</script>

<style>

</style>
