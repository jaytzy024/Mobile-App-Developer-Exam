<template>
  <!-- Main Content Page -->
  <ion-page id="main-content">
    <ion-header class="header">
      <ion-toolbar class="toolbar">
        <!-- Menu button at the start -->
        <div class="center-container">
          <div class="horizontal-container">
            <a href="/home" class="back">
              <div class="small-gray-div">&lt;</div>
            </a>
            <div>
              <ion-label class="b-text">Order Summary</ion-label>
            </div>
          </div>
        </div>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <div class="info-container" style="margin-top: 10px">
        <div class="container-info">
          <div class="texts">
            <div class="address">Chou Tyuzu</div>
            <div class="contact-info">
              <div class="phone">+63123456789</div>
              <div class="email">chou.tzu-yu@email.com</div>
            </div>
          </div>
        </div>
        <div class="yellow-dots">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
      </div>

      <div class="info-container" style="margin-top: 10px">
        <div class="container-info">
          <div class="texts">
            <div class="address">My Home Address</div>
            <div class="contact-info">
              <div class="phone">No. 21 St.Agustin Street Brgy.De Jose</div>
              <div class="email">Delgado City 2234 Philippines</div>
            </div>
          </div>
          <div class="radio-button">
            <label>
              <input type="radio" name="address" value="home" checked />
            </label>
          </div>
        </div>
        <div class="yellow-dots">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
      </div>

      <div class="info-container" style="margin-top: 10px">
        <div class="container-info">
          <div class="texts">
            <div class="address">Work/Office</div>
            <div class="contact-info">
              <div class="phone">3rd flr Anyeong Bldg.Seareal St.Joaqin</div>
              <div class="email">City 3456 Philippines</div>
            </div>
          </div>
          <div class="radio-button">
            <label>
              <input type="radio" name="address" value="home" checked />
            </label>
          </div>
        </div>
        <div class="yellow-dots">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
      </div>
      <div class="add-ons-title">Add-Ons</div>
      <div class="add-ons-section">
        <div class="add-ons-container">
          <!-- Left side: Image -->
          <div class="add-ons-left">
            <img src="../images/steak.png" alt="Tomato Sauce" />
            <div class="middle">
              <div class="item-name">Steak Fries Veggies</div>
              <div class="item-type">1x Tomato Sauce</div>
              <div class="item-type">1x Regular Coke</div>
              <div class="item-type">1x Fried Chicken</div>
            </div>
          </div>
          <div class="add-ons-right">
            <div class="quantity-control">
              <div class="mid">
                <div class="item-price">P 49</div>
              </div>
              <button class="qty-btn">-</button>
              <div class="quantity">1</div>
              <button class="qty-btn">+</button>
            </div>
          </div>
        </div>
        <div class="yellow-dots" style="margin-top: 50px">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
      </div>
      <div class="add-ons-title">Payment Option</div>
      <div class="info-container" style="margin-top: 10px">
        <div class="payment">
          <div class="texts">
            <div class="address">Cash on Delivery</div>
            <div class="contact-info">
              <div class="phone">Pay when you received the order</div>
            </div>
          </div>
          <div class="radio-button">
            <label>
              <input type="radio" name="address" value="home" checked />
            </label>
          </div>
        </div>
      </div>

      <div class="info-container" style="margin-top: 10px">
        <div class="payment">
          <div class="texts">
            <div class="address">Loyalty Points <span class="points">(0 Points)</span></div>
            <div class="contact-info">
              <div class="phone">Pay using your earned loyalty points</div>
            </div>
          </div>
          <div class="radio-button">
            <label>
              <input type="radio" name="address" value="home" checked />
            </label>
          </div>
        </div>
      </div>
      <div class="info-container" style="margin-top: 10px">
        <div class="payment">
          <div class="texts">
            <div class="address"><img src="../images/paypal.png" alt=""></div>
            <div class="contact-info">
              <div class="phone">
                A new tab will open to access your account
              </div>
            </div>
          </div>
          <div class="radio-button">
            <label>
              <input type="radio" name="address" value="home" checked />
            </label>
          </div>
        </div>
      </div>
      <div class="info-container" style="margin-top: 10px">
        <div class="payment">
          <div class="texts">
            <div class="address"><img src="../images/paynamics.png" alt=""></div>
            <div class="contact-info">
              <div class="phone">Choose paynamics services availe from you</div>
            </div>
          </div>
          <div class="radio-button">
            <label>
              <input type="radio" name="address" value="home" checked />
            </label>
          </div>
        </div>
      </div>

      <div class="total" style="margin-top: 10px">
        <div class="labels">
          <ion-label>Subtotal</ion-label>
          <ion-label>P 185</ion-label>
        </div>
        <div class="labels" style="margin-bot: 10px">
          <ion-label>Delivery Charge</ion-label>
          <ion-label>P 59</ion-label>
        </div>
      </div>

      <div class="info-container" style="margin-top: 10px">
        <div class="payment">
          <div class="texts">
            <div class="address" style="color: gray">Charge for</div>
            <div class="contact-info">
              <div class="phone">e.g 1.0000</div>
            </div>
          </div>
        </div>
      </div>

      <footer class="footer">
        <div>
          <ion-label class="grand">Grand Total</ion-label>
          <ion-label class="p">P 244</ion-label>
        </div>
        <div>
          <ion-button href="/orderreceived" class="fixed-btn" color="danger">Place Order</ion-button>
        </div>
      </footer>
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
  IonModal,
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
  setup() {
    const router = useRouter();

    // Method to navigate to the homepage
    async function goToHome() {
      await menuController.close(); // Close the menu
      router.push("/home");
    }

    // Method to navigate to the order-now page
    async function goToOrderNow() {
      await menuController.close(); // Close the menu
      router.push("/order-now");
    }

    return {
      goToHome,
      goToOrderNow,
    };
  },
});
</script>
<style scoped>
.grand{
  font-size: 12px;
}
.p{
  font-weight: bold;
}

