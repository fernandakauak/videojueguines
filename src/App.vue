<template>
 <div class="demo">
 
    <header>
        <div class="logo">
            <img src="/src/assets/imgs/logo-videojueguines.png" alt="Logo">
        </div>
        <nav>
            <router-link :to="`/juegos`">Inicio</router-link>
            <router-link :to="`/nosotros`">Nosotros</router-link>
            <router-link :to="`/estonoexiste`">¿Qué hay aquí?</router-link>
        </nav>
    </header>
  <router-view/>
 </div>
</template>