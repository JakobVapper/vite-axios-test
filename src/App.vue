<template>
  <div>
    <h1>OpenWeatherMap data</h1>
    <div v-if="weatherData">
      <p>Temperatuur: {{ weatherData.main.temp }} K</p>
      <p>Ilm: {{ weatherData.weather[0].description }}</p>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      weatherData: null
    }
  },
  mounted() {
    
    this.$axios.get('/weather', {
      params: {
        q: 'Kuressaare', 
        appid: '93d7a9d717166f5791ada2d735aae574'
      }
    })
      .then(response => {
        this.weatherData = response.data
      })
      .catch(error => {
        console.error(error)
      })
  }
}
</script>