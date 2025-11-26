<script setup>
// Références d'assets (Vite-compatible). Utiliser le chemin relatif vers `src/assets`.
const dosDeCartes = new URL('../assets/dosDeCartes.jpg', import.meta.url).href;
const ghost = new URL('../assets/ghost.jpg', import.meta.url).href;
const ghoul = new URL('../assets/ghoul.jpg', import.meta.url).href;
const pumpkin = new URL('../assets/pumpkin.jpg', import.meta.url).href;
const witch = new URL('../assets/witch.jpg', import.meta.url).href;

const baseImages = [
  dosDeCartes, dosDeCartes, dosDeCartes, dosDeCartes,
  ghost, ghoul, witch, pumpkin
];

const lot = [ghost, ghoul, witch, pumpkin];
const aleatoireIndex = Math.floor(Math.random() * lot.length);
const aleatoireImage = lot[aleatoireIndex] || lot[0];
const aleatoire = [aleatoireImage, aleatoireImage];

const images = [];
for (const img of baseImages) images.push(img);
for (const img of aleatoire) images.push(img);
</script>

<template>
  <div class="carte">
    <img
      v-for="(image, index) in images"
      :key="index"
      class="card"
      :src="image"
      :alt="'Image ' + (index + 1)"
    />
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.carte {
  display: grid;
  grid-template-columns: repeat(2, 150px);
  grid-auto-rows: 150px; /* toutes les lignes ont même taille */
  gap: 15px;
  /* Ne pas occuper tout l'écran : utiliser largeur adaptative et centrage */
  width: 100%;
  max-width: 700px;
  margin: 40px auto; /* espace autour et centrage horizontal */
  place-content: center;
}

.card {
  border: 2px solid rgb(233, 171, 88);
  border-radius: 5px;
  width: 150px;
  height: 150px;
  display: block;
  object-fit: cover;
  object-position: center;
}
</style>
