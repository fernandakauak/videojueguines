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
            <p>Esta página no está disponible en el sitio de Videojueguines. ¡Pero no te preocupes! <br>
                Te ayudamos a volver al principio: <button @click="volver">Haz click aquí</button></p>
        </article>
    </section>


</template>

<style scoped>
    section {
        width: 100%;
    }

    .nowhere {
        width: 80%;
        margin: 2% auto;
        background-color: indigo;
        border-radius: 10px;
        padding: 2%;
        color: lightpink;
        box-shadow: 5px 5px rgb(53, 4, 82), inset 2px 2px rgb(175, 135, 211);
    }

    .nowhere img {
        width: 20%;
    }

    .nowhere p {
        font-size: 18px;
        line-height: 120%;
        text-wrap: pretty;
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