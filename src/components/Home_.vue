<template>
  <div>
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

        
    <div>
      <div class="bg-image-container">
        <img id="bg-image" :src="background" alt=" ">
      </div>
        
      <div class="bg-text">
        <h3>Adoptez le covoiturage et embarquez dès maintenant pour une aventure 100% green.</h3>
        <p>Moins d'émission de CO2, moins de traffic, un gain de temps énorme et un environnement conviviable... </p>
        <br>
        <h3>Quoi demander de mieux !</h3>
      </div>

      <span class="scroll-container">
          <div class="scroll-content One_">
            <p>Écologique</p>
          </div>
          <div class="scroll-content One_">
            <p>Économique</p>
          </div>
          <div class="scroll-content One_">
            <p>Conviviable</p>
          </div>
      </span>


        <div class="scroll-left-container">
          <div class="scroll-left-content">
            <div class="One">
              <a><img :src="Orly" alt="">
                <div class="overlay">
                  <div class="texte">Orly ville</div>
                </div>
              </a>
            </div>
            <div class="One">
              <a><img :src="Paris" alt="">
                <div class="overlay">
                  <div class="texte">Paris</div>
                </div>
              </a>
            </div>
            <div class="One">
              <a><img :src="Chevilly" alt="">
                <div class="overlay">
                  <div class="texte">Chevilly La Rue</div>
                </div>
              </a>
            </div>
            <div class="One">
              <a><img :src="Chatelet" alt="">
                <div class="overlay">
                  <div class="texte">Chatelet</div>
                </div>
              </a>
            </div>
            <div class="One">
              <a><img :src="Villeneuve" alt="">
                <div class="overlay">
                  <div class="texte">Villeneuve Le Roi</div>
                </div>
              </a>
            </div>
            <div class="One">
              <a><img :src="Cachan" alt="">
                <div class="overlay">
                  <div class="texte">Cachan</div>
                </div>
              </a>
            </div>
            <div class="One">
              <a><img :src="Gentilly" alt="">
                <div class="overlay">
                  <div class="texte">Gentilly</div>
                </div>
              </a>
            </div>
            <div class="One">
              <a><img :src="Villejuif" alt="">
                <div class="overlay">
                  <div class="texte">Villejuif</div>
                </div>
              </a>
            </div>
          </div>
        </div>


        <div class="scroll-right-container">
          <div class="scroll-right-content">
            <div class="One">
              <a><img :src="Villejuif" alt="">
                <div class="overlay">
                  <div class="texte">Villejuif</div>
                </div>
              </a>
            </div>
            <div class="One">
              <a><img :src="Gentilly" alt="">
                <div class="overlay">
                  <div class="texte">Gentilly</div>
                </div>
              </a>
            </div>
            <div class="One">
              <a><img :src="Cachan" alt="">
                <div class="overlay">
                  <div class="texte">Cachan</div>
                </div>
              </a>
            </div>
            <div class="One">
              <a><img :src="Villeneuve" alt="">
                <div class="overlay">
                  <div class="texte">Villeneuve Le Roi</div>
                </div>
              </a>
            </div>
            <div class="One">
              <a><img :src="Chatelet" alt="">
                <div class="overlay">
                  <div class="texte">Chatelet</div>
                </div>
              </a>
            </div>
            <div class="One">
              <a><img :src="Chevilly" alt="">
                <div class="overlay">
                  <div class="texte">Chevilly La Rue</div>
                </div>
              </a>
            </div>
            <div class="One">
              <a><img :src="Paris" alt="">
                <div class="overlay">
                  <div class="texte">Paris</div>
                </div>
              </a>
            </div>
            <div class="One">
              <a><img :src="Orly" alt="">
                <div class="overlay">
                  <div class="texte">Orly ville</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>


      <section class="choose section" id="choose">
        <div class="choose-overflow">
            <div class="choose-container container grid">
                <div class="choose-content">
                    <div class="section-data">
                        <div class="section-titles">
                            <h1 class="section-title-border"><strong>POURQUOI NOUS ?</strong></h1>
                        </div>
                    </div>

                    <p class="choose-description">
                      Choisir EFREI CAR, c'est opter pour bien plus qu'un simple trajet. C'est aussi un service abordable qui allège vos dépenses de transport tout en étant adapté à vos horaires et besoins.
                      Avec nous, chaque trajet devient une opportunité de faire des économies, de réduire votre impact environnemental et de créer des liens. Rejoignez-nous dès aujourd'hui !
                    </p>

                    <div class="choose-data">
                        <div class="choose-group">
                            <h1 class="choose-number">200+</h1>
                            <h3 class="choose-subtitle">Utilisateurs actifs</h3>
                        </div>
                        <div class="choose-group">
                            <h3 class="choose-number">100+</h3>
                            <h3 class="choose-subtitle">Destinations</h3>
                        </div>
                        <div class="choose-group">
                            <h3 class="choose-subtitle">Simplicité d'utilisation</h3>
                        </div>
                        <div class="choose-group">
                            <h3 class="choose-subtitle">Flexibilité</h3>
                        </div>
                    </div>
                </div>

                <div class="choose-images">
                    <div class="choose-triangle choose-triangle-1"></div>
                    <div class="choose-triangle choose-triangle-2"></div>
                    <div class="choose-triangle choose-triangle-3"></div>
                </div>

                <div class="img">
                  <img :src="best" alt="">
                </div>
            </div>
        </div>
      </section>


      <h1 id="text-testimonials">Ce qu'ils en pensent</h1>
      <section>
        <div id="testimonials">
          <div id="card-container1">
              <div class="card-container">
                  <img :src="testimonials" id="testimonials-img" alt="testimonials">
                  <div class="one">
                      <h2>John Doe</h2>
                      <div class="stars">
                          <input type="radio" id="star2" name="rating">
                          <label for="star2" class="star2">☆</label>
                          <input type="radio" id="star2" name="rating">
                          <label for="star2" class="star2">☆</label>
                          <input type="radio" id="star1" name="rating">
                          <label for="star1" class="star1">☆</label>
                          <input type="radio" id="star1" name="rating">
                          <label for="star1" class="star1">☆</label>
                          <input type="radio" id="star1" name="rating">
                          <label for="star1" class="star1">☆</label>      
                      </div>
                  </div>
              </div>
              <p class="testimonial">Le site est assez pratique, mais j'ai eu quelques problèmes de communication avec certains conducteurs. Ça reste un bon moyen de se déplacer, mais il y a encore des améliorations à faire</p>
          </div>

          <div id="card-container2">
              <div class="card-container">
                  <img :src="testimonials" id="testimonials-img" alt="testimonials">
                  <div class="one">
                      <h2>John Doe</h2>
                      <div class="stars">
                          <input type="radio" id="star2" name="rating">
                          <label for="star2" class="star2">☆</label>
                          <input type="radio" id="star1" name="rating">
                          <label for="star1" class="star1">☆</label>
                          <input type="radio" id="star1" name="rating">
                          <label for="star1" class="star1">☆</label>
                          <input type="radio" id="star1" name="rating">
                          <label for="star1" class="star1">☆</label>
                          <input type="radio" id="star1" name="rating">
                          <label for="star1" class="star1">☆</label>
                      </div>
                  </div>
              </div>
              <p class="testimonial">J'ai adoré utiliser ce site pour mes trajets quotidiens ! Facile à utiliser, de bons conducteurs, et toujours une ambiance conviviale. Je recommande vivement !</p>
          </div>

          <div id="card-container3">
              <div class="card-container">
                  <img :src="testimonials" id="testimonials-img" alt="testimonials">
                  <div class="one">
                      <h2>John Doe</h2>
                      <div class="stars">
                          <label for="star2" class="star2">☆</label>
                          <input type="radio" id="star2" name="rating">
                          <label for="star2" class="star2">☆</label>
                          <input type="radio" id="star2" name="rating">
                          <label for="star2" class="star2">☆</label>
                          <input type="radio" id="star1" name="rating">
                          <label for="star1" class="star1">☆</label>
                          <input type="radio" id="star1" name="rating">
                          <label for="star1" class="star1">☆</label>
                          <input type="radio" id="star2" name="rating">
                      </div>
                  </div>
              </div>
              <p class="testimonial">L'idée est bonne, mais j'ai eu plusieurs mauvaises expériences. Des trajets annulés à la dernière minute et des informations parfois peu claires. J'espère que le site s'améliorera.</p>
          </div>
        </div>
      </section>
    </div>
  </div>

  <footer>
    <p>© 2024 Plateforme de covoiturage EFREI. Tous droits réservés.</p>
  </footer>
</template>

<style scoped>
  @import url("../components/Home_.css");
</style>




<script>
import AboutUs from './AboutUs.vue';
import AuthUserLogin from './AuthUserLogin.vue';
import AuthUserSignUp from './AuthUserSignUp.vue';

import logo from '../assets/images/logo.png'
import background from '../assets/images/background.jpg'
import testimonials from '../assets/images/testimonials.jpg'
import best from '../assets/images/best.png'
import Paris from '../assets/images/Paris.png'
import Cachan from '../assets/images/Cachan.png'
import Chatelet from '../assets/images/Chatelet.png'
import Orly from '../assets/images/Orly.png'
import Gentilly from '../assets/images/Gentilly.png'
import Villejuif from '../assets/images/Villejuif.png'
import Villeneuve from '../assets/images/Villeneuve.png'
import Chevilly from '../assets/images/Chevilly.png'
export default{
  components: {AboutUs, AuthUserLogin, AuthUserSignUp},
  name: 'Home', 
  

  data() {
    return {
      logo,
      background,
      testimonials,
      best,
      Paris,
      Cachan,
      Villejuif,
      Gentilly,
      Villeneuve,
      Chevilly,
      Chatelet,
      Orly,
    };
  },

}
</script>