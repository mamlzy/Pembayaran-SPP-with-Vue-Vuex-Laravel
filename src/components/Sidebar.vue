<template>
  <nav class="sidebar sidebar-offcanvas" id="sidebar">
          <ul class="nav">
            <li class="nav-item nav-profile">
              <a href="#" class="nav-link">
                <div class="nav-profile-image">
                  <img src="purple/assets/images/faces/face1.jpg" alt="profile">
                  <span class="login-status online"></span>
                  <!--change to offline or busy as needed-->
                </div>
                <div class="nav-profile-text d-flex flex-column">
                  <span class="font-weight-bold mb-2">David Grey. H</span>
                  <span class="text-secondary text-small">Project Manager</span>
                </div>
                <i class="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
              </a>
            </li>
            <li class="nav-item">
                <router-link to="/" class="nav-link">
                <span class="menu-title">Dashboard</span>
                  <i class="mdi mdi-home menu-icon"></i>
                </router-link>
              <div class="border-bottom"></div>
            </li>
            <li class="nav-item">
              <router-link to="/students" class="nav-link">
                <span class="menu-title">Siswa</span>
                  <i class="mdi mdi-account-multiple menu-icon"></i>
                </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/classrooms" class="nav-link">
                <span class="menu-title">Kelas</span>
                  <i class="mdi mdi-home menu-icon"></i>
                </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/majors" class="nav-link">
                <span class="menu-title">Jurusan</span>
                  <i class="mdi mdi-book-open-page-variant menu-icon"></i>
                </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/tuitions" class="nav-link">
                <span class="menu-title">Spp</span>
                  <i class="mdi mdi mdi-account-card-details menu-icon"></i>
                </router-link>
              <div class="border-bottom"></div>
            </li>
            <li class="nav-item">
              <router-link to="/payments" class="nav-link">
                <span class="menu-title">Pembayaran</span>
                  <i class="mdi mdi mdi-cash-usd menu-icon"></i>
                </router-link>
            </li>
            
          </ul>
        </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
  
</style>