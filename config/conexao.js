import mongoose from "mongoose";

const url = "mongodb+srv://fonteserika0:erikaffppp.01@cluster0.l9y2g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function conectarDB() {
    try {
        await mongoose.connect(url);
        console.log("Conectado ao MongoDB com sucesso!");
    } catch (error) {
        console.error("Erro ao conectar ao MongoDB:", error);
    }
}

conectarDB();

export default mongoose;

