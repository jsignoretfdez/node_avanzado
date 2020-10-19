var express = require('express');
const multer = require('multer');
var router = express.Router();
const Agente = require('../../models/Agente');

//const upload = multer({dest: 'uploads/'});
const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb){
        const myFilename = `agente_${file.fieldname}_${Date.now()}_${file.originalname}`;
        cb(null, myFilename);
    }
});

const upload = multer({ storage: storage});

/* GET /agentes. */
router.get('/', async function(req, res, next) {

    /*Agente.find({}, (err, docs) => {
        res.json(docs);
    });*/
    try{

        const name = req.query.name;
        //http://localhost:3000/api/agentes?name=Smith

        const age = req.query.age;
        //http://localhost:3000/api/agentes?age=23

        const limit = parseInt(req.query.limit || 10);
       //http://localhost:3000/api/agentes?limit=10

        const skip = parseInt(req.query.skip);
        //http://localhost:3000/api/agentes?limit10&skip10

        const sort = req.query.sort;
        //http://localhost:3000/api/agentes?sort=age
        //http://localhost:3000/api/agentes?sort=age name

        const fields = req.query.fields;
        //http://localhost:3000/api/agentes?fields=age

        const filtro = {};

        if(name){
            filtro.name = name;
        }

        if(age){
            filtro.age = age;
        }
        const agentes = await Agente.lista(filtro, limit, skip, sort,fields);
        res.json(agentes);
    }catch (err){
        next(err);
    }

});

/* GET /api/agentes/<_id> */

router.get('/:_id', async (req,res, next) => {

   try {
       const _id = req.params._id;

       const agente = await Agente.findOne({
           _id: _id
       });
       res.json({result: agente});
   }catch (err){
       next(err);
   }

});

/* POST /api/agentes */

router.post('/', async (req, res, next) => {
  try {
      const agenteData = req.body;

      // Creamos el documento en memoria
      const agente = new Agente(agenteData);

      // Lo guardamos en BD
      const agenteGuardado = await agente.save();

      res.json({
          result: agenteGuardado
      });
  } catch (err){
      next(err);
  }
});

/* PUT /api/agentes/:_id */

router.put('/:_id', async (req, res, next) => {
    try {
        const  _id = req.params._id;
        const agenteData = req.body;

        const agenteUpdate = await Agente.findOneAndUpdate({
            _id: _id
        }, agenteData, {new: true, useFindAndModify: false})

        res.json({
            result: agenteUpdate
        });
    }catch (err){
        next(err);
    }
});

/* DELETE /api/agentes/:_id */

router.delete('/:_id', async (req, res, next) => {
   try {
       const  _id = req.params._id;

       const agenteDelete = await Agente.deleteOne({
           _id: _id
       });

       res.json();
   } catch (err){
       next (err);
   }
});

router.post('/upload', upload.single('imagen'), (req, res, next) => {
    console.log(req.file);
    res.send('ok');
})


module.exports = router;
