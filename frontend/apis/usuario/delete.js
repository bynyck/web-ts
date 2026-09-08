async function excluirUsuario(id) {

    if(!confirm("Tem certeza que deseja deletar o usuário?")) return;

    const resposta = await fetch(`http://localhost:8080/usuarios/${id}`,{
        method: "DELETE"
    });

    const resultado = await resposta.json();

    alert(resultado.mensagem);

    await listarUsuarios();

}   