.footer div {
      display: flex;
      justify-content: flex-start; /* Aligns items to the start */
      gap: 6px; /* Space between labels */
       flex-direction: column;
    }

.content {
  min-height: 150vh; 
  padding: 12px;
  background-color: #f5f5f5;
}

.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #e9ecef;
  padding: 15px;
  box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.3); 
}

.labels {
  display: flex;
  justify-content: space-between;
  font-weight: Bold;
  font-size: 18px;
  padding: 10px 5px 0 5px;
}
.add-ons-section {
  display: flex;
}
.containers {
  display: flex; /* Use flexbox to align child elements horizontally */
  align-items: center; /* Center items vertically within the container */
}
.containers-info {
  width: 95%; /* Set the width to 100% of the parent container */
  height: 150px; /* Set height to 120px */
  background-color: #f0f0f0; /* Optional: Add a background color */
  border-radius: 8px; /* Optional: Round the corners for a smooth look */
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Aligns items to the start of the flex container */
  padding: 15px 15px;
  gap: 10px;
}

.info-container {
  display: flex; /* Use flexbox to align child elements horizontally */
  align-items: center; /* Center items vertically within the container */
}
.add-ons-container {
  width: 95%; /* Set the width to 100% of the parent container */
  height: 160px; /* Set height to 120px */
  background-color: #e9ecef; /* Optional: Add a background color */
  border-radius: 8px; /* Optional: Round the corners for a smooth look */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Optional: Add shadow for depth */
  display: flex;
  justify-content: space-between; /* Align content to both sides */
  align-items: flex-start;
  flex-direction: column;
  padding: 10px;
}

.name {
  font-weight: bold; /* Makes the font bold */
  font-size: 16px; /* Adjust size as needed */
}

.contact-info {
  color: #91979b; /* Sets text color to light gray */
  font-size: 14px; /* Smaller font size than the name */
}

.yellow-dots {
  position: relative;
  left: 10px; /* Adjust positioning as needed */
}

.points{
  color: red;  
  font-size: 14px;
}

.dot {
  width: 10px; /* Diameter of the dot */
  height: 10px; /* Diameter of the dot */
  background-color: yellow; /* Color of the dot */
  border-radius: 50%; /* Makes it circular */
  margin: 5px 0; /* Space between dots */
}

.container-info {
  width: 95%; /* Set the width to 100% of the parent container */
  height: 100px; /* Set height to 120px */
  background-color: #e9ecef; /* Optional: Add a background color */
  border-radius: 8px; /* Optional: Round the corners for a smooth look */
  display: flex;
  flex-direction: row;
  align-items: flex-start; /* Aligns items to the start of the flex container */
  justify-content: space-between;
  padding: 15px 15px;
  gap: 10px;
}

.payment {
  width: 100%; /* Set the width to 100% of the parent container */
  height: 80px; /* Set height to 120px */
  background-color: #e9ecef; /* Optional: Add a background color */
  border-radius: 8px; /* Optional: Round the corners for a smooth look */
  display: flex;
  flex-direction: row;
  align-items: flex-start; /* Aligns items to the start of the flex container */
  justify-content: space-between;
  padding: 15px 15px;
  gap: 10px;
}

