<template>
    <div id='container'>
        <h1 v-if='showAnswer == false'> {{obfuscated_english}} </h1>
        <h1 v-if='showAnswer == true'> {{spanish_text.english}} </h1>
        <a>Solve</a>
    </div>
</template>

<script>
export default {
    props: ['spanish_text', 'showAnswer', 'clearLetters'],
    computed: {
        obfuscated_english: function() {
            let temp = this.spanish_text.english.split('')
            let obfuscated_arr = new Array();
            temp.forEach(letter => {
                if (letter != ' ') {
                    obfuscated_arr.push('_')
                } else {
                    obfuscated_arr.push(' ')
                }
            })
            for (let x = 0; x < this.clearLetters; x++) {
                obfuscated_arr[x] = temp[x]
            }
            
            return obfuscated_arr.join('')
        }
    },
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