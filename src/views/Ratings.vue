<template>
    <div class="about">
        <h1>Ratings</h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Points</th>
                    <th scope="col">Stars</th>
                    <th scope="col">Standing</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="rating in ratings" :key="rating.id">
                    <th scope="row">{{ rating.id }}</th>
                    <td>{{ rating.employer_name }}</td>
                    <td>{{ rating.points }}</td>
                    <td>{{ rating.star_rating_details.value }}</td>
                    <td>{{ rating.star_rating_details.label }}</td>
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
      ratings: [],
    };
  },
  mounted () {
    this.getData()
  },
  methods: {
    async getData() {
      try {
        const response = await axios.get(
          "/main/ratings/"
        );
        // JSON responses are automatically parsed.
        this.ratings = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
</style>