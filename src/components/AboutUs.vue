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
      <section id="about-us">
        <h1>À PROPOS DE NOUS </h1>
        <p>Bienvenue sur notre plateforme de covoiturage dédiée aux étudiants d'EFREI !</p>
        <p>
          Notre plateforme est née de la volonté de répondre aux besoins de mobilité de la communauté étudiante d’EFREI de manière innovante, pratique et responsable. Nous sommes un groupe de quatre étudiants unis par une vision commune : créer une solution de transport écoresponsable et collaborative qui optimise les déplacements et renforce les liens au sein de notre communauté.
        </p>
        
        <h2>Notre équipe</h2> <br>

        <div class="team-member1">
            <div class="float-right">
                <div class="image-container">
                  <img :src="ingenieur1" class="img-thumbnail ">
                </div>
            </div>
          <div class="text1">
            <h3>ABDOULAYE Elias : Développeur Fullstack et chargé de la page d'authentification</h3>
            <p>Elias a coordonné l’ensemble des étapes du développement, veillant à l’efficacité des solutions proposées et à la bonne intégration des fonctionnalités. 
                En tant que Développeur Fullstack, il a participé activement à la conception et au développement complet du projet, en travaillant à la fois sur le Front-End et le Back-End. En plus de s'occuper de la page Une page d’authentification il  a également optimisé les performances des bases de données MySQL pour garantir la rapidité et l’efficacité des transactions. Grâce à cette approche Fullstack, il a assuré une parfaite intégration entre le client et le serveur, offrant ainsi une solution performante et bien structurée.
            
              </p>        
          </div>
        </div> 
        
        <div class="team-member2">
          <div class="text2">
            <h3>DOSSOU Faithson : Développeur backend chargé de la page du profil utilisateur</h3>
            <p>Son expertise a permis de structurer une architecture robuste pour la gestion des profils utilisateurs, des trajets et des réservations, pour son travail remarquable sur la page de profil utilisateur. Il a conçu et mis en place une interface intuitive permettant aux utilisateurs de publier, modifier et supprimer leurs trajets facilement. Grâce à son approche méthodique, nous offrons une expérience utilisateur fluide et fonctionnelle, tout en garantissant une gestion optimale des trajets proposés. Son implication est essentielle à la réussite de notre plateforme. </p>

                
          </div>
          <div class="image-container">
            <img :src="ingenieur2" class="float-left">
        </div>
        </div> 
        
        <div class="team-member1">
            <div class="float-right">
                <div class="image-container">
                  <img :src="ingenieur3" class="float-right">
                </div>
            </div>
          <div class="text1">
            <h3>GOUSSANOU Auber : Chargé de la page d'accueil et du style</h3>
            <p>
                Il a joué un rôle crucial dans la création de la Page d’Accueil, en concevant une interface claire et attrayante. En parallèle, d'un commun travail avec Tolomey il a pris en charge une bonne partie du style du projet, en définissant le style visuel pour l’ensemble du site. Son travail a permis d’assurer une expérience utilisateur harmonieuse en optimisant la présentation graphique, la typographie, les couleurs et la réactivité du site sur tous les appareils.
            </p>
          </div>
        </div> 
        
        
        <div class="team-member2">
          <div class="text2">
            <h3>BOGNINOU Tolomey Enock : UI/UX Designer et chargé de la page About_us </h3>
            <p>
                Grâce à son sens du détail, il a réussi à transformer nos idées en une représentation visuelle claire et professionnelle, qui a servi de base solide pour le développement de notre solution. Son apport a été essentiel pour donner vie à notre vision et orienter notre équipe vers un résultat concret.
                Avec une attention particulière aux détails et à l’ergonomie, il a conçu l’interface utilisateur en suivant les meilleures pratiques du design web, garantissant une expérience utilisateur de haute qualité. Il s'est également occupé de la page "A propos de nous"         
            </p>
          </div>
          <div class="image-container">
            <img :src="ingenieur4" class="img-thumbnail float-left">
        </div>
        </div>
        
        <h2>Notre mission</h2>
        <p>
          Notre mission est de contribuer à la réduction des coûts de transport, de favoriser les interactions au sein de la communauté étudiante et d’offrir une solution de mobilité pratique et écologique. Nous espérons que notre plateforme améliorera vos déplacements et renforcera les liens au sein de notre communauté EFREI.
        </p>
      </section>
    </main>


    <footer>
      <p>© 2024 Plateforme de covoiturage EFREI. Tous droits réservés.</p>
    </footer>
  </div>
</template>



<style scoped>
@import url("../components/Home_.css");

body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  margin: 0;
  padding: 0;
  background-color: white ;
  color: #2c3e50;
}

header { 
  background-color: #25303b;
  color: #fff;
  text-align: center;
  padding: 20px 0;
}

header h1 {
  margin: 0;
  font-size: 2.5em;
}

section {
  padding: 50px;
  max-width: 1000px;
  margin: auto;
  background-color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

h1, h2 {
  text-align: center;
  margin-bottom: 20px;
}

h1 {
  font-size: 2em;
  color: #3498db;
}

h2 {
  font-size: 1.8em;
  color: #2c3e50;
}

p {
  margin: 10px 0;
  font-size: 15px;
  text-align: justify;
}

.team-member1 {
  margin-bottom: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 100%;
  float: left;
}

.team-member2 {
  margin-bottom: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 100%;
  float: right;
}

.text1 {
    margin-left: 20px;
}

.text2 {
    margin-right: 20px;
}

.team-member h3 {
  font-size: 1.5em;
  margin-bottom: 10px;
  color: #3498db;
}

.image-container{
    overflow: hidden;
    width: 500px;
    height: 300px;
}

.float-right{
    display: flex;
    flex-direction: row;
    justify-content:flex-end ;
}
</style>




<script>
import AboutUs from './AboutUs.vue';
import AuthUserLogin from './AuthUserLogin.vue';
import AuthUserSignUp from './AuthUserSignUp.vue';

import logo from '../assets/images/logo.png'
import ingenieur1 from '../assets/images/ingenieur1.jpg'
import ingenieur2 from '../assets/images/ingenieur2.jpg'
import ingenieur3 from '../assets/images/ingenieur3.jpg'
import ingenieur4 from '../assets/images/ingenieur4.jpg'

export default {
  data() {
    return {
      logo,
      ingenieur1,
      ingenieur2,
      ingenieur3,
      ingenieur4,
    };
  }
};
</script>