.address {
  font-weight: bold; /* Makes the font bold */
  font-size: 16px; /* Adjust size as needed */
  margin-bottom: 15px;
}

ion-modal#example-modal {
  --width: fit-content;
  --min-width: 300px;
  --height: fit-content;
  --border-radius: 6px;
  --box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);
}

ion-modal#example-modal h1 {
  margin: 20px 20px 10px 20px;
}

ion-modal#example-modal ion-icon {
  margin-right: 6px;

  width: 48px;
  height: 48px;

  padding: 4px 0;

  color: #aaaaaa;
}

ion-modal#example-modal .wrapper {
  margin-bottom: 10px;
}
/* Center modal content */
.modal-content {
  text-align: center; /* Center text and content */
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* Image style */
.modal-image img {
  width: 80px; /* Set image width */
  height: 80px; /* Set image height */
  object-fit: cover; /* Maintain aspect ratio */
  border-radius: 50%; /* Optional: Round the image */
  margin-bottom: 15px; /* Space below image */
}

/* Modal text */
.modal-text h2 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.modal-text p {
  font-size: 12px;
  color: gray;
  margin-bottom: 20px; /* Space below text */
}

/* Button style */
.proceed-btn {
  background-color: red; /* Red background */
  color: white; /* White text */
  font-weight: bold;
  padding: 12px 30px; /* Adjust padding */
  border-radius: 8px; /* Rounded corners */
  border: none; /* No border */
  cursor: pointer; /* Pointer cursor on hover */
  margin-bottom: 15px; /* Space below button */
}

.proceed-btn:hover {
  background-color: darkred; /* Darker red on hover */
}

/* Link style */
.add-more {
  color: red; /* Red text */
  font-size: 12px; /* Font size */
  text-decoration: none; /* Remove underline */
  cursor: pointer; /* Pointer cursor on hover */
}

.add-more:hover {
  text-decoration: underline; /* Optional: underline on hover */
}

a.back {
  color: black; /* Sets text color to black */
  text-decoration: none; /* Removes underline */
}

.add-ons-title {
  font-weight: bold; /* Make the "Add-Ons" text bold */
  font-size: 20px; /* Set font size to 20px */
  margin: 20px 0 2px 0;
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
  margin-left: 10px;
}

.mid {
  display: flex;
  flex-direction: column; /* Stack image and text vertically */
  justify-content: center;
  align-items: flex-start;
  margin-right: 160px;
  margin-top: 10px;
}

.mid .item-price {
  font-size: 16px; /* Price text size */
  color: red;
  font-weight: bold;
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

.add-ons-right {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 10px; /* Adds space between the elements */
}

.add-ons-right .quantity-control {
  display: flex;
  gap: 10px;
  align-items: center;
}

.add-ons-right .qty-btn {
  width: 35px; /* Size of buttons */
  height: 35px;
  border-radius: 15px; /* Rounded corners */
  background-color: lightgray;
  color: red;
  font-weight: bold;
  font-size: 18px; /* Button font size */
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.add-ons-right .qty-btn:hover {
  background-color: darkgray;
}

.add-ons-right .quantity {
  font-size: 16px;
  font-weight: bold;
}

.menu-item {
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  font-family: Arial, sans-serif;
  text-align: center; /* Default center alignment */
  box-sizing: border-box;
}

.item-title {
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
  text-align: left; /* Aligns title to the left */
}

.star {
  color: yellow;
  font-size: 20px;
  margin-bottom: 10px;
  text-align: left; /* Aligns stars to the left */
}

.description {
  font-size: 18px;
  margin-bottom: 15px;
  text-align: left; /* Aligns description to the left */
}

.price-and-quantity {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.price {
  color: red;
  font-weight: bold;
  font-size: 22px;
}

.quantity-control {
  display: flex;
  align-items: center;
  gap: 10px; /* Adds a gap between the buttons */
}

.qty-btn {
  width: 40px; /* Slightly increase width */
  height: 40px; /* Slightly increase height */
  border: 1px solid #ddd;
  border-radius: 15px; /* Increased border-radius for rounder corners */
  background-color: lightgray;
  color: red;
  font-weight: bold;
  font-size: 24px; /* Increased font size */
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease; /* Smooth transition for background and shadow */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow */
}

.qty-btn:hover {
  background-color: darkgray; /* Dark gray on hover */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); /* Stronger shadow on hover */
}

.quantity {
  font-size: 20px;
  font-weight: bold;
}

.beverages-title {
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
  text-align: left; /* Aligns "Beverages" title to the left */
}

.beverages-dropdown {
  width: 100%;
  padding: 15px; /* Increased padding for better spacing (top, bottom, left, right) */
  margin-bottom: 15px; /* Increased bottom margin */
  border-radius: 12px; /* Slightly rounded border for a bigger look */
  font-size: 16px; /* Increased font size for better readability */
  font-weight: 600;
  height: 50px; /* Increased height */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow on dropdown */
  transition: box-shadow 0.3s ease; /* Smooth transition for box-shadow */
  position: relative; /* Allow positioning of title inside */
  padding-right: 40px; /* Added padding-right to make space for the custom arrow */
}

.beverages-dropdown::before {
  content: "Choose Beverages"; /* Title inside dropdown */
  position: absolute;
  top: 12px; /* Adjusted position for the title */
  left: 15px; /* Adjusted position for the title */
  color: gray; /* Title color */
  font-weight: normal;
  font-size: 16px; /* Increased title font size */
}

.beverages-dropdown:hover {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); /* Stronger shadow on hover */
}

/* Custom arrow */
.beverages-dropdown::-ms-expand {
  display: none; /* Removes default arrow for IE/Edge */
}

.beverages-dropdown {
  -webkit-appearance: none; /* Removes default arrow in WebKit browsers */
  -moz-appearance: none; /* Removes default arrow in Firefox */
  appearance: none; /* Standardizes the appearance */
  background-image: url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 viewBox=%220 0 16 16%22%3E%3Cpath fill=%22none%22 stroke=%22black%22 stroke-width=%222%22 d=%22M1 5l6 6 6-6%22/%3E%3C/svg%3E"); /* Custom down arrow */
  background-position: right 15px center; /* Position the arrow to the right with padding */
  background-repeat: no-repeat;
  background-size: 12px 12px; /* Resize the custom arrow */
}

/* For Firefox, increasing the size of the dropdown arrow */
.beverages-dropdown::-moz-focus-inner {
  border: none; /* Removing inner border to make space for custom arrow */
}

/* Apply a margin to the right for the dropdown */
.beverages-dropdown {
  margin-right: 15px; /* Add right margin */
}

/* New section for buttons below the dropdown */
.size-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  gap: 10px;
}

.size-btn {
  flex: 1;
  padding: 14px 8px; /* Increased padding for better button spacing (vertical and horizontal) */
  border-radius: 10px; /* Rounded button corners */
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  transition: box-shadow 0.3s ease, background-color 0.3s ease; /* Smooth transition for box-shadow and background color */
  border: 1px solid black; /* Added black border */
}

.size-btn:hover {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); /* Stronger shadow on hover */
}

