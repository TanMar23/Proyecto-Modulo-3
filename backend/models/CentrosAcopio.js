const { Schema, model } = require('mongoose');
const PLM = require('passport-local-mongoose');

const centrosSchema = new Schema(
  {
    empresa: String, 
    email: {
      type: String,
      unique: true,
    },
    address:{
        type: String,
        required: true
    },
    longitud: Number,
    latitud: Number,
    horario: String,
    contactNumber: String,
    fotoPerfil: {
      type: String,
      default: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png" 
    },
    tipoResiduo: {
        type: String,
        enum: ['PET', 'VIDRIO', 'RESIDUOS SANITARIOS', 'PILAS Y BATERIAS', 'METALES', 'MEDICAMENTOS CADUCOS', 
        'PAPEL Y CARTON', 'ELECTRONICOS Y ELECTRODOMESTICOS', 'RESIDUOS DE CONSTRUCCION', 'ACEITE COMESTIBLE USADO', 'ACEITE Y LUBRICANTE AUTOMOTRIZ USADO']
    },
    website: String
  },
  {
    timestamps: true,
    versionKey: false
  }
);

centrosSchema.plugin(PLM, { usernameField: 'email' });

module.exports = model('CentrosAcopio', centrosSchema);