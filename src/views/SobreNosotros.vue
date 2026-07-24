<script setup>
    import { useRoute, useRouter } from 'vue-router';

    const route= useRoute();
    const router = useRouter();
</script>

<template>
    <section>
        <article class="about">
            <h2 class="pre-title">PokeMetálicos asociados <span>presenta...</span></h2>
            <h1>Videojueguines</h1>
            <p>Esperamos que disfrutes este sitio donde hablamos de los juegos que nos gustan, ya sean actuales o del año de la cocoa. Tenemos muchas recomendaciones para que puedas divertirte, conocer historias y, quién sabe, encuentres tu nuevo videojuego favorito.</p>
            <img src="/src/assets/imgs/pokeyupi.jpg" alt="Logo">
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
        box-shadow: 5px 5px rgb(53, 4, 82), inset 2px 2px rgb(175, 135, 211);
    }

    .about h2.pre-title {
        font-family: "Geist Pixel", sans-serif;
        margin: 0;
    }
</style>