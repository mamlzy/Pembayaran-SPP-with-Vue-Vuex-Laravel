<template>
<div>
  <div class="page-header">
    <h3 class="page-title">
      <span class="page-title-icon bg-gradient-primary text-white mr-2">
        <i class="mdi mdi-account"></i>
      </span>Profile</h3>
    <!-- <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">UI Elements</a></li>
        <li class="breadcrumb-item active" aria-current="page">Typography</li>
      </ol>
    </nav> -->
  </div>
  <div class="col-md-12 px-0">
    <div class="card shadow">
      <div class="card-body">
        <ValidationObserver v-slot="{ handleSubmit }">

          <b-form class="forms-sample" ref="" @submit.prevent="handleSubmit(onSubmit)">
            <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <ValidationProvider v-slot="{ errors }" name="Name" rules="required">
                        <label for="name">Name</label>
                        <input type="text" v-model="name" class="form-control" id="name" placeholder="Name">
                        <span class="small text-danger">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                    <div class="form-group">
                      <ValidationProvider v-slot="{ errors }" name="Email" rules="required">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" placeholder="Email" disabled>
                        <span class="small text-danger">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <!-- Old Password -->
                    <b-row>
                      <b-col cols="12">
                        <b-form-group>
                          <label for="">
                            Old Password :
                          </label>
                          <ValidationProvider v-slot="{ errors }" name="Old Password" rules="min:8">
                            <b-form-input
                              v-model="password"
                              type="password"
                              placeholder="Enter Old Password"
                            ></b-form-input>
                            <span class="small text-danger">{{ errors[0] }}</span>
                          </ValidationProvider>
                        </b-form-group>
                      </b-col>
                    </b-row>
                    <!-- New Password -->
                    <b-row>
                      <b-col cols="12">
                        <b-form-group>
                          <label for="">
                            New Password :
                          </label>
                          <ValidationProvider v-slot="{ errors }" name="New Password" rules="min:8">
                            <b-form-input
                              v-model="new_password"
                              type="password"
                              placeholder="Enter New Password"
                            ></b-form-input>
                            <span class="small text-danger">{{ errors[0] }}</span>
                          </ValidationProvider>
                        </b-form-group>
                      </b-col>
                    </b-row>
                    <!-- Password Confirmation -->
                    <b-row>
                      <b-col cols="12">
                        <b-form-group>
                          <label for="">
                            Password Confirmation :
                          </label>
                          <ValidationProvider v-slot="{ errors }" name="Password Confirmation" rules="min:8">
                            <b-form-input
                              v-model="new_password_confirmation"
                              type="password"
                              placeholder="Enter Password Confirmation"
                            ></b-form-input>
                            <span class="small text-danger">{{ errors[0] }}</span>
                          </ValidationProvider>
                        </b-form-group>
                      </b-col>
                    </b-row>
                    <div class="float-right">
                      <button class="btn btn-danger mr-2">Reset</button>
                      <button type="submit" class="btn btn-gradient-primary mr-2">Submit</button>
                      <!-- {{ authData }} -->
                    </div>
                  </div>
            </div>
          </b-form>
        
        </ValidationObserver>

      </div>
    </div>
  </div>
  
</div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  data() {
    return {
      name: null,
      email: null,
      role: null,
      password: null,
      new_password: null,
      new_password_confirmation: null,
    }
  },
  computed: {
    ...mapState('user', ['authData'])
  },
  methods: {
    ...mapActions('user', ['getAuth']),
    resetForm() {
      this.password = ''
      this.new_password = ''
      this.new_password_confirmation = ''
    },
    onSubmit() {
      const dataSend = {
        name: this.name,
        email: this.email,
        role: this.role,
        password: this.password,
        new_password: this.new_password,
        new_password_confirmation: this.new_password_confirmation,
      };
      console.log(dataSend)
      this.$store
        .dispatch('user/updateUser', {
          id: this.authData.id,
          data: dataSend,
        })
        .then((resp) => {
          console.log(resp)
          if (resp.status === 200) {
            this.$store.dispatch('user/getAuth');
            this.resetForm()
            Swal.fire(`Success`, `Profile has been updated!`, 'success');
            console.log('Update Success')
          } else {
            Swal.fire(`Failed`, `Something Went Wrong!!`, 'error');
            console.log('update error')
          }
        })
        .catch((err) => {
          console.log(err);
          Swal.fire(`Failed`, `Something Went Wrong!!`, 'error');
        });
    },
    setData() {
      this.name = this.authData.name;
      this.email = this.authData.email;
      this.role = this.authData.role;
    }
  },
  mounted() {
    this.getAuth()
    this.setData()
  }
}
</script>

<style>

</style>