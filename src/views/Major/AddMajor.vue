<template>
  <b-modal id="modal-add-major" scrollable hide-footer>
    <ValidationObserver v-slot="{ handleSubmit }">
      <b-form ref="" @submit.prevent="handleSubmit(onSubmit)">
          <!-- Nama Jurusan -->
          <b-row>
            <b-col cols="12">
              <b-form-group>
                <label for="">
                  <span class="text-danger">*</span>
                  Nama Jurusan :
                </label>
                <ValidationProvider v-slot="{ errors }" name="nama_jurusan" rules="required|min:2">
                  <b-form-input
                    id="input-nama-jurusan"
                    v-model="nama_jurusan"
                    type="text"
                    required
                    placeholder="Enter Nama Jurusan"
                  ></b-form-input>
                  <span>{{ errors[0] }}</span>
                </ValidationProvider>
              </b-form-group>
            </b-col>
          </b-row>
          <!-- Deskripsi -->
          <b-row>
            <b-col cols="12">
              <b-form-group>
                <label for="">
                  <span class="text-danger">*</span>
                  Deskripsi :
                </label>
                <ValidationProvider v-slot="{ errors }" name="deskripsi" rules="required">
                  <b-form-input
                    id="input-deskripsi"
                    v-model="deskripsi"
                    type="text"
                    required
                    placeholder="Enter deskripsi"
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
      nama_jurusan: null,
      deskripsi: null,
    }
  },
  computed: {
    // ...mapState('student', ['dataUpdate'])
  },
  methods: {
    onSubmit() {
      const dataSend = {
        nama_jurusan: this.nama_jurusan,
        deskripsi: this.deskripsi,
      };
      this.$store
        .dispatch('major/addMajor', dataSend)
        .then((resp) => {
          if (resp.status === 200) {
            this.$bvModal.hide('modal-add-major');
            this.$store.dispatch('major/getMajors');
            // this.$swal('Updated !!', 'AUDIENCES has been updated ', 'success');
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