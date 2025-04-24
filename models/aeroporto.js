import { Schema } from "mongoose";
import conexao from "../config/conexao.js"

const aeroporto = {
   
   nome: {
    type:String,
    required: true
   },
   localizacao: {
    type:String,
    required:true
   },
   foto:{
    type:String,
    required: false
   },
   
}
export default conexao.model("aeroporto",aeroporto) 
