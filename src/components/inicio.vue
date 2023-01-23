<template>
<div class="parallax">
  <div>
     
       <div class="container-flex">
      <div class="row" align="center" justify="center">
        <div class="text-align: bottom center; text-center" style="position: absolute;top: 45%;" cols="12">
          <router-link :to="{ name: 'ini' }" >
               <v-btn color="#7F8C8D" rounded style="height:45px; width:120px; opacity: 0.5"> Comenzar
                  
              </v-btn>
            </router-link>
          </div>
      </div>
       </div>
          </div>
      
      
  </div>
</template>

<script>
export default {
  data(){
    return{
     
    }
  }
}
</script>
<style scoped>
.parallax {
  background: url(../assets/images/fondo.jpeg) no-repeat center/cover;
    height: 100vh; 
    background-attachment: fixed;
  }
</style>



