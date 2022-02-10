<template>
  <div class="flex-container">
      <div class="flex-item" id="item-1">
          <Spanish :spanish_text=spanish_verb />
      </div>
      <div class="flex-item" id="item-2">
          <English :spanish_text=spanish_verb />
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
            spanish_verb: random()
        }
    }
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