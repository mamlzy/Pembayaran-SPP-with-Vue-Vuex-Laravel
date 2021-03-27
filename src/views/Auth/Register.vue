<template>
  <div class="container-fluid page-body-wrapper full-page-wrapper">
    <div class="content-wrapper d-flex align-items-center auth">
      <div class="row flex-grow">
        <div class="col-lg-4 mx-auto">
          <div class="auth-form-light text-left p-5">
            <div class="brand-logo">
              <!-- <img src="../../assets/images/logo.svg"> -->
            </div>
            <h4>New here?</h4>
            <h6 class="font-weight-light">Signing up is easy. It only takes a few steps</h6>
            <ValidationObserver v-slot="{ handleSubmit }">
              <form class="pt-3" ref="" @submit.prevent="handleSubmit(onSubmit)">
                <div class="form-group">
                  <ValidationProvider v-slot="{ errors }" name="Name" rules="required|min:3">
                    <input type="text" v-model="name" class="form-control form-control-lg" id="exampleInputUsername1" placeholder="Name">
                    <span class="small text-danger">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
                <div class="form-group">
                  <ValidationProvider v-slot="{ errors }" name="Email" rules="required|email">
                    <input type="email" v-model="email" class="form-control form-control-lg" id="exampleInputEmail1" placeholder="Email">
                    <span class="small text-danger">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
                <div class="form-group">
                  <ValidationProvider v-slot="{ errors }" name="Password" rules="required">
                    <input type="password" v-model="password" class="form-control form-control-lg" placeholder="Password">
                    <span class="small text-danger">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
                <div class="form-group">
                  <ValidationProvider v-slot="{ errors }" name="Password Confirmation" rules="required">
                    <input type="password" v-model="password_confirmation" class="form-control form-control-lg" placeholder="Confirm Password">
                    <span class="small text-danger">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
                <div class="mt-3">
                  <button type="submit" class="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn">SIGN UP</button>
                </div>
              </form>
            </ValidationObserver>
              <div class="text-center mt-4 font-weight-light"> Already have an account? <a href="login.html" class="text-primary">Login</a>
              </div>
            
          </div>
        </div>
      </div>
    </div>
    <!-- content-wrapper ends -->
  </div>
</template>

<script>
import User from '../../api/User'

export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      errors: [],
    }
  },
  methods: {
    onSubmit() {
      const dataSend = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation,
      }
      this.$store
      .dispatch('user/register', dataSend)
      .then(() => {
        this.$router.push({ name: 'Login' })
      })
      .catch(error => {
        if(error.response.status === 422) {
          this.errors = error.response.data.errors
        }
      }) 
    }
  }
};
</script>

<style>

</style>