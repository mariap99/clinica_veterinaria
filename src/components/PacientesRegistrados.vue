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
          <ul><li>
            <strong> Especie: </strong>
                {{ especie }}  
        </li>
        <li>
            <strong> Raza: </strong>
                {{ raza }}
        </li>
        <li>
            <strong> Fecha de nacimiento: </strong>
                {{ edad }}
        </li>
    </ul>
        </v-row>
        <v-row justify="end">
          <v-btn class="mx-2" fab dark small color="primary">
            <v-icon dark> mdi-plus </v-icon>
          </v-btn>
          <v-btn class="mx-2" fab dark small color="cyan">
            <v-icon dark> mdi-pencil </v-icon>
           </v-btn>
           <v-btn class="mx-2" fab dark small color="teal">
            <v-icon dark>  mdi-format-list-bulleted-square </v-icon>
           </v-btn>
          <v-btn class="mx-2" fab dark small color="error" @click="eliminarPaciente">
            <v-icon dark> mdi-cancel </v-icon>
          </v-btn>
     </v-row>
    </v-card-text>
    </v-card>
  </v-container>
  </template>
<script>
     export default({
        emits: ['eliminar-paciente'],
        props: {
            id: String,
            raza: String,
            nombre: String,
            especie: String,
            edad: String
  },
  methods:{
    eliminarPaciente(){
      this.$emit('eliminar-paciente',
                  this.id )
    }
  }
});
</script>