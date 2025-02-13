export default class Cl_Personas {
  constructor() {
    this.cantP = 0
    this.mayorEdad = 0
  }

  procesarEstudiante(e) {
    this.cantP++
    //calcular la cantidad de mayores de edad
    if (e.edad >= 18) this.mayorEdad++
  }

  porcentajePersonasMayorEdad() {
    return (this.mayorEdad * 100) / this.cantP
  }
}
