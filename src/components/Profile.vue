<script>
import UserTrips from "./UserTrips.vue";
import logo from '../assets/images/logo.png';
import profile from "../assets/images/propic.jpg";
import cover from '../assets/images/cover-image.jpeg';
import calendar from '../assets/svg/calendar-svgrepo-com (1).svg';
import verified from '../assets/svg/verified-check-svgrepo-com.svg';
import trusted from '../assets/svg/verified-svgrepo-com.svg'
import CreateTrip from "./CreateTrip.vue";

export default {
  name : 'Profile',
  components : {CreateTrip, UserTrips},
  data() {
    return {
      currentComponent: 'Trips',
      profileCreationDate: "2024-11-11",
      numberOfTrips: 31,
      user: null, 
      username: '',
      logo,
      profile,
      cover,
      calendar,
      verified,
      trusted
    };
  },
  methods: {
    async getUser(userId) {
      try {
        const response = await fetch(`http://localhost:3000/profile/${userId}`);
        if (response.ok) {
          this.user = await response.json();
          console.log(this.user)
        } else {
          console.error('Erreur lors de la récupération du profil', response.status);
        }
      } catch (error) {
        console.error('Erreur réseau', error);
      }
    },
    switchComponent(component, id) {
      const remove = document.getElementsByClassName("selected-component")
      remove[0].classList.remove("selected-component")
      const add = document.getElementById(id)
      add.classList.add("selected-component")
      this.currentComponent = component;
    },
  },
  created() {
    const userId = this.$route.params.userId;
    this.getUser(userId);
  },
};
</script>

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
                    <span id="login-button-text">{{user.username}}</span>
                  </button>
                </router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    <main>
      <div class="sub-main">
        <div class="sub-main secondary">
          <div class="cover-image-container">
            <img id="cover-image" :src="cover" alt="Cover Image">
          </div>
          <div class="image-tags">
            <span class="image-tag"><span class="image-tag-number"><span class="image-tag-bind">{{ numberOfTrips }}<img class="image-tag-svg" :src="trusted" alt=""></span></span><span class="image-tag-text">Trajets completés</span></span>

          </div>
          <div class="profile">
            <div class="internal-profile">
              <div class="profile-picture-container">
                <img id="profile-picture" :src="profile" alt="Profile picture">
              </div>
              <div class="profile-info">
                <span id="username">{{ user.username }}<img class="profile-tag" :src="verified" alt=""></span>
              </div>
            </div>
            <div class="other-tags">
              <span class="calendar-tag-container"><img class="calendar-tag" :src="calendar" alt=""><span class="calendar-tag-info">Actif depuis le : {{ profileCreationDate }}</span></span>
            </div>
          </div>
        </div>
        <div class="component-switch-container">
          <div class="external-component-switch">
            <button id="switchone" @click.prevent="switchComponent('Trips', 'switchone')" class="external-component-link selected-component"><span>Mes trajets</span></button>
            <button id="switchtwo" @click.prevent="switchComponent('CreateTrip', 'switchtwo')" class="external-component-link"><span>Publier un trajet</span></button>
          </div>
        </div>
        <div class="center-container">
          <UserTrips :user=user class="external-component" v-if="currentComponent === 'Trips'"/>
          <CreateTrip :user=user class="external-component" v-else-if="currentComponent === 'CreateTrip'"></CreateTrip>
        </div>
      </div>
    </main>
</div>
</template>

<style scoped>
@import url("../components/Trajets.css");
@import url("../components/Home_.css");
.component{
  display: flex;
  justify-content: center;
}
header{
  height: 72px;
  background : #25303b;
  width: 100%;
  padding: 18px 0;
  place-items: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  box-shadow: black 0 calc(1px*90/100) 9px;
  position: fixed;
  z-index: 1000;
}
.header-container{
  display: flex;
  z-index: 1001;
  justify-content: space-between;
  margin: auto;
  width: 972px;
  max-width: 972px;
  height: 36px;
  padding: 0 9px;
}
.menu{
  display: flex;
  margin: auto 0;
}
.menu-list{
  list-style: none;
  display: flex;
  flex-direction: row;
  place-items: center;
  column-gap: 36px;
  font-size: calc(17px*90/100);
}
.nav-link{
  color: white;
  text-decoration: none;
}
#logo{
  height: 36px;
}
#login-button{
  border: none;
  height: 36px;
  border-radius: calc(9vh/10);
  display: flex;
  place-items: center;
  flex-direction: row;
  column-gap: calc(5px*90/100);
  padding: calc(5px*90/100) calc(18px*90/100) calc(5px*90/100) 9px;
}
#login-button-text{
  font-size: calc(17px*90/100);
}
.sub-main{
  z-index: 0;
  display: flex;
  flex-direction: column;
  place-items: center;
  width: 100vw;
}
.sub-main.secondary{
  position: absolute;
  background: #d1d1d1;
  height: 585px
}
.cover-image-container{
  position: absolute;
  z-index: -100;
  width: 1179px;
  height: 288px;
  overflow: hidden;
  margin-top: 72px;
  border-radius: 0 0 27px 27px;
}
#cover-image{
  z-index: -99;
  position: absolute;
  top : -495px;
  width: 100%;
}
.image-tags{
  position: absolute;
  display: flex;
  width: 650px;
  justify-content: space-between;
  margin-top: 279px;
  margin-left: 180px;
}
.image-tag{
  color: white;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  place-items: center;
}
.image-tag-bind{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.image-tag-number{
  font-size: calc(25px*90/100);
}
.image-tag-svg{
  height: 27px;
}
.image-tag-text{
  opacity: 80%;
  font-weight: 100;
}
.profile{
  position: absolute;
  z-index: 800;
  margin: 225px 0 0 -855px;
  display: flex;
  flex-direction: column;
  place-items: flex-start;
}
.internal-profile{
  display: flex;
  flex-direction: column;
  place-items: center;
}
.profile-picture-container{
  overflow: hidden;
  height: 180px;
  width: 180px;
  border-radius: 50%;
  border: calc(8px*90/100) solid #d1d1d1;
}
#profile-picture{
  height: 180px;
}
.profile-info{
  margin-top: 18px;
}
#username{
  font-size: 27px;
  display: flex;
  place-items: center;
}
.profile-tag{
  height: 27px;
  margin-left: 9px;
}
.calendar-tag-container{
  margin-top: 18px;
  display: flex;
}
.calendar-tag{
  height: 18px;
}
.calendar-tag-info{
  margin-left: calc(7px*90/100);
}
.component-switch-container{
  position: absolute;
  background: #b8b8b8;
  height: 45px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  place-items: center;
  margin: 540px 0 0 0;
}
.external-component-switch{
  width: 675px;
  display: grid;
  margin: 0 0 0 -504px;
  height: 45px;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 5px;
}
.external-component-link{
  display: flex;
  color: black;
  font-size: 17px;
  place-items: center;
  justify-content: center;
  background: none;
  border: none;
}
.external-component-link:hover, .selected-component{
  border-bottom: 3px solid black;
}
.center-container{
  margin-top: 585px;
  display: flex;
  flex-direction: column;
  place-items: center;
  width: 100%;
  margin-bottom: 50px;
}
</style>