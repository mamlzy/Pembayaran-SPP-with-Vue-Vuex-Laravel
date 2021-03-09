<template>
  

      <!-- Sidebar -->
      <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

          <!-- Sidebar - Brand -->
          <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
              <div class="sidebar-brand-icon rotate-n-15">
                  <i class="fas fa-laugh-wink"></i>
              </div>
              <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
          </a>

          <!-- Divider -->
          <hr class="sidebar-divider my-0">

          <!-- Nav Item - Dashboard -->
            <li class="nav-item">
              <router-link to="/dashboard" class="nav-link">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span>
              </router-link>
            </li>

            <!-- Divider -->
            <hr class="sidebar-divider">

            <!-- Heading -->
            <div class="sidebar-heading">
              Admin
            </div>

            <!-- Nav Item - Charts -->
            <li class="nav-item">
              <router-link to="/students" class="nav-link pb-0">
                <i class="fas fa-fw fa-user-graduate"></i>
                <span>Siswa</span>
              </router-link>
            </li>

            <li class="nav-item">
              <router-link to="/classrooms" class="nav-link pb-0">
                <i class="fas fa-fw fa-house-user"></i>
                <span>Kelas</span>
              </router-link>
            </li>

            <li class="nav-item">
              <router-link to="/majors" class="nav-link pb-0">
                <i class="fas fa-fw fa-user"></i>
                <span>Jurusan</span>
              </router-link>
            </li>

            <li class="nav-item">
              <router-link to="/tuitions" class="nav-link">
                <i class="fas fa-fw fa-money-check-alt"></i>
                <span>SPP</span>
              </router-link>
            </li>

            <!-- Divider -->
            <hr class="sidebar-divider d-none d-md-block">

            <!-- Heading -->
            <div class="sidebar-heading">
                USER
            </div>

            <!-- Nav Item - Charts -->
            <li class="nav-item">
              <router-link to="/" class="nav-link pb-0">
                <i class="fas fa-fw fa-home"></i>
                <span>Beranda</span>
              </router-link>
            </li>

            <li class="nav-item">
              <router-link to="/" class="nav-link pb-0">
                <i class="fas fa-fw fa-user"></i>
                <span>Profil Saya</span>
              </router-link>
            </li>

            <li class="nav-item">
              <router-link to="/" class="nav-link pb-0" href="tables.html">
                <i class="fas fa-fw fa-user-edit"></i>
                <span>Ubah Profil</span>
              </router-link>
            </li>

            <li class="nav-item">
              <router-link to="/" class="nav-link pb-0">
                <i class="fas fa-fw fa-history"></i>
                <span>History Pembayaran</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/" class="nav-link">
                <i class="fas fa-fw fa-key"></i>
                <span>Ubah Password</span>
              </router-link>
            </li>

            <!-- Divider -->
            <hr class="sidebar-divider d-none d-md-block">

            <!-- Heading -->
            <div class="sidebar-heading">
                PETUGAS
            </div>

            <!-- Nav Item - Charts -->
            <li class="nav-item">
              <router-link to="/" class="nav-link">
                <i class="fas fa-fw fa-donate"></i>
                <span>Pembayaran</span>
              </router-link>
            </li>

            <!-- Divider -->
            <hr class="sidebar-divider d-none d-md-block">

          <!-- Sidebar Toggler (Sidebar) -->
          <div class="text-center d-none d-md-inline">
              <button class="rounded-circle border-0" id="sidebarToggle"></button>
          </div>

          

      </ul>
      <!-- End of Sidebar -->
  
</template>

<script>
export default {

}
</script>

<style>

</style>