<template>
  <b-modal id="modal-add-student" title="Student" size="xl" scrollable hide-footer>
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
                <ValidationProvider v-slot="{ errors }" name="Name" rules="required">
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
          SUBMIT
        </button>
      </form>
    </ValidationObserver>
  </b-modal>
  
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
  data() {
    return {
      id: null,
      nis: null,
      // nama: null,
      id_kelas: null,
      alamat: null,
      no_telp: null,
      id_spp: null,

      name: '',
      email: '',
      password: '',
      password_confirmation: '',
    }
  },
  computed: {
    ...mapState('classroom', ['classrooms']),
  },
  methods: {
    ...mapActions('classroom', ['getClassrooms']),
    resetForm() {
      this.tahun = ''
      this.nominal = ''
      this.id = ''
      this.nis = ''
      this.name = ''
      this.id_kelas = ''
      this.alamat = ''
      this.no_telp = ''
      // this.id_spp = ''
    },
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
      };
      this.$store
        .dispatch('user/register', dataSend)
        .then((resp) => {
          console.log(resp)
          if (resp.status === 200) {
            this.$bvModal.hide('modal-add-student');
            this.$store.dispatch('student/getStudents');
            this.resetForm();
            Swal.fire(`Success`, `Data has been added!`, 'success');
          } else {
            console.log('Add error')
            Swal.fire(`Failed`, `Something Went Wrong!!`, 'error');
          }
        })
        .catch((err) => {
          console.log(err);
          Swal.fire(`Failed`, `Something Went Wrong!!`, 'error');
        });
    },
  },
  mounted() {
    this.getClassrooms()
    // this.getTuitions()
  }
}
</script>

<style>

</style>