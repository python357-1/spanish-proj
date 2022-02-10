<template>
  <h1 id="header">Learn Spanish!</h1>
  <Container/>
</template>

<script>
import Container from "./components/Container.vue";
export default {
  components: { Container }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 25em;
}

#header {
  background-color: #7D84B2;
  margin: 0px;
  padding: 0.5% 0px;
  border: 7px solid #2D3142;
  border-radius: 8px;
  color: #FCFAFA;
  font-size: 250%;
}

:root {
  --font-color-1: #FCFAFA;
  --foreground-color-1: #2D3142;
  --foreground-color-2: #EF8354;
  --background-color: #7D84B2;
}
</style>
