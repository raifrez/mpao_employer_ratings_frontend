<template>
  <div class="about">
    <h1>Employers</h1>
    <div>
        <ul class="list-group list-group-flush">
            <li v-for="employer in employers" :key="employer.id" class="list-group-item">{{ employer.name }}</li>
        </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      employers: [],
    };
  },
  mounted () {
    this.getData()
  },
  methods: {
    async getData() {
      try {
        const response = await axios.get(
          "/main/employers/"
        );
        // JSON responses are automatically parsed.
        this.employers = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
</style>
