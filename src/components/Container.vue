<template>
  <div class="flex-container">
      <div class="flex-item" id="item-1">
          <Spanish 
          :spanish_text=object.spanishVerb 
          @guess='checkGuess' 
          @reset='resetGuess' 
          />
      </div>
      <div class="flex-item" id="item-2">
          <English 
            :spanish_text=object.spanishVerb 
            :showAnswer=object.showAnswer 
            :clearLetters=clearLetters
            />
      </div>
  </div>
</template>

<script>
import Spanish from "./Spanish.vue"
import English from "./English.vue"
import { random } from "../scripts/spanish/random.js"
export default {
    components: {Spanish, English},
    data () { 
        return {
            //spanishVerb,
            //showAnswer: false
            object: {},
            clearLetters: 0
        }
    },
    methods: {
        checkGuess: function (guess) {
            this.clearLetters += 1;
            if (guess == this.object.spanishVerb.english) {
                this.object.showAnswer = true
            } else {
                this.object.showAnswer = false
            }
        },
        resetGuess: function () {
            console.log(random())
            this.object.spanishVerb = random();
            this.object.showAnswer = false;
        }
    },
    beforeMount() {
        this.object.showAnswer = false;
        this.object.spanishVerb = random()
    },
}
</script>

<style>
    .flex-container {
        display: flex;
        height: 100%;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
    }

    .grid-item {
        height: 100%;
    }

    #item-1 {
        width: 45%;
        height: 20em;
    }

    #item-2 {
        width: 45%;
        height: 20em;
    }
</style>