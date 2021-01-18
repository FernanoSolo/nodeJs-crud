import Nota from '../models/notas.model';


module.exports.createOne = async (req, res) =>{

    const body = req.body;
    
    try {
        const nota = await Nota.create(body);
        res.status(200).json(nota) 


    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }


};

module.exports.findOne = async (req,res) =>{


    const _id = req.params.id;

    try {

        const nota = await Nota.findOne({_id});
      
        if(!nota){
            return res.status(400).json({
                mensaje: "No existen registros con el id"+ _id,
                error
            })
        }
        res.json(nota)

        
        
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
};

module.exports.findAll = async (req,res) =>{

    try {
        const notas = await Nota.find();
        res.json(notas)
        
    } catch (error) {
        res.status(400).json({
            mensaje: "Ocurrio algun error",
            error
        })
    }
}