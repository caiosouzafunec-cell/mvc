export class AlunoView {
  private outputElement: HTMLElement;

  constructor() {
    this.outputElement = document.getElementById("saida")!;
  }

  private print(msg: string) {
    this.outputElement.textContent += msg + "\n";
  }

  mostrarAlunos(alunos: { id: number; nome: string; idade: number }[]): void {
    this.print("=== Lista de Alunos ===");
    alunos.forEach(aluno => {
      this.print(`ID: ${aluno.id} | Nome: ${aluno.nome} | Idade: ${aluno.idade}`);
    });
    this.print("========================");
  }

  mostrarMensagem(msg: string): void {
    this.print(`[INFO]: ${msg}`);
    
  }
}
