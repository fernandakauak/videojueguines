import { createRouter, createWebHistory } from 'vue-router'
import ArticulosVG from '../views/ArticulosVG.vue';
import VistaDataJuego from '../views/VistaDataJuego.vue';
import VistaDataAutor from '../views/VistaDataAutor.vue';
import SobreNosotros from '../views/SobreNosotros.vue';
import Sitio404VG from '../views/Sitio404VG.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),

    routes:[
        {
            path:'/', redirect:'/juegos'
        },
        {
            path:'/juegos',
            alias:['/games','/jueguines'],
            component: ArticulosVG
        },  
        {
            path:'/nosotros',
            component: SobreNosotros
        },       
        {
            path:'/juegos/:id',
            props:true,
            children:[
                {
                    path:'data',
                    component: VistaDataJuego,
                    props:true
                },
                {
                    path:'autor',
                    component: VistaDataAutor,
                    props:true
                }
            ] 
        },
        {
            path: '/:pathMatch(.*)*',
            component: Sitio404VG
        }
    ]
});


export default router;