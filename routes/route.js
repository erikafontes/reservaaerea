import express from 'express';
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

router.get('/admin/aeroporto/del', deletaaeroporto)

router.get('/admin/aeroporto/edt', abreedtaeroporto)
router.post('/admin/aeroporto/edt', edtaeroporto)

router.get('/admin/aeroporto/add', abreaddaeroporto)
router.post('/admin/aeroporto/add', addaeroporto)

//usuario
export default router

router.get('/admin/usuario/lst', listarusuario)
router.post('/admin/usuario/lst', filtrarusuario)

router.get('/admin/usuario/del', deletausuario)

router.get('/admin/usuario/edt', abreedtusuario)
router.post('/admin/usuario/edt', edtusuario)

router.get('/admin/usuario/add', abreaddusuario)
router.post('/admin/usuario/add', addusuario)

//companhia
router.get('/admin/companhia/add', abreaddcompanhia)
router.post('/admin/companhia/add', addcompanhia)

router.get('/admin/companhia/lst', listarcompanhia)
router.post('/admin/companhia/lst', filtrarcompanhia)

router.get('/admin/companhia/del', deletacompanhia)

router.get('/admin/companhia/edt', abreedtcompanhia )
router.post('/admin/companhia/edt', edtcompanhia)

