const textArea = document.querySelector(".encriptar");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar ()
{
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
}

function btnDesencriptar ()
{
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
}

function encriptar (texto)
{
    let matrizCodigo = [["e, enter"], ["i", "imes"], ["a", "ais"], ["o", "ober"], ["u", "ufat"]];
    texto = texto.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++)
    {
        texto = texto.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
    
    return texto;
}

function desencriptar (texto)
{
    let matrizCodigo = [["enter","e"],["imes","i"],["ais","a"],["ober","o"],["ufat","u"]];
    texto = texto.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++)
    {
        texto = texto.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }

    return texto;
}

function btnCopiar() {
    var resultado = document.querySelector(".mensaje");
    resultado.select();
    document.execCommand("copy");
}