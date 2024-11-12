<template>
  <ion-menu content-id="main-content">
    <!-- Menu Content -->
    <ion-content class="ion-padding fade-in">
      <!-- Profile Section -->
      <ion-grid>
        <ion-row class="profile-row">
          <ion-col size="9" class="profile-info">
            <div class="imges">
              <ion-col size="3">
                <!-- Profile Image -->
                <ion-avatar>
                  <img src="../images/profile.png" alt="Profile Image" />
                </ion-avatar>
              </ion-col>
              <div>
                <a href="/loyaltypoints">
                  <img src="../images/points.png" alt="" class="points">
                </a>
              </div>
            </div>
            <!-- Name and Phone Number -->
            <h2>Chou Tzuyu</h2>
            <p>+63 912 345 6789</p>
          </ion-col>
        </ion-row>
      </ion-grid>
      <!-- Menu Items -->
      <ion-list>
        <ion-item button href="/home">
          <img src="../images/fast-food-icon.png" alt="Profile Image" class="icons"/>
          <ion-label>Home</ion-label>
        </ion-item>
        <ion-item button href="/ordernow">
          <img src="../images/order.png" alt="Profile Image" class="icons"/>
          <ion-label>Order Now!</ion-label>
        </ion-item>
        <ion-item button>
          <img src="../images/notif.png" alt="Profile Image" class="icons"/>
          <ion-label>Notifications</ion-label>
          <ion-badge color="warning" v:slot="end">4</ion-badge>
        </ion-item>
        <ion-item button>
          <img src="../images/store.png" alt="Profile Image" class="icons"/>
          <ion-label>Store Locator</ion-label>
        </ion-item>
        <ion-item button>
          <img src="../images/FAQ.png" alt="Profile Image" class="icons"/>
          <ion-label>FAQ's</ion-label>
        </ion-item>
      </ion-list>
      <!-- More Menu Items -->
      <ion-list>
        <ion-item button>
          <img src="../images/myorders.png" alt="Profile Image" class="icons"/>
          <ion-label>My Orders</ion-label>
          <ion-badge color="warning" v:slot="end">2</ion-badge>
        </ion-item>
        <ion-item button>
          <img src="../images/myaccount.png" alt="Profile Image" class="icons"/>
          <ion-label>My Account</ion-label>
        </ion-item>
        <ion-item button>
          <img src="../images/favorite.png" alt="Profile Image" class="icons"/>
          <ion-label>My Favorites</ion-label>
        </ion-item>
        <ion-item button>
          <img src="../images/tracker.png" alt="Profile Image" class="icons"/>
          <ion-label>Order Tracker</ion-label>
        </ion-item>
        <ion-item button>
          <img src="../images/history.png" alt="Profile Image" class="icons"/>
          <ion-label>Order History</ion-label>
        </ion-item>
      </ion-list>

      <!-- Logout Button -->
        <ion-button  color="danger" class="logout-button">
          Logout
        </ion-button>
      
    </ion-content>
  </ion-menu>

  <!-- Main Content Page -->
  <ion-page id="main-content">
    <ion-header class="header">
      <ion-toolbar class="toolbar">
        <!-- Menu button at the start -->
        <div class="center-container">
          <div>
            <ion-menu-button><img src="../images/icon.png" alt=""></ion-menu-button>
          </div>
          <div class="horizontal-container">
            <div>
              <img
                src="../images/crown.png"
                alt="Small Icon"
                class="crown-image"
              />
            </div>
            <div>
              <ion-label class="b-text">0 Points</ion-label>
            </div>
            <div>
              <ion-label class="small-red-text">></ion-label>
            </div>
          </div>
          <div class="profile">
            <img
              src="../images/profile.png"
              alt="Small Icon"
              class="profile-image"
            />
          </div>
        </div>
        <!-- Use a flex container to center the icon and label -->
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <div class="content">
        <div>
          <img
            src="../images/fast-food-icon.png"
            alt="Small Icon"
            class="fast-food-image"
          />
        </div>
        <div class="fast-food-label">
          <div>
            <ion-label>Anneoyong, Chou!</ion-label>
          </div>
          <div>
            <ion-label class="what-label">What do you want to eat?</ion-label>
          </div>
        </div>
      </div>
      <div class="mid">
        <div>
          <ion-searchbar
            class="custom-searchbar"
            placeholder="try our new Steak Fries Veggies"
          ></ion-searchbar>
        </div>
        <div class="offers-container">
          <div>
            <ion-label class="offers">Special Offers!</ion-label>
          </div>
          <div class="view-text">
            <div>
              <ion-label>View All </ion-label>
            </div>
            <div>
              <ion-label>></ion-label>
            </div>
          </div>
        </div>
      </div>
      <div class="pic-ctn">
        <div>
          <img src="../images/fresh-food.png" alt="" class="pic" />
        </div>
        <div>
          <img src="../images/fresh-food.png" alt="" class="pic" />
        </div>
        <div>
          <img src="../images/fresh-food.png" alt="" class="pic" />
        </div>
        <div>
          <img src="../images/fresh-food.png" alt="" class="pic" />
        </div>
      </div>
      <div>
        <ion-label class="category-label">Category</ion-label>
      </div>
      <div class="category">
        <div>
          <img src="../images/cake.png" alt="" class="categorypic" />
        </div>
        <div>
          <img src="../images/cake.png" alt="" class="categorypic" />
        </div>
        <div>
          <img src="../images/cake.png" alt="" class="categorypic" />
        </div>
        <div>
          <img src="../images/cake.png" alt="" class="categorypic" />
        </div>
      </div>

      <div>
        <ion-label class="category-label">What's New</ion-label>
      </div>
      <div>
        <img src="../images/food-menu.png" alt="" class="food-menu" />
      </div>
      <div>
        <ion-label class="category-label">Most Popular</ion-label>
      </div>
     <div class="menu-container">
        <div class="box1">
          <button class="foods">
            <img src="../images/steak.png" alt="Food Image" class="food-image" />
          </button>
          <div class="food-info">
            <div class="food-name">Steak Fries Veggie</div>
            <div class="food-label">Meat</div>
            <div class="price-rating">
              <span class="food-price">$15.99</span>
              <div class="star-rating">★★★★★</div>
            </div>
          </div>
        </div>
        <div class="box1">
          <button class="foods">
          <img
            src="../images/chicken-salad.png"
            alt="Food Image"
            class="food-image"
          />
          </button>
          <div class="food-info">
            <div class="food-name">Chicken Salad</div>
            <div class="food-label">Meat</div>
            <div class="price-rating">
              <span class="food-price">$15.99</span>
              <div class="star-rating">★★★★★</div>
            </div>
          </div>
        </div>
      </div>
      <div class="menu-container">
        <div class="box1">
          <button class="foods">
          <img
            src="../images/fried-chicken.png"
            alt="Food Image"
            class="food-image"
          />
          </button>
          <div class="food-info">
            <div class="food-name">Fried Chicken</div>
            <div class="food-label">Meat</div>
            <div class="price-rating">
              <span class="food-price">$15.99</span>
              <div class="star-rating">★★★★★</div>
            </div>
          </div>
        </div>
        <div class="box1">
          <button class="foods">
          <img
            src="../images/steak.png"
            alt="Food Image"
            class="food-image"
          />
          </button>
          <div class="food-info">
            <div class="food-name">Steak Fries Veggie</div>
            <div class="food-label">Meat</div>
            <div class="price-rating">
              <div>
                <span class="food-price">$15.99</span>
              </div>
              <div class="star-rating">★★★★★</div>
            </div>
          </div>
        </div>
      </div>
      <div class="space"></div>
      <a button  href="/ordernow" class="fixed-btn">Order Now!</a>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonButtons,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonAvatar,
  IonItem,
  IonLabel,
  IonIcon,
  IonList,
  IonItemDivider,
  IonButton,
  IonBadge,
  IonSearchbar,
} from "@ionic/vue";
import { defineComponent, onMounted } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  components: {
    IonButtons,
    IonContent,
    IonFooter,
    IonGrid,
    IonHeader,
    IonMenu,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonAvatar,
    IonItem,
    IonLabel,
    IonIcon,
    IonList,
    IonItemDivider,
    IonButton,
    IonBadge,
    IonSearchbar,
  },
  setup() {
    onMounted(() => {
      // Select all elements with the "fade-in" class
      const fadeElements = document.querySelectorAll('.fade-in');

      // Add the "show" class to each element after a short delay
      setTimeout(() => {
        fadeElements.forEach((element) => {
          element.classList.add('show');
        });
      }, 100); // delay in milliseconds
    });
  },
});
</script>
<style scoped>

