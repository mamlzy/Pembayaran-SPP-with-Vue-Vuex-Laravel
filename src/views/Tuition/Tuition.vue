<template>
  <div class="card shadow mb-4">
    <div class="card-header py-3">
      <h4 class="m-0 font-weight-bold text-primary">SPP</h4>
    </div>
    <div class="card-body">
      <div>
        <button class="btn btn-primary mb-3" @click="openModalAdd()">Tambah Data</button>
      </div>
      <div>
        <vue-good-table
          :columns="columns"
          :rows="tuitions"
          :search-options="{
            enabled: true,
            placeholder: 'Search this table',
          }"
          :pagination-options="{
            enabled: true,
            mode: 'pages',
            perPage: 5
          }"> 
              <!-- if Empty -->
            <div slot="emptystate" class="text-center">
              Data Tidak Ditemukan
            </div>
            
            <!-- Custom Rows -->
            <template slot="table-row" slot-scope="props">
              <!-- Table Action -->
              <span v-if="props.column.field == 'action'">
                <button
                class="btn btn-success btn-sm btn-block"
                @click="openModalUpdate(props.row)"
                >
                  <i class=""></i>
                  Ubah
                </button>
                <button
                  class="btn btn-danger btn-sm btn-block"
                  @click="deleteTuition(props.row)"
                >
                  <i class=""></i>
                  Hapus
                </button>
              </span>
            </template>
          </vue-good-table>
      </div>
    </div>
    <EditTuition/>
    <AddTuition/>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import EditTuition from './EditTuition'
import AddTuition from './AddTuition'

export default {
  name: 'Tuition',
  components: {
    EditTuition,
    AddTuition
  },
  data(){
    return {
      columns: [
        {
          label: 'No',
          field: 'id_spp',
          thClass: 'bg-primary',
        },
        {
          label: 'Tahun',
          field: 'tahun',
          thClass: 'bg-primary',
        },
        {
          label: 'Nominal',
          field: 'nominal',
          thClass: 'bg-primary',
        },
        {
          label: 'Action',
          field: 'action',
          thClass: 'bg-primary',
        },
      ],
    };
  },
  computed: {
    ...mapState('tuition', ['tuitions'])
  },
  methods: {
    ...mapActions('tuition', ['getTuitions']),
    openModalAdd() {
      this.$bvModal.show('modal-add-tuition')
    },
    openModalUpdate(payload) {
      console.log("modal tuition")
      this.$store.commit('tuition/SET_DATA_UPDATE', payload)
      this.$bvModal.show('modal-edit-tuition')
    },
    deleteTuition(payload) {
      this.$store.dispatch('tuition/deleteTuition', payload)
      .then((resp) => {
        if (resp.status === 200) {
          this.$store.dispatch('tuition/getTuitions');
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
    }
  },
  mounted() {
    this.getTuitions()
  }
}
</script>

<style>

</style>