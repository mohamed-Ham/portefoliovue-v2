
<template>
<section class="intro">
        <div> 
            <h2>Je m'appelle</h2>
            <h3>Mohamed Hammouti</h3> 
            <a href="@/assets/cv_HAMMOUTI_MOHAMED.pdf" class="cv" target="_blank">
            📄 Télécharger mon CV
            </a>
        </div>
        <img src="@/assets/htmlimg.jpg" alt="imagecode">
    </section>

   <section id="propos" >
        <h2>A propos</h2>
        <p>
            Je m'appelle <strong>Mohamed Hammouti</strong>, étudiant en <strong>BTS SIO (Services Informatiques aux Organisations)</strong> à IFIDE Sup Formation.
            Passionné par l’informatique, je me spécialise dans le <strong>développement web et applicatif</strong>.
            Curieux, rigoureux et motivé, je cherche à mettre mes compétences au service d’une entreprise dynamique
            où je pourrais progresser tout en apportant une réelle valeur technique.
        </p>

        
    </section>
   <section id="Projets" class="fond">
            <h2>Mes projets</h2>
                <ul>
                        <li><strong>Site web personnel :</strong> Création d’un site statique en HTML/CSS dans le cadre de mon baccalauréat.</li>
                        <li><strong>Morpion en Python :</strong> Jeu en terminal, utilisation de fonctions, boucles et gestion des entrées utilisateur.</li>
                        
                </ul>
            <img src="@/assets/echecph.png.png" alt="zwawi"   class="projetimg">
    </section>

    <section id="Technologie" class="fond" >
        <h2>Technologie</h2>
        <ul>
            <li><strong>Langages de programmation</strong> HTML, CSS, Python, c, shell </li>
            <li><strong>Gestion de bases de données</strong> : MySQL, SQLite</li>
            <li><strong>Outils de développement</strong> : Git, Visual Studio Code</li>
        </ul>
        <img src="@/assets/htmlcss.png" alt="Bright and clear HTML5 and CSS3 logos side by side on white background. Web development symbols representing modern coding standards. Technology and programming icons."  class="petite-image">
        <img src="@/assets/logopython.png" alt="logo de python qui est un langage de programmation interprété, multiparadigme et multiplateformes. Il favorise la programmation impérative structurée, fonctionnelle et orientée objet." class="petite-image">
        <img src="@/assets/logosql.png" alt="logosql qui est un langage de programmation permettant de manipuler les données et les systèmes de bases de données relationnelles" class="petite-image">
        <img src="@/assets/vscode.png" alt="logovscode qui  est un éditeur de code source développé par Microsoft pour Windows, Linux et macOS" class="petite-image">
        
            
    </section>

    <section id="skills">
            <h2>Soft skills</h2>
            <div class="icones-skills">
            <div class="skill-emote">💬 Communication</div>
            <div class="skill-emote">🤝 Esprit d’équipe</div>
            <div class="skill-emote">⏱️ Gestion du temps</div>
            <div class="skill-emote">🔍 Sens du détail</div>
            <div class="skill-emote">🧠 Esprit critique</div>
        </div>
    </section>

    <section id="contact">
        <div>
            <h2>Contact</h2>
            <ul>
                <li>
                    <a href="https://fr.linkedin.com/" target="_blank">
                    <i class="fab fa-linkedin"></i> LinkedIn
                    </a>
                </li>
                <li>
                    <a href="https://github.com/mohamed-Ham" target="_blank">
                    <i class="fab fa-github"></i> GitHub
                    </a>
                </li>
            </ul>
        </div>
    </section>
</template>

<style>
.intro {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 100px 10%;
  background: linear-gradient(135deg, #0d1b2a, #1b263b);
}

.intro img {
  width: 60%;
}

.intro h2 {
  font-size: 32px;
  font-weight: bold;
  color: #e0e1dd;
}

.intro h3 {
  font-size: 64px;
  font-weight: normal;
  color: #fca311;
  margin-top: 10px;
}

.intro a {
  display: inline-block;
  margin-top: 5px;
  padding: 10px 20px;
  background-color: #fca311;
  color: #0d1b2a;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;
}

.cv:hover {
  background: #ffba49;
  transform: scale(1.1);
}

section {
  padding: 40px 20px;
  text-align: center;
}

h2, h3, h4, h5 {
  color: #fca311;
}

.projetimg,
.petite-image {
  width: 10%;
  margin-right: 10px;
}

#skills {
  width: 70%;
  margin: 0 auto;
  text-align: center;
  padding: 40px 20px;
}

.icones-skills {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.skill-emote {
  background: white;
  color: #0d1b2a;
  padding: 15px 25px;
  border-radius: 8px;
  box-shadow: 0 5px 10px rgba(255, 255, 255, 0.2);
  font-size: 19.32px;
  transition: transform 0.3s ease;
  cursor: default;
}

.skill-emote:hover {
  transform: translateY(-8px);
}
#contact ul {
  display: flex;
  justify-content: center; /* centre horizontalement */
  align-items: center;     /* centre verticalement */
  gap: 30px;          /* ecarte les 2  */
}

#contact li {
  list-style: none;        /* pas de puces */
}

#contact a {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 24px;
  color: #ffffff;
  text-decoration: none;
  transition: transform 0.3s, color 0.3s;
}

#contact a:hover {
  transform: scale(1.1);
  color: #fca311;
}
</style>