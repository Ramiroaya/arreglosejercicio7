let btnEnviar1 = <HTMLButtonElement>document.getElementById("btnEnviar1");

btnEnviar1.addEventListener("click", () => {
  let tamañoArreglo = Number(prompt("Ingrese el tamaño del arreglo"));
  let arreglo: number[] = Array(tamañoArreglo);
  let indice: number;
  let positivos: number = 0;
  let negativos: number = 0;
  let neutros: number = 0;

  for (indice = 0; indice < tamañoArreglo; indice++) {
    arreglo[indice] = Number(prompt("Ingrese el numero en el indice" + indice));
  }
  for (indice = 0; indice < tamañoArreglo; indice++) {
    if (arreglo[indice] === 0) {
      neutros = neutros + 1;
    } else {
      if (arreglo[indice] > 0) {
        positivos = positivos + 1;
      } else {
        negativos = negativos + 1;
      }
    }
  }
  console.log("Hay   " + neutros + "   numeros '0'en el arreglo");
  console.log("Hay   " + positivos + "   numeros positivos en el arreglo");
  console.log("Hay   " + negativos + "   numeros negativos en el arreglo");
});
