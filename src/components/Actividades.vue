<template>
     
  <v-container fluid class="background-contenido height">
    <v-row no-gutters >
      <v-row class="mr-3">
        <v-col align="center">
          <v-btn :to="{ name: 'planos' }" color="indigo" class="btn_background mx-5" block outlined dark rounded x-large>
            <!-- <v-icon class="my-n ml-n3" size="50">mdi-gamepad-round-left</v-icon> -->
            <h1>Planos</h1>
          </v-btn>
        </v-col>
        <v-col align="center">
          <v-btn :to="{ name: 'angulos' }" color="pink"  class="btn_background mx-5" block outlined dark rounded x-large>
            <!-- <v-icon class="my-n ml-n3" size="50"> mdi-gamepad-round-up </v-icon> -->
            <h1>Ángulos</h1>
          </v-btn>
        </v-col>
      </v-row>
    </v-row>
    <v-row no-gutters>
      <v-col align="center">
        <v-main style="padding: 10px 0px 0px">
              <transition name="bounce" >
                <router-view></router-view>
              </transition>
        </v-main>
      </v-col>
    </v-row>
    
  </v-container>
    
 

</template>




 
     
    
    


