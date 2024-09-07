function entrar(event) {
    event.preventDefault();

    const email = document.getElementById('login').value;
    const password = document.getElementById('password').value;

    console.log(`Email: ${email}`);
    console.log(`Senha: ${password}`);
}

function processa(event) {
    event.preventDefault();
    const nomeCompleto = document.querySelector('[name="nomecompleto"]').value;
    const telefone = document.querySelector('[name="telefone"]').value;
    const senha = document.querySelector('[name="senha"]').value;
    const dataNascimento = document.querySelector('[name="dnasc"]').value;
    const enderecos = document.querySelector('[name="enderecos"]').value;
    const brasil = document.querySelector('[name="brasil"]').checked;
    const internacional = document.querySelector('[name="internacional"]').checked;
    const sexo = document.querySelector('[name="sexo"]:checked') ? document.querySelector('[name="sexo"]:checked').value : '';

    console.log(`Nome Completo: ${nomeCompleto}`);
    console.log(`Telefone: ${telefone}`);
    console.log(`Senha: ${senha}`);
    console.log(`Data de Nascimento: ${dataNascimento}`);
    console.log(`Endereços de Clientes: ${enderecos}`);
    console.log(`Brasil: ${brasil}`);
    console.log(`Internacional: ${internacional}`);
    console.log(`Sexo: ${sexo}`);
}

function limparConsole() {
    console.clear();
}
