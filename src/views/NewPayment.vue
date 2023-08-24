<template>
    <div class="row">
        <h1>Make Payment</h1>
        <div class="col-12">
            <div class="card py-3 px-3">
              <form>
                    <div class="mb-3">
                        <label for="employer" class="form-label">Employee</label>
                        <input :value="employer" type="text" class="form-control" id="employer" placeholder="search by name">
                    </div>
                    <div>
                        <div class="col-auto">
                            <a @click="getData()" class="btn btn-primary mb-3">Search</a>
                        </div>
                    </div>
              </form>
            </div>
        </div>
        <div class="col-12">
            <div class="card py-3 px-3" v-for="payment in payments" :key="payment.id">
                <strong>Due Date</strong>
                <span>payment.due_date</span>
                <div class="col-auto">
                    <button @click="getData()" class="btn btn-primary mb-3">Pay</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      payments: [],
      employer: "",
    };
  },
  methods: {
    async getData() {
      try {
        const response = await axios.get(
          `/main/payments/?employer=${this.employer}&due=true`
        );
        // JSON responses are automatically parsed.
        this.payments = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
</style>