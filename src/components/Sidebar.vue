<template>
  <nav class="sidebar sidebar-offcanvas" id="sidebar">
    <ul class="nav">
      <li class="nav-item nav-profile" v-if="authData">
        <router-link to="/profile" class="nav-link">
          <div class="nav-profile-image">
            <img 
              :src="`http://localhost:8000/avatar/${authData.image ? authData.image : 'default.jpg'}`" 
              alt="profile"
            >
            <!-- <img :src="'/avatar/' + authData.image" alt="profile"> -->
            <span class="login-status online"></span>
            <!--change to offline or busy as needed-->
          </div>
          <div class="nav-profile-text d-flex flex-column">
            <span class="font-weight-bold mb-2">{{ authData.name }}</span>
            <span class="text-secondary text-small">{{ authData.email }}</span>
          </div>
          <i class="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
        </router-link>
      </li>
      <li class="nav-item">
          <router-link to="/" active-class="text-primary" class="nav-link">
          <span class="menu-title">Summary</span>
            <i class="mdi mdi-chart-bar menu-icon"></i>
          </router-link>
        <div class="border-bottom"></div>
      </li>
      <li class="nav-item" v-if="authData.role == 'admin'">
          <router-link to="/Account" active-class="text-primary" class="nav-link">
          <span class="menu-title">Account</span>
            <i class="mdi mdi-account menu-icon"></i>
          </router-link>
        <div class="border-bottom"></div>
      </li>
      <li class="nav-item" v-if="authData.role == 'admin'">
        <router-link to="/students" active-class="text-primary" class="nav-link">
          <span class="menu-title">Students</span>
            <i class="mdi mdi-account-multiple menu-icon"></i>
          </router-link>
      </li>
      <li class="nav-item" v-if="authData.role == 'admin'">
        <router-link to="/classrooms" active-class="text-primary" class="nav-link">
          <span class="menu-title">Classess</span>
            <i class="mdi mdi-home menu-icon"></i>
          </router-link>
      </li>
      <li class="nav-item" v-if="authData.role == 'admin'">
        <router-link to="/majors" active-class="text-primary" class="nav-link">
          <span class="menu-title">Majors</span>
            <i class="mdi mdi-book-open-page-variant menu-icon"></i>
          </router-link>
      </li>
      <li class="nav-item" v-if="authData.role == 'admin'">
        <router-link to="/tuitions" active-class="text-primary" class="nav-link">
          <span class="menu-title">Tuitions</span>
            <i class="mdi mdi-account-card-details menu-icon"></i>
          </router-link>
        <div class="border-bottom"></div>
      </li>
      <li class="nav-item">
        <router-link to="/payments" active-class="text-primary" class="nav-link">
          <span class="menu-title">Payment</span>
            <i class="mdi mdi-cash-usd menu-icon"></i>
          </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/history" active-class="text-primary" class="nav-link">
          <span class="menu-title">Transaction History</span>
            <i class="mdi mdi-history menu-icon"></i>
          </router-link>
          <!-- {{ authData }} -->
      </li>
      
    </ul>
  </nav>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data() {
    return {
      
    }
  },
  computed: {
    ...mapState('user', ['authData'])
  },
  methods: {
    ...mapActions('user', ['getAuth']),
  },
  mounted() {
    this.getAuth()
  }
}
</script>

<style scoped>
  
</style>