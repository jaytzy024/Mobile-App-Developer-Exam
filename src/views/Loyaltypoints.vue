<template>
  <ion-menu content-id="main-content">
   <!-- Menu Content -->
    <ion-content class="ion-padding">
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
              <ion-label class="b-text">Loyalty Points</ion-label>
            </div>
          </div>
        </div>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <div class="mid">
        <div class="offers-container">
          <div class="top">
            <div>
              <img src="../images/crown.png" alt="" class="crown">
            </div>
            <div>
              <ion-label class="offers">Special Offers!</ion-label>
            </div>
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

      <div class="paragraph">
        <p>
          Earn points by purchasing from our store. Vestibulum ante ipsum primis in faucibus orci luctus et.
        </p>
      </div>

      <div class="circle">
        <img src="../images/circle.png" alt="">
      </div>

       <div class="mid">
        <div class="offers-container">
          <div class="top">
            <div>
              <ion-label class="offers">Rewards</ion-label>
            </div>
          </div>
          <div class="view-text">
            <div>
              <ion-label>How it works</ion-label>
            </div>
            <div>
              <ion-label>></ion-label>
            </div>
          </div>
        </div>
      </div>
      
      <div class="buttons">
        <ion-button class="all-button">All</ion-button>
        <ion-button class="button1">Breakfast</ion-button>
        <ion-button class="button1">Chicken</ion-button>
        <ion-button class="button1">Seafood</ion-button>
      </div>

      <div class="add-ons-section">
        <div class="add-ons-container">
          <!-- Left side: Image -->
          <div class="add-ons-left">
            <img src="../images/fries2.png" alt="Tomato Sauce" />
          </div>
          <!-- Middle: Item name, type, price -->
          <div class="middle">
            <div class="item-name">Steak Fries Veggies</div>
            <div class="item-type">Meat</div>
            <div class="item-price"><img src="../images/20points.png" alt=""></div>
          </div>
          <!-- Right side: Checkbox and quantity control -->
        </div>
      </div>
     
      <div class="space"></div>
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
  menuController,
} from "@ionic/vue";
import { defineComponent } from "vue";
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
  
});
</script>

<style scoped>

.offers-container {
  display: flex; /* Makes the container a flexbox */
  justify-content: space-between; /* Distributes space between the elements */
  align-items: center; /* Centers the items vertically */
  width: 100%; /* Ensures the container takes full width */
  padding: 2px 0;
}

.offers {
  font-size: 18px;
  font-weight: bold;
}

.view-text {
  color: red; /* Makes "View All" text red */
  gap: 5px;
  display: flex; /* Makes the container a flexbox */
  margin-right: 7px;
  font-size: 15px;
}

.crown{
  width: 50px;
  height: auto;
}

.top{
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 5px;
}

.paragraph{
  padding: 6px;
  
}

.paragraph p{
  font-size: 14px;
}

.buttons{
  padding: 10px 0;
}

.circle{
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
}

.points{
  width: 200px;
  margin-left: 50px;
}

.imges{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}


.add-ons-left {
  display: flex;
  justify-content: center;
  align-items: center;
}

.add-ons-left img {
  width: 85px; /* Set image size */
  height: 95px; /* Set image size */
  object-fit: cover; /* Maintain image aspect ratio */
  border-radius: 4px; /* Adds rounded corners to the image */
}

.middle {
  display: flex;
  flex-direction: column; /* Stack image and text vertically */
  justify-content: center;
  align-items: flex-start;
  gap: 5px; /* Adds space between the elements */
}

.middle .item-name {
  font-size: 16px; /* "Tomato Sauce" text size */
  font-weight: bold;
}

.middle .item-type {
  font-size: 14px; /* Smaller text for "Sauce" */
  color: gray;
}

.middle .item-price {
  font-size: 16px; /* Price text size */
  color: red;
  font-weight: bold;
}

.add-ons-container {
  width: 100%; /* Set the width to 100% of the parent container */
  height: 120px; /* Set height to 120px */
  background-color: #e9ecef; /* Optional: Add a background color */
  border-radius: 8px; /* Optional: Round the corners for a smooth look */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Optional: Add shadow for depth */
  display: flex;
  justify-content: flex-start; /* Align content to both sides */
  padding: 10px;
  gap: 10px;
}

.foods {
  background-color: transparent; /* Keeps the button background transparent */
  border: none; /* Removes the button border */
  cursor: pointer; /* Ensures the pointer cursor is displayed on hover */
  padding: 0; /* Removes padding to make the image fit perfectly */
  transition: transform 0.3s ease, opacity 0.3s ease; /* Smooth transitions */
}

.foods:hover {
  opacity: 0.8; /* Slight opacity change on hover for the button */
  transform: scale(1.05); /* Slight zoom-in effect for the button */
}

