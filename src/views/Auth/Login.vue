<template>
  <!-- <div class="container-fluid page-body-wrapper full-page-wrapper"> -->
    <!-- <div class="content-wrapper d-flex align-items-center auth"> -->
      <!-- <div class="row flex-grow"> -->
        <div class="col-lg-4 mx-auto">
          <div class="auth-form-light text-left p-5">
            <div class="brand-logo">
              <!-- <img src="../purple/assets/images/logo.svg"> -->
            </div>
            <h4>Hello! let's get started</h4>
            <h6 class="font-weight-light">Sign in to continue.</h6>
            <ValidationObserver v-slot="{ handleSubmit }">
              <form class="pt-3" ref="" @submit.prevent="handleSubmit(onSubmit)">
                <div class="form-group">
                  <ValidationProvider v-slot="{ errors }" name="email" rules="required">
                    <input 
                      type="email" 
                      v-model="email" class="form-control form-control-lg" id="exampleInputEmail1" placeholder="Username">
                    <span class="small text-danger">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
                <div class="form-group">
                  <ValidationProvider v-slot="{ errors }" name="password" rules="required">
                  <input type="password" v-model="password" class="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password">
                  <span class="small text-danger">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
                <div class="mt-3">
                  <button type="submit" class="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn" >SIGN IN</button>
                  <p class="text-danger text-center">{{ failed }}</p>
                </div>
                <div class="text-center mt-4 font-weight-light"> Don't have an account? 
                  <router-link to="/register" class="text-primary">Create</router-link>
                </div>
              </form>
            </ValidationObserver>
          </div>
        <!-- </div> -->
      <!-- </div> -->
    <!-- </div> -->
    <!-- content-wrapper ends -->
  </div>
</template>

<script>
import { mapState } from 'vuex';
import User from '../../api/User'

export default {
  data() {
    return {
      email: "",
      password: "",
      failed: null,
    }
  },
  computed: {
    // ...mapState('user', ['authData'])
  },
  methods: {
    onSubmit() {
      const dataSend = {
        email: this.email,
        password: this.password,
      }
      // console.log(dataSend)
      this.$store.dispatch('user/login', dataSend)
      // .then((resp) => {
      //   console.log("wwwwwwwww",resp)
      //     if (resp.status === 200) {
            localStorage.setItem('auth', 'true')
            this.$router.push({ name: 'Summary' })
      //     } 
      //     else {
      //       console.log('Register Error')
      //       this.failed = error.response.data.message
      //     }
      // })
      // .catch(err => {
      //   console.log("error ====>", err)
      //   this.failed = err.response.data.message
      // })
    }
  }
};
</script>

<style>

</style>