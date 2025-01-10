<template>
  <div id="home-page" class="component">
    <header>
      <div class="header-container">
      <div class="logo">
          <router-link to="/"><img :src="logo" id="logo" alt="Logo Efrei Car"></router-link>
      </div>
      <div class="menu">
          <nav>
          <ul class="menu-list">
              <li class="menu-item"><router-link to="/trajets" class="nav-link">Trajets</router-link></li>    
              <li class="menu-item"><router-link to="/aboutUs" class="nav-link">À propos de nous</router-link></li>
              <li class="menu-item button">
              <router-link to="/login">
                  <button id="login-button">
                  <svg width="30px" height="30px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M14.9769 14H10.0229C8.56488 14.0724 7.2731 14.963 6.68693 16.3C5.97993 17.688 7.39093 19 9.03193 19H15.9679C17.6099 19 19.0209 17.688 18.3129 16.3C17.7268 14.963 16.435 14.0724 14.9769 14Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M15.4999 8C15.4999 9.65685 14.1568 11 12.4999 11C10.8431 11 9.49994 9.65685 9.49994 8C9.49994 6.34315 10.8431 5 12.4999 5C13.2956 5 14.0587 5.31607 14.6213 5.87868C15.1839 6.44129 15.4999 7.20435 15.4999 8Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span id="login-button-text">Mon espace</span>
                  </button>
              </router-link>
              </li>
          </ul>
          </nav>
      </div>
      </div>
    </header>



    <main>
      <div class="container">
        <div class="container-trajets-recherche">
            <div class="container-recherche">
              <router-link to="/trajets">
                <h1><svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                </svg>Effectuer une recherche</h1>
              </router-link>      
            </div>
        </div>
        
        <div class="form-container">
            <form class="search-form">
                <input v-model="searchDepartQuery" @input="searchDepart" type="text" id="depart" name="depart" placeholder="Départ" required>
                <input v-model="searchDestinationQuery" @input="searchDestination" type="text" id="destination" name="destination" placeholder="Destination" required>
                <input v-model="searchDateQuery" @input="searchDate" type="date" id="date" name="date" placeholder="Date (Ne renseignez que les champs Jour et Mois) yyyy-mm-dd" required>
                <input v-model="searchPlacesQuery" @input="searchPlaces" type="number" id="places" name="places" placeholder="Nombre de places disponibles" required min="1">
            </form>
        </div>



        <div id="ListeTrajet">
          <div class="container-trajets-recherche">
            <div class="container-trajet">
              <h1>Liste des trajets</h1>
            </div>
          </div>
          
          <p v-if="filteredTrajets.length === 0">Aucun trajet disponible pour ces critères.</p>
                
          <ul v-else v-for="trajet in filteredTrajets" :key="trajet.id">
            <li>
              <div class="trajet-details">
                <h2>Date de départ : {{ formatDate(trajet.date) }}</h2>
                <h2>Heure de départ: {{ trajet.heure }}</h2>
                <h3>Départ: {{ trajet.depart }}</h3>
                <h3>Destination: {{ trajet.destination }}</h3>
                <p>Nom de l'annonceur: {{ trajet.username }}</p>
                <p id="nbr_places">Nombre de places : {{ trajet.nbr_places }}</p>
              </div>


              <button class="trajet-button" :id="'btn-' + trajet.id" @click="ouvrirReservation(trajet)">Réserver</button>

              <div id="reservation-form" style="display:none;">
                <label for="places-a-reserver">Combien de places voulez-vous réserver ?</label>
                <input type="number" id="places-a-reserver" min="1" max="5" value="1" />
                <button @click="confirmerReservation(trajet)">Confirmer</button>
                <p id="error-message" class="error-message">Vous ne pouvez pas réserver plus de places que celles disponibles.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </main>


    <footer>
      <p>© 2024 Plateforme de covoiturage EFREI. Tous droits réservés.</p>
    </footer>
  </div>
</template>



<style scoped>
@import url("../components/Home_.css");
@import url("../components/Trajets.css");
</style>



<script>
import axios from 'axios';
import logo from '../assets/images/logo.png'
import background from '../assets/images/background.jpg'
import testimonials from '../assets/images/testimonials.jpg'

