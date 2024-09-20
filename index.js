import prompt_sync from "prompt-sync";
import {mockBanco} from "./mockBanco.js";

const prompt = prompt_sync({});

const nome = prompt('Qual o seu nome?');

console.log(mockBanco);