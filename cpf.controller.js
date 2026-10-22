function validarCPFsimples(cpfOriginal) {
    if(!cpfOriginal) return { valido: false, mensagem: "CPF não informado" };

    
    //1.Remove caracteres não numéricos
    //replace = troca o que for encontrado na regex por um valor especificado
    // \/D/g = expressão regular que encontra todos os caracteres que não são dígitos (0-9) e os substitui por uma string vazia, efetivamente removendo-os.
    // \D significa qualquer caractere que não seja um dígito (0-9)
    // / ... / As barras no inicio e no fim serve para delimitar a expressão regular
    // g é o flag global, expressão regular significa "global", ou seja, aplica a substituição em todas as ocorrências encontradas na string, e não apenas na primeira.

    const apenasNumeros = String(cpfOriginal).replace(/\D/g, '');

    // Verifica se o CPF tem 11 dígitos
    if (apenasNumeros.length !== 11){
        return { valido: false,
        mensagem: `CPF deve conter 11 dígitos (você digitou ${apenasNumeros.length})`};
    }
    
    //verifica se todos os dígitos são iguais (ex: 111.111.111-11)
    if (todosIguais = /^(\d)\1{10}$/.test(apenasNumeros)) {
        return { valido: false, mensagem: "CPF inválido: todos os dígitos são iguais" };
    }
    return {
        valido: true,
        mensagem: 'CPF possui formato e tamanho válidos',
        cpfLimpo: apenasNumeros
    }

    const cpfController = {
    //metodo 1
        receberCPF: (req, res) => {
            //LIGAÇÃO: a função receberCPF é chamada quando a rota POST /cpf é acessada, e ela recebe os dados do corpo da requisição (req.body) e envia uma resposta (res.json) de volta ao cliente.
            const { cpf } = req.body;
            return res.json({
            sucesso: true,
            mensagem: 'CPF recebido com sucesso',
            cpfOriginal: cpf,
            mensagem: resultado.motivo
        })
        if (!resultadoValidacao.valido) {
            return res.status(400).json({
                status: 'erro',
                valido: false,
                cpfEnviado: cpf,
                mensagem: resultado.motivo
            });
        }
    }
}
}
module.exports = cpfController;