export default {
  data() {
    return {background, 
      logo, 
      testimonials, 
      trajets: [], 
      trajetSelectionne: null, 
      searchDepartQuery: "", 
      searchDestinationQuery: "", 
      searchDateQuery: '',
      trajets: [
        { id: 1, name: 'Trajet A', date: '2024-11-22T23:00:00.000Z' },
        { id: 2, name: 'Trajet B', date: '2024-11-23T23:00:00.000Z' },
      ],
      filteredTrajets: [],
      searchPlacesQuery: null,
    };
  },

  created() {
    axios
      .get('http://localhost:3000/trajets')
      .then((response) => {
        this.trajets = response.data;
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des trajets :', error);
      });
    
    const userId = this.$route.params.userId;
    this.fetchUserProfile(userId);
  },


  mounted() {
    this.filteredTrajets = this.trajets;
  },


  computed:{
    filteredTrajets() {
      const today = new Date().setHours(0, 0, 0, 0);

      return this.trajets.filter(trajet => {
        const trajetDate = new Date(trajet.date).setHours(0, 0, 0, 0); 
        const matchesDepart = trajet.depart.toLowerCase().includes(this.searchDepartQuery.toLowerCase());
        const matchesDestination = trajet.destination.toLowerCase().includes(this.searchDestinationQuery.toLowerCase());
        const matchesDate = !this.searchDateQuery || trajet.date === this.searchDateQuery;
        const matchesPlaces = !this.searchPlacesQuery || trajet.nbr_places >= this.searchPlacesQuery;

        return trajetDate > today && matchesDepart && matchesDestination && matchesDate && matchesPlaces;
      });
    },
  },


  methods: {
    async updatePlace() {
      const response = await axios.post('http://localhost:3000/trajets', {
      nbr_places: this.nbr_places,
      placesAAjouter: this.places_reservees,
    })
    },

    async fetchUserProfile(userId) {
      try {
        const response = await fetch(`http://localhost:3000/profile/${userId}`);
        if (response.ok) {
          const data = await response.json();
          console.log('Données récupérées :', data);
          this.user = data;
        } else {
          console.error('Erreur lors de la récupération du profil', response.status);
        }
      } catch (error) {
        console.error('Erreur réseau', error);
      }
    },

    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      const formattedDate = new Date(date).toLocaleDateString('fr-FR', options);
      return formattedDate;  
    },
    
    searchDepart() {
      const query = this.searchDepartQuery.toLowerCase();
      this.filteredTrajets = this.trajets.filter(trajet => {
        return (trajet.depart.toLowerCase().includes(query));
      });
    },
    
    searchDestination() {
      const query = this.searchDestinationQuery.toLowerCase();
      this.filteredTrajets = this.trajets.filter(trajet => {
        return (trajet.destination.toLowerCase().includes(query));
      });
    },
     
    searchDate() {
      const query = this.searchDateQuery.toLowerCase();
      this.filteredTrajets = this.trajets.filter(trajet => {
        return (trajet.date.toLowerCase().includes(query));
      });
    },
   

    searchPlaces() {
      const query = this.searchPlacesQuery.toLowerCase();
      this.filteredTrajets = this.trajets.filter(trajet => {
        return (trajet.nbr_places.toLowerCase().includes(query)
        );
      });
    },
  
    
    ouvrirReservation(trajet) {
        this.trajetSelectionne = trajet;
        const formElement = document.getElementById('reservation-form');
        formElement.style.display = 'block';
    },


    confirmerReservation(trajet) {
      const placesDisponibles = trajet.nbr_places;
      const placesAAjouter = parseInt(document.getElementById('places-a-reserver').value, 10);

      if (placesAAjouter <= placesDisponibles) {
          trajet.nbr_places -= placesAAjouter;

          const btnElement = document.getElementById(`btn-${trajet.id}`);
          if (trajet.nbr_places === 0) {
              btnElement.disabled = true;
              btnElement.innerText = 'Réservé';
              btnElement.style.backgroundColor = 'grey';
          } else {
              btnElement.innerText = 'Réservation effectuée';
              btnElement.style.backgroundColor = 'green';
          }

          const formElement = document.getElementById('reservation-form');
          formElement.style.display = 'none';

      console.log("Places dispo:", nbr_places);
      console.log("Places ajoutées", placesAAjouter);

  
       } else {
          const errorMessageElement = document.getElementById('error-message');
          errorMessageElement.style.display = 'block';
      }
    },
  },
};
</script>