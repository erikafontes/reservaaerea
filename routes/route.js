import express from 'express';
const router = express.Router();
import {
    home,
    abreedtviagem,
    edtviagem,
    abreaddviagem,
    deletaviagem,
    addviagem,
    listarviagem,
    filtrarviagem,
    addaeroporto,
    abreaddaeroporto,abreedtaeroporto,
    edtaeroporto,deletaaeroporto,
    listaraeroporto,filtraraeroporto,
    abreaddusuario, addusuario,
    abreedtusuario,
    edtusuario,
    deletausuario,
    listarusuario,
    filtrarusuario,

} from '../controllers/controller.js'
router.get('/', home)

//viagem
router.get('/admin/viagem/add', abreaddviagem)
router.post('/admin/viagem/add', addviagem)

router.get('/admin/viagem/lst', listarviagem)
router.post('/admin/viagem/lst', filtrarviagem)

router.get('/admin/viagem/del/:id', deletaviagem)

router.get('/admin/viagem/edt/:id', abreedtviagem )
router.post('/admin/viagem/edt/:id', edtviagem)

//aeroporto
router.get('/admin/aeroporto/lst', listaraeroporto)
router.post('/admin/aeroporto/lst', filtraraeroporto)

router.get('/admin/aeroporto/del/:id', deletaaeroporto)

router.get('/admin/aeroporto/edt', abreedtaeroporto)
router.post('/admin/aeroporto/edt', edtaeroporto)

router.get('/admin/aeroporto/add', abreaddaeroporto)
router.post('/admin/aeroporto/add', addaeroporto)

//usuario
export default router

router.get('/admin/usuario/lst', listarusuario)
router.post('/admin/usuario/lst', filtrarusuario)

router.get('/admin/usuario/del/:id', deletausuario)

router.get('/admin/usuario/edt', abreedtusuario)
router.post('/admin/usuario/edt', edtusuario)

router.get('/admin/usuario/add', abreaddusuario)
router.post('/admin/usuario/add', addusuario)


