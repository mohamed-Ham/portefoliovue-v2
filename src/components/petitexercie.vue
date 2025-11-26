<template>
    <h2>Liste:</h2>
    <ul>
      <li v-for="mot in liste" :key="mot">
        {{ mot }}
      </li>
    </ul>

    <input v-model="elem" type="text">
    
    <button v-on:click="danstab">
      ajt a la liste 
    </button>
</template>

<script>
export default {
  data() {
    return {
      elem: '', 
      liste: [] 
    }
  },
  
  methods: {
    danstab() {
      this.liste.push(this.elem);
      
    }
  }
}
</script>