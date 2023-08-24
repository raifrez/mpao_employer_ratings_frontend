<template>
    <div class="row">
        <h1>Dashboard</h1>
        <div class="card py-3 px-3">
          <div class="card-title">Top rated Employers</div>
            <div v-for="rating in topRatings" :key="rating.id">
              <strong>{{ rating.employer_name }}</strong>
              <div>
                points: {{ rating.points }}
              </div>
              <div>
                stars: {{ rating.star_rating_details.value }}
              </div>
            </div>
        </div>
        <div class="card py-3 px-3">
          <div class="card-title">Least rated Employers</div>
            <div v-for="rating in bottomRatings" :key="rating.id">
              <strong>{{ rating.employer_name }}</strong>
              <div>
                points: {{ rating.points }}
              </div>
              <div>
                stars: {{ rating.star_rating_details.value }}
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
      topRatings: [],
      bottomRatings: []
    };
  },
  mounted () {
    this.getData()
  },
  methods: {
    async getData() {
      try {
        const response = await axios.get(
          "/main/ratings/top/"
        );
        // JSON responses are automatically parsed.
        this.topRatings = response.data;
      } catch (error) {
        console.log(error);
      }
      try {
        const response = await axios.get(
          "/main/ratings/bottom/"
        );
        // JSON responses are automatically parsed.
        this.bottomRatings = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
</style>