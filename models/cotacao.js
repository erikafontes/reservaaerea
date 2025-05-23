import { Schema } from "mongoose";
import conexao from "../config/conexao.js"

const cotacao = {

origem: {
    type:conexao.Types.ObjectId, ref: "aeroporto",
    require:true
},
destino: {
    type:conexao.Types.ObjectId, ref: "aeroporto",
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
usuario: {
    type:conexao.Types.ObjectId, ref: "usuario",
    require:true

},
status: {
    type:String,
    require:true
}
}
export default conexao.model("cotacao",cotacao) 
