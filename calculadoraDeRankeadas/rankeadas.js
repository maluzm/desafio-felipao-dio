// calculadora de rankeadas
function saldo(vitorias, derrotas){
	return vitorias - derrotas;
}
let saldoRanked = saldo(50, 10)

let nivel = saldoRanked 
if (nivel <= 10){
	nivel = "Ferro"
}
else if (nivel <= 20){
	nivel = "Bronze"
}
else if (nivel <= 50){
	nivel = "Prata"
}
else if (nivel <= 80){
	nivel = "Ouro"
}
else if (nivel <= 90){
	nivel = "Diamante"
}
else if (nivel <= 100){
	nivel = "Lendário"
}
else {
	nivel = "Imortal"
}


console.log("O Herói tem de saldo de " + saldoRanked + " está no nível de " + nivel );
