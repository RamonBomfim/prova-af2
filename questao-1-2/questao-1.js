// Questão 1
let anoNascimento = ['1968', '1969', '1994', '1996','2000', '2017'];
let index = 0;
let date = new Date();

for (index = 0; index < anoNascimento.length; index++) {
    let idade = date.getFullYear() - anoNascimento[index];
    console.log(`Quem nasceu em ${anoNascimento[index]} atualmente tem ${idade} anos.`);
}

