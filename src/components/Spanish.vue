<template>
    <div id='container'>
      <h1> {{spanish_text.spanish}} </h1>
      <input type="text" name="guess" id="guess" v-model='guess'>
      <br/>
      <div class='button-container'>
        <input 
            type="button" value="Guess" 
            class='button' @click='this.$emit("guess", guess)'
        >
        <input 
            @click='newPhrase'
            type="button" 
            class='button' 
            value="New Phrase" 
        >
      </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            guess: ''
        }
    },
    props: ['spanish_text'],
    emits: ['guess', 'reset'],
    methods: {
        newPhrase: function newPhrase() {
            // reset text in input
            this.guess = ''
            // emit
            this.$emit('reset')
            //  reset english box
            //  find new random spanish word
        }
    }
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

    .button {
        padding: 5px;
        font-size: 1.25em;
        margin: 5% 2%;
        display: inline-block;
    }

    .button-container {
        width: 100%;
    }
</style>