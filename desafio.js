let k = 0
let n = 0
let d = 0
let nPlusOne = 0
let divK = 0
let divN = 0
let divNPlusOne = 0
let cont = 0

for (n = 1; n < k; n++) {
    nPlusOne = n + 1
    divN = 0
    divNPlusOne = 0
    for (d = 1; d <= n; d++) {
        if(n%d == 0) {
            divN = divN + 1
        }
    }
    for (d = 1; d <= nPlusOne; d++) {
        if(nPlusOne%d == 0) {
            divNPlusOne = divNPlusOne + 1
        }
    }  
    if(divN == divNPlusOne) {
        cont = cont + 1
    }
}

console.log("A quantidade de números inteiros positivos menores que K que satisfazem a condição: N e N + 1 com mesmo número de divisores positivos é " + cont + "." )
