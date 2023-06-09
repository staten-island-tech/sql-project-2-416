<template>
  <div class="buttondiv">
    <button class="buttonout" type="button">
      <button type="button" class="buttonin">Add to Cart</button>
    </button>
  </div>
</template>

<script>
import { userInformation } from '@/stores/users'
const userInfo = userInformation()
export default {
  setup() {
    return {}
    }
}
</script>

<style scoped>
html,
body,
* {
  margin: 0;
  padding: 0;
  font-size: 62.5%;
  font-family: 'Raleway', sans-serif;
}

.buttonin {
  font-size: 2.5rem;
  background-color: red;
  color: white;
  border: solid 3px red;
  padding: 1rem;
  border-radius: 4rem;
  transition: all 0.2s;
}

.buttonout {
  font-size: 2.5rem;
  margin: 2rem;
  background-color: white;
  border: solid 0.5px red;
  border-radius: 4rem;
  transition: all 0.2s;
}

.buttonin:hover {
  background-color: white;
  color: red;
}

.buttonout:hover {
  border: solid 6px red;
  padding: 10px;
  transform: scale(1.05);
  border: 1px solid rgba(0, 0, 0, 0);
  margin: 1.36rem;
}

.buttondiv {
  margin: 0.25rem;
}
</style>
