const divCalcular = document.getElementById('areaCalculada');

const calcularArea = (lado1, lado2) => {
    let area = lado1 * lado2;
    return area;
}

divCalcular.innerHTML += `<h1>A área do terreno é: ${calcularArea(35, 45)}m²</h1>`

