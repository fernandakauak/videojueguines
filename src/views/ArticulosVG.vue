<script setup>
    import { juegos } from '../juegos.js'
</script>

<template>
    <h1>Archivo de Juegos</h1>
    <section>
        <article class="game-preview" v-for="vg in juegos" :key="vg.id">
            <img :src="vg.img" :alt="vg.nombre">
            <div class="data">
                <h3>{{ vg.nombre }}</h3>
                <button><router-link :to="`/juegos/${vg.id}/data`">Ver Data</router-link></button>
                <button><router-link :to="`/juegos/${vg.id}/autor`">Ver Autor</router-link></button>
            </div>
        </article>
    </section>
</template>

<style>
    section {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(100%, 250px), 1fr));
    }

    article.game-preview {
        width: auto;
        padding: 2%;
        margin: 2%;
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: indigo;
        color: lightpink;
    }

    article.game-preview img {
        width: 120px;
        height: 120px;
        aspect-ratio: 1 / 1;
        object-fit: cover;
        margin: 2%;
        flex-shrink: 0;
        border: solid 2px white;
    }

    article.game-preview .data {
        width: 100%;
        text-align: center;
    }

    article.game-preview .data h3 {
        margin: 0 0 8px 0;
        font-size: clamp(0.8rem, 1vw + 0.4rem, 1.1rem);
    }

    article.game-preview .data button {
        width: 80%;
        background-color: lightpink;
        padding: 2% 4%;
        cursor: pointer;
        border-radius: 10px;
        border: none;
        margin: 2% 0;
        font-weight: bold;
    }

    article.game-preview .data button a {
        text-decoration: none;
        color: indigo;
        display: block;
    }

</style>