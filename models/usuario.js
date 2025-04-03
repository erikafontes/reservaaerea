import { Schema } from "mongoose";
import conexao from "../config/conexao.js"

const usuario = {

    nome: {
        type:String, 
        required:true
    },
    email: {
        type:String,
        required:true
    },

    cpf: {
         type:String,
        required:true 

    },
    telefone:{
      type:Number,
      required:true
    },
}
export default conexao.model("usuario",usuario) 

