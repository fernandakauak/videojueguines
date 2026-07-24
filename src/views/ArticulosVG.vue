<script setup>
    import { juegos } from '../juegos.js'
</script>

<template>
    <h1>Archivo de Juegos</h1>
    <section>
        <article class="game-preview" v-for="vg in juegos" :key="vg.id">
            <img v-bind:src="vg.img" alt="{{ vg.nombre }}">
            <div class="data">
                <h3>{{ vg.nombre }}</h3>
                <button><router-link :to="`juegos/${vg.id}/data`">Ver Data</router-link></button>
                <button><router-link :to="`juegos/${vg.id}/autor`">Ver Autor</router-link></button>
            </div>
        </article>
    </section>
</template>

<style>
    section {
        width: 100%;
        display: flex;
    }

    article.game-preview {
        width: 46%;
        padding: 2%;
        margin: 2%;
        display: flex;
        background-color: indigo;
        color: lightpink;
    }

    article.game-preview img {
        width: 150px;
        height: auto;
        margin: 2%;
    }

    article.game-preview .data {
        width: 100%;
        text-align: center;
    }

    article.game-preview .data button {
        width: 100%;
        background-color: lightpink;
        padding: 2% 4%;
        cursor: pointer;
        border-radius: 10px;
        border: none;
        margin: 2% 0;
        font-weight: bold;
        clear: both;
    }

    article.game-preview .data button a {
        text-decoration: none;
        color: indigo;
    }

</style>