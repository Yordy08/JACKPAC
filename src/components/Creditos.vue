<template> 

        <div class="row">
                     <div class="col-md-14 mt-2" >
                          <b class="card" style="background-color:#7295F1;" align="center"> 
                            Créditos 
                         </b>
                      </div>
                      <v-container >
                      <v-row>
                        <v-col cols="3"> 
                           <v-card
                              class="mx-auto"
                              max-width="344"
                              
                            >
                              <v-img
                                src="images/JJVO.jpg"
                                height="200px"
                              ></v-img>

                              <v-card-title>
                              <small>  Juan José Vergara Olivero </small>
                              </v-card-title>

                              <v-card-subtitle>
                                Estudiante 
                              </v-card-subtitle>

                              <v-card-actions>
                                <v-btn
                                  color="#849FF7"
                                  text
                                >
                                 Datos
                                </v-btn>

                                <v-spacer></v-spacer>

                                <v-btn
                                  icon
                                  @click="show = !show"
                                >
                                  <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                </v-btn>
                              </v-card-actions>

                              <v-expand-transition>
                                <div v-show="show">
                                  <v-divider></v-divider>

                                  <v-card-text>
                                   <b>Correo:</b>
                                jvergaraolivero47@Correo.unicordoba.edu.co
                                  <p><b>Teléfono:</b>
                                  3113006699
                                  </p>
                                        
                                  </v-card-text>
                                </div>
                              </v-expand-transition>
                            </v-card>
                          </v-col >
                          <v-col cols="3"> 
                           <v-card
                              class="mx-auto"
                              max-width="344"
                            >
                              <v-img
                                src="images/MMG.jpeg"
                                height="200px"
                              ></v-img>
                              <v-card-title>
                              <small> Marianela Medrano Gómez </small>
                              </v-card-title>

                              <v-card-subtitle>
                                Estudiante 
                              </v-card-subtitle>
                              <v-card-actions>
                                <v-btn
                                  color="#849FF7"
                                  text
                                >
                                 Datos
                                </v-btn>
                                <v-spacer></v-spacer>
                                <v-btn
                                  icon
                                  @click="show1 = !show1"
                                >
                                  <v-icon>{{ show1 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                </v-btn>
                              </v-card-actions>

                              <v-expand-transition>
                                <div v-show="show1">
                                  <v-divider></v-divider>
                                  <v-card-text>
                                  <b>Correo:</b>
                                   mmedranogomez@correo.unicordoba.edu.co
                                  <p><b>Teléfono:</b>
                                  3045507361
                                  </p>
                                        
                                  </v-card-text>
                                </div>
                              </v-expand-transition>
                            </v-card>
                          </v-col >
                           <v-col cols="3"> 
                           <v-card
                              class="mx-auto"
                              max-width="344"
                            >
                              <v-img
                                src="images/LMM.jpeg"
                                height="200px"
                              ></v-img>
                              <v-card-title>
                              <small> Laura Marchena Madera </small>
                              </v-card-title>

                              <v-card-subtitle>
                                Estudiante 
                              </v-card-subtitle>
                              <v-card-actions>
                                <v-btn
                                  color="#849FF7"
                                  text
                                >
                                 Datos
                                </v-btn>
                                <v-spacer></v-spacer>
                                <v-btn
                                  icon
                                  @click="show2 = !show2"
                                >
                                  <v-icon>{{ show2 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                </v-btn>
                              </v-card-actions>

                              <v-expand-transition>
                                <div v-show="show2">
                                  <v-divider></v-divider>
                                  <v-card-text>
                                  <b>Correo:</b>
                                  lmarchenamadera@correo.unicordoba.edu.co
                                  <p><b>Teléfono:</b>
                                  3105950510
                                  </p>
                                        
                                  </v-card-text>
                                </div>
                              </v-expand-transition>
                            </v-card>
                          </v-col >
                          <v-col cols="3"> 
                           <v-card
                              class="mx-auto"
                              max-width="344"
                            >
                              <v-img
                                src="images/NJTL.jpg" 
                                height="200px"
                              ></v-img>
                              <v-card-title >
                              
                              <small>Nayib J. Tapias López </small>
                                
                              </v-card-title>

                              <v-card-subtitle>
                                Estudiante 
                              </v-card-subtitle>
                              <v-card-actions>
                                <v-btn
                                  color="#849FF7"
                                  text
                                >
                                 Datos
                                </v-btn>
                                <v-spacer></v-spacer>
                                <v-btn
                                  icon
                                  @click="show3 = !show3"
                                >
                                  <v-icon>{{ show3 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                </v-btn>
                              </v-card-actions>

                              <v-expand-transition>
                                <div v-show="show3">
                                  <v-divider></v-divider>
                                  <v-card-text>
                                  <b>Correo:</b>
                                  Ntapiaslopez@correo.unicordoba.edu.co
                                  <p><b>Teléfono:</b>
                                  3115082203
                                  </p>
                                        
                                  </v-card-text>
                                </div>
                              </v-expand-transition>
                            </v-card>
                          </v-col >
                      </v-row>
                      </v-container>
                       <v-row>
                      <div class="col-md-14 mt-2" >
                          <b class="card" style="background-color:#7295F1;" align="center"> 
                            Docente 
                         </b>
                      </div>
                      <center>
                          <v-col cols="3"> 
                              <v-card
                                  class="mx-auto"
                                  max-width="344"
                                >
                                  <v-img
                                    src="images/Aly.jpeg" 
                                    height="200px"
                                  ></v-img>
                                  <v-card-title >
                                  <small>Aly Ben-Hur Culchac de la Vega</small> 
                                  </v-card-title>
                                  <v-card-subtitle>
                                    Docente
                                  </v-card-subtitle>
                                  <v-card-actions>
                                    <v-btn
                                      color="#849FF7"
                                      text
                                    >
                                    Datos
                                    </v-btn>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                      icon
                                      @click="show4 = !show4"
                                    >
                                      <v-icon>{{ show4 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                    </v-btn>
                                  </v-card-actions>
                                  <v-expand-transition>
                                    <div v-show="show4">
                                      <v-divider></v-divider>
                                      <v-card-text>
                                      <b>Correo:</b>
                                      aculchac@correo.unicordoba.edu.co
                                      <p><b>Teléfono:</b>
                                      Confidencial
                                      </p>
                                            
                                      </v-card-text>
                                    </div>
                                  </v-expand-transition>
                                </v-card>
                              </v-col >
                           </center>
                       </v-row>
                    
          
                 </div>

</template>
  <script>
  export default {
    data: () => ({
      show: false,
      show1:false,
      show2:false,
      show3:false,
      show4:false,
    }),
  }
</script>



