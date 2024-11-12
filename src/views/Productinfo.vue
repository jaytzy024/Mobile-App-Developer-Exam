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
              <ion-label class="b-text">Meat</ion-label>
            </div>
          </div>
          <div class="profile">
            <img
              src="../images/email.png"
              alt="Small Icon"
              class="profile-image"
            />
          </div>
        </div>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-button
        class="fixed-btn"
        id="open-custom-dialog"
        expand="block"
        color="danger"
        style="text-transform: none; height: 50px"
        >Add to Bag</ion-button
      >

      <ion-modal id="example-modal" ref="modal" trigger="open-custom-dialog">
        <div class="modal-content">
          <!-- Image -->
          <div class="modal-image">
            <img src="../images/like.png" alt="Icon" />
          </div>

          <!-- Text: "Successfully Added" -->
          <div class="modal-text">
            <h2>Successfully Added</h2>
            <p>What do you want to do now?</p>
          </div>

          <!-- Button: "Proceed to Checkout" -->
          <div class="modal-actions">
            <a button href="/ordersummary" class="proceed-btn"
              >Proceed to Checkout</a
            >
            <div class="add">
              <a href="/ordernow" class="add-more">Add More</a>
            </div>
          </div>

          <!-- Add More Link -->
        </div>
      </ion-modal>

      <div>
        <img src="../images/fries.png" alt="" class="food-menu" />
      </div>
      <div class="menu-item">
        <h2 class="item-title">Steak Fries Veggies</h2>

        <div class="star">★★★★★</div>

        <p class="description">
          Enjoy our delicious steak fries, served crispy and golden, paired
          perfectly with fresh veggies for a tasty treat.
        </p>

        <div class="price-and-quantity">
          <span class="price">P 172</span>

          <div class="quantity-control">
            <button class="qty-btn">-</button>
            <span class="quantity">1</span>
            <button class="qty-btn">+</button>
          </div>
        </div>

        <h3 class="beverages-title">Beverages</h3>
        <select class="beverages-dropdown">
          <option>Coke</option>
          <option>Sprite</option>
          <option>Lemon</option>
        </select>

        <div class="size-buttons">
          <button class="size-btn regular">Regular</button>
          <button class="size-btn large">Large</button>
          <button class="size-btn xlarge">X-Large</button>
        </div>
      </div>

      <div class="add-ons-section">
        <div class="add-ons-title">Add-Ons</div>
        <div class="add-ons-container">
          <!-- Left side: Image -->
          <div class="add-ons-left">
            <img src="../images/sauce.png" alt="Tomato Sauce" />
          </div>
          <!-- Middle: Item name, type, price -->
          <div class="middle">
            <div class="item-name">Tomato Sauce</div>
            <div class="item-type">Sauce</div>
            <div class="item-price">P 49</div>
          </div>
          <!-- Right side: Checkbox and quantity control -->
          <div class="add-ons-right">
            <div>
              <input type="checkbox" id="addon-checkbox" />
            </div>
            <div class="quantity-control">
              <button class="qty-btn">-</button>
              <div class="quantity">1</div>
              <button class="qty-btn">+</button>
            </div>
          </div>
        </div>
      </div>

      <div class="add-ons-section" style="margin-top: 15px">
        <div class="add-ons-container">
          <!-- Left side: Image -->
          <div class="add-ons-left">
            <img src="../images/rice.png" alt="Tomato Sauce" />
          </div>
          <!-- Middle: Item name, type, price -->
          <div class="middle" style="margin-right: 12px">
            <div class="item-name">White Rice</div>
            <div class="item-type">Rice</div>
            <div class="item-price">P 25</div>
          </div>
          <!-- Right side: Checkbox and quantity control -->
          <div class="add-ons-right">
            <div>
              <input type="checkbox" id="addon-checkbox" />
            </div>
            <div class="quantity-control">
              <button class="qty-btn">-</button>
              <div class="quantity">1</div>
              <button class="qty-btn">+</button>
            </div>
          </div>
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
  text-decoration: none;
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

.add {
  padding-top: 20px;
}

a.back {
  color: black; /* Sets text color to black */
  text-decoration: none; /* Removes underline */
}

.add-ons-title {
  font-weight: bold; /* Make the "Add-Ons" text bold */
  font-size: 20px; /* Set font size to 20px */
  margin: 10px 0 10px 10px;
}

.add-ons-container {
  width: 100%; /* Set the width to 100% of the parent container */
  height: 120px; /* Set height to 120px */
  background-color: #e9ecef; /* Optional: Add a background color */
  border-radius: 8px; /* Optional: Round the corners for a smooth look */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Optional: Add shadow for depth */
  display: flex;
  justify-content: space-between; /* Align content to both sides */
  padding: 10px;
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

.add-ons-right {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px; /* Adds space between the elements */
}

.add-ons-right input[type="checkbox"] {
  width: 20px;
  height: 20px;
  margin: 10px 0 20px 65px;
  accent-color: red; /* Custom checkbox color */
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

.fixed-btn {
  position: fixed; /* Fixes the button in place */
  bottom: 20px; /* 20px from the bottom of the screen */
  left: 50%; /* Align to the center horizontally */
  transform: translateX(-50%); /* Adjusts the position to truly center it */
  color: white; /* White text color */
  font-size: 17px; /* Resized font size */
  border: none; /* Removes the border */
  border-radius: 8px; /* Rounded corners */
  cursor: pointer; /* Makes the cursor a pointer when hovering over the button */
  z-index: 1000; /* Ensures the button is above other content */
  width: 100%; /* Makes the button take up full width */
  max-width: 345px; /* Optional: limits the button width to a maximum value */
}

/* Hover effect for the button */
.fixed-btn:hover {
  /* background-color: darkred; Changes color when the button is hovered */
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

