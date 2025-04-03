import { Schema } from "mongoose";
import conexao from "../config/conexao.js"

const companhia = {

    nome: {
      type:String, 
      required:true  
       },
    pais: {
        type:String,
        required:true
    },
    foto: {
        type:String,
        required:false
    }
    }
    export default conexao.model("companhia",companhia) 
