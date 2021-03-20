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
            
              <div class="form-group">
                <input type="text" v-model="form.name" class="form-control form-control-lg" id="exampleInputUsername1" placeholder="Name">
                <span class="text-danger" v-if="errors.name">
                {{ errors.name[0] }}
                </span>
              </div>
              <div class="form-group">
                <input type="email" v-model="form.email" class="form-control form-control-lg" id="exampleInputEmail1" placeholder="Email">
                <span class="text-danger" v-if="errors.email">
                {{ errors.email[0] }}
                </span>
              </div>
              <div class="form-group">
                <input type="password" v-model="form.password" class="form-control form-control-lg" placeholder="Password">
                <span class="text-danger" v-if="errors.password">
                {{ errors.password[0] }}
                </span>
              </div>
              <div class="form-group">
                <input type="password" v-model="form.password_confirmation" class="form-control form-control-lg" placeholder="Confirm Password">
                <span class="text-danger" v-if="errors.confirm_password">
                {{ errors.confirm_password[0] }}
                </span>
              </div>
              <!-- <div class="mb-4">
                <div class="form-check">
                  <label class="form-check-label text-muted">
                    <input type="checkbox" class="form-check-input"> I agree to all Terms &amp; Conditions <i class="input-helper"></i></label>
                </div>
              </div> -->
              <div class="mt-3">
                <button type="submit" @click.prevent="register()" class="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn">SIGN UP</button>
              </div>
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
      form:{
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
      },
      errors: [],
    }
  },
  methods: {
    register() {
      User.register(this.form)
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