const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function btencriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado

}

function encriptar(stringEncriptada){
    let matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringEncriptada = stringEncriptada.tolowerCase()

    for(let i =0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}

function btDesencriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
}

function desencriptar(stringEncriptada){
    let matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringEncriptada = stringEncriptada.tolowerCase()

    for(let i =0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}