/* Specific hover states for each size button */
.size-btn.regular:hover {
  background-color: gold; /* Hover effect for Regular button */
}

.size-btn.large:hover {
  background-color: #f4f4f4; /* Hover effect for Large button */
}

.size-btn.xlarge:hover {
  background-color: #f4f4f4; /* Hover effect for X-Large button */
}

.size-btn.regular {
  background-color: yellow;
}

.size-btn.large,
.size-btn.xlarge {
  background-color: white;
  border: solid #ddd;
}

.size-btn.large {
  color: black;
}

.size-btn.xlarge {
  color: black;
}

.food-menu {
  width: 100vw; /* Makes each image larger than the container */
  height: 100%;
  object-fit: cover; /* Ensures proper scaling */
  border-radius: 20px; /* Optional: Adds rounded corners */
  transition: transform 0.3s ease; /* Optional: Smooth effect when hovering */
}

.small-gray-div {
  display: flex;
  align-items: center; /* Vertically centers content within each column */
  justify-content: center;
  background-color: rgb(203, 203, 203);
  width: 30px;
  height: 30px;
  margin-left: 10px;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 200;
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
  justify-content: space-between; /* Center them horizontally */
  flex-grow: 1; /* Allow this container to grow and push the other items apart */
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
  align-items: center; /* Vertically center the content */
  gap: 15px;
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
  font-size: 20px;
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
  bottom: 14px; /* 20px from the bottom of the screen */
  right: 17px; /* 20px from the right of the screen */
  color: white; /* White text color */
  font-size: 16px; /* Font size of the button text */
  border: none; /* Removes the border */
  border-radius: 8px; /* Rounded corners */
  cursor: pointer; /* Makes the cursor a pointer when hovering over the button */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Optional: Adds a shadow for better visibility */
  z-index: 1000; /* Ensures the button is above other content */
  text-decoration: none;
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

