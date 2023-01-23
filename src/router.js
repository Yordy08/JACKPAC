import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/home'
import inicio from './components/inicio'
import ini from './components/ini'
import Contenido from './components/Contenido.vue'
import Actividades from './components/Actividades.vue'
import planos from './components/Actividades/planos'
import angulos from './components/Actividades/angulos'
import Creditos from './components/Creditos.vue'
import gallery from './components/evaluacion.vue'
Vue.use(Router)


  const  routes = [
      {
         path: '/',
         name: 'inicio',
         component: inicio
      },
     {
        path: '/dashboard',
        name: 'home',
        component: Home,
        children: [
       {
        path: '/contenido',
        name: 'Contenido',
        component: Contenido
      },
      {
        path: '/ini',
        name: 'ini',
        component: ini
      },
      
      
      {
        path: '/Actividades',
        name: 'Actividades',
        component: Actividades,
        children: [
          {
            path: 'planos' ,
            name: 'planos' ,
            component: planos ,
    
          },
          {
            path: 'angulos' ,
            name: 'angulos' ,
            component: angulos ,
            
          },
        ]},
      {
        path: '/team',
        name: 'team',
        component: Creditos
      },
      {
        path: '/gallery',
        name: 'gallery',
        component: gallery
      },
 
  ]},
]; 
   const router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes
  });
  
  export default router;

