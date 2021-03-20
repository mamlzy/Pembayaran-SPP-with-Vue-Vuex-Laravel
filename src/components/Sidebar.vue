<template>
  <nav class="sidebar sidebar-offcanvas" id="sidebar">
    <ul class="nav">
      <li class="nav-item nav-profile" v-if="user">
        <router-link to="/" class="nav-link">
          <div class="nav-profile-image">
            <img src="purple/assets/images/faces/face1.jpg" alt="profile">
            <span class="login-status online"></span>
            <!--change to offline or busy as needed-->
          </div>
          <div class="nav-profile-text d-flex flex-column">
            <span class="font-weight-bold mb-2">{{ user.name }}</span>
            <span class="text-secondary text-small">{{ user.email }}</span>
          </div>
          <i class="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
        </router-link>
      </li>
      <li class="nav-item">
          <router-link to="/" class="nav-link">
          <span class="menu-title">Summary</span>
            <i class="mdi mdi-chart-bar menu-icon"></i>
          </router-link>
        <div class="border-bottom"></div>
      </li>
      <li class="nav-item">
          <router-link to="/Account" class="nav-link">
          <span class="menu-title">Account</span>
            <i class="mdi mdi-account-plus menu-icon"></i>
          </router-link>
        <div class="border-bottom"></div>
      </li>
      <li class="nav-item">
        <router-link to="/students" class="nav-link">
          <span class="menu-title">Students</span>
            <i class="mdi mdi-account-multiple menu-icon"></i>
          </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/classrooms" class="nav-link">
          <span class="menu-title">Classess</span>
            <i class="mdi mdi-home menu-icon"></i>
          </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/majors" class="nav-link">
          <span class="menu-title">Majors</span>
            <i class="mdi mdi-book-open-page-variant menu-icon"></i>
          </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/tuitions" class="nav-link">
          <span class="menu-title">Tuitions</span>
            <i class="mdi mdi mdi-account-card-details menu-icon"></i>
          </router-link>
        <div class="border-bottom"></div>
      </li>
      <li class="nav-item">
        <router-link to="/payments" class="nav-link">
          <span class="menu-title">Payment</span>
            <i class="mdi mdi mdi-cash-usd menu-icon"></i>
          </router-link>
      </li>
      
    </ul>
  </nav>
</template>

<script>
import User from '../api/User'

export default {
  data() {
    return {
      user: null
    }
  },
  mounted() {
    User.auth().then(response => {
      this.user = response.data
    })
  }
}
</script>

<style scoped>
  
</style>