<script>
import axios from "axios";

export default {
  name : 'CreateTrip',
  props: {
    user: {
      type: Object,
      required: true,
    }
  },
  data() {
    return{
      date : '',
      time : '',
      startingPlace : '',
      endPoint : '',
      totalSeats : null,
      usertrips : []
    }
  },
  methods: {
    async addTrip(){
      try {
        const response = await axios.post('http://localhost:3000/createTrip', {
          user_id: this.user.id,
          date: this.date,
          time: this.time,
          startingPlace: this.startingPlace,
          endPoint: this.endPoint,
          totalSeats: this.totalSeats,
        });
        console.log('Publication réussie :', response.data);

        this.date = '';
        this.time = '';
        this.startingPlace = '';
        this.endPoint = '';
        this.totalSeats = '';
      } catch (error) {
        if (error.response) {
          console.error('Erreur côté serveur :', error.response.data);
        } else if (error.request) {
          console.error('Erreur réseau : le serveur est peut-être hors ligne');
        } else {
          console.error('Erreur lors de la requête :', error.message);
        }
      }
    },
  },
};
</script>

<template>
  <div class="CreateTrip">
    <p class="form-info">Publier un trajet</p>
    <form>
      <div class="field-list">
        <input class="field one" v-model="date" id="date" name="date" type="date" placeholder="Entrez une date">

        <input class="field two" v-model="time" type="time" id="time" name="time">

        <input class="field three" v-model="startingPlace" type="text" name="startingPlace" id="startingPlace">
*
        <input class="field four" v-model="endPoint" type="text" name="endPoint" id="endPoint">

        <input class="field five" v-model="totalSeats" type="number" name="totalSeats" id="totalSeats">
      </div>
      <button class="field-submit six" id="submit-button" type="button" @click.prevent="addTrip">Publier</button>
    </form>
  </div>
</template>

<style scoped>
.CreateTrip{
  width: 1179px;
}
.form-info{
  margin : 50px 0 20px 40px;
  font-size: 20px;
}
form{
  display: grid;
  width: 1179px;
  height: 40px;
  grid-template-columns: 5fr 0.5fr;
}
.field-list{
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  list-style-type: none;
}
.field{
  padding: 10px 20px;
  border: 1px solid black;
}
.field.one{
  border-radius: 20px 0 0 20px;
}
.six{
  border: 1px solid black;
  border-radius: 0 20px 20px 0;
}
</style>