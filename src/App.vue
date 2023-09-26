<template>
  <div>
    <h1>The Breaking Bad Characters</h1>
    <ul v-if="characters">
      <li v-for="character in characters" :key="character.char_id">
        {{ character.name }} - {{ character.nickname }}
      </li>
    </ul>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      characters: null
    }
  },
  mounted() {
    
    this.$axios.get('/characters')
      .then(response => {
        this.characters = response.data
      })
      .catch(error => {
        console.error(error)
      })
  }
}
</script>
