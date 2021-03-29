<template>
  <b-modal id="modal-detail-history" title="Detail History" size="xl" centered hide-footer>
    <div class="d-flex justify-content-center">
      <table class="table table-hover text-center">
          <tr>
            <th>Virtual Account</th>
            <th>Bank</th>
            <th>Gross Amount</th>
            <th>Status</th>
            <th>Payment Time</th>
          </tr>
        <tbody>
          <tr>
            <td>{{ history.va_number }}</td>
            <td>{{ history.gross_amount }}</td>
            <td>{{ history.bank }}</td>
            <td>
              <label 
              class="badge"
              :class="{
                'badge-success': history.transaction_status == 'settlement',
                'badge-warning': history.transaction_status == 'pending',
                'badge-danger': history.transaction_status == 'expire'
                }"
              >
                {{ history.transaction_status }}
              </label>
            </td>
            <td>{{ history.deadline }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </b-modal>
  
</template>

<script>
import {mapState} from 'vuex'

export default {
  props: ['history'],
  data() {
    return {
      
    }
  },
  computed: {
    
  },
  methods: {

  }
}
</script>

<style>

</style>