import { AlunoModel } from "./models/AlunoModel";
import { AlunoView } from "./views/AlunoView";
import { AlunoController } from "./controllers/AlunoController";

// Criando instâncias
const model = new AlunoModel();
const view = new AlunoView();
const controller = new AlunoController(model, view);

// Simulação de uso
controller.cadastrarAluno(1, "Pedro", 16);
controller.cadastrarAluno(2, "Sophia", 18);
controller.cadastrarAluno(3, "Luan", 15);
controller.cadastrarAluno(4, "Bruno", 20);
controller.cadastrarAluno(5, "Rita", 22);
controller.cadastrarAluno(6, "Lucas", 19);
controller.cadastrarAluno(7, "Maria", 17);
controller.exibirAlunos();

