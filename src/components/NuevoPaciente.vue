<template>
  <v-container>
  <form @submit.prevent="enviarDatos">
      <v-text-field v-model="nvoNombre" label="Nombre" required
      ></v-text-field>
      <v-text-field v-model="nvaEspecie" label="Especie" required
      ></v-text-field>
      <v-text-field v-model="nvaRaza" label="Raza" required
      ></v-text-field>
      <v-text-field v-model="nvaEdad" label="Fecha de nacimiento" required
      ></v-text-field>
    <v-row justify="end">
        <v-btn color="success" class="mr-4" type="submit">
          Registrar
      </v-btn>
      <v-btn color="error" @click="cancelar">
          Cancelar
      </v-btn>
    </v-row>
  </form>
</v-container>
</template>

<script>

export default({
  emits: ['añadir-paciente'],
  data() {
     return {
      nvoNombre: '',
      nvaEspecie: '',
      nvaRaza: '',
      nvaEdad: '',
     };
  },
  methods: {
    enviarDatos(){
      this.$emit('añadir-paciente', 
                  this.nvoNombre,
                  this.nvaEspecie,
                  this.nvaRaza,
                  this.nvaEdad)
    },
    cancelar(){
      this.nvoNombre = '',
      this.nvaEspecie = '',
      this.nvaRaza = '',
      this.nvaEdad = ''
      }
  }
})
</script>