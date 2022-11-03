<template>
  <v-container grid-list-md>
    <v-card class="mx-auto" max-width="800">
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title class="text-h5">
            {{ nombre }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-card-text>
        <v-row > 
          <ul>
              <li>
            <strong> Especie: </strong> 
                  {{ especie }}  
              </li><li>
            <strong> Raza: </strong> 
                  {{ raza }}
              </li><li>
            <strong> Fecha de nacimiento: </strong>
                  {{ nac }}
              </li>
<!-- historia clinica  -->
        <v-list-item-content v-if="hClinica">
          <v-list-item-title> Historia Clinica  </v-list-item-title>
               <v-list-item>
                {{ diag }}
               </v-list-item>
        </v-list-item-content>
          </ul>
        </v-row>
        <v-row justify="end">
          <v-btn class="mx-2" fab dark small color="primary" @click="nuevaConsulta">
            <v-icon dark> mdi-plus </v-icon>
          </v-btn>
          <v-btn class="mx-2" fab dark small color="cyan" @click="abrirForm">
              <v-icon dark> mdi-pencil </v-icon> 
           </v-btn>
           <v-btn class="mx-2" fab dark small color="teal" @click="mostrarHistoria">
            <v-icon dark>  mdi-format-list-bulleted-square </v-icon>
           </v-btn>
            <v-btn class="mx-2" fab dark small color="error" @click="eliminarPaciente">
              x
          </v-btn>    
     </v-row>
<!--  area de texto para registrar consultas  -->
     <v-card-text v-if="consulta">
        <v-textarea name="input-7-1" hint="Hint text" v-model="agregardiag"
        ></v-textarea>
          <v-btn color="success" class="mr-4" type="submit" @click="enviarDiag">
              Guardar
            </v-btn>
     </v-card-text>
    </v-card-text>
<!-- formulario para editar datos  -->
    <v-card-text v-if="formulario">
      <form @submit.prevent="editarDatos">
        <v-text-field v-model="editarNombre" label="Nombre"> </v-text-field>
          <v-text-field v-model="editarEspecie" label="Especie"> </v-text-field>
          <v-text-field v-model="editarRaza" label="Raza"> </v-text-field>
          <v-text-field v-model="editarFecha" label="Fecha de nacimiento"> </v-text-field>
        <v-row justify="end">
          <v-btn color="success" class="mr-4" type="submit">
            Guardar
          </v-btn>
        </v-row>
      </form>
    </v-card-text>
    </v-card>
  </v-container>
  </template>
<script>
     export default({
        emits: ['eliminar-paciente','editar-paciente'],
        data() {
     return {
      editarNombre: '',
      editarEspecie: '',
      editarRaza: '',
      editarFecha: '',
      agregardiag: '',
      formulario: false,
      consulta: false,
      hClinica: false
     };
        },
        props: {
            id: String,
            raza: String,
            nombre: String,
            especie: String,
            nac: String,
            diag: String

  },
  methods:{
    nuevaConsulta(){
      this.consulta = !this.consulta
      this.formulario = false
    },
    enviarDiag(){
        this.$emit('nueva-consulta',
                    this.id,
                    this.agregardiag)
    },
    editarDatos(){
      this.$emit('editar-paciente', 
                  this.id,
                  this.editarNombre,
                  this.editarEspecie,
                  this.editarRaza,
                  this.editarFecha)
    },
    abrirForm(){
      this.formulario = !this.formulario
      this.consulta = false
      this.hClinica = false
    },
    eliminarPaciente(){
      this.$emit('eliminar-paciente',
                  this.id )
    },
    mostrarHistoria(){
      this.hClinica = true,
      this.formulario = false,
      this.consulta = false

    }
  }
});
</script>