//VENTAS VENDEDORES
//Se conoce el monto de ventas de varios vendedores. Se desea conocer la cantidad de ventas
//que fueron por 100$ o menos, cantidad de ventas mayores a 100$. Asimismo, se desea saber el
//monto total en $ de todas las ventas.
//Se dispone de los siguientes datos de varias vendedores: (nombre, monto venta)
//(Mary, 150), (José, 135), (Carlos, 160), (Pedro, 75)

import Cl_Empresa from './Empresa.js'
import Cl_Vendedor from './Vendedor.js'

let vendedor1 = new Cl_Vendedor('Mary', 150),
  vendedor2 = new Cl_Vendedor('jose', 135),
  vendedor3 = new Cl_Vendedor('Carlos', 160),
  vendedor4 = new Cl_Vendedor('Pedro', 75)

let empresa = new Cl_Empresa()

empresa.procesarVendedores(vendedor1)
empresa.procesarVendedores(vendedor2)
empresa.procesarVendedores(vendedor3)
empresa.procesarVendedores(vendedor4)

let salida = document.getElementById('Salida')
salida.innerHTML = `Resultados
<br>Cantidad de ventas que fueron por 100$ o menos: ${
  empresa.cantVentaMenores100
}
 <br>Cantidad de ventas mayores a 100$:  ${empresa.cantVentasMayores100} 
 <br>Monto total de las ventas:  ${empresa.TotalMonto()}`
