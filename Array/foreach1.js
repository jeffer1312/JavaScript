const aprovados = ['jefferson', 'lhais', 'rafaela', 'lucas']

aprovados.forEach((nome, indice) => {
    console.log(`${indice+1}) ${nome}`)
})


const exibirAprovados = aprovado => console.log(aprovado)

aprovados.forEach(exibirAprovados);