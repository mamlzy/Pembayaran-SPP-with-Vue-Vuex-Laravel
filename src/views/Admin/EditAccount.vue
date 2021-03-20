<template>
  <b-modal id="modal-edit-account" title="Account" scrollable hide-footer @show="setData()">
   <ValidationObserver v-slot="{ handleSubmit }">
      <b-form ref="" @submit.prevent="handleSubmit(onSubmit)">
          <!-- Name -->
          <b-row>
            <b-col cols="12">
              <b-form-group>
                <label for="">
                  <span class="text-danger">*</span>
                  Name :
                </label>
                <ValidationProvider v-slot="{ errors }" name="Name" rules="required|min:2">
                  <b-form-input
                    v-model="name"
                    type="text"
                    required
                    placeholder="Enter Name"
                  ></b-form-input>
                  <span class="small text-danger">{{ errors[0] }}</span>
                </ValidationProvider>
              </b-form-group>
            </b-col>
          </b-row>
          <!-- email -->
          <b-row>
            <b-col cols="12">
              <b-form-group>
                <label for="">
                  <span class="text-danger">*</span>
                  email :
                </label>
                <ValidationProvider v-slot="{ errors }" name="email" rules="required|email">
                  <b-form-input
                    v-model="email"
                    type="text"
                    required
                    placeholder="Enter Email"
                  ></b-form-input>
                  <span class="small text-danger">{{ errors[0] }}</span>
                </ValidationProvider>
              </b-form-group>
            </b-col>
          </b-row>
          <!-- Role -->
          <b-row>
            <b-col cols="12">
              <b-form-group>
                <label for="">
                  <span class="text-danger">*</span>
                  Role :
                </label>
                <ValidationProvider v-slot="{ errors }" name="role" rules="required">
                  <b-form-select
                    v-model="role"
                    :options="options"
                    required
                  >
                    <template #first>
                      <b-form-select-option :value="null" disabled>-- Please select an option --</b-form-select-option>
                    </template>
                  </b-form-select>
                  <span class="small text-danger">{{ errors[0] }}</span>
                </ValidationProvider>
              </b-form-group>
            </b-col>
          </b-row>
          <!-- Password -->
          <b-row>
            <b-col cols="12">
              <b-form-group>
                <label for="">
                  <span class="text-danger">*</span>
                  Password :
                </label>
                <ValidationProvider v-slot="{ errors }" name="password" rules="required|min:8">
                  <b-form-input
                    v-model="password"
                    type="password"
                    required
                    placeholder="Enter Password"
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
                  <span class="text-danger">*</span>
                  Password Confirmation :
                </label>
                <ValidationProvider v-slot="{ errors }" name="Password Confirmation" rules="required|min:8">
                  <b-form-input
                    v-model="password_confirmation"
                    type="password"
                    required
                    placeholder="Enter Password Confirmation"
                  ></b-form-input>
                  <span class="small text-danger">{{ errors[0] }}</span>
                </ValidationProvider>
              </b-form-group>
            </b-col>
          </b-row>
          <b-button class="btn btn-primary ml-auto float-right ml-4" type="submit" variant="light-primary">
            Submit
          </b-button>
      </b-form>
    </ValidationObserver>
  </b-modal>
  
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  data() {
    return {
      options: [
        { value: 'admin', text: 'Admin' },
        { value: 'officer', text: 'Officer' },
        { value: 'student', text: 'Student' },
      ],
      name: null,
      email: null,
      role: null,
      password: null,
      password_confirmation: null,
    }
  },
  computed: {
    ...mapState('user', ['dataUpdate','users']),
  },
  methods: {
    ...mapActions('user', ['getusers']),
    onSubmit() {
      const dataSend = {
        name: this.name,
        email: this.email,
        role: this.role,
        password: this.password,
      };
      this.$store
        .dispatch('user/updateUser', {
          id: this.dataUpdate.id,
          data: dataSend,
        })
        .then((resp) => {
          console.log(resp)
          if (resp.status === 200) {
            this.$bvModal.hide('modal-edit-account');
            this.$store.dispatch('user/getUsers');
            // this.$swal('Updated !!', 'Classrooms has been updated ', 'success');
            console.log('Update Success')
          } else {
            // this.$swal(`${resp.code}`, `${resp.error}`, 'error');
            console.log('update error')
          }
        })
        .catch((err) => {
          console.log(err);
          // this.$swal(`Gagal`, `Email atau nomor telepon sudah terdaftar`, 'error');
        });
    },

    setData() {
      this.name = this.dataUpdate.name;
      this.email = this.dataUpdate.email;
      this.password = this.dataUpdate.password;
      this.password_confirmation = this.dataUpdate.password_confirmation;
    }
  },
  // mounted(){
  //   this.getUsers()
  // }
}
</script>

<style>

</style>