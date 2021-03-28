<template>
  <div class="container-fluid page-body-wrapper full-page-wrapper pt-0">
    <div class="content-wrapper d-flex align-items-center auth pt-0 pb-0">
      <div class="row flex-grow">
        <div class="col-lg-10 mx-auto">
          <div class="auth-form-light text-left shadow-lg p-5">
            <!-- <div class="brand-logo">
              <img src="../../assets/images/logo.svg">
            </div> -->
            <div class="ml-3">
              <h4>New here?</h4>
              <h6 class="font-weight-light">Signing up is easy. It only takes a few steps</h6>
            </div>
            <ValidationObserver v-slot="{ handleSubmit }">
              <form class="pt-3" ref="" @submit.prevent="handleSubmit(onSubmit)">
                <div class="d-flex justify-content-between">
                  <div class="col-md-6">
                    <!-- NISN -->
                    <b-form-group>
                      <label for="">
                        <span class="text-danger">*</span>
                        NISN :
                      </label>
                        <ValidationProvider v-slot="{ errors }" name="NISN" rules="required|numeric|min:11|max:11">
                          <b-form-input
                            id="input-nisn"
                            v-model="id"
                            type="number"
                            required
                            placeholder="Enter nisn"
                          ></b-form-input>
                          <span class="small text-danger">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </b-form-group>
                    <!-- NIS -->
                    <b-form-group>
                      <label for="">
                        <span class="text-danger">*</span>
                        NIS :
                      </label>
                        <ValidationProvider v-slot="{ errors }" name="nis" rules="required|numeric|min:8|max:8">
                          <b-form-input
                            id="input-nis"
                            v-model="nis"
                            type="text"
                            required
                            placeholder="Enter nis"
                          ></b-form-input>
                          <span class="small text-danger">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </b-form-group>
                    <!-- Kelas -->
                    <b-form-group>
                      <label for="">
                        <span class="text-danger">*</span>
                        Kelas :
                      </label>
                        <ValidationProvider v-slot="{ errors }" name="id_kelas" rules="numeric|required">
                          <b-form-select
                            id="input-3"
                            class="text-dark"
                            v-model="id_kelas"
                            :options="classrooms"
                            value-field="id"
                            text-field="nama_kelas"
                            required
                          >
                            <template #first>
                              <b-form-select-option :value="null" disabled>-- Please select an option --</b-form-select-option>
                            </template>
                          </b-form-select>
                          <span class="small text-danger">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </b-form-group>
                    <!-- Alamat -->
                    <b-form-group>
                      <label for="">
                        <span class="text-danger">*</span>
                        Alamat :
                      </label>
                        <ValidationProvider v-slot="{ errors }" name="alamat" rules="required">
                          <b-form-input
                            id="input-alamat"
                            v-model="alamat"
                            type="text"
                            required
                            placeholder="Enter alamat"
                          ></b-form-input>
                          <span class="small text-danger">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </b-form-group>
                    <!-- NO Telepon -->
                    <b-form-group>
                      <label for="">
                        <span class="text-danger">*</span>
                        No Telepon :
                      </label>
                        <ValidationProvider v-slot="{ errors }" name="Phone Number" rules="required">
                          <b-form-input
                            id="input-no-telp"
                            v-model="no_telp"
                            type="text"
                            required
                            placeholder="Enter nomor telepon"
                          ></b-form-input>
                          <span class="small text-danger">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </b-form-group>
                  </div>
                  <div class="col-md-6">
                    <!-- <div class="form-group">
                      <label for="">
                        <span class="text-danger">*</span>
                        Nama :
                      </label>
                      <ValidationProvider v-slot="{ errors }" name="Name" rules="required|min:3">
                        <input type="text" v-model="name" class="form-control form-control-lg" id="exampleInputUsername1" placeholder="Name">
                        <span class="small text-danger">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div> -->
                    <!-- Nama -->
                    <b-form-group>
                      <label for="">
                        <span class="text-danger">*</span>
                        Nama :
                      </label>
                        <ValidationProvider v-slot="{ errors }" name="nama" rules="required">
                          <b-form-input
                            id="input-nama"
                            v-model="name"
                            type="text"
                            required
                            placeholder="Enter nama"
                          ></b-form-input>
                          <span class="small text-danger">{{ errors[0] }}</span>
                          </ValidationProvider>
                    </b-form-group>
                    <div class="form-group">
                      <label for="">
                        <span class="text-danger">*</span>
                        Email :
                      </label>
                      <ValidationProvider v-slot="{ errors }" name="Email" rules="required|email">
                        <input type="email" v-model="email" class="form-control form-control-lg" id="exampleInputEmail1" placeholder="Email">
                        <span class="small text-danger">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                    <div class="form-group">
                      <label for="">
                        <span class="text-danger">*</span>
                        Password :
                      </label>
                      <ValidationProvider v-slot="{ errors }" name="Password" rules="required">
                        <input type="password" v-model="password" class="form-control form-control-lg" placeholder="Password">
                        <span class="small text-danger">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                    <div class="form-group">
                      <label for="">
                        <span class="text-danger">*</span>
                        Confirm Password :
                      </label>
                      <ValidationProvider v-slot="{ errors }" name="Password Confirmation" rules="required">
                        <input type="password" v-model="password_confirmation" class="form-control form-control-lg" placeholder="Confirm Password">
                        <span class="small text-danger">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                  </div>
                </div>
                <button type="submit" class="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn">
                  SIGN UP
                </button>
              </form>
            </ValidationObserver>
              <div class="text-center mt-4 font-weight-light"> Already have an account? 
                <router-link to="/login" class="text-primary">Login</router-link>
              </div>
            
          </div>
        </div>
      </div>
    </div>
    <!-- content-wrapper ends -->
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      errors: [],

      id: null,
      nis: null,
      // nama: null,
      id_kelas: null,
      alamat: null,
      no_telp: null,
      id_spp: null,
    }
  },
  computed: {
    ...mapState('classroom', ['classrooms']),
  },
  methods: {
    ...mapActions('classroom', ['getClassrooms']),
    onSubmit() {
      const dataSend = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation,

        id: this.id,
        nis: this.nis,
        // nama: this.nama,
        id_kelas: this.id_kelas,
        alamat: this.alamat,
        no_telp: this.no_telp,
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
  },
  mounted() {
    this.getClassrooms()
  }
};
</script>

<style scoped>
.content-wrapper {
  background: -webkit-gradient(linear, left top, right top, from(#da8cff), to(#9a55ff)) !important;
  background: linear-gradient(to right, #da8cff, #9a55ff) !important;
}
</style>