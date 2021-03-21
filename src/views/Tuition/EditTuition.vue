<template>
  <b-modal id="modal-edit-tuition" title="Tuition" scrollable hide-footer @show="setData()">
    <ValidationObserver v-slot="{ handleSubmit }">
      <b-form ref="" @submit.prevent="handleSubmit(onSubmit)">
          <!-- Tahun -->
          <b-row>
            <b-col cols="12">
              <b-form-group>
                <label for="">
                  <span class="text-danger">*</span>
                  Tahun :
                </label>
                <ValidationProvider v-slot="{ errors }" name="tahun" rules="required|min:4">
                  <b-form-input
                    id="input-tahun"
                    v-model="tahun"
                    type="text"
                    required
                    placeholder="Enter Tahun"
                  ></b-form-input>
                  <span class="small text-danger">{{ errors[0] }}</span>
                </ValidationProvider>
              </b-form-group>
            </b-col>
          </b-row>
          <!-- Nominal -->
          <b-row>
            <b-col cols="12">
              <b-form-group>
                <label for="">
                  <span class="text-danger">*</span>
                  Nominal :
                </label>
                <ValidationProvider v-slot="{ errors }" name="nominal" rules="required">
                  <b-form-input
                    id="input-nominal"
                    v-model="nominal"
                    type="text"
                    required
                    placeholder="Enter Nominal"
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
import {mapState} from 'vuex'

export default {
  data() {
    return {
      tahun: null,
      nominal: null,
    }
  },
  computed: {
    ...mapState('tuition', ['dataUpdate'])
  },
  methods: {
    onSubmit() {
      const dataSend = {
        tahun: this.tahun,
        nominal: this.nominal,
      };
      this.$store
        .dispatch('tuition/updateTuition', {
          id: this.dataUpdate.id,
          data: dataSend,
        })
        .then((resp) => {
          console.log(resp)
          if (resp.status === 200) {
            this.$bvModal.hide('modal-edit-tuition');
            this.$store.dispatch('tuition/getTuitions');
            Swal.fire('Updated !!', 'Tuition has been updated ', 'success');
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
      this.tahun = this.dataUpdate.tahun;
      this.nominal = this.dataUpdate.nominal;
    }
  }
}
</script>

<style>

</style>