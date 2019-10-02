const mongoose = require('mongoose')
const CentrosAcopio = require('../models/CentrosAcopio')

const data = [
    {
    empresa: 'Manejo Integral de Residuos Peligrosos, S.A. de C.V.',
    address: 'Santa Isabel 20 Manzana 12, lt.1 col. Hank González, alc. Iztapalapa.',
    contactNumber: 26086205, 
    tipoResiduo: 'ACEITE Y LUBRICANTE AUTOMOTRIZ USADO',
    },
    {
        empresa: 'Sistemas Integrales en el Manejo de Residuos Industriales SIMARI, S. de R.L',
        address: 'Parque Industrial de Tepeji del Río, Edo. de Hidalgo.',
        contactNumber: 56825432,
        tipoResiduo: 'ACEITE Y LUBRICANTE AUTOMOTRIZ USADO'
    },
    {
        empresa: 'Geocycle México',
        address: 'Av. Prolongación Vasco de Quiroga núm. 4800, alc. Cuajimalpa de Morelos.',
        contactNumber:  01-800-326-5832,
        tipoResiduo: 'ACEITE Y LUBRICANTE AUTOMOTRIZ USADO'
    },
    {
        empresa: 'Lubricash de México',
        address: 'Reforma Social mz. 66, lt. 9, col. Reforma Política, alc Iztapalapa.',
        contactNumber: 54296176,
        tipoResiduo: 'ACEITE Y LUBRICANTE AUTOMOTRIZ USADO'
    },
    {
        empresa: 'ECONTAINER, S. A. de C. V.',
        address: 'Calle Héroes de Granaditas núm. 1, col. San Pedro Xalostoc, Ecatepec, Edo. de México.',
        contactNumber: 57880338,
        email: 'econtainer_mx@hotmail.com',
        tipoResiduo: 'ACEITE Y LUBRICANTE AUTOMOTRIZ USADO'
    },
    {
        empresa: 'Impulsora Mexicana de Productos Químicos, S. A. de C. V.',
        address: 'Av. Vicente Lombardo Toledano núm. 89, col. Miguel Hidalgo, Ecatepec de Morelos, Edo. de México',
        email: 'contacto@impq.com.mx',
        contactNumber: 55694608,
        tipoResiduo: 'ACEITE Y LUBRICANTE AUTOMOTRIZ USADO'
    },
    {
        empresa: 'Servicio de transporte, S. A. de C. V.',
        address: 'Av. Paganini No. 90, col. Vallejo, alc. Gustavo A. Madero.',
        contactNumber: 55909323,
        email: 'informes@serviciodetransporte.com.mx', 
        tipoResiduo: 'ACEITE Y LUBRICANTE AUTOMOTRIZ USADO'
    },
    {
        empresa: 'Bio-Tramex Biotratamientos de México S. A. de C. V.',
        address: 'Av. Constituyentes 653-501, 16 de septiembre, C. P. 11810.',
        contactNumber: 26147390,
        tipoResiduo: 'ACEITE Y LUBRICANTE AUTOMOTRIZ USADO'
    },
    {
        empresa: 'Biofuels de México S. A. de C. V.',
        address: 'Aniceto Ortega 817, depto. D, col. del Valle, alc. Benito Juárez.',
        contactNumber:  17421518,
        website: 'http://www.recoleccionaceite.com/',
        tipoResiduo: 'ACEITE COMESTIBLE USADO'
    },
    {
        empresa: 'Jabón y grasa S.A. de C. V.',
        address: 'Cda. Rafael Ángel Peña 247- 4, col. Tránsito, alc. Cuauhtémoc.',
        contactNumber: 41950148,
        tipoResiduo: 'ACEITE COMESTIBLE USADO'
    },
    {
        empresa: 'REOIL Internacional S. de R. L. de C. V.',
        address: 'Norte 35 núm. 1012-A, col. Industrial Vallejo, alc. Azcapotzalco.',
        contactNumber: 55870033,
        email: 'info@reoil.net',
        website: 'http://www.reoil.net/',
        tipoResiduo: 'ACEITE COMESTIBLE USADO'
    },
    {
        empresa: 'Eli Cami y Compañía S. A.',
        address: 'Reforma Social mz. 66, lt. 9, col. Reforma Política, alc. Iztapalapa',
        contactNumber:  54296176,
        tipoResiduo: 'ACEITE COMESTIBLE USADO'
    },
    {
        empresa: 'Biokeizer',
        address: 'Calle 14 núm. 185, col. Progreso Nacional, alc. Gustavo A. Madero.', 
        tipoResiduo: 'ACEITE COMESTIBLE USADO'
    },
    {
        empresa: 'Mercado de Trueque Secretaria del Medio Ambiente de la CDMX',
        address: 'Programa mensual e itinerante en distintos puntos de la CDMX',
        contactNumber: 53458187,
        tipoResiduo: 'ACEITE COMESTIBLE USADO'
    },
    {
        empresa: 'ECONTAINER S. A. de C. V.',
        address: 'Calle Héroes de Granaditas núm. 1, col. San Pedro Xalostoc, Ecatepec, Edo. de México.',
        contactNumber:  57880338,
        email: 'econtainer_mx@hotmail.com',
        tipoResiduo: 'ACEITE COMESTIBLE USADO'
    },
    {
        empresa: 'Technology Comercer & Solutions, S.A. de C.V.',
        address: 'Retorno 13 de Jesús Galindo y Villa No. 14, col. Jardín Balbuena, alc. Venustiano Carranza.',
        contactNumber: 55714411,
        email: 'gcomercial@sanitech.mx',
        tipoResiduo: 'ACEITE COMESTIBLE USADO'
    },
    {
        empresa: 'Centro de Transferencia Cuemanco',
        address: 'Periférico Sur núm. 7555, col. San Lorenzo la Cebada, alc. Xochimilco.',
        contactNumber: 56037070,
        email: 'centrodetransferencia@aol.com',
        website: 'retirodeescombro.com.mx',
        tipoResiduo: 'RESIDUOS DE CONSTRUCCION'
    },
    {
        empresa: 'Concretos y Reciclados, S. A. de C. V.',
        address: 'Av. Periférico sur No. 7555, col. Rinconada Coapa, alc. Xochimilco.', 
        email: 'concretosreciclados.com.mx',
        tipoResiduo: 'RESIDUOS DE CONSTRUCCION'
    },
    {
        empresa: 'Constructores y Mineros, S.A. de C.V.',
        address: 'Paseo de los Olmos No.110, col. Colinas de Tarango, alc. Álvaro Obregón.',
        contactNumber: 56432364,
        email: 'mineros2@prodigy.net.mx',
        tipoResiduo: 'RESIDUOS DE CONSTRUCCION'
    },
    {
        empresa: 'Luz Elena Sandoval Madrigal',
        address: 'Av. Floresta, Mz. 11, Lt. 17, col. Unidad Habitacional Floresta, Mpio. Los Reyes Acaquilpan, Edo. de Méx',
        email: 'llantasecologicaslucy@hotmail.com',
        tipoResiduo: 'RESIDUOS DE CONSTRUCCION'
    },
    {
        empresa: 'Sindicato Libertad de Trabajadores de México',
        address: 'Dr. J. Velasco no. 36 Depto. 105, col. Doctores, alc. Cuauhtémoc.',
        email: 'a.crish@hotmail.com',
        tipoResiduo: 'RESIDUOS DE CONSTRUCCION'
    },
    {
        empresa: 'Aseca, S.A. de C.V.',
        address: 'Av. Presidente Juárez No. 2022, col. Los Reyes Iztacala, Mpio. Tlalnepantla de Baz, Edo. de Méx.',
        contactNumber: 5516659242, 
        email: 'recoleccion@aseca.com',
        tipoResiduo: 'RESIDUOS DE CONSTRUCCION'
    },
    {
        empresa: 'In Cycle Electronics de México, S.A. de C.V.',
        address: 'Azafrán 475, col. Granjas México, alc. Iztacalco, (sobre Río Churubusco y Resina, a unas cuadras de Upiicsa).',
        contactNumber: 57639651,
        website: 'incycleinc.com',
        tipoResiduo: 'ELECTRONICOS Y ELECTRODOMESTICOS'
    },
    {
        empresa: 'Recicladora EcoAzteca, S.A. de C.V.',
        address: 'Iztapalapa: Calle Sur 29 mz. 55, lt. 585, col. Leyes de Reforma 2ª sección, alc. Iztapalapa.',
        contactNumber:  56464018,
        email: 'contacto@ecoazteca.com.mx', 
        tipoResiduo: 'ELECTRONICOS Y ELECTRODOMESTICOS'
    },
    {
        empresa: 'Amigos del Medio Ambiente',
        address: 'Avenida Prolongación San Antonio 390, col. Minas de Cristo, (en frente de autolavado Beakman), alc. Álvaro Obregón.',
        contactNumber: 55982222, 
        tipoResiduo: 'ELECTRONICOS Y ELECTRODOMESTICOS'
    },
    {
        empresa: 'Recall Representación de Equipos de Calidad S. A. de C. V.',
        address: 'Depósito de teléfonos celulares en desuso en cualquier ECO POINT.',
        email: 'cygoca@yahoo.com.mx',
        website: 'recallinternacional.com/index.php',
        tipoResiduo: 'ELECTRONICOS Y ELECTRODOMESTICOS'
    },
    {
        empresa: 'Centros de Reciclaje Recupera, S. A. de C. V.',
        address: 'Walmart Taxqueña: Glorieta av. Universidad y Miguel Ángel de Quevedo. Estacionamiento de la tienda',
        contactNumber:  56611776,
        email: 'recicla@recuperamexico.com',
        website: 'recuperamexico.com',
        tipoResiduo: 'ELECTRONICOS Y ELECTRODOMESTICOS'
    },
    {
        empresa: 'Reciclemos juntos',
        address: 'Jaime Torres Bodet No.72, col. Santa María la Ribera, alc. Cuauhtémoc.',
        contactNumber:  55472647,
        email: 'informes@reciclemosjuntos.com.mx',
        tipoResiduo: 'ELECTRONICOS Y ELECTRODOMESTICOS'
    },
    {
        empresa: 'Amigos del medio ambiente', 
        address: 'Avenida Prolongación San Antonio 390, col. Minas de Cristo, alc. Álvaro Obregón.',
        contactNumber: 55982222,
        tipoResiduo:  'PAPEL Y CARTON'
    },
    {
        empresa: 'Bodegas Estrella, S.A. de C.V.',
        address: 'Calle Providencia 89, col. Los Olivos, alc. Tláhuac.',
        contactNumber: 58451599,
        email: 'info@bodegasestrella.com.mx',
        website: 'bodegasestrella.com.mx',
        tipoResiduo:  'PAPEL Y CARTON'
    },
    {
        empresa: 'Ecolomovil',
        address: 'San Pedro Xalpa: Hidalgo 122, San Pedro Xalpa.',
        contactNumber: 53836502,
        website: 'ecolomovil.com',
        tipoResiduo:  'PAPEL Y CARTON'
    },
    {
        empresa: 'Recicladora Schrader',
        address: 'Manuel Carpio 224, col. Santa María la Ribera, alc. Cuauhtémoc.',
        contactNumber: 46046535,
        email: 'recicladoraschrader@yahoo.com.mx',
        tipoResiduo:  'PAPEL Y CARTON'
    },
    {
        empresa: 'Servicios para Reciclar, S. A. de C. V',
        address: 'Av. Universidad 1619, (por los Viveros de Coyoacán, frente al DIF), alc. Coyoacán.',
        contactNumber:  55549639,
        tipoResiduo:  'PAPEL Y CARTON'
    },
    {
        empresa: 'ECONTAINER, S. A. de C. V.',
        address: 'Calle Héroes de Granaditas núm. 1, col. San Pedro Xalostoc, Ecatepec, Edo. de México.',
        contactNumber:  57880338,
        email: 'econtainer_mx@hotmail.com',
        tipoResiduo:  'MEDICAMENTOS CADUCOS'
    },
    {
        empresa: 'Bio-Tramex Biotratamientos de México S. A. de C. V.',
        address: 'Av. Constituyentes 653-501, 16 de septiembre, C. P. 11810',
        contactNumber:  26147390,
        website: 'https://www.biotramex.com/',
        tipoResiduo:  'MEDICAMENTOS CADUCOS'
    },
    {
        empresa: 'Sistemas Integrales en el Manejo de Residuos Industriales SIMARI, S. de R.L.',
        address: 'Parque Industrial de Tepeji del Río, Edo. de Hidalgo.',
        contactNumber: 56825432, 
        tipoResiduo:  'MEDICAMENTOS CADUCOS'
    },
    {
        empresa: 'Impulsora Mexicana de Productos Químicos, S. A. de C. V.',
        address: 'Av. Vicente Lombardo Toledano núm. 89, col. Miguel Hidalgo, Ecatepec de Morelos, Edo. de México.',
        contactNumber: 55694608,
        email: 'contacto@impq.com.mx',
        website: 'impq.com.mx',
        tipoResiduo:  'MEDICAMENTOS CADUCOS'
    },
    {
        empresa: 'Alcamare, S. de R.L. de C.V.',
        address: 'Puebla 317, col. Roma Norte',
        contactNumber: 55539918,
        email: 'contacto@alcamare.com',
        website: 'alcamare.com',
        tipoResiduo:  'METALES'
    },
    {
        empresa: 'Aceros Talismán, S.A. de C.V.',
        address: 'Av. 510 núm. 422, col. Morelos, alc. Gustavo A. Madero.',
        contactNumber: 57604935,
        email: 'aceros_talisman@terra.com.mx',
        tipoResiduo:  'METALES'
    },
    {
        empresa: 'Desperdicios Industriales Zaragoza, S.A. de C.V.',
        address: 'Calzada. I. Zaragoza 914 bis., col. Pantitlán, alc. Iztacalco.',
        contactNumber:57638897,
        tipoResiduo:  'METALES'
    },
    {
        empresa: 'Recy Metales, S.A. de C.V.',
        address: 'Avenida Albino Corzo, Norte 48 núm. 5204-2, col. La joyita, alc. Gustavo A Madero.',
        contactNumber:  57592159,
        tipoResiduo:  'METALES'
    },
    {
        empresa: 'Metales de Satélite',
        address: 'Emiliano Zapata No. 18, col. San Lucas Tepetlaco, Ciudad Satélite Tlalnepantla, Edo. de México.',
        contactNumber: 46099015,
        tipoResiduo:  'METALES'
    },
    {
        empresa: 'Manejo Integral de Residuos, S.A. de C.V.',
        address: 'Augusto Rodín 20, col. Ampliación Nápoles, alc. Benito Juárez.',
        contactNumber: 55231143,
        email: 'jocelyn.soto@mir-mexico.com',
        tipoResiduo:  'PILAS Y BATERIAS'
    },
    {
        empresa: 'Recicladora Schrader',
        address: 'Manuel Carpio 224, col. Santa María la Ribera, alc. Cuauhtémoc.',
        contactNumber:46046535,
        email: 'recicladoraschrader@yahoo.com.mx',
        tipoResiduo:  'PILAS Y BATERIAS'
    },
    {
        empresa: 'Reciclemos juntos',
        address: 'Jaime Torres Bodet No.72, col. Santa María la Ribera, alc. Cuauhtémoc',
        contactNumber: 55472647,
        email: 'informes@reciclemosjuntos.com.mx',
        tipoResiduo:  'PILAS Y BATERIAS'
    },
    {
        empresa: 'Programa Ponte Pilas con tu Ciudad, Secretaría del Medio Ambiente de la CDMX.', 
        address: '400 columnas habilitadas para el acopio de pilas y baterías por toda la CDMX,',
        website: 'imu.com.mx/pilas.php',
        tipoResiduo:  'PILAS Y BATERIAS'
    },
    {
        empresa: 'Depósito de Materiales Reciclables Los Gallos',
        address: 'Prolongación San Antonio esq. Rosa Blanca s/n, col. Minas de Cristo, alc. Álvaro Obregón.',
        contactNumber:  55982222,
        tipoResiduo:  'PILAS Y BATERIAS'
    },
    {
        empresa: 'Ambientum',
        address: 'Moctezuma 39, col. Guerrero, alc. Cuauhtémoc',
        contactNumber: 57726510,
        email: 'ventas@ambientum.com.mx',
        website: 'ambientum.com.mx',
        tipoResiduo:  'RESIDUOS SANITARIOS'
    },
    {
        empresa: 'Ecolomovil',
        address: 'Pantaco: Antigua clzda. de las Granjas núm. 85 Pantaco',
        contactNumber: 53836502,
        website: 'ecolomovil.com',
        tipoResiduo:  'RESIDUOS SANITARIOS'
    },
    {
        empresa: 'Grupo Diquima, S.A. de C.V.',
        address: 'Calle 12 No. 34, col. Tlalnepantla Centro, Mpio. Tlalnepantla de Baz, Edo. de Méx.',
        contactNumber: 53629131,
        email: 'jgonzalez@diquima.com',
        tipoResiduo:  'RESIDUOS SANITARIOS'
    },
    {
        empresa: 'Ecología y Ambientes Naturales, S.C.',
        address: 'Alc. Benito Juárez',
        contactNumber:  71557440, 
        email: 'ecolan@live.com.mx',
        tipoResiduo:  'RESIDUOS SANITARIOS'
    },
    {
        empresa: 'Vitroplano',
        address: 'Ex Hacienda de Santa Cruz, Tlanenpantla, Estado de México.',
        contactNumber: 52276000,
        tipoResiduo:  'VIDRIO'
    },
    {
        empresa: 'Química Wimer, S.A. de C.V.',
        address: 'Calle Tecamazúchitl s/n, col. Ampliación Santa Catarina, Municipio Valle de Chalco Solidaridad, edo. de México.',
        contactNumber: 58601657,
        email: 'aramos@quimicawimer.com',
        tipoResiduo:  'VIDRIO'
    },
    {
        empresa: 'Recicla y Juega, S.A. de C.V.',
        address: 'Col. Santa Isabel Industrial, alc. Iztapalapa',
        contactNumber: 26087760,
        email: 'reciclayjuega9@gmail.com',
        tipoResiduo:  'VIDRIO'
    },
    {
        empresa: 'Grupo BENJ, S.A de C.V.',
        address: 'Felipe Ángeles No. 1, Ext. 1, col. San Juan Aragón, alc. Gustavo A. Madero',
        contactNumber: 57607963,
        email: 'jgm_520306@hotmail.com',
        tipoResiduo:  'VIDRIO'
    },
    {
        empresa: 'Centro de Reciclaje Recupera, S. A. de C. V.',
        address: ' Pilares 129, col. del Valle',
        contactNumber:55598812,
        website: 'recuperamexico.com ',
        tipoResiduo:  'VIDRIO'
    },
    {
        empresa: 'BasuraCero',
        address: 'Ciprés 377-B, Colonia Atlampa, Alcaldía Cuauhtémoc, c. p. 06450',
        contactNumber: 26303255,
        email: 'contacto@basuracero.com',
        website: 'http://basuracero.com/',
        tipoResiduo:  'PET'
    },
    {
        empresa: 'On Site Destruction México, S. A. de C. V.',
        address: 'Poniente 150 núm. 677-A, col. Zona Industrial Vallejo, alc. Azcapotzalco',
        contactNumber: 53569653, 
        website: 'http://onsite.mx',
        tipoResiduo:  'PET'
    },
    {
        empresa: 'ECONTAINER, S. A. de C. V.',
        address: 'Calle Héroes de Granaditas núm. 1, col. San Pedro Xalostoc, Ecatepec, Edo. de México',
        contactNumber:  57880338,
        email: 'econtainer_mx@hotmail.com',
        tipoResiduo:  'PET'
    },
    {
        empresa: 'PETstar',
        address: 'Monte Elbruz 124-601, col. Polanco 2ª sección.',
        contactNumber:  57718300,
        tipoResiduo:  'PET'
    },
    {
        empresa: 'ECOCE',
        address: 'Moliere núm 39, 2do piso, col. Polanco, alc. Miguel Hidalgo.',
        contactNumber: 52812264, 
        email: 'aleon@ecoce.mx',
        website: 'ecoce.org.mx/contacto.php',
        tipoResiduo:  'PET'
    }
]


mongoose.connect(process.env.DB, {useNewUrlParser: true})
    .then(async()=> {
      const centros = await CentrosAcopio.create(data)
      console.log(`${centros.length} centros created`)
      mongoose.connection.close()
    })
    .catch(err => {
      console.error('Error connecting to mongo', err)
    });