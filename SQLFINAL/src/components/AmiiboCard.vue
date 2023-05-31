<template>
  <div class="individualAmiibo">
    <h2 class="amiiboRegister">
      {{ name }}
    </h2>
    <img class="amiiboImage" :src="getImage" width="200" />
    <h3 class="amiiboSeries">{{ gameSeries }}</h3>
    <h3 class="amiiboSeries">$ {{ price }}.00</h3>
    <h3 class="amiiboName">{{ character }}</h3>
    <div class="buttondiv">
      <button class="buttonout" type="button">
        <button type="button" class="buttonin">Add to Cart</button>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'AmiiboCard'
    }
  },
  props: {
    name: String,
    image: String,
    gameSeries: String,
    price: Number,
    character: String
  },
  computed: {
    getImage: function () {
      return this.image
    }
  }
}
</script>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@500;700&display=swap');

html,
body,
* {
  margin: 0;
  padding: 0;
  font-size: 62.5%;
  font-family: 'Raleway', sans-serif;
}

.amiiboRegister {
  font-size: 2rem;
}

#amiibosContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.amiiboName {
  font-size: 1.5rem;
}

.amiiboSeries {
  font-size: 3rem;
  margin: 1rem;
}

.buttonin {
  font-size: 2.5rem;
  background-color: red;
  color: white;
  border: solid 3px red;
  padding: 10px;
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
  margin: 1rem;
}

.buttondiv {
  margin: 5rem;
}

.individualAmiibo:hover {
  border: solid 1px rgb(57, 6, 6);
}

.individualAmiibo {
  border: solid 1px rgb(26, 26, 26);
  border-radius: 3px;
  width: 27.5%;
  text-align: center;
  margin: 1rem;
  padding: 1rem;
  transition: all 0.25s;
  background-color: white;
}
</style>
