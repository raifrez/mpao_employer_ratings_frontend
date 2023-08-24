<template>
    <div class="about">
        <h1>Payments</h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Due Date</th>
                    <th scope="col">Paid Date</th>
                    <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="payment in payments" :key="payment.id">
                    <th scope="row">{{ payment.id }}</th>
                    <td>{{ payment.employer_name }}</td>
                    <td>{{ payment.amount }}</td>
                    <td>{{ payment.due_date }}</td>
                    <td>{{ payment.paid_date }}</td>
                    <td>{{ payment.paid_date ? 'PAID' : 'UNPAID' }}</td>
                </tr>
            </tbody>
            </table>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      payments: [],
    };
  },
  mounted () {
    this.getData()
  },
  methods: {
    async getData() {
      try {
        const response = await axios.get(
          "/main/payments/"
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