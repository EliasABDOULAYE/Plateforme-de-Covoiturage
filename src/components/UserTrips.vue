<script>
import bin from '../assets/svg/delete-svgrepo-com.svg'
import edit from '../assets/svg/edit-3-svgrepo-com.svg'
import { nextTick } from 'vue';
import axios from "axios";

export default {
  name : 'UserTrips',
  props: {
    user: {
      type: Object,
      required: true,
    }
  },
  data() {
    return{
      trajets: [],
      trips: [],
      filteredTrajets: [],
      date : '',
      time : '',
      startingPlace : '',
      endPoint : '',
      totalSeats : null,
      bin,
      edit,
      a : "test",
      switchElement : "detail"
    }
  },
  methods: {
    async fetchTrajets() {
      try {
        const response = await fetch('http://localhost:3000/trajets');
        if (response.ok) {
          this.trajets = await response.json();
          if (this.user) {
            this.filteredTrajets = this.trajets.filter(trajet => trajet.user_id === this.user.id);
          }
        } else {
          console.error("Erreur lors de la récupération des trajets");
        }
      } catch (error) {
        console.error("Erreur réseau", error);
      }
    },
    switchNature (event){
      const elementId = event.target.id
      console.log(elementId)
      if (elementId){
        if (this.switchElement === `field-${elementId}`){
          this.switchElement = `detail`
          console.log("Switch success !! This element is now a detail")
        } else {
          this.switchElement = `field-${elementId}`
          console.log("Switch success !! This element is now a field")
          console.log("Congratulations !! Your luck is quite good")
        }
      } else {
        console.error("Buy more luck next time !! Life if not F2P")
      }
    },
    async modifyTrip(event) {
      const tripId = event.target.id;
      console.log(tripId)
      if (tripId){
        try {
          const response = await axios.put(`http://localhost:3000/modifyTrip/${tripId}`, {
            date: this.date,
            heure: this.time,
            depart: this.startingPlace,
            destination: this.endPoint,
            nbr_places: this.totalSeats
          });
          console.log("Modification terminée :", response.data)

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
      } else {
        console.error("Buy more luck next time !! Life is P2W")
      }
    },
    async deleteTrip(event) {
      const tripId = event.target.id;
      console.log(tripId)
      try {
        await this.$nextTick();
        const element = document.querySelector(`.trip-${tripId}`);
        console.log(element)
        if(element){
          element.remove()
          const response = await axios.delete(`http://localhost:3000/deleteTrip/${tripId}`);
          console.log('Trajet supprimé :', response.data);
          this.trajets = this.trajets.filter(trip => trip.trajet_id !== parseInt(tripId));
        } else {
          console.error("Bad Luck !! Try again, you'll win next time for sure")
        }
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
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString('fr-FR', options);
    }
  },
  created() {
    this.fetchTrajets();
  },
  mounted() {
    if (this.user && this.trajets.length > 0) {
      this.filteredTrajets = this.trajets.filter(trajet => trajet.user_id === this.user.id);
    }
  },
}
</script>

<template>
  <div class="userTrips">
    <p class="form-info">Trajets publiés</p>
    <div id="publishedTrips">
      <ul :class="'trip trip-'+trajet.trajet_id" v-if="filteredTrajets.length > 0" v-for="trajet in filteredTrajets" :key="trajet.trajet_id">
        <li>
          <div :class="a">
            <ul class="trip-details">
              <li class="trip-detail">
                <span>Date de départ</span>
                <span v-if="switchElement === 'field-'+trajet.trajet_id"><input type="date"></span>
                <span v-else>{{ formatDate(trajet.date) }}</span>
              </li>
              <li class="trip-detail">
                <span>Heure de départ</span>
                <span v-if="switchElement === 'field-'+trajet.trajet_id"><input type="time"></span>
                <span v-else>{{ trajet.heure }}</span>
              </li>
              <li class="trip-detail">
                <span>Départ</span>
                <span v-if="switchElement === 'field-'+trajet.trajet_id"><input type="text"></span>
                <span v-else>{{ trajet.depart }}</span>
              </li>
              <li class="trip-detail">
                <span>Destination</span>
                <span v-if="switchElement === 'field-'+trajet.trajet_id"><input type="text"></span>
                <span v-else>{{ trajet.destination }}</span>
              </li>
              <li class="trip-detail">
                <span>Nombre de places</span>
                <span v-if="switchElement === 'field-'+trajet.trajet_id"><input type="number"></span>
                <span v-else>{{ trajet.nbr_places }}</span>
              </li>
              <li class="trip-detail">
                <button v-if="switchElement === 'field-'+trajet.trajet_id" @click="modifyTrip($event)">Save</button>
                <span v-else :id="trajet.trajet_id" class="hover-effect one" @click="switchNature($event)" title="Modifier"><img class="trip-list-utility" :src="edit" alt=""></span>
                <button v-if="switchElement === 'field-'+trajet.trajet_id" :id="trajet.trajet_id" @click="switchNature($event)">Cancel</button>
                <span v-else :id="trajet.trajet_id" @click="deleteTrip($event)" title="Supprimer" class="hover-effect two"><img class="trip-list-utility" :src="bin" alt=""></span>
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <p v-else>Aucun trajet publié.</p>
    </div>
  </div>
</template>

<style scoped>
.userTrips{
  width: 1179px;
  display: flex;
  flex-direction: column;
}
#publishedTrips{
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}
.form-info{
  margin : 50px 0 20px 40px;
  font-size: 20px;
}
.trip{
  list-style: none;
}
.trip-details{
  display: grid;
  grid-template-columns: repeat(2, 0.75fr) repeat(2, 1fr) 0.75fr 0.25fr;
  column-gap: 10px;
  border: 1px solid black;
  border-radius: 30px;
  padding: 20px;
}
.trip-detail{
  list-style: none;
  display: grid;
  grid-template-rows: 1fr 1.5fr;
}
.trip-list-utility{
  width: 20px;
}
.hover-effect{
  height: 35px;
  width: 35px;
  display: flex;
  place-items: center;
  justify-content: center;
  border-radius: 50%;
}
.hover-effect:hover{
  background: #acacac;
}
</style>