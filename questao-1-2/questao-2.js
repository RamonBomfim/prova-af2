const divHtml = document.getElementById('dataNascimento');
let anoNasc = ['1968', '1969', '1994', '1996','2000', '2017'];
let data = new Date();

for (i = 0; i < anoNascimento.length; i++) {
    let idadeDiv = data.getFullYear() - anoNascimento[i];
    divHtml.innerHTML += `<li>Quem nasceu em ${anoNasc[i]} atualmente tem ${idadeDiv} anos</li>`
}

