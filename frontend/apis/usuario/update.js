const formUpdate = document.getElementById("form-update");

async function editarUsuario() {
    try {
        const id = document.getElementById("id-update").value;
        const nome = document.getElementById("nome-update").value;
        const email = document.getElementById("email-update").value;
        const telefone = document.getElementById("telefone-update").value;

        if(!id ||!nome || !email || !telefone || telefone.length < 11) {
            alert("Preencha todos os campos");
            return;
        }

        const usuario = {
            nome,
            email,
            telefone
        }

        const resposta = await fetch(`http://localhost:8080/usuarios/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usuario)
        })

        const resultado = await resposta.json();

        alert(resultado.mensagem);

        await listarUsuarios();

    } catch(err) {
        console.log(err.message);
    }
}

formUpdate.addEventListener("submit", editarUsuario);

document.addEventListener("DOMContentLoaded", formUpdate);