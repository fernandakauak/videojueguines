<script setup>
    import { useRoute, useRouter } from 'vue-router';

    const route= useRoute();
    const router = useRouter();
</script>

<template>
    <section>
        <article class="about">
            <h3>PokeMetálicos asociados <span>presenta...</span></h3>
            <h1>Videojueguines</h1>
            
            <p>Esperamos que disfrutes este sitio donde hablamos de los juegos que nos gustan, ya sean actuales o del año de la cocoa. Tenemos muchas recomendaciones para que puedas divertirte, conocer historias y, quién sabe, encuentres tu nuevo videojuego favorito.</p>

            <h2>Let's play some games!</h2>
        </article>
    </section>

</template>

<style>
    section {
        width: 100%;
    }

    .about {
        width: 80%;
        margin: 2% auto;
        background-color: indigo;
        border-radius: 10px;
        padding: 2%;
        color: lightpink;
    }
</style>