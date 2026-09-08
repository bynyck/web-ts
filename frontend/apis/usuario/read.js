async function listarUsuarios() {
    try {
        const resposta = await fetch("http://localhost:8080/usuarios");

        if(!resposta.ok) {
            alert("Falha ao consultar a api");
            return;
        }

        const dados = await resposta.json();
        
        const usuarios = dados.usuarios;

        console.log(usuarios);

        renderizarUsuarios(usuarios);

    } catch(err) {
        console.error(err.message);
    }
}   

function renderizarUsuarios(usuarios) {
    const usuarioList = document.getElementById("usuario-list");

    usuarioList.innerHTML = "";

    usuarios.forEach(usuario => {
        usuarioList.innerHTML += `
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card h-100 shadow-sm">
                    <div class="card-body">
                        <p class="mb-2"><strong>Id:</strong> ${usuario.id}</p>
                        <p class="mb-2"><strong>Nome:</strong> ${usuario.nome}</p>
                        <p class="mb-2"><strong>E-mail:</strong> ${usuario.email}</p>
                        <p class="mb-0"><strong>Telefone:</strong> ${usuario.telefone}</p>
                        <div class"d-grid gap-2 d-flex">
                            <button class="btn btn-primary m-2" onclick="editarUsuario(${usuario.id})">Editar</button>
                            <button class="btn btn-danger m-2" onclick="excluirUsuario(${usuario.id})">Excluir</button>
                        </div>
                    </div>
                </div>
            </div>
        `
    })
}

document.addEventListener("DOMContentLoaded", listarUsuarios)