.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-in.show {
  opacity: 1;
  transform: translateY(0);
}


.imges{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.points{
  width: 200px;
  margin-left: 50px;
}

.foods {
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.foods:hover {
  opacity: 0.8;
  transform: scale(1.05);
}

.foods .food-image {
  transition: transform 0.3s ease;
}

.foods:hover .food-image {
  transform: scale(1.1);
}

.logout-button {
  width: 50%;
  margin-top: 50px;
  border-radius: 60px;
}

.icons {
  width: 25px;
  height: 25px;
  margin-right: 8px;
  vertical-align: middle;
}

ion-item {
  display: flex;
  align-items: center;
}

.profile-row {
  display: flex;
  align-items: center;
}

.profile-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

h2 {
  margin: 0;
  font-size: 18px;
}

p {
  margin: 0;
  font-size: 14px;
  color: #666;
}

#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}

.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.center-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
}

.centered-icon {
  margin-right: 8px;
  border: 2px solid #000;
  border-radius: 8px;
  padding: 8px;
}

.horizontal-container {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-right: 35px;
}

.centered-icon {
  margin-right: 8px;
}

.profile {
  margin-right: 8px;
}

.crown-image {
  width: 30px;
  height: 28px;
  margin-right: 12px;
  vertical-align: middle;
}

.profile-image {
  width: 35px;
  height: 37px;
  vertical-align: middle;
}

.small-red-text {
  font-size: 18px;
  color: red;
}

.b-text {
  font-weight: bold;
  color: black;
}

.fast-food-image {
  width: 80px;
  height: 90px;
}

.content {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.fast-food-image {
  width: 80px;
  height: 90px;
  margin-right: 50px;
}

.fast-food-label {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.what-label {
  font-weight: bold;
  font-size: 28px;
}

.custom-searchbar {
  margin-top: 20px;
  --icon-color: red;
}

.offers-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 10px;
}

.offers {
  font-weight: bold;
  font-size: 20px;
}

.view-text {
  color: red;
  gap: 5px;
  display: flex;
}

.fixed-btn {
  position: fixed;
  bottom: 20px;
  right: 17px;
  background-color: red;
  color: white;
  padding: 20px 40px;
  font-size: 14px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  text-decoration: none;
  font-weight: bold;
}

.fixed-btn:hover {
  background-color: darkred;
}

.food-menu {
  width: 100vw;
  height: 99%;
  object-fit: cover;
  border-radius: 20px;
  transition: transform 0.3s ease;
}

.category-label {
  font-weight: bold;
  font-size: 20px;
  padding: 5px;
}

.category {
  display: flex;
  overflow-x: auto;
  width: 120vw;
  padding: 10px 1px;
}

.category div {
  flex-shrink: 0;
  margin-right: 5px;
}

.categorypic {
  width: 60vw;
  height: 99%;
  object-fit: cover;
  border-radius: 20px;
  transition: transform 0.3s ease;
}

.category div:hover .categorypic {
  transform: scale(1.05);
}

.pic-ctn {
  display: flex;
  overflow-x: auto;
  width: 120vw;
  padding: 0 2px 20px 6px;
}

.pic-ctn div {
  flex-shrink: 0;
  margin-right: 12px;
}

.pic {
  width: 80vw;
  height: 99%;
  object-fit: cover;
  border-radius: 20px;
  transition: transform 0.3s ease;
}

.pic-ctn div:hover .pic {
  transform: scale(1.05);
}

.space {
  margin-top: 70px;
}

.menu-container {
  display: flex;
  gap: 20px;
}

.box1 {
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.food-image {
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 8px;
}

.food-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.food-name {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 4px;
}

.food-label {
  font-size: 14px;
  color: #666;
  margin-bottom: 4px;
}

.price-rating {
  display: flex;
  align-items: center;
}

.food-price {
  font-size: 14px;
  color: red;
}

.star-rating {
  color: gold;
  font-size: 14px;
  margin-left: 40px;
}

</style>

