<template>
  <b-modal id="modal-edit-student" title="Student" scrollable hide-footer @show="setData()">
    <ValidationObserver v-slot="{ handleSubmit }">
      <b-form @submit.prevent="handleSubmit(onSubmit)">
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
                  <span class="small text-danger">{{ errors[0] }}</span>
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
                <ValidationProvider v-slot="{ errors }" name="nama" rules="required|min:3">
                  <b-form-input
                    id="input-nama"
                    v-model="nama"
                    type="text"
                    required
                    placeholder="Enter nama"
                  ></b-form-input>
                  <span class="small text-danger">{{ errors[0] }}</span>
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
                <ValidationProvider v-slot="{ errors }" name="id_kelas" rules="required">
                  <b-form-select
                      id="input-3"
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
                  <span class="small text-danger">{{ errors[0] }}</span>
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
                  NO Telepon :
                </label>
                <ValidationProvider v-slot="{ errors }" name="no_telp" rules="required|numeric">
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
      id: null,
      nis: null,
      nama: null,
      id_kelas: null,
      alamat: null,
      no_telp: null,
    }
  },
  computed: {
    ...mapState('student', ['dataUpdate']),
    ...mapState('classroom', ['classrooms']),
    ...mapState('tuition', ['tuitions']),
  },
  methods: {
    ...mapActions('classroom', ['getClassrooms']),
    ...mapActions('tuition', ['getTuitions']),
    onSubmit() {
      const dataSend = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation,

        nis: this.nis,
        nama: this.nama,
        id_kelas: this.id_kelas,
        alamat: this.alamat,
        no_telp: this.no_telp,
      };
      this.$store
        .dispatch('student/updateStudent', {
          id: this.dataUpdate.id,
          data: dataSend,
        })
        .then((resp) => {
          console.log(resp)
          if (resp.status === 200) {
            this.$bvModal.hide('modal-edit-student');
            this.$store.dispatch('student/getStudents');
            Swal.fire('Updated !!', 'Student has been updated ', 'success');
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
      this.id = this.dataUpdate.id;
      this.nis = this.dataUpdate.nis;
      this.nama = this.dataUpdate.nama;
      this.id_kelas = this.dataUpdate.id_kelas;
      this.alamat = this.dataUpdate.alamat;
      this.no_telp = this.dataUpdate.no_telp;
    }
  },
  mounted() {
    this.getClassrooms()
    this.getTuitions()
  }
}
</script>

<style>

</style>