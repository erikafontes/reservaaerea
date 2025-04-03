export async function home(req,res){
    res.render('admin/index')
}

//cotacao
export async function abreaddcotacao(req, res) {
    res.render('admin/cotacao/add')
}

export async function addcotacao(req, res) {
    await Time.create({
        nome: req.body.nome,
        estadio: req.body.estadio
    }
    )
   
    res.redirect('/admin/cotacao/add')
}

export async function listarcotacao(req, res) {
    res.render('admin/cotacao/lst', '');
}
export async function filtrarcotacao(req, res) {
    res.render('admin/cotacao/lst', '');
}
export async function deletacotacao(req, res) {
    res.redirect('/admin/cotacao/lst')
 }
 export async function abreedtcotacao(req, res){
   
    res.render('admin/cotacao/edt','')
}
export async function edtcotacao(req, res){
    res.redirect('/admin/cotacao/lst')
}


//aeroporto

export async function abreaddaeroporto(req, res) {
    res.render('admin/aeroporto/add')
}
export async function addaeroporto(req, res) {
    res.redirect('/admin/aeroporto/add')
}
export async function listaraeroporto(req, res) {
    res.render('admin/aeroporto/lst', '');
}
export async function filtraraeroporto(req, res) {
    res.render('admin/aeroporto/lst', '');
}
export async function deletaaeroporto(req, res) {
    res.redirect('/admin/aeroporto/lst')
 }
export async function abreedtaeroporto(req, res){
   
    res.render('admin/aeroporto/edt','')
}
export async function edtaeroporto(req, res){
    res.redirect('/admin/aeroporto/edt')
}

//usuario

export async function abreaddusuario(req, res) {
    res.render('admin/usuario/add')
}
export async function addusuario(req, res) {
    res.redirect('/admin/usuario/add')
}
export async function listarusuario(req, res) {
    res.render('admin/usuario/lst', '');
}
export async function filtrarusuario(req, res) {
    res.render('admin/usuario/lst', '');
}
export async function deletausuario(req, res) {
    res.redirect('/admin/usuario/lst')
 }
export async function abreedtusuario(req, res){
   
    res.render('admin/usuario/edt','')
}
export async function edtusuario(req, res){
    res.redirect('/admin/usuario/edt')
}


//companhia

export async function abreaddcompanhia(req, res) {
    res.render('admin/companhia/add')
}
export async function addcompanhia(req, res) {
    res.redirect('/admin/companhia/add')
}
export async function listarcompanhia(req, res) {
    res.render('admin/companhia/lst', '');
}
export async function filtrarcompanhia(req, res) {
    res.render('admin/companhia/lst', '');
}
export async function deletacompanhia(req, res) {
    res.redirect('/admin/companhia/lst')
 }
export async function abreedtcompanhia(req, res){
   
    res.render('admin/companhia/edt','')
}
export async function edtcompanhia(req, res){
    res.redirect('/admin/companhia/edt')
}




