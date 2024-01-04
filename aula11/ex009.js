function analisar() {
    var pais = window.document.getElementById('pais').value
    var res = window.document.getElementById('res')

    res.innerHTML = `<p>Vivendo em <strong>${pais}</strong></p>`

    if (pais != 'Brasil') {
        res.innerHTML += ('Você é Estrangeiro')
    } else {
        res.innerHTML += ('Você é Brasileiro')
    }
}
