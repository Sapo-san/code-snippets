<template>
  <div class="page">
    <h1>Focusing Input with JS in Vue3</h1>
    <div class="example">
      <label>Example 1:</label>
      <input id="inputToFocus1" type="text"/>
      <button @click="focusOnInput1">Focus on Input 1 </button>
    </div>
    <div class="example">
      <label>Example 2:</label>
      <input v-if="showInput2" id="inputToFocus2" type="text"/>
      <button @click="focusOnInput2orHideIt">{{!showInput2 ? "Show Input 2 and focus it": "Hide Input 2"}}</button>
    </div>
      
  </div>
</template>

<script>
export default {
  name: "focus on input",
  data() {
    return {
      showInput2: false
    }
  },
  methods: {
    focusOnInput1() {
      /* This works if input is already rendered when calling the method */
      const input = document.getElementById('inputToFocus1')
      input.focus()
    },
    focusOnInput2orHideIt() {
      /* If input if not already rendered, wait for next tick to focus it */
      this.showInput2 = !this.showInput2

      if (this.showInput2) { 
        this.$nextTick(() => {
          const input = document.getElementById('inputToFocus2')
          input.focus()
        })
      }
    }
  }
}
</script>
<style>
html, body {
  margin: 0;
  padding: 0;
  background-color: rgb(203, 173, 152); 
}

input, button {
  margin: 0.5em;
}

.page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100vw;
}

.example {
  display: flex;
  flex-direction: column;
  align-items: justify-content;
  border: 2px solid rgb(0, 0, 0);
  padding: 1em;
  margin: 0.5em;
  border-radius: 2em;
  min-width: 30em;
}

</style>
