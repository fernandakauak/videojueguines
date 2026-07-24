<script setup>
    import { useRoute, useRouter } from 'vue-router';

    const route= useRoute();
    const router = useRouter();

    function volver() {
        router.push('/');
    }
</script>

<template>
    <section>
        <article class="nowhere">
            <h1>Ups... ¿Donde está el juego?</h1>
            <img src="/src/assets/imgs/404.jpg" alt="">
            <p>Esta página no está disponible en el sitio. <br>
                ¡Pero no te preocupes! <br>
                Te ayudamos a volver a la etapa 1:  <button @click="volver">Haz click aquí</button></p>
        </article>
    </section>


</template>

<style scoped>
    section {
        width: 100%;
    }

    .nowhere {
        width: 40%;
        margin: 2% auto;
        background-color: indigo;
        border-radius: 10px;
        padding: 2%;
        color: lightpink;
    }

    .nowhere img {
        width: 50%;
    }

    .nowhere p {
        font-size: 18px;
        line-height: 120%;
    }

    .nowhere button {
        background-color: lightpink;
        padding: 2% 4%;
        cursor: pointer;
        border-radius: 10px;
        border: none;
        margin: 2% 0;
        font-weight: bold;
        text-decoration: none;
        color: indigo;
        text-transform: uppercase;
    }
</style>