import { Schema } from "mongoose";
import conexao from "../config/conexao.js"

const cotacao = {

origem: {
    type:String,
    require:true
},
destino: {
    type:String,
    require:true
},
ida: {
    type:String,
    require:true
},
volta: {
    type:String,
    require:true
},
nome: {
    type:String,
    require:true
},
contato: {
    type:String,
    require:true
},
status: {
    type:String,
    require:true
}
}
export default conexao.model("cotacao",cotacao) 
