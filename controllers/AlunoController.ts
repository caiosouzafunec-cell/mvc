import { Aluno, AlunoModel } from "../models/AlunoModel";
import { AlunoView } from "../views/AlunoView";

export class AlunoController {
  constructor(
    private model: AlunoModel,
    private view: AlunoView
  ) {}

  cadastrarAluno(id: number, nome: string, idade: number): void {
    const novoAluno = new Aluno(id, nome, idade);
    this.model.adicionarAluno(novoAluno);
    this.view.mostrarMensagem(`Aluno "${nome}" cadastrado com sucesso!`);
  }

  exibirAlunos(): void {
    const alunos = this.model.listarAlunos();
    this.view.mostrarAlunos(alunos);
  }
}