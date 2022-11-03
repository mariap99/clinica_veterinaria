<template>
  <v-container>
  <form @submit.prevent="editarDatos">
      <v-text-field v-model="editarNombre" label="Nombre" required
      ></v-text-field>
      <v-text-field v-model="editarEspecie" label="Especie" required
      ></v-text-field>
      <v-text-field v-model="editarRaza" label="Raza" required
      ></v-text-field>
      <v-text-field v-model="editarEdad" label="Fecha de nacimiento" required
      ></v-text-field>
    <v-row justify="end">
        <v-btn color="success" class="mr-4" type="submit">
          Guardar
      </v-btn>
    </v-row>
  </form>
</v-container>
</template>

<script>

export default({
  emits: ['editar-paciente'],
  data() {
     return {
      editarNombre: '',
      editarEspecie: '',
      editarRaza: '',
      editarEdad: '',
     };
  },
  props: {
    id: String
  },
  methods: {
    editarDatos(){
      this.$emit('editar-paciente', 
                  this.id,
                  this.editarNombre,
                  this.editarEspecie,
                  this.editarRaza,
                  this.editarEdad)
    }
  }
})
</script>