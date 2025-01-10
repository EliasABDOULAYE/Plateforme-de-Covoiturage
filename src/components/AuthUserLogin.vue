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
          <div class="form-container login-container">
              <form @submit.prevent="loginUser">
                  <h1>Se connecter</h1>
                  <input v-model="email" type="email" placeholder="Email"/>
                  <input v-model="password" type="password" placeholder="Password"/>
                  <!--<a href="#">Mot de passe oublié ?</a>-->
                  <button class="auth-button">Se connecter</button>
              </form>
          </div>
          
          <div class="overlay-container">
              <div class="overlay">
                  <div class="overlay-panel overlay-right">
                      <h1>Envie de faire partir de l'aventure EfreiCar ?</h1>
                      <p>Crée ton compte et rejoins nous du côté écolo de la route</p>
                      <router-link to="/signup"><button id="sign-up" class="auth-button">Créer un Compte</button></router-link>
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
      email: '',
      password: '',
      errorMessage: '',
    };
  },


  
  methods: {
    async loginUser() {
            try {
        const response = await fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: this.email, password: this.password }),
        });

        const data = await response.json();

        if (response.ok) {
          const userId = data.userId;
          this.$router.push(`/profile/${userId}`);
          
        } else {
          this.errorMessage = data.message || 'Erreur lors de la connexion';
        }
      } catch (error) {
        console.error('Erreur lors de la requête :', error);
        this.errorMessage = 'Erreur réseau';
      }
    },
  },
};
</script>