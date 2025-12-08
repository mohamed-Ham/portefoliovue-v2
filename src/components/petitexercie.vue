<!-- Composant exercice : gestion d'une liste de mots -->
<template>
    <h2>Liste de cadeaux pour le pere Noel :</h2>
    <!-- Boucle v-for : crée un <li> pour chaque mot dans 'liste' -->
    <!-- (mot, index) récupère la valeur et sa position -->
    <!-- :key="mot" identifie chaque élément de manière unique -->
    <ul>
      <li v-for="(mot, index) in liste" :key="mot">
        
        {{ mot }} <!-- Affiche le mot -->
        
        <!-- Bouton pour supprimer l'élément à la position 'index' -->
        <button v-on:click="supprimer(index)"> X </button>

      </li>
    </ul>
 
    <!-- Champ de saisie avec v-model (liaison bidirectionnelle) -->
    <!-- v-on:keyup.enter="danstab" : appelle danstab() si on appuie sur Entrée -->
    <input v-model="elem" type="text" v-on:keyup.enter="danstab" placeholder="Entrez un cadeau voulu...">   

    <!-- Bouton pour ajouter l'élément à la liste -->
    <button v-on:click="danstab">
      Ajouter à la liste
    </button>
</template>
 
<script>
export default {
  // data() retourne l'état réactif du composant
  data() {
    return {
      elem: '',  // Champ de saisie actuel
      liste: ['ps4', 'Fromage a raclette', 'jus de pomme a la fraise', 'maison bord de mer vers canne si possile']  // Liste initiale de mots
    }
  },
  
  // methods contient les fonctions appelables depuis le template
  methods: {
    // Ajoute un nouvel élément à la liste
    danstab() {
      if (this.elem != '') {  // Vérifie que le champ n'est pas vide
        this.liste.push(this.elem);  // Ajoute à la fin du tableau
        this.elem = '';  // Vide le champ pour la prochaine saisie
      } 
    },

    // Supprime un élément à une position donnée
    supprimer(index) {
      // "splice" coupe un tableau à une position et enlève des éléments
      // splice(position, nombre_d'éléments_à_enlever)
      // Ici : coupe à 'index' et enlève 1 élément
      this.liste.splice(index, 1);
    }
  }
}
</script>