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
    listaraeroporto,filtraraeroporto

} from '../controllers/controller.js'
router.get('/', home)
//viagemabreedtviagem
//create do modelo viagemabreedtviagem (create)
router.get('/admin/viagem/add', abreaddviagem)
router.post('/admin/viagem/add', addviagem)
//rotas do modelo viagem (read)
router.get('/admin/viagem/lst', listarviagem)
router.post('/admin/viagem/lst', filtrarviagem)

router.get('/admin/aeroporto/lst', listaraeroporto)
router.post('/admin/aeroporto/lst', filtraraeroporto)

//rota do modelo viagem (delete)
router.get('/admin/viagem/del/:id', deletaviagem)

router.get('/admin/aeroporto/del/:id', deletaaeroporto)
//rota do modelo viagem (editar)
router.get('/admin/viagem/edt/:id', abreedtviagem )
router.post('/admin/viagem/edt/:id', edtviagem)

router.get('/admin/aeroporto/edt', abreedtaeroporto)
router.post('/admin/aeroporto/edt', edtaeroporto)


router.get('/admin/aeroporto/add', abreaddaeroporto)
router.post('/admin/aeroporto/add', addaeroporto)
export default router


