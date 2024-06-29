// Função para calcular e exibir os resultados
function calcular() {
    // Captura dos valores do formulário
    const valorAssinatura = parseFloat(document.getElementById('valorAssinatura').value);
    const dataVencimentoAnterior = document.getElementById('dataVencimentoAnterior').value;
    const dataVencimentoAtual = document.getElementById('dataVencimentoAtual').value;

    // Verificação se os campos foram preenchidos corretamente
    if (isNaN(valorAssinatura) || valorAssinatura <= 0) {
        alert('Por favor, informe um valor válido para a assinatura.');
        return;
    }

    if (!validarData(dataVencimentoAnterior) || !validarData(dataVencimentoAtual)) {
        alert('Por favor, informe datas de vencimento no formato dd/mm.');
        return;
    }

    // Parse das datas para o formato dia e mês
    const [diaAnterior, mesAnterior] = dataVencimentoAnterior.split('/').map(Number);
    const [diaAtual, mesAtual] = dataVencimentoAtual.split('/').map(Number);

    // Cálculo dos dias de uso entre as datas
    const diasDeUso = calcularDiasDeUso(diaAnterior, diaAtual);

    // Cálculo do valor proporcional da fatura (considerando um ciclo de 30 dias)
    const valorProporcional = valorAssinatura * (diasDeUso / 30);

    // Exibição dos resultados
    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = `<p>Total de dias de uso: ${diasDeUso} dias. Valor da primeira fatura ajustado: R$ ${valorProporcional.toFixed(2)}.</p>`;
}

// Função para validar o formato da data (dd/mm)
function validarData(data) {
    const regex = /^\d{1,2}\/\d{1,2}$/;
    return regex.test(data);
}

// Função para calcular os dias de uso entre duas datas
function calcularDiasDeUso(diaAnterior, diaAtual) {
    // Calcula os dias de uso
    let diasDeUso = 0;
    diasDeUso = 30 + diaAtual-diaAnterior;
    return diasDeUso;
}

//Função para calcular os dias proporcionais adicionais
function diasProporcionaisAdicionais(diaAnterior, mesAnterior, diaAtual, mesAtual){
    const proporcional = 0;
    if (mesAtual > mesAnterior){
        proporcional = (mesAtual-mesAnterior)*30 + (diaAtual-diaAnterior);
    } else{
        proporcional = (mesAtual-mesAnterior)*30 - (diaAtual-diaAnterior);
    }
    return proporcional;
}
    
