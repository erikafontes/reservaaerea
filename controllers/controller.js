import aeroporto from "../models/aeroporto.js";
import companhia from "../models/companhia.js";
import cotacao from "../models/cotacao.js";
import usuario from "../models/usuario.js";


export async function home(req,res){
    res.render('admin/index')
}

//cotacao
export async function abreaddcotacao(req, res) {
    const resultado = await aeroporto.find({}).catch(function(err){console.log(err)})
    const resposta = await usuario.find({}).catch(function(err){console.log(err)})
    res.render('admin/cotacao/add', {aeroportos:resultado, usuarios:resposta })
}

export async function addcotacao(req, res) {

    var corigem = null;
    //se vier time, busca
        if(req.body.origem!=null)
        {
            corigem = await aeroporto.findById(req.body.origem)
        }
        var cdestino = null;
        if(req.body.destino!=null)
            {
                cdestino = await aeroporto.findById(req.body.destino)
            }
            var cusuario = null;
        console.log(req.body.usuario)
        if(req.body.usuario!=null)
            {
                cusuario = await usuario.findById(req.body.usuario)
            }
            console.log(cusuario)
    await cotacao.create({
        origem: corigem,
        destino: cdestino,
        ida: req.body.ida,
        volta: req.body.volta,
        usuario: cusuario,
        status: req.body.status      
    })
    res.redirect('/admin/cotacao/add')
}

export async function listarcotacao(req, res) {
    const resultado = await cotacao.find({}).populate("origem destino usuario").catch(function(err){console.log(err)});
    res.render('admin/cotacao/lst',{cotacaos: resultado});
}
export async function filtrarcotacao(req, res) {
    const resultado = await cotacao.find({nome: new RegExp(req.body.pesquisar,"i")})
    res.render('admin/cotacao/lst',{cotacaos: resultado});
}

export async function deletacotacao(req, res) {
    await cotacao.findByIdAndDelete(req.params.id)
    res.redirect('/admin/cotacao/lst')
 }
 export async function abreedtcotacao(req, res){
    const resp = await cotacao.findById(req.params.id)
    const resposta = await usuario.find({}).catch(function(err){console.log(err)})
    const resultado = await aeroporto.find({}).catch(function(err){console.log(err)})
    res.render('admin/cotacao/edt',{cotacaos:resp,  usuarios:resposta, aeroportos:resultado})
}

export async function edtcotacao(req, res){  
    await cotacao.findByIdAndUpdate(req.params.id, 

          {origem:req.body.origem,
            destino:req.body.destino,
            ida:req.body.ida,
            volta:req.body.volta,
            usuario:req.body.usuario,
            status:req.body.destino,
        }
    )
    res.redirect('/admin/cotacao/lst')



    
}
//aeroporto

export async function abreaddaeroporto(req, res) {
    res.render('admin/aeroporto/add')

}
export async function addaeroporto(req, res) {
   var fotoupload;
   if(req.file != null){
   fotoupload = req.file.filename
   }
   else{
    fotoupload =null
   }
   
    //console.log(req.file)
        await aeroporto.create({
            nome:req.body.nome,
            localizacao:req.body.localizacao,
            foto: fotoupload,
        })
        res.redirect('/admin/aeroporto/add')
    }

export async function listaraeroporto(req, res) {
    const resultado = await aeroporto.find({}).catch(function(err){console.log(err)});
    res.render('admin/aeroporto/lst',{aeroportos: resultado});
}
export async function filtraraeroporto(req, res) {
    const resultado = await aeroporto.find({nome: new RegExp(req.body.pesquisar,"i")})
    res.render('admin/aeroporto/lst',{aeroportos: resultado});
}
export async function deletaaeroporto(req, res) {
    await aeroporto.findByIdAndDelete(req.params.id)
    res.redirect('/admin/aeroporto/lst')
 }
export async function abreedtaeroporto(req, res){
    const resultado = await aeroporto.findById(req.params.id)
       res.render('admin/aeroporto/edt',{aeroporto: resultado})
}
export async function edtaeroporto(req, res){
    var salvefoto;
    if(req.file ==upfoto){
        salvefoto = upfoto
    } 
    else
    {
        salvefoto=null;
    }

    var upfoto;
    if(req.file != null){
    upfoto = req.file.filename
    }
    else{
     upfoto = salvefoto
    }
    
    res.redirect('/admin/aeroporto/lst')

    await aeroporto. findByIdAndUpdate(req.params.id, 
        {
            nome:req.body.nome,
            localizacao:req.body.localizacao,
            foto:upfoto,
        }
    )}
        


//usuario

export async function abreaddusuario(req, res) {
    res.render('admin/usuario/add')
}
export async function addusuario(req, res) {edt
    await usuario.create({
        nome:req.body.nome,
        email:req.body.email,
        cpf: req.body.cpf,
        telefone: req.body.telefone

    })
    res.redirect('/admin/usuario/add')
}
export async function listarusuario(req, res) {
    const resultado = await usuario.find({}).catch(function(err){console.log(err)});
    res.render('admin/usuario/lst',{usuario: resultado});
}
export async function filtrarusuario(req, res) {

    const resultado = await usuario.find({nome: new RegExp(req.body.pesquisar,"i")})
    res.render('admin/usuario/lst',{usuarios: resultado});
}
export async function deletausuario(req, res) {
    await usuario.findByIdAndDelete(req.params.id)
    res.redirect('/admin/usuario/lst')
 }
export async function abreedtusuario(req, res){
    const resultado = await usuario.findById(req.params.id)
    res.render('admin/usuario/edt',{usuario: resultado})
}
export async function edtusuario(req, res){
    await usuario.findByIdAndUpdate(req.params.id, req.body)
    res.redirect('/admin/usuario/lst')
}


//companhia

export async function abreaddcompanhia(req, res) {
    res.render('admin/companhia/add')
}
export async function addcompanhia(req, res) {

    var fotoupload;
    if(req.file != null){
    fotoupload = req.file.filename
    }
    else{
     fotoupload =null
    }
    
    await companhia.create({
        nome:req.body.nome,
        pais:req.body.pais,
        foto: fotoupload,
    })
    res.redirect('/admin/companhia/add')
}
export async function listarcompanhia(req, res) {
    const resultado = await companhia.find({}).catch(function(err){console.log(err)});
    res.render('admin/companhia/lst',{companhia: resultado});
}
export async function filtrarcompanhia(req, res) {
    const resultado = await companhia.find({nome: new RegExp(req.body.pesquisar,"i")})
    res.render('admin/companhia/lst',{companhias: resultado});
}
export async function deletacompanhia(req, res) {
    await companhia.findByIdAndDelete(req.params.id)
    res.redirect('/admin/companhia/lst')
 }
export async function abreedtcompanhia(req, res){
    const resultado = await companhia.findById(req.params.id)
    res.render('admin/companhia/edt',{companhia: resultado})
}
export async function edtcompanhia(req, res){
    var salvfoto;
    if(req.file ==fotoup){
        salvfoto = fotoup
    } 
    else
    {(salvfoto=null)}

    console.log(salvfoto)

    var fotoup;
    if(req.file != null){
    fotoup = req.file.filename
    }
    else{
     fotoup = salvfoto
    }
    console.log(fotoup)

    await companhia. findByIdAndUpdate(req.params.id,
        {
        nome:req.body.nome,
        pais:req.body.pais,
        foto: fotoup,
    })  
    
    res.redirect('/admin/companhia/lst')
}


