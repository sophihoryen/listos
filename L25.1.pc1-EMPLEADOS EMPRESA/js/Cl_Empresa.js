export default class Cl_Empresa {
    constructor() {
      this.cantChicas = 0
      this.cantChicos = 0
      this.cantEmpleados = 0
    }
  
    procesarEmpleados(e) {
      this.cantEmpleados++
      
      if (e.sexo === 'M') {
        this.cantChicos++
      }
      if (e.sexo === 'F') {
        this.cantChicas++
      }
    }
  
  
    porcentajeChicas() {
      return (this.cantChicas * 100) / this.cantEmpleados
    }
  }