function encriptar() {
    var texto = document.getElementById("texto").value;
    if (texto) {
        var encriptado = texto.replace(/e/gi, "enter")
                             .replace(/i/gi, "imes")
                             .replace(/a/gi, "ai")
                             .replace(/o/gi, "ober")
                             .replace(/u/gi, "ufat");
        document.getElementById("resultado").innerHTML = encriptado;
    }
}

function desencriptar() {
    var texto = document.getElementById("texto").value;
    if (texto) {
        var desencriptado = texto.replace(/ai/g, "a")
                                 .replace(/enter/g, "e")
                                 .replace(/imes/g, "i")
                                 .replace(/ober/g, "o")
                                 .replace(/ufat/g, "u");
        document.getElementById("resultado").innerHTML = desencriptado;
        
    }
}

function copiar() {
    var resultado = document.getElementById("resultado").innerHTML;
    
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(resultado)
            .then(function() {
                alert("Texto copiado al portapapeles");
            })
            .catch(function(error) {
                console.error("Error copying text to clipboard:", error);
            });
    } else {
        fallbackCopyTextToClipboard(resultado);
    }
}

function fallbackCopyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    alert("Texto copiado al portapapeles");
}