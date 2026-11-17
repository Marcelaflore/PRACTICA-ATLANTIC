let comentariosGlobal = [];

fetch("http://localhost:3000/comentarios")
    .then(response => response.json())
    .then(data => {

        comentariosGlobal = data;

        mostrarComentarios("TODOS");

        document
            .getElementById("buscar")
            .addEventListener("input", buscarComentario);
    })
    .catch(error => {
        console.error("Error al obtener los comentarios:", error);
    });

function mostrarComentarios(filtro) {

    const tabla = document.getElementById("tablaComentarios");

    tabla.innerHTML = "";

    let ok = 0;
    let spam = 0;
    let revisar = 0;

    comentariosGlobal.forEach(comentario => {

        const categoria = comentario.categoria;

        if (categoria === "OK") ok++;
        if (categoria === "SPAM") spam++;
        if (categoria === "REVISAR") revisar++;

        if (
            filtro === "TODOS" ||
            categoria === filtro
        ) {

            tabla.innerHTML += `
            <tr>
                <td>${comentario.id}</td>

                <td>${comentario.texto}</td>

                <td>${comentario.reportes}</td>

                <td>
                    <span class="${comentario.categoria}">
                        ${comentario.categoria}
                    </span>
                </td>

                <td>${comentario.motivo}</td>
            </tr>
            `;
        }
    });

    document.getElementById("okCount").textContent = ok;
    document.getElementById("spamCount").textContent = spam;
    document.getElementById("revisarCount").textContent = revisar;

    const total = ok + spam + revisar;

    const totalElemento =
        document.getElementById("totalCount");

    if (totalElemento) {
        totalElemento.textContent = total;
    }
}

function filtrar(tipo) {
    mostrarComentarios(tipo);
}

function buscarComentario() {

    const busqueda =
        document.getElementById("buscar")
            .value
            .toLowerCase();

    const tabla =
        document.getElementById("tablaComentarios");

    tabla.innerHTML = "";

    comentariosGlobal.forEach(comentario => {

        const texto =
            comentario.texto
                ? comentario.texto.toLowerCase()
                : "";

        if (
            texto.includes(busqueda)
        ) {

            tabla.innerHTML += `
            <tr>
                <td>${comentario.id}</td>

                <td>${comentario.texto}</td>

                <td>${comentario.reportes}</td>

                <td>
                    <span class="${comentario.categoria}">
                        ${comentario.categoria}
                    </span>
                </td>

                <td>${comentario.motivo}</td>
            </tr>
            `;
        }
    });
}

function cerrarSesion() {

    localStorage.removeItem("usuario");

    window.location.href =
        "login.html";
}