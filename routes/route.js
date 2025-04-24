import express from 'express';

import multer from 'multer';
var storage = multer.diskStorage({
    filename: function(req, file, cb){
    let nome = Date.now() + "-" + file.originalname
    cb(null, nome)
    },
    destination: function(req, file, cb){
    let path = "./public/arquivos"
    cb(null, path)
    }
    })
    var upload = multer({ storage })


const router = express.Router();
import {
    home,

    //aeroporto
    addaeroporto,
    abreaddaeroporto,abreedtaeroporto,
    edtaeroporto,deletaaeroporto,
    listaraeroporto,filtraraeroporto,
    //usuario
    abreaddusuario, addusuario,
    abreedtusuario,
    edtusuario,
    deletausuario,
    listarusuario,
    filtrarusuario,
    //companhia
    abreaddcompanhia, addcompanhia,
    abreedtcompanhia,
    edtcompanhia,
    deletacompanhia,
    listarcompanhia,
    filtrarcompanhia,
     //cotacao
     abreaddcotacao, addcotacao,
     abreedtcotacao,
     edtcotacao,
     deletacotacao,
     listarcotacao,
     filtrarcotacao,
 


} from '../controllers/controller.js'
router.get('/', home)

//cotacao
router.get('/admin/cotacao/add', abreaddcotacao)
router.post('/admin/cotacao/add', addcotacao)

router.get('/admin/cotacao/lst', listarcotacao)
router.post('/admin/cotacao/lst', filtrarcotacao)

router.get('/admin/cotacao/del', deletacotacao)

router.get('/admin/cotacao/edt', abreedtcotacao )
router.post('/admin/cotacao/edt', edtcotacao)

//aeroporto
router.get('/admin/aeroporto/lst', listaraeroporto)
router.post('/admin/aeroporto/lst', filtraraeroporto)

router.get('/admin/aeroporto/del/:id', deletaaeroporto)

router.get('/admin/aeroporto/edt/:id', abreedtaeroporto)
router.post('/admin/aeroporto/edt/:id',upload.single("foto"), edtaeroporto)

router.get('/admin/aeroporto/add', abreaddaeroporto)
router.post('/admin/aeroporto/add', upload.single("foto"), addaeroporto)

//usuario
export default router

router.get('/admin/usuario/lst', listarusuario)
router.post('/admin/usuario/lst', filtrarusuario)

router.get('/admin/usuario/del/:id', deletausuario)

router.get('/admin/usuario/edt/:id', abreedtusuario)
router.post('/admin/usuario/edt/:id', edtusuario)

router.get('/admin/usuario/add', abreaddusuario)
router.post('/admin/usuario/add', addusuario)

//companhia
router.get('/admin/companhia/add', abreaddcompanhia)
router.post('/admin/companhia/add', addcompanhia)

router.get('/admin/companhia/lst', listarcompanhia)
router.post('/admin/companhia/lst', filtrarcompanhia)

router.get('/admin/companhia/del/:id', deletacompanhia)

router.get('/admin/companhia/edt/:id', abreedtcompanhia )
router.post('/admin/companhia/edt/:id', edtcompanhia)

