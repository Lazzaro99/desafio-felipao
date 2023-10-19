let Heroi = "Arqueiro Guardião";
let Nivel = ""
let random = Math.floor(Math.random() * 10.001) + 1.000;
let XP = 0
while ( XP < random) {
    XP+= 1
}

if (XP <= 1.000) {
    Nivel = "Ferro"
} else if (XP >= 1.001 && XP <= 2.000) {
    Nivel = "Bronze"
} else if (XP >= 2.001 && XP <= 5.000) {
    Nivel = "Prata"
} else if (XP >= 5.001 && 7.000) {
    Nivel = "Ouro"
} else if (XP >= 7.001 && 8.000) {
    Nivel = "Platina"
} else if (XP >= 8.001 && 9.000) {
    Nivel = "Ascendente"
} else if (XP >= 9.001 && 10.000) {
    Nivel = "Imortal"
} else if (XP >= 10.001) {
    Nivel = "Radiante"
}

console.log("O Heroi de nome " +Heroi+ " está no nível de " +Nivel);