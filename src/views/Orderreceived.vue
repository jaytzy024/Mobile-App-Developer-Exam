<template>
  <div class="content">
    <div class="container">
      <div>
        <img src="../images/okay.png" alt="" class="pic" />
      </div>
      <div>
        <ion-label> Order-Received </ion-label>
        <p>
          Your order <span class="order-number">No.19049585</span> has successfully been taken and is now being processed.
          Kindly wait for our notification regarding your order.
        </p>
      </div>
    </div>

    <div class="bottom-links">
      <ion-button
        class="fixed-btn"
        expand="block"
        color="danger"
        style="text-transform: none; height: 50px;"
        >Track Order!</ion-button
      >
      <a href="/home" class="back-link">Back to Home</a>
    </div>
  </div>
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
/* Centering content */
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  text-align: center;
  padding: 20px;
}

/* Image styling */
.pic {
  margin-top: 40px;
  margin-bottom: 20px;
}

/* Styling for ion-label and paragraph */
ion-label {
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 10px;
}

p {
  color: gray;
  margin-bottom: 30px;
  max-width: 400px;
}

.order-number {
  color: red; /* Sets the order number color to red */
}

.container{
  margin-bottom: 100px;
}

/* Positioning button and link at the bottom */
.bottom-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  gap: 10px;
}

.fixed-btn {
  width: 220%;
  max-width: 345px;
  font-size: 17px;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.back-link {
  color: red; /* Sets the font color to red */
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
}

</style>
