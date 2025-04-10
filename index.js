import express from 'express'

const app = express();


app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs')

//liberar acesso a pasta public

import{ fileURLToPath } from 'url';
import{dirname} from 'path';

//converte o caminho do arquivo atual
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname (__filename);
app.use(express.static(__dirname + '/public'))

import routes from "./routes/route.js"
import mongoose from 'mongoose'
const url = "mongodb+srv://fonteserika0:erikaffppp.01@cluster0.l9y2g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

//se quiser testar a conexão, descomentar o código abaixo
mongoose.connect(url)
console.log(mongoose.connect)
app.use(routes)

app.listen(3001)