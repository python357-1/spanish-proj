<template>
  <div id="container">
      <h1> you open </h1>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    #guess {
        width: 35%;
        height: 7%;
        text-align: center;
        font-size: 1.5em;
    }

    #container {
        border: 8px solid var(--foreground-color-1);
        border-radius: 50px;
        height: 100%;
        margin: 5% 1%;
        background-color: var(--background-color);
        color: var(--font-color-1);
        align-items: center;
        justify-content: center;
        display: flex;
        flex-direction: column;
    }

    #reset-button {
        padding: 5px;
        font-size: 1.25em;
        margin: 5%;
    }
</style>