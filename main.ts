import { AlunoModel } from "./models/AlunoModel";
import { AlunoView } from "./views/AlunoView";
import { AlunoController } from "./controllers/AlunoController";

// Criando instâncias
const model = new AlunoModel();
const view = new AlunoView();
const controller = new AlunoController(model, view);

// Simulação de uso
controller.cadastrarAluno(1, "Seu Nome", 18);

controller.exibirAlunos();
