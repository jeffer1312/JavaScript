const escola = [{
    nome: 'Turma M1',
    alunos: [{
            nome: 'jefferson',
            nota: 10.0
        },
        {
            nome: 'Ana',
            nota: '8.0'
        }
    ],
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Rebeca',
        nota: 6.0
    }, {
        nome: 'roberto',
        nota: 7.5
    }]
}]


const getNotaDoAluno = aluno => aluno.nota

const getNotaDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotaDaTurma)
console.log(notas1)

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotaDaTurma)
console.log(notas2)