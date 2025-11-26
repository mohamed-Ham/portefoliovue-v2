
<template>
  <div class="header">
   <header>
    <h1>portfolio</h1>
        <nav class="Menu">
            <ul>
                <li><a href="#propos">A propos de moi</a></li>
                <li><a href="#Projets">Mes projets</a></li>
                <li><a href="#Technologie">Technologie</a></li>
                <li><a href="#skills">Soft Skills</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
   </header>
</div>
</template>

<style>
header {
  background-color: #1b263b;
  padding: 20px;
  text-align: center;
}

header h1 {
  font-size: 40px;
  color: #ffffff;
}

nav ul {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 10px;
}

nav ul li a {
  text-decoration: none;
  color: #ffffff;
  font-weight: bold;
  transition: color 0.3s;
}

nav ul li a:hover {
  color: #fca311;
}
</style>