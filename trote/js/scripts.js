function calcular (){
    let acaoSocial = Number(document.getElementById("acaoSocial").value)

    let homenagem = Number(document.getElementById ("homenagem").value)

    let leite = Number(document.getElementById("leite").value)

    let kit = Number(document.getElementById("kit").value)

    let equipe = (document.getElementById("equipe").value)

    let suplemento = Number(document.getElementById("suplemento").value)

    let pontosKitSupl = 0

   if (equipe == "Laranja"){
       // equipe é laranja
       if (kit >= 97 && suplemento >= 49) {
           pontosKitSupl = 5000 + ((kit - 97) * 30) + ((suplemento - 49) * 15)
       }
       else if (kit >= 78 && suplemento >= 39){
           pontosKitSupl = 4000 + ((kit - 78) * 30) + ((suplemento - 39) * 15)
       }
       else if (kit >= 49 && suplemento >= 25) {
           pontosKitSupl = 2500 + ((kit - 49) * 30) + ((suplemento - 25) * 15)
       }
       else if (kit >= 19 && suplemento >= 10 ){
           pontosKitSupl = 1000 + ((kit - 19) * 30) + ((suplemento - 10) * 15)
       }
   }

   if (equipe == "Preta") {
        if (kit >= 103 && suplemento >= 52){
            pontosKitSupl = 5000 + ((kit - 103) * 30) + ((suplemento - 52) * 15)
        }
        else if (kit >= 82 && suplemento >= 42){
            pontosKitSupl = 4000 + ((kit - 82) * 30) + ((suplemento - 42) * 15)
        }
        else if (kit >= 52 && suplemento >= 26){
            pontosKitSupl = 2500 + ((kit - 52) * 30) + ((suplemento - 26) * 15)
        }
        else if (kit >= 21 && suplemento >= 10){
            pontosKitSupl = 1000 + ((kit - 21) * 30) + ((suplemento - 10) * 15)
        }
}

    if (equipe == "Roxa"){
        if(kit >= 102 && suplemento >= 51){
            pontosKitSupl = 5000 + ((kit - 102) * 30) + ((suplemento - 51) * 15)
        }
        else if (kit >= 82 && suplemento >= 41){
            pontosKitSupl = 4000 + ((kit - 82) * 30) + ((suplemento - 41) * 15)
        }
        else if (kit >= 51 && suplemento >= 26){
            pontosKitSupl = 2500 + ((kit - 51) * 30) + ((suplemento - 26) * 15)
        }
        else if (kit >= 20 && suplemento >= 10){
            pontosKitSupl = 1000 + ((kit = 20) * 30) + ((suplemento - 10) * 15)
        }

        
        let soma = Number(acaoSocial) + Number(homenagem) + ( 2 * leite) + (30 * kit) + (15 * suplemento)

        document.getElementById("soma").innerHTML = soma.toFixed(2)
}
}