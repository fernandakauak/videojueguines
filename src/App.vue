<template>
 <div class="demo">
 
    <header>
        <div class="logo">
            <img src="/src/assets/imgs/logo-videojueguines.png" alt="Logo">
        </div>
        <nav>
            <router-link :to="`/juegos`" active-class="active">Inicio</router-link>
            <router-link :to="`/nosotros`" active-class="active">Nosotros</router-link>
            <router-link :to="`/estonoexiste`" active-class="active">¿Qué hay aquí?</router-link>
        </nav>
    </header>
  <router-view/>
 </div>
</template>