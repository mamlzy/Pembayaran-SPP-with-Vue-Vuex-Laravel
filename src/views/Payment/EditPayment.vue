<template>
  <b-modal id="modal-edit-payment" title="Payment" scrollable hide-footer @show="setData()">
    <ValidationObserver v-slot="{ handleSubmit }">
      <b-form ref="" @submit.prevent="handleSubmit(onSubmit)">
          <!-- Nama Petugas -->
          <b-form-group>
            <label for="">
              <span class="text-danger">*</span>
              Nama Petugas :
            </label>
            <ValidationProvider v-slot="{ errors }" name="Nama Petugas" rules="required">
              <b-form-input
                id="input-"
                v-model="id_user"
                type="text"
                required
                disabled
                placeholder="Enter Nama Petugas"
              ></b-form-input>
              <span class="small text-danger">{{ errors[0] }}</span>
            </ValidationProvider>
          </b-form-group>
          <!-- Siswa -->
          <b-form-group>
            <label for="">
              <span class="text-danger">*</span>
              Siswa :
            </label>
            <ValidationProvider v-slot="{ errors }" name="Siswa" rules="required">
              <b-form-select
                id="input-3"
                v-model="nisn"
                :options="students"
                value-field="id"
                text-field="nama"
                required
              >
                <template #first>
                  <b-form-select-option :value="null" disabled>-- Please select an option --</b-form-select-option>
                </template>
              </b-form-select>
              <span class="small text-danger">{{ errors[0] }}</span>
            </ValidationProvider>
          </b-form-group>
          <!-- Tanggal Bayar -->
          <b-form-group>
            <label for="">
              <span class="text-danger">*</span>
              Tanggal Bayar :
            </label>
            <ValidationProvider v-slot="{ errors }" name="tgl_bayar" rules="required">
              <b-form-input
                id="input-tgl-bayar"
                v-model="tgl_bayar"
                type="text"
                required
                placeholder="Enter Tanggal Bayar"
              ></b-form-input>
              <span class="small text-danger">{{ errors[0] }}</span>
            </ValidationProvider>
          </b-form-group>
          <!-- Bulan Bayar -->
          <b-form-group>
            <label for="">
              <span class="text-danger">*</span>
              Bulan Bayar :
            </label>
            <ValidationProvider v-slot="{ errors }" name="bulan_bayar" rules="required">
              <b-form-input
                id="input-bulan-bayar"
                v-model="bulan_bayar"
                type="text"
                required
                placeholder="Enter Bulan Bayar"
              ></b-form-input>
              <span class="small text-danger">{{ errors[0] }}</span>
            </ValidationProvider>
          </b-form-group>
          <!-- Tahun Bayar -->
          <b-form-group>
            <label for="">
              <span class="text-danger">*</span>
              Tahun Bayar :
            </label>
            <ValidationProvider v-slot="{ errors }" name="tahun_bayar" rules="required|numeric">
              <b-form-input
                id="input-tahun-bayar"
                v-model="tahun_bayar"
                type="text"
                required
                placeholder="Enter Tahun Bayar"
              ></b-form-input>
              <span class="small text-danger">{{ errors[0] }}</span>
            </ValidationProvider>
          </b-form-group>
          <!-- SPP -->
          <b-form-group>
            <label for="">
              <span class="text-danger">*</span>
              SPP :
            </label>
            <ValidationProvider v-slot="{ errors }" name="spp" rules="required|numeric">
              <b-form-select
                id="input-3"
                v-model="id_spp"
                :options="tuitions"
                value-field="id"
                text-field="nominal"
                required
              >
                <template #first>
                  <b-form-select-option :value="null" disabled>-- Please select an option --</b-form-select-option>
                </template>
              </b-form-select>
              <span class="small text-danger">{{ errors[0] }}</span>
            </ValidationProvider>
          </b-form-group>
          <!-- Jumlah Bayar -->
          <!-- <b-row>
            <b-col cols="12">
              <b-form-group>
                <label for="">
                  <span class="text-danger">*</span>
                  Jumlah Bayar :
                </label>
                <ValidationProvider v-slot="{ errors }" name="jumlah_bayar" rules="required">
                  <b-form-input
                    id="input-jumlah-bayar"
                    v-model="jumlah_bayar"
                    type="text"
                    required
                    placeholder="Enter Jumlah Bayar"
                  ></b-form-input>
                  <span class="small text-danger">{{ errors[0] }}</span>
                </ValidationProvider>
              </b-form-group> -->
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
      id_user: null,
      nisn: null,
      tgl_bayar: null,
      bulan_bayar: null,
      tahun_bayar: null,
      id_spp: null,
      jumlah_bayar: null,
    }
  },
  computed: {
    ...mapState('payment', ['dataUpdate']),
    ...mapState('user', ['users','authData']),
    ...mapState('student', ['students']),
    ...mapState('tuition', ['tuitions']),
  },
  methods: {
    ...mapActions('user', ['getUsers','getAuth']),
    ...mapActions('student', ['getStudents']),
    ...mapActions('tuition', ['getTuitions']),
    onSubmit() {
      // console.log('submitted')
      const dataSend = {
        id_user: this.authData.id,
        nisn: this.nisn,
        tgl_bayar: this.tgl_bayar,
        bulan_bayar: this.bulan_bayar,
        tahun_bayar: this.tahun_bayar,
        id_spp: this.id_spp,
        jumlah_bayar: this.jumlah_bayar,
      };
      console.log("DATA SEND ==>", dataSend)
      this.$store
        .dispatch('payment/updatePayment', {
          id: this.dataUpdate.id,
          data: dataSend,
        })
        .then((resp) => {
          console.log(resp)
          if (resp.status === 200) {
            this.$bvModal.hide('modal-edit-payment');
            this.$store.dispatch('payment/getPayments');
            Swal.fire('Updated !!', 'Payments has been updated ', 'success');
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
      this.id_user = this.authData.name
      this.nisn = this.dataUpdate.nisn
      this.tgl_bayar = this.dataUpdate.tgl_bayar
      this.bulan_bayar = this.dataUpdate.bulan_bayar
      this.tahun_bayar = this.dataUpdate.tahun_bayar
      this.id_spp = this.dataUpdate.id_spp
      this.jumlah_bayar = this.dataUpdate.jumlah_bayar
    }
  },
  mounted() {
    this.getAuth()
    this.getUsers()
    this.getStudents()
    this.getTuitions()
  }
}
</script>

<style>

</style>