<template>
  <b-modal id="modal-edit-major" title="Major" scrollable hide-footer @show="setData()">
    <ValidationObserver v-slot="{ handleSubmit }">
      <b-form ref="" @submit.prevent="handleSubmit(onSubmit)">
          <!-- Nama Jurusan -->
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
              <span class="small text-danger">{{ errors[0] }}</span>
            </ValidationProvider>
          </b-form-group>
          <!-- Deskripsi -->
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
              <span class="small text-danger">{{ errors[0] }}</span>
            </ValidationProvider>
          </b-form-group>
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
    ...mapState('major', ['dataUpdate'])
  },
  methods: {
    onSubmit() {
      const dataSend = {
        nama_jurusan: this.nama_jurusan,
        deskripsi: this.deskripsi,
      };
      this.$store
        .dispatch('major/updateMajor', {
          id: this.dataUpdate.id,
          data: dataSend,
        })
        .then((resp) => {
          console.log(resp)
          if (resp.status === 200) {
            this.$bvModal.hide('modal-edit-major');
            this.$store.dispatch('major/getMajors');
            Swal.fire('Updated !!', 'Majors has been updated ', 'success');
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
      this.nama_jurusan = this.dataUpdate.nama_jurusan;
      this.deskripsi = this.dataUpdate.deskripsi;
    }
  }
}
</script>

<style>

</style>