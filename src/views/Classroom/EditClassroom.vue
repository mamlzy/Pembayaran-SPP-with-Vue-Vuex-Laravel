<template>
  <b-modal id="modal-edit-classroom" title="Class" scrollable hide-footer @show="setData()">
    <ValidationObserver v-slot="{ handleSubmit }">
      <b-form ref="" @submit.prevent="handleSubmit(onSubmit)">
          <!-- Nama Kelas -->
          <b-row>
            <b-col cols="12">
              <b-form-group>
                <label for="">
                  <span class="text-danger">*</span>
                  Nama Kelas :
                </label>
                <ValidationProvider v-slot="{ errors }" name="nama_kelas" rules="required|min:2">
                  <b-form-input
                    id="input-nama-kelas"
                    v-model="nama_kelas"
                    type="text"
                    required
                    placeholder="Enter Nama kelas"
                  ></b-form-input>
                  <span class="small text-danger">{{ errors[0] }}</span>
                </ValidationProvider>
              </b-form-group>
            </b-col>
          </b-row>
          <!-- Jurusan -->
          <b-row>
            <b-col cols="12">
              <b-form-group>
                <label for="">
                  <span class="text-danger">*</span>
                  Jurusan :
                </label>
                <ValidationProvider v-slot="{ errors }" name="jurusan" rules="required">
                  <!-- <b-form-input
                    id="input-jurusan"
                    v-model="id_jurusan"
                    type="text"
                    required
                    placeholder="Enter jurusan"
                  ></b-form-input> -->
                  <b-form-select
                    id="input-3"
                    v-model="id_jurusan"
                    :options="majors"
                    value-field="id"
                    text-field="nama_jurusan"
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
      nama_kelas: null,
      id_jurusan: null,
    }
  },
  computed: {
    ...mapState('classroom', ['dataUpdate','classrooms']),
    ...mapState('major', ['majors']),
  },
  methods: {
    ...mapActions('major', ['getMajors']),
    onSubmit() {
      const dataSend = {
        nama_kelas: this.nama_kelas,
        id_jurusan: this.id_jurusan,
      };
      this.$store
        .dispatch('classroom/updateClassroom', {
          id: this.dataUpdate.id,
          data: dataSend,
        })
        .then((resp) => {
          console.log(resp)
          if (resp.status === 200) {
            this.$bvModal.hide('modal-edit-classroom');
            this.$store.dispatch('classroom/getClassrooms');
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
      this.nama_kelas = this.dataUpdate.nama_kelas;
      this.id_jurusan = this.dataUpdate.id_jurusan;
    }
  },
  mounted(){
    this.getMajors()
  }
}
</script>

<style>

</style>