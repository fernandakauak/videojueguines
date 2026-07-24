<script setup>
    import { juegos } from '../juegos.js'
</script>

<template>
    <div>
        <h1>Lista de Artículos</h1>

        <div v-for="vg in juegos" :key="vg.id">
            <h5>{{ vg.nombre }}</h5>
            <ul>
                <li><router-link :to="`juegos/${vg.id}/data`">Ver Data</router-link></li>
                <li><router-link :to="`juegos/${vg.id}/autor`">Ver Autor</router-link></li>
            </ul>

        </div>
    </div>
</template>