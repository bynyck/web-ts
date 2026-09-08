document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");

    form.addEventListener("submit", async () => {
        try {
            const nome = document.getElementById("nome").value.trim();
            const email = document.getElementById("email").value.trim().toLowerCase();
            const telefone = document.getElementById("telefone").value.trim();

            if(!nome || nome.length < 3 || !email || !telefone || telefone.length < 11) {
                alert("Preencha todos os campos");
                return;
            }

            const usuario = {
                nome,
                email,
                telefone
            }

            const resposta = await fetch("http://localhost:8080/usuarios", {
                method: "POST",
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
    })
})