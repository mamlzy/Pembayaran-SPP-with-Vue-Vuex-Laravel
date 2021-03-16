<template>
  <b-modal id="modal-add-student" scrollable hide-footer>
    <ValidationObserver v-slot="{ handleSubmit }">
      <b-form ref="" @submit.prevent="handleSubmit(onSubmit)">
          <!-- NISN -->
          <b-row>
            <b-col cols="12">
              <b-form-group>
                <label for="">
                  <span class="text-danger">*</span>
                  NISN :
                </label>
                  <ValidationProvider v-slot="{ errors }" name="id" rules="required|numeric|min:11|max:11">
                    <b-form-input
                      id="input-nisn"
                      v-model="id"
                      type="number"
                      required
                      placeholder="Enter nisn"
                    ></b-form-input>
                    <span>{{ errors[0] }}</span>
                  </ValidationProvider>
              </b-form-group>
            </b-col>
          </b-row>
          <!-- NIS -->
          <b-row>
            <b-col cols="12">
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
                    <span>{{ errors[0] }}</span>
                  </ValidationProvider>
              </b-form-group>
            </b-col>
          </b-row>
          <!-- Nama -->
          <b-row>
            <b-col cols="12">
              <b-form-group>
                <label for="">
                  <span class="text-danger">*</span>
                  Nama :
                </label>
                  <ValidationProvider v-slot="{ errors }" name="nama" rules="required">
                    <b-form-input
                      id="input-nama"
                      v-model="nama"
                      type="text"
                      required
                      placeholder="Enter nama"
                    ></b-form-input>
                    <span>{{ errors[0] }}</span>
                    </ValidationProvider>
              </b-form-group>
            </b-col>
          </b-row>
          <!-- Kelas -->
          <b-row>
            <b-col cols="12">
              <b-form-group>
                <label for="">
                  <span class="text-danger">*</span>
                  Kelas :
                </label>
                  <ValidationProvider v-slot="{ errors }" name="id_kelas" rules="numeric|required">
                    <b-form-input
                      id="input-kelas"
                      v-model="id_kelas"
                      type="number"
                      required
                      placeholder="Enter kelas"
                    ></b-form-input>
                    <span>{{ errors[0] }}</span>
                  </ValidationProvider>
              </b-form-group>
            </b-col>
          </b-row>
          <!-- Alamat -->
          <b-row>
            <b-col cols="12">
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
                    <span>{{ errors[0] }}</span>
                  </ValidationProvider>
              </b-form-group>
            </b-col>
          </b-row>
          <!-- NO Telepon -->
          <b-row>
            <b-col cols="12">
              <b-form-group>
                <label for="">
                  <span class="text-danger">*</span>
                  No Telepon :
                </label>
                  <ValidationProvider v-slot="{ errors }" name="no_telp" rules="required">
                    <b-form-input
                      id="input-no-telp"
                      v-model="no_telp"
                      type="text"
                      required
                      placeholder="Enter nomor telepon"
                    ></b-form-input>
                    <span>{{ errors[0] }}</span>
                  </ValidationProvider>
              </b-form-group>
            </b-col>
          </b-row>
          <!-- SPP -->
          <b-row>
            <b-col cols="12">
              <b-form-group>
                <label for="">
                  <span class="text-danger">*</span>
                  SPP :
                </label>
                  <ValidationProvider v-slot="{ errors }" name="id_spp" rules="numeric|required">
                    <b-form-input
                      id="input-spp"
                      v-model="id_spp"
                      type="number"
                      required
                      placeholder="Enter spp"
                    ></b-form-input>
                    <span>{{ errors[0] }}</span>
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
import {mapState} from 'vuex'

export default {
  data() {
    return {
      id: null,
      nis: null,
      nama: null,
      id_kelas: null,
      alamat: null,
      no_telp: null,
      id_spp: null,
    }
  },
  computed: {
    // ...mapState()
  },
  methods: {
    resetForm() {
      this.tahun = ''
      this.nominal = ''
      this.id = ''
      this.nis = ''
      this.nama = ''
      this.id_kelas = ''
      this.alamat = ''
      this.no_telp = ''
      this.id_spp = ''
    },
    onSubmit() {
      const dataSend = {
        id: this.id,
        nis: this.nis,
        nama: this.nama,
        id_kelas: this.id_kelas,
        alamat: this.alamat,
        no_telp: this.no_telp,
        id_spp: this.id_spp,
      };
      this.$store
        .dispatch('student/addStudent', dataSend)
        .then((resp) => {
          if (resp.status === 200) {
            this.$bvModal.hide('modal-add-student');
            this.$store.dispatch('student/getStudents');
            // this.$swal('Updated !!', 'AUDIENCES has been updated ', 'success');
            this.resetForm();
          } else {
            console.log('Add error')
            // this.$swal(`${resp.code}`, `${resp.error}`, 'error');
          }
        })
        .catch((err) => {
          console.log(err);
          // this.$swal(`Gagal`, `Email atau nomor telepon sudah terdaftar`, 'error');
        });
    },
  }
}
</script>

<style>

</style>