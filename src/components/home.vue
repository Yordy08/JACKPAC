<template>
<div class="parallax1">
    <div class="container">
        <div class="row">
             <b class="card-text" align="center" style="background-color:#7295F1;">Menú de navegación</b>
          </div>
    
                <v-container fluid class="background-contenido height">
                <v-row no-gutters >
                  <v-row class="mr-5">
                    <v-col align="center">
                         <a>
                          <router-link to="/contenido"> 
                             <img src="icons/contenido.png" width="100px" >
                            </router-link>
                            <h6><font color="white">Contenido</font></h6>
                           </a>
                    </v-col>
                      <v-col align="center">
                        <a>
                            <router-link to="/Actividades">
                             <img src="icons/actividades.png" width="100px" >
                              </router-link>
                              <h6><font color="white">Actividades</font></h6>
                         </a>
                    </v-col>
                    <v-col align="center">
                        <a>
                          <router-link to="/gallery">
                            <img src="icons/evaluacion.png" width="100px">
                          </router-link>
                              <h6><font color="white">Evaluación</font></h6>
                         </a>
                    </v-col>
                    <v-col align="center">
                        <a>
                          <router-link to="/team">
                            <img src="icons/photographer.png" width="100px" >
                          </router-link>
                              <h6><font color="white">Créditos</font></h6>
                         </a>
                    </v-col>
                     <v-col align="center">
                        <a>
                          <router-link :to="{ name: 'ini' }" >
                          <img src="icons\hogar.png" width="100px" >
                          </router-link>
                              <h6><font color="white">Inició</font></h6>
                         </a>
                    </v-col>
                  </v-row>
                </v-row>
                </v-container>  
                  
                <v-row no-gutters>
                      <v-col align="center">
                        <v-main style="padding: 10px 0px 0px">
                              <transition name="bounce" >
                                <router-view></router-view>
                              </transition>
                        </v-main>
                      </v-col>
                    </v-row>
                  </div>
<v-container>
  <div></div>
</v-container>

 
 </div>
 
</template>


<script>

  export default {
  
    data() {
      return {
        items: [
          {
            id: 1,
            name: 'Contenido',
            title: '',
            icon: 'icons/contenido.png',
            description: 'CONTENIDO'
            
          },
          {
            id: 2,
            name: 'Actividades',
            title: '',
            icon: 'icons/actividades.png',
            description: 'ACTIVIDADES'
          },
          {
            id: 3,
            name: 'gallery',
            title: '',
            icon: 'icons/evaluacion.png',
            description: 'EVALUACIÓN'
          },
          {
           
             id: 4,
            name: 'team',
            title: '',
            icon: 'icons/photographer.png',
            description: 'CRÉDITOS'
          }
           
        ]
      }
    },
    
  }
</script>
<style  scoped>
.parallax1{
 background:url(../assets/images/5.jpg);
    height: 100%; 
     background-size:cover;
   background-attachment: fixed;
  }
</style>
         