.foods .food-image {
  transition: transform 0.3s ease; /* Ensures smooth image transition */
}

.foods:hover .food-image {
  transform: scale(1.1); /* Slightly zoom in the image on hover */
}

/* All button - Red color, border radius 40px */
.all-button {
  --background: red;
  --border-radius: 40px;
  color: white; /* Ensures the text is readable on the red background */
  font-size: 12px;
  margin-bottom: 15px;
}

/* Breakfast button - Light gray background, border radius 40px */
.button1 {
  --background: rgb(231, 231, 231);
  --border-radius: 40px;
  color: black; /* Ensures the text is readable on the light gray background */
  font-size: 10px;
  margin-left: 14px;
  margin-bottom: 15px;
}

.logout-button {
    width: 50%; /* Set the button to half the width of the parent */
    margin-top: 50px; /* Center the button horizontally */
    border-radius: 60px; /* Set border radius */
  }
  
 /* Resize the icon */
  .icons {
    width: 25px;
    height: 25px;
    margin-right: 8px; /* Adds space between the icon and the label */
    vertical-align: middle; /* Aligns the icon with the label vertically */
  }

.category-label {
  font-weight: bold; /* Makes the text bold */
  font-size: 20px; /* Adjusts the font size; you can change it as needed */
  padding: 5px;
}

  /* Align content within ion-item */
  ion-item {
    display: flex;
    align-items: center;
  }

/* Align the contents of the row vertically */
  .profile-row {
    display: flex;
    align-items: center; /* Vertically centers content within each column */
  }

  /* Optional: Center the profile info within its column */
  .profile-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  /* Additional styles for spacing and presentation */
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

/* Styling the toolbar */
.toolbar {
  display: flex;
  justify-content: space-between; /* Space out items to left and right */
  align-items: center; /* Vertically center the content */
}

.center-container {
  display: flex;
  align-items: center; /* Vertically center the icon and label */
  justify-content: flex-start; /* Center them horizontally */
  flex-grow: 1; /* Allow this container to grow and push the other items apart */
  gap: 10px;
}

/* Styling for the icon */
.centered-icon {
  margin-right: 8px; /* Space between the icon and label */
  border: 2px solid #000; /* Border around the icon */
  border-radius: 8px; /* Optional: Rounded corners */
  padding: 8px; /* Optional: Padding inside the border */
}

.horizontal-container {
  display: flex; /* Make the container a flex container */
  align-items: flex-start; /* Vertically center the content */
}

.centered-icon {
  margin-right: 8px; /* Optional: Adds space between the icon and label */
}

.profile {
  margin-right: 8px; /* Adjust the value as needed */
}

.crown-image {
  width: 30px; /* Adjust the width as needed */
  height: 28px; /* Adjust the height to keep it proportional */
  margin-right: 12px;
  /* Optional: Add styling for alignment */
  vertical-align: middle; /* Aligns the image with text vertically */
}

.profile-image {
  width: 30px; /* Adjust the width as needed */
  height: 30px; /* Adjust the height to keep it proportional */
  /* Optional: Add styling for alignment */
  vertical-align: middle; /* Aligns the image with text vertically */
}

.small-red-text {
  font-size: 18px;
  color: red;
}

.b-text {
  font-weight: bold;
  color: black;
}

.custom-searchbar {
  margin-top: 2px;
  margin-bottom: 10px;
  --icon-color: rgb(6, 5, 5);
}

/* Styling for the fixed button */
.fixed-btn {
  position: fixed; /* Fixes the button in place */
  bottom: 20px; /* 20px from the bottom of the screen */
  right: 17px; /* 20px from the right of the screen */
  background-color: red; /* Red background color */
  color: white; /* White text color */
  padding: 15px 30px; /* Padding to make the button larger */
  font-size: 16px; /* Font size of the button text */
  border: none; /* Removes the border */
  border-radius: 8px; /* Rounded corners */
  cursor: pointer; /* Makes the cursor a pointer when hovering over the button */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Optional: Adds a shadow for better visibility */
  z-index: 1000; /* Ensures the button is above other content */
}

/* Hover effect for the button */
.fixed-btn:hover {
  background-color: darkred; /* Changes color when the button is hovered */
}

.space {
  margin-top: 70px;
}

/* Container for both menu boxes */
.menu-container {
  display: flex;
  gap: 20px; /* Space between each box */
}

/* Style for each box */
.box1 {
  width: 200px; /* Set width for each box */
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Image styles */
.food-image {
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 8px;
}

/* Food information styles */
.food-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.food-name {
  font-size: 15px;
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

/* Price styles */
.food-price {
  font-size: 14px;
  color: red;
}

/* Star rating styles */
.star-rating {
  color: gold;
  font-size: 14px;
  margin-left: 40px; /* Adjusts space between price and stars */
}
</style>

