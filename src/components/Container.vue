<template>
  <div class="flex-container">
      <div class="flex-item" id="item-1">
          <Spanish :spanish_text=object.spanishVerb 
          @guess='checkGuess' 
          @reset='resetGuess' 
          />
      </div>
      <div class="flex-item" id="item-2">
          <English 
            :spanish_text=object.spanishVerb 
            :showAnswer=showAnswer 
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
        let spanishVerb = random()
        return {
            //spanishVerb,
            //showAnswer: false
            object: {
                showAnswer: false,
                spanishVerb: spanishVerb
            }
        }
    },
    methods: {
        checkGuess: function (guess) {
            if (guess == this.object.spanishVerb.english) {
                this.object.showAnswer = true
            } else {
                this.object.showAnswer = false
            }
        },
        resetGuess: function () {
            console.log(this.object.spanishVerb)
            this.object.spanishVerb = random();
            console.log(this.object.spanishVerb)
            this.object.showAnswer = false;
        }
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