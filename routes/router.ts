

import { Router, Request, Response } from 'express';

const router = Router();

router.get('/mensajesgit', (req: Request, res: Response) => {
    res.json({
        ok: true,
        mensaje: 'GET cambio de git dos'
    });
});

router.get('/mensajes', (req: Request, res: Response) => {
    res.json({
        ok: true,
        mensaje: 'GET cambio de git Fabricio'
    });
});

router.post('/mensajespost', (req: Request, res: Response) => {

    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const otro = req.body.otro + " del server";
    const okreactive = true;

    res.json({
        okreactive,
        cuerpo,
        de,
        otro
        // mensaje: 'POST listo!'
    });
});

router.post('/mensajespost/:id', (req: Request, res: Response) => {

    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const id = req.params.id
    const okreactive = true;

    res.json({
        okreactive,
        cuerpo,
        de,
        id
        // mensaje: 'POST listo!'
    });
});

export default router;