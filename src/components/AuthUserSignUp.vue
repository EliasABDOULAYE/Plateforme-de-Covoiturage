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

    <body>
        <div class="container">
            <div class="form-container sign-up-container">
                <form @submit.prevent="registerUser">
                    <h1>Créer un compte</h1>
                    <input v-model="username" type="text" placeholder="Name" />
                    <input v-model="email" type="email" placeholder="Email" />
                    <input v-model="password" type="password" placeholder="Password" />
                    <button class="auth-button">Créer mon compte</button>
                </form>
            </div>
            
            <div class="overlay-container">
                <div class="overlay">
                    <div class="overlay-panel overlay-right">
                        <h1>Tu nous as manqué</h1>
                        <p>Plus de temps à perdre! Connecte-toi et participe à la protection de notre belle planète bleue</p>
                        <router-link to="/login"><button id="login" class="auth-button">Login</button></router-link>
                    </div>
                </div>
            </div>
        </div>
    </body>


    <footer>
        <p>© 2024 Plateforme de covoiturage EFREI. Tous droits réservés.</p>
    </footer>
  </div>
</template>



<style scoped>
@import url("../components/Home_.css");
@import url("../components/AuthUser.css");
</style>



<script>
import axios from 'axios';

import logo from '../assets/images/logo.png'
import background from '../assets/images/background.jpg'
import testimonials from '../assets/images/testimonials.jpg'

export default {
    data() {
        return {
            background,
            logo,
            testimonials,
            username: '', 
            email: '', 
            password: '',
        };
    },



    created() {
        const userId = this.$route.params.userId;
        if (!userId) {
            console.error("L'ID utilisateur est introuvable dans les paramètres de l'URL.");
            return;
        }
        this.getUser(userId);
    },


    methods: {
        async getUser(userId) {
            try {
                const response = await axios.get(`http://localhost:3000/profile/${userId}`);
                this.user = response.data;
            } catch (error) {
                console.error('Erreur lors de la récupération des données utilisateur:', error);
            }
        },

        async registerUser() {
            try {
                const response = await axios.post('http://localhost:3000/signUp', {
                    username: this.username,
                    email: this.email,
                    password: this.password,
                });

                console.log('Inscription réussie :', response.data);

                this.username = '';
                this.email = '';
                this.password = '';

                if (response.status === 200 || response.status === 201) {
                    const userId = response.data.userId;
                    if (!userId) {
                        throw new Error("L'ID utilisateur est introuvable dans la réponse.");
                    }
                    this.$router.push(`/profile/${userId}`);
                } else {
                    this.errorMessage = response.data.message || 'Erreur lors de l\'inscription';
                }
            } catch (error) {
                if (error.response) {
                    console.error("Erreur côté serveur :", error.response.data);
                } else if (error.request) {
                    console.error("Erreur réseau : aucune réponse reçue.");
                } else {
                    console.error('Erreur lors de la configuration de la requête :', error.message);
                }
            }
        }
    },
};
</script>