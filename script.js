document.addEventListener("DOMContentLoaded", function() {
    
    // =======================================================
    // 1. SISTEMA DE CLIMA REGIONAL
    // =======================================================
    const regiaoSelect = document.getElementById("regiao-select");
    const climaResultado = document.getElementById("clima-resultado");
    const tempVal = document.getElementById("temp-val");
    const focoVal = document.getElementById("foco-val");
    const climaRecomenda = document.getElementById("clima-recomenda");

    const dadosRegioes = {
        "sul": {
            temp: "Frio Moderado",
            foco: "Drenagem e Geada",
            recomenda: "Risco de geada baixa. Mantenha o solo coberto com palhada densa para proteger as raízes."
        },
        "sudeste": {
            temp: "Temperado Estável",
            foco: "Conservação de Nutrientes",
            recomenda: "Clima ideal para aplicação de adubação verde. Planeje a rotação de culturas."
        },
        "centro-oeste": {
            temp: "Quente / Seco",
            foco: "Economia de Água Extrema",
            recomenda: "Evite irrigar nas horas de sol forte. Ative o gotejamento noturno."
        },
        "nordeste": {
            temp: "Alta Temperatura",
            foco: "Combate à Desertificação",
            recomenda: "Foco total em captação de água da chuva e uso de biofertilizantes orgânicos."
        },
        "norte": {
            temp: "Quente / Úmido",
            foco: "Controle de Erosão",
            recomenda: "Período de chuvas intensas. Evite arar a terra para não causar erosão do solo."
        }
    };

    regiaoSelect.addEventListener("change", function() {
        const regiao = regiaoSelect.value;
        if (regiao === "") {
            climaResultado.classList.add("hidden");
            return;
        }
        const info = dadosRegioes[regiao];
        tempVal.textContent = info.temp;
        focoVal.textContent = info.foco;
        climaRecomenda.textContent = info.recomenda;
        climaResultado.classList.remove("hidden");
    });

    // =======================================================
    // 2. DIAGNÓSTICO DE SAÚDE DO SOLO
    // =======================================================
    const btnDiagnostico = document.getElementById("btn-diagnostico");
    const diagResultado = document.getElementById("diag-resultado");
    const scoreVal = document.getElementById("score-val");
    const scoreStatus = document.getElementById("score-status");
    const scoreDica = document.getElementById("score-dica");

    btnDiagnostico.addEventListener("click", function() {
        const pontosPalha = parseInt(document.getElementById("pergunta-palha").value);
        const pontosInsetos = parseInt(document.getElementById("pergunta-insetos").value);
        
        const totalScore = pontosPalha + pontosInsetos;
        scoreVal.textContent = `${totalScore}/10`;

        if (totalScore >= 8) {
            scoreStatus.textContent = "Solo Rico e Vivo";
            scoreStatus.style.color = "#2d6a4f";
            scoreDica.textContent = "Parabéns! Sua terra apresenta excelente atividade biológica e proteção.";
        } else if (totalScore >= 4) {
            scoreStatus.textContent = "Alerta: Solo Desgastado";
            scoreStatus.style.color = "#f77f00";
            scoreDica.textContent = "Atenção. Seu solo está perdendo vida útil. Recomendamos iniciar o plantio direto.";
        } else {
            scoreStatus.textContent = "Crítico: Solo Infértil";
            scoreStatus.style.color = "#d62828";
            scoreDica.textContent = "Perigo biológico. Solo compactado e sem microrganismos.";
        }
        diagResultado.classList.remove("hidden");
    });

    // =======================================================
    // 3. ECO-CALCULADORA (Versão Escolar Sem LocalStorage)
    // =======================================================
    const btnCalcular = document.getElementById("btn-calcular");
    const hectaresInput = document.getElementById("hectares");
    const resultadoCalc = document.getElementById("resultado-calc");
    const litrosEconomizados = document.getElementById("litros-economizados");
    const campoPiscinas = document.getElementById("piscinas");

    btnCalcular.addEventListener("click", function() {
        const ha = parseFloat(hectaresInput.value);

        if (isNaN(ha) || ha <= 0) {
            alert("Insira uma quantidade válida de hectares.");
            return;
        }

        const economiaLitros = ha * 19500; 
        const equivalenciaPiscinas = (economiaLitros / 2500000).toFixed(2);
        
        litrosEconomizados.textContent = economiaLitros.toLocaleString('pt-BR') + " L";
        campoPiscinas.textContent = equivalenciaPiscinas;
        resultadoCalc.classList.remove("hidden");
        hectaresInput.value = "";
    });
});