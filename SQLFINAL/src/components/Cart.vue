<template>
  <div class="individualAmiibo"   data-aos="fade-up"
     data-aos-duration="1000" >
    <h2 class="amiiboRegister">
      {{ this.name }}
    </h2>
    <img class="amiiboImage" :src="this.image" width="200" />
    <h3 class="amiiboSeries">{{ this.gameSeries }}</h3>
    <h3 class="amiiboSeries">$ {{ this.price }}.00</h3>
    <h3 class="amiiboName">{{ this.character }}</h3>
  </div>
</template>

<script>
import { supabase } from '../lib/supabaseClient'
import { useAmiiboStore } from '../stores/shop.js'
const AmiiboStore = useAmiiboStore()
import AOS from 'aos'
import 'aos/dist/aos.css'
import { userInformation } from '@/stores/users'
const userInfo = userInformation()

export default {
  mounted() {
    AOS.init()
  },
  name: 'Cart',
  data() {
    return {
      amiiboSeries: '',
      character: '',
      gameSeries: '',
      image: '',
      name: ''
    }
  },
  props: {
    amiibo_id: Number,
    count: Number,
    price: Number
  },
  async mounted() {
    const { data } = await supabase.from('amiibo').select().eq('id', this.amiibo_id)
    console.log('stuff')
    this.amiiboSeries = data[0].amiiboSeries
    this.character = data[0].character
    this.gameSeries = data[0].gameSeries
    this.image = data[0].image
    this.name = data[0].name
  }
  // mounted: {
  //   async match(id) {
  //     const { data } = await supabase.from('amiibo').select().eq('id', id)
  //     userInfo.user.shoppingCart = data
  //   }
  // }
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

.amiiboImage{
  transition: all .25s;
}

.amiiboImage:hover{
  transform: scale(1.13);
  margin: 5px;
  transition: all .25s;
}

.individualAmiibo:hover {
border: red solid 5px;
border-radius: 60px;
transition: all .25s;
}

.individualAmiibo {
  border: solid 5px rgb(26, 26, 26);
  border-radius: 5px;
  width: 27.5%;
  text-align: center;
  margin: 1rem;
  transition: all 0.25s;
  background-color: white;
}</style>
