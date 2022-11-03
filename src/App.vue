<template>
  <v-app>
    <barra-app> </barra-app>
  <v-main>
<v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img :src="require('/public/header.webp')" class="my-3" contain height="350"/>
      </v-col>
      <v-col class="mb-4">
         <v-btn elevation="2" @click="mostrarFormulario"> 
          Nuevo Paciente 
        </v-btn>
        <v-btn elevation="2" @click="mostrarPacientes"
        > Pacientes Registrados
        </v-btn> 
      </v-col>
    </v-row>
  </v-container> 
    <v-container fluid v-if="registrar">
    <nuevo-paciente @añadir-paciente="nuevoPaciente"
      ></nuevo-paciente> 
    </v-container>
    <v-container fluid v-if="registrados">
      <pacientes-registrados
      v-for="paciente in pacientes"
      :key="paciente.id"
      :id="paciente.id"
      :nombre="paciente.nombre"
      :especie="paciente.especie"
      :raza="paciente.raza"
      :nac="paciente.nac"
      :diag="paciente.diagnostico"
      @eliminar-paciente="eliminarRegistro"
      @editar-paciente="editarRegistro"
      ></pacientes-registrados>
    </v-container>
  </v-main>
</v-app>
</template>

<script>

export default {

    data(){
      return {
        registrar: false,
        registrados: false,
        pacientes: [
          {  
            id: 'emma',
            nombre: 'Emma',
            especie: 'Perro',
            raza: 'Caniche',
            nac: '15/08/19',
            diagnostico: 'Dermatitis',
            },{
            id: 'emita',
            nombre: 'Emma',
            especie: 'Perro',
            raza: 'Caniche',
            nac: '15/08/19',
            diagnostico: 'ninguno',
            }
          ]   
        }
    },
    methods: {
      mostrarFormulario(){
        this.registrar = true,
        this.registrados = false
      },
      mostrarPacientes(){
        this.registrados = true,
        this.registrar = false
      },
      nuevoPaciente(NvoNombre,NvaEspecie,NvaRaza,NvaFecha){
        const nuevoPaciente = {
        id: new Date().toISOString(),
        nombre: NvoNombre,
        especie: NvaEspecie,
        raza: NvaRaza,
        nac: NvaFecha,
      };
      this.pacientes.push(nuevoPaciente);
      alert('PACIENTE REGISTRADO');
      this.registrar = false 

      },
      eliminarRegistro(pacienteId){
      if(confirm("Se eliminara el registro del paciente")){
      this.pacientes = this.pacientes.filter((paciente) => paciente.id !== pacienteId); }
    },
    editarRegistro(Id,editarNombre,editarEspecie,editarRaza,editarEdad){
      const indice = this.pacientes.findIndex((paciente) => paciente.id === Id);
      const edicion = {
        nombre: editarNombre,
        especie:editarEspecie,
        raza: editarRaza,
        nac: editarEdad,
      }
      this.pacientes.splice(indice,1,edicion);
    }
  }
};
</script>
