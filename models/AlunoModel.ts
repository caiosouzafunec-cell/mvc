export class Aluno {
  constructor(
    public id: number,
    public nome: string,
    public idade: number
  ) {}
}

export class AlunoModel {
  private alunos: Aluno[] = [];

  adicionarAluno(aluno: Aluno): void {
    this.alunos.push(aluno);
  }

  listarAlunos(): Aluno[] {
    return this.alunos;
  }
}