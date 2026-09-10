(function() {
  'use strict';

  /* =============================================
     TOUR DATA
     ============================================= */
  const TOURS = [
    {
      id: 'city-tour',
      title: 'City Tour Iquique + Navegación',
      img: 'city-tour.jpeg',
      category: 'City Tour',
      price: 40000,
      familyDiscount: false,
      desc: 'Conoce los espectaculares paisajes de Iquique, sus playas, arquitectura y patrimonios. Recorre cada lugar turístico de la ciudad e incluye navegación por la costa.',
      fullDesc: 'Recorrido por los sitios históricos más importantes de Iquique: Playa Cavancha, Mercado Centenario, Escuela Santa María, Catedral, Estación de Trenes, Museo Corbeta Esmeralda, Navegación Muelle de Pasajeros, Marinero Desconocido y ZOFRI.',
      includes: ['Transporte', 'Guía Turístico', 'Protocolos Sanitarios'],
      excludes: ['Alimentación y Bebidas', 'Ticket de Ingreso (CLP 3.000)', 'Seguro de Viaje'],
      schedule: 'Mañana (AM) / Tarde (PM)',
      destinations: ['Playa Cavancha', 'Mercado Centenario', 'Escuela Santa María', 'Catedral', 'Estación de Trenes', 'Museo Corbeta Esmeralda', 'Navegación Muelle de Pasajeros', 'Marinero Desconocido', 'ZOFRI'],
      tickets: 'Ticket de Ingreso CLP 3.000'
    },
    {
      id: 'salitreras-oasis',
      title: 'Tour Salitreras & Oasis de Pica',
      img: 'salitreras-oasis.jpeg',
      category: 'Full Day',
      price: 75000,
      familyDiscount: true,
      desc: 'Visita guiada a las ex oficinas salitreras que te transportarán a la época del auge del salitre. Luego visitaremos Pica, un hermoso oasis en pleno desierto.',
      fullDesc: 'Imperdible de Tarapacá. Recorre las oficinas salitreras Humberstone y Santa Laura (Patrimonio UNESCO), donde conocerás la historia del "oro blanco". Continúa por la Pampa del Tamarugal, pasando por Pozo Almonte, el Santuario de La Tirana, y llega al Oasis de Pica con su cocha resbaladero. Finaliza en el Pueblo de Matilla y el Parque de los Dinosaurios.',
      includes: ['Transporte', 'Guía Turístico', 'Alimentación (Almuerzo)', 'Protocolos Sanitarios'],
      excludes: ['Bebidas', 'Ticket de Ingreso Salitreras (CLP 8.000)', 'Ticket de Ingreso Oasis Pica (CLP 7.000)'],
      schedule: 'Salida 08:00 hrs · Retorno 19:30 hrs',
      destinations: ['Oficinas Salitreras Humberstone y Santa Laura', 'Pozo Almonte', 'Pueblo de La Tirana', 'Oasis de Pica', 'Pueblo de Matilla', 'Parque de Dinosaurios'],
      tickets: 'Salitreras CLP 8.000 + Oasis Pica CLP 7.000'
    },
    {
      id: 'parque-isluga',
      title: 'Tour Parque Nacional Volcán Isluga',
      img: 'parque-isluga.jpeg',
      category: 'Naturaleza',
      price: 110000,
      familyDiscount: true,
      desc: 'En esta ruta podrás disfrutar y contemplar maravillosos paisajes únicos con variedad de fauna y flora, con su imponente cultura, artesanía y gastronomía.',
      fullDesc: 'Desde Iquique hacia el norte, llegando al majestuoso Cerro Unita para observar el Gigante de Tarapacá. Continúa al Mirador de Chusmiza para aclimatarte a la altura. Luego visita el pueblo de Isluga, el Valle de la Felicidad y Cariquima.',
      includes: ['Transporte', 'Guía Turístico', 'Alimentación (Desayuno y Almuerzo)', 'Protocolos Sanitarios'],
      excludes: ['Bebidas', 'Ticket de Ingreso Termas (CLP 6.000)', 'Seguro de Viaje'],
      schedule: 'Salida 05:30 hrs · Retorno 21:00 hrs',
      destinations: ['Gigante de Tarapacá', 'Mirador de Chusmiza', 'Termas de Chusmiza', 'Pueblo de Isluga', 'Valle de la Felicidad', 'Cariquima'],
      tickets: 'Ticket de Ingreso Termas CLP 6.000'
    },
    {
      id: 'laguna-roja',
      title: 'Tour Laguna Roja',
      img: 'laguna-roja.jpeg',
      category: 'Naturaleza',
      price: 150000,
      familyDiscount: true,
      desc: 'Mágica y misteriosa Laguna Roja, única en Chile. Rodeada de historias sagradas, un lugar para recuperar energías.',
      fullDesc: 'El secreto mejor guardado del norte de Chile. Salida desde Iquique rumbo a la cordillera altiplánica para visitar la Laguna Roja a 3.700 msnm, junto a las lagunas Verde y Amarilla.',
      includes: ['Transporte', 'Guía Turístico', 'Alimentación (Almuerzo)', 'Protocolos Sanitarios'],
      excludes: ['Bebidas', 'Ticket de Ingreso (CLP 3.000)', 'Seguro de Viaje'],
      schedule: 'Salida 05:00 hrs · Retorno 21:00 hrs',
      destinations: ['Camiña', 'Laguna Roja', 'Laguna Amarilla', 'Laguna Verde', 'Petroglifos de Chillayza'],
      tickets: 'Ticket de Ingreso CLP 3.000'
    },
    {
      id: 'salar-huasco',
      title: 'Tour Parque Nacional Salar del Huasco',
      img: 'salar-huasco.jpeg',
      category: 'Naturaleza',
      price: 95000,
      familyDiscount: true,
      desc: 'Disfruta de los increíbles paisajes del Salar del Huasco, donde podrás observar su fauna y aves como flamencos.',
      fullDesc: 'Descubre el Parque Nacional Salar del Huasco, un humedal altoandino declarado Sitio Ramsar. Observa flamencos, taguas y otras aves.',
      includes: ['Transporte', 'Guía Turístico', 'Alimentación (Almuerzo)', 'Protocolos Sanitarios'],
      excludes: ['Bebidas', 'Ticket de Ingreso al Parque Nacional Salar del Huasco', 'Seguro de Viaje'],
      schedule: 'Salida 07:00 hrs · Retorno 21:00 hrs',
      destinations: ['Parque Nacional Salar del Huasco', 'Reserva Nacional del Tamarugal', 'Oasis de Pica'],
      tickets: 'Ticket de Ingreso al Parque Nacional'
    },
    {
      id: 'huatacondo',
      title: 'Tour Huatacondo',
      img: 'huatacondo.png',
      category: 'Aventura',
      price: 80000,
      familyDiscount: true,
      desc: 'Naturaleza, cultura andina y deportes de aventura. Aldea prehispánica, huellas de dinosaurios, cascadas petrificadas y dunas.',
      fullDesc: 'El tour al pueblo de Huatacondo es una experiencia donde podrás disfrutar de la naturaleza, la cultura de los pueblos andinos y de los deportes de aventura.',
      includes: ['Transporte', 'Guía Turístico', 'Alimentación (Desayuno y Almuerzo)', 'Equipo de Sandboard', 'Set Fotográfico', 'Protocolos Sanitarios'],
      excludes: ['Bebidas', 'Seguro de Viaje'],
      schedule: 'Salida 05:00 hrs · Retorno 20:00 hrs',
      destinations: ['Aldea Prehispánica', 'Huellas de Dinosaurios', 'Cascadas Petrificadas', 'Pueblo de Huatacondo', 'Dunas de Chele'],
      tickets: null
    },
    {
      id: 'termas-mamina',
      title: 'Tour Mamiña',
      img: 'termas-mamina.jpeg',
      category: 'Relax',
      price: 80000,
      familyDiscount: true,
      desc: 'Aguas termales curativas y barros chinos en un pueblo de raíces quechuas a 2.800 msnm.',
      fullDesc: 'Nos dirigiremos hacia el interior del altiplano, donde podremos apreciar cómo el imponente paisaje desértico da paso a hermosos escenarios andinos.',
      includes: ['Transporte', 'Guía Turístico', 'Alimentación (Almuerzo)', 'Protocolos Sanitarios'],
      excludes: ['Bebidas', 'Ticket de Ingreso Barros Chinos (CLP 5.000)', 'Ticket de Ingreso Termas Ipla (CLP 5.000)'],
      schedule: 'Salida 08:00 hrs · Retorno 18:30 hrs',
      destinations: ['Termas de Barros Chinos', 'Termas de Ipla', 'Recorrido por el Pueblo', 'Visita a Fábrica de Quesos'],
      tickets: 'Barros Chinos CLP 5.000 + Ipla CLP 5.000'
    },
    {
      id: 'salitreras',
      title: 'Tour Salitreras Humberstone & Santa Laura',
      img: 'salitreras.jpeg',
      category: 'Patrimonio',
      price: 50000,
      familyDiscount: true,
      desc: 'Visita guiada a las ex oficinas salitreras que te transportarán al siglo XIX.',
      fullDesc: 'Recorrido por las oficinas salitreras Humberstone y Santa Laura, Patrimonio de la Humanidad por la UNESCO.',
      includes: ['Transporte', 'Guía Turístico', 'Protocolos Sanitarios'],
      excludes: ['Ticket de Ingreso Salitreras (CLP 8.000)', 'Seguro de Viaje'],
      schedule: 'Salida 08:00 hrs · Retorno 14:00 hrs',
      destinations: ['Oficina Salitrera Humberstone', 'Oficina Salitrera Santa Laura'],
      tickets: 'Ticket de Ingreso CLP 8.000'
    },
    {
      id: 'pisagua',
      title: 'Tour Pisagua',
      img: 'pisagua.webp',
      category: 'Historia',
      price: 70000,
      familyDiscount: true,
      desc: 'En esta ocasión visitaremos Pisagua, lugar histórico basado en la Guerra del Pacífico del mundo salitrero.',
      fullDesc: 'Pisagua, el gran puerto salitrero. Visitaremos este lugar histórico basado en la Guerra del Pacífico y el mundo salitrero.',
      includes: ['Transporte', 'Guía Turístico', 'Alimentación (Almuerzo)', 'Protocolos Sanitarios'],
      excludes: ['Alimentación y Bebidas (A&B)', 'Seguro de Viaje'],
      schedule: 'Salida 07:30 hrs · Retorno 19:00 hrs',
      destinations: ['Batalla de Dolores', 'Recorrido Histórico', 'Monumento de Desembarcación', 'Cementerio de Pisagua'],
      tickets: null
    },
    {
      id: 'geoglifos',
      title: 'Tour Geoglifos de Pintados',
      img: 'geoglifos.jpeg',
      category: 'Cultura',
      price: 50000,
      familyDiscount: true,
      desc: 'Nos deleitaremos con el arte rupestre de nuestros antepasados, en la segunda concentración más grande del mundo de geoglifos.',
      fullDesc: 'Arte rupestre de nuestros antepasados, en la segunda concentración más grande del mundo de geoglifos.',
      includes: ['Transporte', 'Guía Turístico', 'Protocolos Sanitarios'],
      excludes: ['Alimentación y Bebidas', 'Ticket de Ingreso a Geoglifos de Pintados', 'Seguro de Viaje'],
      schedule: 'Salida 08:00 hrs · Retorno 14:00 hrs',
      destinations: ['Geoglifos de Pintados', 'Salar Crespo de Pintados', 'Centro de Educación Ambiental', 'Pozo Almonte'],
      tickets: 'Ticket de Ingreso Geoglifos'
    },
    {
      id: 'termas-chusmiza',
      title: 'Tour Termas Chusmiza & Gigante de Tarapacá',
      img: 'termas-chusmiza.jpeg',
      category: 'Relax',
      price: 80000,
      familyDiscount: true,
      desc: 'Aguas termales mineralizadas a 3.200 msnm y el geoglifo más grande del mundo. Incluye trekking con llamas.',
      fullDesc: 'Las termas se encuentran en la comuna de Huara a 3.200 msnm. Oasis termal con propiedades terapéuticas.',
      includes: ['Transporte', 'Guía Turístico', 'Alimentación (Almuerzo)', 'Protocolos Sanitarios'],
      excludes: ['Bebidas', 'Ticket de Ingreso Termas Chusmiza (CLP 6.000)', 'Seguro de Viaje'],
      schedule: 'Salida 07:00 hrs · Retorno 19:00 hrs',
      destinations: ['Mirador del Pueblo de Pachica', 'Pueblo de Chusmiza', 'Termas de Chusmiza', 'Gigante de Tarapacá', 'Trekking con Llamas'],
      tickets: 'Termas CLP 6.000'
    },
    {
      id: 'sandboard',
      title: 'Sandboard Cerro Dragón',
      img: 'sandboard.png',
      category: 'Deporte',
      price: 40000,
      familyDiscount: false,
      desc: 'Deporte de aventura en el Cerro Dragón, la duna de arena urbana más grande del mundo.',
      fullDesc: 'Se realiza en el Cerro Dragón, la duna de arena urbana más grande del mundo. Tarde entre las 17:00 y 19:30 hrs.',
      includes: ['Traslado al punto de inicio', 'Instructor', 'Equipo para la actividad', 'Equipo Fotográfico', 'Protocolos Sanitarios'],
      excludes: ['Seguro de Viaje'],
      schedule: 'Tarde a partir de las 15:00 hrs',
      destinations: ['Cerro Dragón'],
      tickets: null
    },
    {
      id: 'parapente',
      title: 'Parapente en Iquique',
      img: 'parapente.jpeg',
      category: 'Aventura',
      price: 60000,
      familyDiscount: false,
      desc: 'Vuela sobre el Cerro Dragón y la costa de Iquique. Impresionantes vistas desde el aire.',
      fullDesc: 'Actividad de aventura con vistas impresionantes de la costa y la ciudad desde el aire.',
      includes: ['Traslado al punto de inicio', 'Instructor', 'Equipo para la actividad', 'Equipo Fotográfico', 'Protocolos Sanitarios'],
      excludes: ['Seguro de Viaje'],
      schedule: 'Mañana a partir de las 09:00 hrs',
      destinations: ['Alto Hospicio'],
      tickets: null
    },
    {
      id: 'buceo',
      title: 'Buceo en Iquique',
      img: 'buceo.png',
      category: 'Deporte',
      price: 70000,
      familyDiscount: false,
      desc: 'Buceo en la costa de Iquique, condiciones ideales durante todo el año.',
      fullDesc: 'Buceo en Playa Blanca, condiciones ideales durante todo el año. Horarios AM o PM.',
      includes: ['Instructor', 'Equipo para la actividad', 'Equipo Fotográfico', 'Protocolos Sanitarios'],
      excludes: ['Transporte', 'Seguro de Viaje'],
      schedule: 'Mañana (AM) / Tarde (PM)',
      destinations: ['Playa Blanca'],
      tickets: null
    },
    {
      id: 'city-tour-arica',
      title: 'City Tour Arica',
      img: 'city-tour-arica.jpg',
      category: 'City Tour',
      price: 40000,
      familyDiscount: false,
      desc: 'Recorre los puntos más importantes de la ciudad de la Eterna Primavera: el imponente Morro, el Valle de Azapa y sus museos.',
      fullDesc: 'City tour por Arica. Lo recogemos en su domicilio y vamos al imponente Morro y el Museo de Armas, continuamos hacia el Valle de Azapa entrando por Cerro Sombrero. Incluye playas de La Lisera y El Laucho, Cuevas de Anzota y el casco antiguo de la ciudad.',
      includes: ['Transporte', 'Guía Turístico', 'Protocolos Sanitarios'],
      excludes: ['Alimentación y Bebidas (A&B)', 'Seguro de Viaje'],
      schedule: 'Salida 08:00 HRS. · Retorno 14:30 HRS.',
      destinations: ['Playas El Laucho', 'La Lisera', 'Cuevas de Anzota', 'Morro de Arica', 'Valle de Azapa', 'Cerro Sagrado', 'Museo San Miguel de Azapa', 'Casco Antiguo Centro Arica'],
      tickets: null,
      location: 'Arica'
    },
    {
      id: 'city-tour-tacna',
      title: 'City Tour Tacna',
      img: 'city-tour-tacna.jpg',
      category: 'City Tour',
      price: 45000,
      familyDiscount: false,
      desc: 'Conoce los lugares turísticos de la Ciudad Heroica de Tacna, iniciando en el centro histórico.',
      fullDesc: 'City tour hacia la ciudad heroica de Tacna. Se da inicio en el centro histórico: centro cívico, catedral, plaza de armas y arco del triunfo, sector Bolognesi (feria Caplina, feria Virreyna), parque de animales hecho con plantas y feria 28 de julio. Se requiere carnet de identidad o pasaporte, certificado de vacunas y declaración C19.',
      includes: ['Transporte', 'Guía Turístico', 'Protocolos Sanitarios'],
      excludes: ['Alimentación y Bebidas (A&B)', 'Seguro de Viaje'],
      schedule: 'Salida 08:00 HRS. · Retorno 18:30 HRS.',
      destinations: ['Paso Fronterizo Chacalluta', 'Centro Cívico', 'Catedral de Tacna', 'Plaza de Armas', 'Arco del Triunfo', 'Sector Bolognesi', 'Feria 28 de Julio'],
      tickets: null,
      location: 'Arica'
    },
    {
      id: 'valle-codpa',
      title: 'Tour Valle de Codpa',
      img: 'valle-codpa.jpg',
      category: 'Cultura',
      price: 70000,
      familyDiscount: false,
      desc: 'Circuito por la precordillera de Arica para disfrutar un día con la comunidad codpeña, su arqueología, comidas típicas y el gran vino Pintatani.',
      fullDesc: 'Circuito que pone en valor la precordillera. El principal objetivo es disfrutar un día con la comunidad codpeña que con su calidez y amabilidad invita a disfrutar de su naturaleza, arqueología, comidas típicas y el gran vino Pintatani.',
      includes: ['Transporte', 'Guía Turístico', 'Alimentación (Almuerzo)', 'Protocolos Sanitarios'],
      excludes: ['Bebidas', 'Seguro de Viaje'],
      schedule: 'Salida 08:00 HRS. · Retorno 19:30 HRS.',
      destinations: ['Ruta 5', 'Presencias Tutelares', 'Santuario de Apachetas', 'Ofragia', 'Viñedos Codpeños', 'Codpa'],
      tickets: null,
      location: 'Arica'
    },
    {
      id: 'lago-chungara',
      title: 'Tour Lago Chungará',
      img: 'lago-chungara.jpg',
      category: 'Naturaleza',
      price: 80000,
      familyDiscount: false,
      desc: 'Rodeado de una fauna única y localizado en altura, el Lago Chungará es uno de los principales atractivos del Parque Nacional Lauca.',
      fullDesc: 'El Lago Chungará, a 21,5 km² y en el interior del Parque Nacional Lauca, es ideal para la observación de la naturaleza por su biodiversidad y espectacular entorno montañoso. Se visita el Valle de Lluta, cactus candelabros, Pukara de Copaquilla, mirador de Putre y las lagunas Cotacotani.',
      includes: ['Transporte', 'Guía Turístico', 'Alimentación (Desayuno y Almuerzo)', 'Protocolos Sanitarios'],
      excludes: ['Bebidas', 'Seguro de Viaje'],
      schedule: 'Salida 06:00 HRS. · Retorno 19:30 HRS.',
      destinations: ['Valle de Lluta', 'Cactus Candelabros', 'Pukara Copaquilla', 'Mirador Putre', 'Parque Nacional Lauca', 'Lagunas Cotacotani', 'Lago Chungará'],
      tickets: null,
      location: 'Arica'
    },
    {
      id: 'oasis-pica-matilla',
      title: 'Tour Oasis de Pica & Matilla',
      img: 'oasis-pica-matilla.jpg',
      category: 'Full Day',
      price: 40000,
      familyDiscount: false,
      desc: 'Disfruta del Oasis de Pica con sus chacras y frutas exquisitas como el mango, la guayaba y el famoso limón de Pica. Conoce la historia del vino en Matilla y La Huayca.',
      fullDesc: 'Nos dirigimos al Oasis de Pica, lugar donde podremos disfrutar de sus chacras y probar sus exquisitas frutas como el mango, guayaba, naranjas y el famoso limón de Pica. Luego conoceremos la historia del vino del lugar pasando por Matilla y La Huayca para finalizar en el pueblo de La Tirana.',
      includes: ['Transporte', 'Guía Turístico', 'Alimentación (Almuerzo)', 'Protocolos Sanitarios'],
      excludes: ['Bebidas', 'Ticket de Ingreso Cocha Resbaladero (CLP 7.000)', 'Seguro de Viaje'],
      schedule: 'Salida 08:00 HRS. · Retorno 19:00 HRS.',
      destinations: ['Oasis de Pica', 'Recorrido por Chacras', 'Parque de los Dinosaurios', 'Pueblo de Matilla', 'La Huayca', 'Pueblo de La Tirana', 'Geoglifos de Pintados'],
      tickets: 'Cocha Resbaladero CLP 7.000',
      location: 'Iquique'
    },
    {
      id: 'laguna-cejar',
      title: 'Tour Laguna Cejar',
      img: 'laguna-cejar.jpg',
      category: 'Naturaleza',
      price: 60000,
      familyDiscount: false,
      desc: 'La Laguna Cejar, dentro del Salar de Atacama, destaca por su fuerte color calipso y sus aguas salinas que permiten flotar sin hundirse.',
      fullDesc: 'La Laguna Cejar se encuentra dentro del Salar de Atacama, muy cerca de San Pedro. Es reconocida por el fuerte color calipso del agua y está rodeada de sales de diversas formas. Sus aguas salinas permiten que los cuerpos floten y permanezcan sin hundirse.',
      includes: ['Transporte', 'Guía Turístico', 'Ticket de Ingreso a la Laguna Cejar', 'Protocolos Sanitarios'],
      excludes: ['Alimentación y Bebidas (A&B)', 'Seguro de Viaje'],
      schedule: 'Salida 13:30 HRS. · Retorno 19:30 HRS.',
      destinations: ['Ojos del Salar', 'Laguna Tebinquinche', 'Laguna Cejar', 'Laguna Piedra'],
      tickets: 'Ticket de Ingreso Laguna Cejar incluido',
      location: 'San Pedro de Atacama'
    },
    {
      id: 'valle-de-la-luna',
      title: 'Tour Valle de la Luna',
      img: 'valle-de-la-luna.jpg',
      category: 'Naturaleza',
      price: 50000,
      familyDiscount: false,
      desc: 'Disfruta de un atardecer de otro planeta visitando las Tres Marías, el Cañón, el Anfiteatro y el Mirador de Licarantay.',
      fullDesc: 'En nuestro tour al Valle de la Luna disfruta de un atardecer de otro planeta, visitando las Tres Marías, el Cañón, el Anfiteatro y el Mirador de Licarantay, en plena Cordillera de la Sal.',
      includes: ['Transporte', 'Guía Turístico', 'Protocolos Sanitarios'],
      excludes: ['Alimentación y Bebidas (A&B)', 'Ticket de Ingreso al Valle de la Luna', 'Seguro de Viaje'],
      schedule: 'Salida 15:30 HRS. · Retorno 20:30 HRS.',
      destinations: ['Tres Marías', 'Cañón', 'Anfiteatro', 'Mirador de Licarantay', 'Cordillera de la Sal'],
      tickets: 'Ticket de Ingreso Valle de la Luna',
      location: 'San Pedro de Atacama'
    },
    {
      id: 'termas-puritama',
      title: 'Tour Termas de Puritama',
      img: 'termas-puritama.jpg',
      category: 'Relax',
      price: 65000,
      familyDiscount: false,
      desc: 'Relájate en las tibias aguas que viajan desde la Cordillera de los Andes en una hermosa quebrada del desierto de Atacama.',
      fullDesc: 'Relájate en las tibias aguas que viajan desde la Cordillera de los Andes. Un baño en un entorno natural único, donde el desierto da paso a una verde y hermosa quebrada con aguas termales.',
      includes: ['Transporte', 'Guía Turístico', 'Ticket de Ingreso a las Termas de Puritama', 'Protocolos Sanitarios'],
      excludes: ['Alimentación y Bebidas (A&B)', 'Seguro de Viaje'],
      schedule: 'Mañana (AM) / Tarde (PM) · Consultar disponibilidad',
      destinations: ['Termas de Puritama', 'Pozo Termal'],
      tickets: 'Ticket de Ingreso Termas de Puritama incluido',
      location: 'San Pedro de Atacama'
    },
    {
      id: 'termas-purilibre',
      title: 'Tour Termas de Purilibre',
      img: 'termas-purilibre.jpg',
      category: 'Relax',
      price: 40000,
      familyDiscount: false,
      desc: 'Relájate en las tibias aguas de la quebrada, donde el desierto da paso a una verde y hermosa quebrada con aguas termales.',
      fullDesc: 'Relájate en las tibias aguas que viajan desde la Cordillera de los Andes. Un baño en un entorno natural único, donde el desierto da paso a una verde y hermosa quebrada con aguas termales, e incluye un trekking por la quebrada.',
      includes: ['Transporte', 'Guía Turístico', 'Protocolos Sanitarios'],
      excludes: ['Alimentación y Bebidas (A&B)', 'Ticket de Ingreso a las Termas de Purilibre', 'Seguro de Viaje'],
      schedule: 'Mañana (AM) / Tarde (PM) · Consultar disponibilidad',
      destinations: ['Termas de Puritama', 'Pozo Termal', 'Trekking'],
      tickets: 'Ticket de Ingreso Termas de Purilibre',
      location: 'San Pedro de Atacama'
    },
    {
      id: 'valle-del-arcoiris',
      title: 'Tour Valle del Arcoíris',
      img: 'valle-del-arcoiris.jpg',
      category: 'Naturaleza',
      price: 45000,
      familyDiscount: false,
      desc: 'Un lugar diferente donde los colores de la superficie revelan minerales, flujos de agua y el comportamiento de la tierra.',
      fullDesc: 'Un lugar donde parece que se ha conservado el tiempo desde hace millones de años. Hoy podemos ver colores que aparecen en la superficie dando a conocer minerales, flujos de agua y el comportamiento de la tierra. Ideal para los amantes de los colores, la fotografía y la geología.',
      includes: ['Transporte', 'Guía Turístico', 'Ticket de Ingreso al Valle del Arcoíris', 'Alimentación (Desayuno)', 'Protocolos Sanitarios'],
      excludes: ['Bebidas', 'Seguro de Viaje'],
      schedule: 'Salida 08:00 HRS. · Retorno 13:30 HRS.',
      destinations: ['Valle de Arcoíris', 'Río Salado', 'Cuenca Río Grande', 'Petroglifos de Yerbas Buenas'],
      tickets: 'Ticket de Ingreso Valle del Arcoíris incluido',
      location: 'San Pedro de Atacama'
    },
    {
      id: 'piedras-rojas',
      title: 'Tour Mirador Piedras Rojas',
      img: 'piedras-rojas.jpg',
      category: 'Naturaleza',
      price: 75000,
      familyDiscount: false,
      desc: 'Recorrido por el altiplano visitando lagunas y salares de colores deslumbrantes, con el Mirador de Piedras Rojas sobre los 4.300 msnm.',
      fullDesc: 'Un día de recorrido por el altiplano visitando lagunas y salares de colores deslumbrantes. El punto alto es el Mirador de Piedras Rojas con piedras volcánicas que resaltan el paisaje. Un viaje que comienza en los 2.500 msnm y llega sobre los 4.300 msnm, pasando por un santuario de flamencos.',
      includes: ['Transporte', 'Guía Turístico', 'Ticket de Ingreso al Mirador Piedras Rojas', 'Alimentación (Desayuno y Almuerzo)', 'Protocolos Sanitarios'],
      excludes: ['Bebidas', 'Seguro de Viaje'],
      schedule: 'Salida 07:30 HRS. · Retorno 14:30 HRS.',
      destinations: ['Bosque El Tambillo', 'Trópico de Capricornio', 'Quebrada de Nacimiento', 'Mirador de Piedras Rojas', 'Laguna Tuyajto'],
      tickets: 'Ticket de Ingreso Mirador Piedras Rojas incluido',
      location: 'San Pedro de Atacama'
    },
    {
      id: 'ruta-de-los-salares',
      title: 'Tour Ruta de los Salares',
      img: 'ruta-de-los-salares.jpg',
      category: 'Naturaleza',
      price: 55000,
      familyDiscount: false,
      desc: 'Recorre la impresionante ruta internacional CH-27 hacia el Paso Jama con vistas panorámicas únicas del altiplano chileno.',
      fullDesc: 'Recorrido por la ruta internacional Ruta CH-27 en dirección al Paso Jama. Durante el trayecto disfrutarás de vistas panorámicas del altiplano chileno: mirador de los volcanes Licancabur y Juriques, bofedal Quepiaco, Monjes de la Pacana, Salar de Quisquiro, laguna de los flamencos, aguas calientes (Laguna Negra), mirador del Salar de Tara, Laguna Diamante y mirador de la Laguna Blanca y Verde.',
      includes: ['Transporte', 'Guía Turístico', 'Alimentación (Desayuno y Almuerzo)', 'Protocolos Sanitarios'],
      excludes: ['Bebidas', 'Seguro de Viaje'],
      schedule: 'Salida 08:00 HRS. · Retorno 15:00 HRS.',
      destinations: ['Mirador Licancabur y Juriques', 'Bofedal Quepiaco', 'Monjes de la Pacana', 'Salar de Quisquiro', 'Laguna de los Flamencos', 'Aguas Calientes (Laguna Negra)', 'Mirador Salar de Tara', 'Laguna Diamante', 'Mirador Laguna Blanca y Verde'],
      tickets: null,
      location: 'San Pedro de Atacama'
    },
    {
      id: 'tour-astronomico',
      title: 'Tour Astronómico',
      img: 'tour-astronomico.jpg',
      category: 'Cultura',
      price: 35000,
      familyDiscount: false,
      desc: 'Observación del cielo en el Desierto de Atacama, uno de los mejores lugares del mundo para la astronomía.',
      fullDesc: 'Observación del cielo profundo con telescopios de alta gama, tanto computarizados como manuales. Podrás observar planetas, cúmulos estelares, galaxias y estrellas en un cielo libre de contaminación lumínica. Además, mediante un puntero láser astronómico, se realizará una guía en vivo para identificar las constelaciones del hemisferio sur.',
      includes: ['Transporte', 'Guía Turístico', 'Equipo Fotográfico', 'Fogata', 'Protocolos Sanitarios'],
      excludes: ['Alimentación y Bebidas (A&B)', 'Seguro de Viaje'],
      schedule: 'Noche · A partir de las 21:00 HRS.',
      destinations: ['Observación del Cielo Profundo', 'Constelaciones del Hemisferio Sur'],
      tickets: null,
      location: 'San Pedro de Atacama'
    },
    {
      id: 'vallecito',
      title: 'Tour Vallecito',
      img: 'vallecito.jpg',
      category: 'Aventura',
      price: 35000,
      familyDiscount: false,
      desc: 'Ruta hacia el bus abandonado (Bus Mágico) cerca del Valle de la Luna, en el Llano de la Paciencia.',
      fullDesc: 'Ruta hacia el bus abandonado cerca del Valle de la Luna, conocido como el Bus Mágico. Nos dirigimos hacia el camino que va a las lagunas escondidas en el Llano de la Paciencia, cruzando la Cordillera de la Sal y La Gran Duna.',
      includes: ['Transporte', 'Guía Turístico', 'Alimentación (Snack)', 'Protocolos Sanitarios'],
      excludes: ['Bebidas', 'Seguro de Viaje'],
      schedule: 'Salida 15:30 HRS. · Retorno 19:30 HRS.',
      destinations: ['Llano de la Paciencia', 'Valle de la Micro', 'Cordillera de la Sal', 'La Gran Duna'],
      tickets: null,
      location: 'San Pedro de Atacama'
    },
    {
      id: 'laguna-baltinache',
      title: 'Tour Laguna Escondida de Baltinache',
      img: 'laguna-baltinache.jpg',
      category: 'Naturaleza',
      price: 45000,
      familyDiscount: false,
      desc: 'Conjunto de siete lagunas de alta salinidad con intensos tonos turquesa, que permiten una experiencia única de flotación.',
      fullDesc: 'Las Lagunas Escondidas de Baltinache son un conjunto de siete lagunas de alta salinidad en pleno desierto de Atacama. El contraste entre el blanco de la sal y el azul del agua crea una vista casi irreal. Destacan por sus intensos tonos turquesa y su alta concentración de sal, que permite flotar en algunas de ellas.',
      includes: ['Transporte', 'Guía Turístico', 'Ticket de Ingreso a las Lagunas', 'Alimentación (Snack)', 'Protocolos Sanitarios'],
      excludes: ['Bebidas', 'Seguro de Viaje'],
      schedule: 'Mañana (AM) / Tarde (PM) · Consultar disponibilidad',
      destinations: ['Lagunas Escondidas de Baltinache'],
      tickets: 'Ticket de Ingreso a las Lagunas incluido',
      location: 'San Pedro de Atacama'
    },
    {
      id: 'geiser-del-tatio',
      title: 'Tour Géiser del Tatio',
      img: 'geiser-del-tatio.jpg',
      category: 'Naturaleza',
      price: 55000,
      familyDiscount: false,
      desc: 'El campo geotérmico más alto del mundo (4.200 msnm), con impresionantes fumarolas de vapor en las primeras horas de la mañana.',
      fullDesc: 'El Géiser del Tatio es el campo geotérmico más alto del mundo (4.200 msnm), a 89 km de San Pedro. Presenta una impresionante actividad de fumarolas de vapor producidas por las altas temperaturas de sus acuosos cráteres, rodeado de cerros que alcanzan los 5.900 metros.',
      includes: ['Transporte', 'Guía Turístico', 'Ticket de Ingreso al Campo Geotérmico', 'Alimentación (Desayuno)', 'Protocolos Sanitarios'],
      excludes: ['Seguro de Viaje'],
      schedule: 'Salida 04:30 HRS. · Retorno 12:00 HRS.',
      destinations: ['Campo Geotérmico', 'Géiseres', 'Río Putana', 'Pueblo de Machuca', 'Mirador Valle de los Cactus'],
      tickets: 'Ticket de Ingreso al Campo Geotérmico incluido · No apto para menores de 12 años y embarazadas',
      location: 'San Pedro de Atacama'
    },
    {
      id: 'city-tour-santiago',
      title: 'City Tour Santiago',
      img: 'city-tour-santiago.jpg',
      category: 'City Tour',
      price: 25000,
      familyDiscount: false,
      desc: 'Recorrido a pie por el centro histórico de la capital chilena: Plaza de Armas, Catedral Metropolitana, Palacio de La Moneda y más.',
      fullDesc: 'Descubre las principales atracciones turísticas de Santiago en un recorrido a pie por el centro histórico. Lugares emblemáticos como Plaza de Armas, Catedral Metropolitana, Museo Histórico Nacional, Palacio de La Moneda, Barrio París-Londres, Iglesia San Francisco y Cerro Santa Lucía, con información cultural y curiosidades locales.',
      includes: ['Guía Turístico', 'Completo Italiano', 'Bebida o Mote con Huesillo'],
      excludes: ['Seguro de Viaje'],
      schedule: 'Mañana · A partir de las 08:30 HRS. (Lunes a Viernes)',
      destinations: ['Plaza de Armas', 'Catedral Metropolitana', 'Museo Histórico Nacional', 'Palacio de La Moneda', 'Barrio París-Londres', 'Iglesia San Francisco', 'Cerro Santa Lucía'],
      tickets: null,
      location: 'Santiago'
    },
    {
      id: 'vina-valparaiso',
      title: 'Viña del Mar & Valparaíso + Paseo en Barco',
      img: 'vina-valparaiso.jpg',
      category: 'City Tour',
      price: 43000,
      familyDiscount: false,
      desc: 'Explora Valparaíso, Patrimonio de la Humanidad, con un paseo en barco por el Pacífico, y descubre Viña del Mar, la Ciudad Jardín.',
      fullDesc: 'Explora Valparaíso, Patrimonio de la Humanidad por la UNESCO, con su rica cultura, arte urbano y arquitectura histórica. Disfruta de un paseo en barco por el océano Pacífico. Luego descubre Viña del Mar, la encantadora Ciudad Jardín, con playas paradisíacas y ambiente vacacional. Incluye leones marinos, reloj de flores y la visita al Moai.',
      includes: ['Transporte', 'Guía Turístico', 'Seguro de Viaje', 'Entrada para Viaje en Barco'],
      excludes: ['Alimentación'],
      schedule: 'Salida 06:00 HRS. · Retorno 17:00 HRS.',
      destinations: ['Mercado de Vinos', 'Cerro Alegre', 'Cerro Concepción', 'Plaza Sotomayor', 'Paseo en Barco', 'Leones Marinos', 'Reloj de Flores', 'Playa en Viña del Mar', 'Visita al Moai'],
      tickets: 'Entrada Viaje en Barco incluida',
      location: 'Santiago'
    },
    {
      id: 'isla-negra-algarrobo',
      title: 'Isla Negra, Algarrobo + Viñedo',
      img: 'isla-negra-algarrobo.jpg',
      category: 'Full Day',
      price: 74000,
      familyDiscount: false,
      desc: 'Visita una bodega con degustación de vinos, la Casa de Pablo Neruda en Isla Negra y el pueblo costero de Algarrobo.',
      fullDesc: 'Un tour completo con salida desde Santiago. Visita una reconocida bodega con degustación de vinos (Emiliana o Undurraga). Luego, Isla Negra, hogar de la famosa Casa de Pablo Neruda con vistas al océano. Concluimos en Algarrobo, conocido por la piscina más grande del mundo (solo fotos y videos).',
      includes: ['Transporte', 'Guía Turístico', 'Seguro de Viaje', 'Entrada Vinícola'],
      excludes: ['Ticket de Ingreso Museo Pablo Neruda'],
      schedule: 'Salida 07:30 HRS. · Retorno 18:30 HRS.',
      destinations: ['Tour Vinícola (Emiliana o Undurraga)', 'Isla Negra', 'Museo Pablo Neruda', 'Playa de Algarrobo', 'Piscina Grande'],
      tickets: 'Entrada Vinícola incluida · No disponible Lunes',
      location: 'Santiago'
    },
    {
      id: 'parque-safari',
      title: 'Parque Safari: Herbívoros + Felinos',
      img: 'parque-safari.jpg',
      category: 'Aventura',
      price: 74000,
      familyDiscount: false,
      desc: 'Experiencia de vida silvestre cerca de Santiago con animales rescatados en áreas abiertas. Imperdible para familias.',
      fullDesc: 'El Parque Safari, ubicado cerca de Santiago, ofrece una de las experiencias de vida silvestre más emocionantes. Alberga animales rescatados que viven en áreas abiertas, permitiendo una interacción segura y educativa con diversas especies.',
      includes: ['Transporte', 'Guía Turístico', 'Seguro de Viaje', 'Acceso a 3 Áreas del Parque (Entrada General, Grandes Felinos y Herbívoros)'],
      excludes: ['Alimentación'],
      schedule: 'Mañana (AM) / Tarde (PM) · Consultar disponibilidad',
      destinations: ['Parque Safari'],
      tickets: 'Acceso a 3 áreas del parque incluido',
      location: 'Santiago'
    },
    {
      id: 'pacifico-mar-tierra',
      title: 'Pacífico Mar y Tierra: Cabalgata y Paseo en Barco',
      img: 'pacifico-mar-tierra.jpg',
      category: 'Aventura',
      price: 113000,
      familyDiscount: false,
      desc: 'Explora la costa chilena con un paseo en barco por Papudo y una cabalgata por el litoral del Pacífico.',
      fullDesc: 'Explora lo mejor de la costa chilena en un día de aventura. Comenzamos con un paseo en barco por Papudo, donde la biodiversidad marina es la protagonista. Luego disfrutamos de una cabalgata por la costa del Pacífico, ideal para observar paisajes únicos del litoral chileno.',
      includes: ['Transporte', 'Guía Turístico', 'Seguro de Viaje', 'Paseo en Caballo', 'Viaje en Barco', 'Regalo Especial'],
      excludes: ['Alimentación'],
      schedule: 'Salida 08:00 HRS. · Retorno 19:00 HRS. · Solo fin de semana',
      destinations: ['Viaje en Barco por Papudo', 'Cabalgata en la Costa del Pacífico'],
      tickets: null,
      location: 'Santiago'
    },
    {
      id: 'panoramico-sunset',
      title: 'Panorámico Sunset',
      img: 'panoramico-sunset.jpg',
      category: 'Aventura',
      price: 78000,
      familyDiscount: false,
      desc: 'Puesta de sol en la nieve con vino y chocolate caliente, visitando El Colorado y Farellones.',
      fullDesc: 'Una aventura única en la Cordillera de los Andes: puesta de sol en la nieve con vino y chocolate caliente. Incluye visita a la estación de esquí El Colorado, tiempo para disfrutar de la nieve, parada para almorzar y al atardecer, Farellones para contemplar la puesta de sol sobre las montañas.',
      includes: ['Transporte', 'Guía Turístico', 'Seguro de Viaje', 'Degustación de Vinos y Chocolate Caliente', 'Mesa de Picnic'],
      excludes: ['Alimentación', 'Ticket de Ingreso Teleférico Panorámico'],
      schedule: 'Salida 09:00 HRS. · Retorno 20:00 HRS.',
      destinations: ['El Colorado', 'Parada en la Montaña', 'Farellones', 'Puesta de Sol con Degustación de Vino y Chocolate Caliente'],
      tickets: 'Teleférico Panorámico no incluido',
      location: 'Santiago'
    },
    {
      id: 'andes-panoramico',
      title: 'Andes Panorámico',
      img: 'andes-panoramico.jpg',
      category: 'Aventura',
      price: 43000,
      familyDiscount: false,
      desc: 'Día en la Cordillera de los Andes por las curvas de la Sierra, con vistas panorámicas de Valle Nevado, El Colorado y Farellones.',
      fullDesc: 'Un día en la Cordillera de los Andes explorando algunos de los paisajes más impresionantes de la región. Viajamos por las famosas curvas de la Sierra y visitamos las zonas bajas de las estaciones de esquí de Valle Nevado, El Colorado y Farellones, con paradas para fotos y disfrutar de la nieve.',
      includes: ['Transporte', 'Guía Turístico', 'Seguro de Viaje'],
      excludes: ['Alimentación', 'Ticket de Ingreso Telesilla Panorámico'],
      schedule: 'Mañana · A partir de las 05:00 HRS.',
      destinations: ['Valle Nevado', 'Curva de Nieve', 'El Colorado', 'Pueblo de Farellones'],
      tickets: 'Telesilla Panorámico no incluido',
      location: 'Santiago'
    },
    {
      id: 'valle-nevado',
      title: 'Valle Nevado',
      img: 'valle-nevado.jpg',
      category: 'Deporte',
      price: 39000,
      familyDiscount: false,
      desc: 'Una de las principales estaciones de esquí de Chile, a 46 km de Santiago, para principiantes y expertos.',
      fullDesc: 'Valle Nevado es una de las principales estaciones de esquí de Chile, a 46 km de Santiago. Reconocida internacionalmente como estación de esquí profesional, ofrece infraestructura de alta calidad y una experiencia increíble tanto para principiantes como para esquiadores experimentados.',
      includes: ['Transporte', 'Guía Turístico', 'Seguro de Viaje'],
      excludes: ['Alimentación', 'Ticket de Ingreso Parque'],
      schedule: 'Mañana · A partir de las 05:00 HRS.',
      destinations: ['Valle Nevado'],
      tickets: 'Ticket de Ingreso al Parque no incluido',
      location: 'Santiago'
    },
    {
      id: 'el-colorado',
      title: 'El Colorado',
      img: 'el-colorado.jpg',
      category: 'Deporte',
      price: 39000,
      familyDiscount: false,
      desc: 'La emoción de esquiar en 112 pistas y explorar 1.100 hectáreas de nieve en una de las mejores estaciones de Sudamérica.',
      fullDesc: 'Descubre la emoción de esquiar en 112 pistas y explorar 1.100 hectáreas de nieve en El Colorado, una de las mejores estaciones de esquí de Sudamérica. Infraestructura impecable y paisajes impresionantes para esquiadores de todos los niveles.',
      includes: ['Transporte', 'Guía Turístico', 'Seguro de Viaje'],
      excludes: ['Alimentación', 'Ticket de Ingreso Parque'],
      schedule: 'Mañana · A partir de las 05:00 HRS.',
      destinations: ['El Colorado'],
      tickets: 'Ticket de Ingreso al Parque no incluido',
      location: 'Santiago'
    },
    {
      id: 'parque-farellones',
      title: 'Parque Farellones',
      img: 'parque-farellones.jpg',
      category: 'Deporte',
      price: 39000,
      familyDiscount: false,
      desc: 'Un parque de atracciones en la nieve con esquí alpino, snowboard y actividades para toda la familia.',
      fullDesc: 'El Parque Farellones ofrece una gran variedad de actividades para todas las edades, convirtiéndose en un parque de atracciones en la nieve. Desde esquí alpino hasta snowboard, pasando por actividades para familias y niños.',
      includes: ['Transporte', 'Guía Turístico', 'Seguro de Viaje'],
      excludes: ['Alimentación', 'Ticket de Ingreso Parque'],
      schedule: 'Mañana · A partir de las 05:00 HRS.',
      destinations: ['Parque Farellones'],
      tickets: 'Ticket de Ingreso al Parque no incluido',
      location: 'Santiago'
    },
    {
      id: 'portillo-laguna-inca',
      title: 'Portillo y Laguna del Inca',
      img: 'portillo-laguna-inca.jpg',
      category: 'Naturaleza',
      price: 45000,
      familyDiscount: false,
      desc: 'El lugar perfecto para conectar con la nieve, recorriendo 149 km hasta la famosa Laguna del Inca a 3.000 msnm.',
      fullDesc: 'En el corazón de la Cordillera de los Andes, en la frontera con Argentina, se encuentra el lugar perfecto para conectar con la nieve. El sendero recorre 149 km ascendiendo hasta los 3.000 msnm hasta llegar a la famosa Laguna del Inca. Incluye Salto del Soldado, miradores, señal de frontera y picnic con llamas.',
      includes: ['Transporte', 'Guía Turístico', 'Seguro de Viaje', 'Picnic'],
      excludes: ['Alimentación', 'Ticket de Ingreso Parque'],
      schedule: 'Mañana · A partir de las 05:00 HRS.',
      destinations: ['Salto del Soldado', 'Mirador de los Caracoles', 'Mirador de la Laguna del Inca', 'Señal de Frontera', 'Picnic con Llamas'],
      tickets: 'Ticket de Ingreso al Parque no incluido',
      location: 'Santiago'
    },
    {
      id: 'cajon-maipo-embalse-yeso',
      title: 'Cajón del Maipo: Embalse El Yeso',
      img: 'cajon-maipo-embalse-yeso.jpg',
      category: 'Naturaleza',
      price: 54000,
      familyDiscount: false,
      desc: 'El principal embalse de agua de Santiago, con paisajes dignos de Instagram y un famoso picnic en plena naturaleza.',
      fullDesc: 'En la región del Cajón del Maipo, a 100 km de Santiago, el Embalse El Yeso es el principal embalse de agua de la ciudad y uno de los lugares más impresionantes para fotos. El recorrido incluye una excursión de ida y vuelta de 2 horas (dificultad media), mirador El Yeso, Casa de Chocolate y picnic.',
      includes: ['Transporte', 'Guía Turístico', 'Seguro de Viaje', 'Picnic'],
      excludes: ['Alimentación'],
      schedule: 'Mañana · A partir de las 05:00 HRS.',
      destinations: ['Embalse El Yeso', 'Mirador El Yeso', 'Casa de Chocolate', 'Picnic'],
      tickets: null,
      location: 'Santiago'
    },
    {
      id: 'cajon-maipo-termas-colina',
      title: 'Cajón del Maipo: Termas de Colina + Embalse El Yeso',
      img: 'cajon-maipo-termas-colina.jpg',
      category: 'Relax',
      price: 75000,
      familyDiscount: false,
      desc: 'Relajación, naturaleza y paisajes que despiertan emociones en el Cajón del Maipo, combinando el Embalse El Yeso con las Termas de Colina.',
      fullDesc: 'Descubre la magia del Cajón del Maipo en una experiencia que combina relajación, naturaleza y paisajes. Incluye pueblo San José de Maipo, Embalse El Yeso (excursión de 2 horas, dificultad media), mirador El Yeso, Termas Valle de Colina, Casa de Chocolate y picnic.',
      includes: ['Transporte', 'Guía Turístico', 'Seguro de Viaje', 'Ticket de Ingreso Termas', 'Picnic'],
      excludes: ['Alimentación'],
      schedule: 'Mañana · A partir de las 05:00 HRS.',
      destinations: ['Pueblo San José de Maipo', 'Embalse El Yeso', 'Mirador El Yeso', 'Termas Valle de Colina', 'Casa de Chocolate', 'Picnic'],
      tickets: 'Ticket de Ingreso Termas incluido',
      location: 'Santiago'
    },
    {
      id: 'aventura-cuatrimoto',
      title: 'Aventura en Cuatrimoto',
      img: 'aventura-cuatrimoto.jpg',
      category: 'Aventura',
      price: 152000,
      familyDiscount: false,
      desc: 'Aventura en cuatrimoto por la Cordillera de los Andes, en el Cajón del Maipo, con picnic y Casa de Chocolate.',
      fullDesc: 'Una aventura en cuatrimoto en el corazón de la Cordillera de los Andes, rodeado de los paisajes del Cajón del Maipo. Momentos para contemplar lugares encantadores como Las Melosas, Velo de la Novia y Baños Morales. Incluye picnic al aire libre y Casa del Chocolate.',
      includes: ['Transporte', 'Guía Turístico', 'Seguro de Viaje', 'Cuatrimoto (Casco y Guantes)', 'Picnic'],
      excludes: ['Alimentación'],
      schedule: 'Mañana · A partir de las 08:00 HRS.',
      destinations: ['Cajón del Maipo', 'Las Melosas', 'Cascada Velo de la Novia', 'Casa de Chocolate', 'Baños Morales'],
      tickets: 'Requiere licencia de conducir categoría B',
      location: 'Santiago'
    },
    {
      id: 'atardecer-andes-dj',
      title: 'Atardecer en los Andes: Experiencia con DJ',
      img: 'atardecer-andes-dj.jpg',
      category: 'Aventura',
      price: 184000,
      familyDiscount: false,
      desc: 'Día completo en la cordillera con nieve, paisajes increíbles y una puesta de sol inolvidable con DJ en las montañas.',
      fullDesc: 'Imagina pasar un día en la Cordillera de los Andes disfrutando de la nieve y una puesta de sol inolvidable con un DJ. Disfruta de la nieve en El Colorado, vive momentos únicos en Farellones y culmina el día en Taringuita con música y la puesta de sol. Incluye silla panorámica y ticket de ingreso a la fiesta.',
      includes: ['Transporte', 'Guía Turístico', 'Silla Panorámica', 'Ticket de Ingreso a la Fiesta'],
      excludes: ['Alimentación'],
      schedule: 'Salida 08:00 HRS. · Retorno 21:00 HRS.',
      destinations: ['El Colorado', 'Farellones', 'Sunset Party con DJ'],
      tickets: 'Fiesta: Junio y Septiembre martes · Julio y Agosto martes y jueves',
      location: 'Santiago'
    },
    {
      id: 'spa-el-morado',
      title: 'Spa El Morado',
      img: 'spa-el-morado.jpg',
      category: 'Relax',
      price: 120000,
      familyDiscount: false,
      desc: 'Piscinas termales en plena cordillera, con una espectacular puesta de sol y una auténtica parrillada chilena.',
      fullDesc: 'En el corazón de la Cordillera de los Andes, rodeado de montañas y volcanes, relájate en piscinas termales del Spa El Morado. Disfruta de una puesta de sol espectacular acompañada de una auténtica parrillada chilena, con trago de bienvenida y picnic al atardecer.',
      includes: ['Transporte', 'Guía Turístico', 'Seguro de Viaje', 'Piscinas Termales', 'Trago de Bienvenida', 'Churrasco Chileno', 'Picnic al Atardecer'],
      excludes: ['Alimentación'],
      schedule: 'Mañana · A partir de las 10:00 HRS.',
      destinations: ['Cajón del Maipo', 'Casa de Chocolate', 'Spa El Morado (Piscinas Termales)'],
      tickets: 'Piscinas termales incluidas',
      location: 'Santiago'
    },
    {
      id: 'vina-santa-rita',
      title: 'Viña Santa Rita: Jardines Encantadores',
      img: 'vina-santa-rita.jpg',
      category: 'Wine',
      price: 74000,
      familyDiscount: false,
      desc: 'Una de las bodegas más prestigiosas del Valle del Maipo, con jardines, museo andino y degustación de vinos reserva.',
      fullDesc: 'Descubre el encanto de Viña Santa Rita, una de las bodegas más prestigiosas del Valle del Maipo. Visita el Parque Santa Rita, jardines de variedades, viñedos y bodegas. Disfruta de dos vinos reserva y un gran reserva, con copa personalizada de regalo y acceso al Museo Andino.',
      includes: ['Transporte', 'Guía Turístico', 'Seguro de Viaje', 'Ticket de Ingreso a la Bodega', 'Degustación de Vinos', 'Copa de Vino Personalizada'],
      excludes: ['Alimentación'],
      schedule: 'Mañana · A partir de las 08:00 HRS.',
      destinations: ['Jardines de la Bodega y Viñedos', 'Parque Santa Rita', 'Cuatro Estaciones', 'Museo Andino', 'Degustación de Vinos'],
      tickets: 'Degustación de Vinos incluida',
      location: 'Santiago'
    },
    {
      id: 'undurraga',
      title: 'Undurraga: Tour Tradicional',
      img: 'undurraga.jpg',
      category: 'Wine',
      price: 68000,
      familyDiscount: false,
      desc: 'Una de las bodegas más antiguas de Chile, con jardines, colección de carruajes, museo mapuche y cata exclusiva.',
      fullDesc: 'Descubre la encantadora Undurraga y los hermosos jardines de una de las bodegas más antiguas de Chile. Disfruta de los mejores vinos con una cata exclusiva mientras aprendes sobre el proceso de producción y la historia y tradiciones de la bodega.',
      includes: ['Transporte', 'Guía Turístico', 'Seguro de Viaje', 'Ticket de Ingreso a la Bodega', 'Visita Guiada', 'Degustación de Vinos', 'Copa de Vino Personalizada'],
      excludes: ['Alimentación'],
      schedule: 'Mañana (AM) / Tarde (PM) · Consultar disponibilidad',
      destinations: ['Visita a la Bodega', 'Jardines de la Bodega y Viñedos', 'Colección de Carruajes', 'Museo Mapuche'],
      tickets: 'Degustación de Vinos incluida',
      location: 'Santiago'
    },
    {
      id: 'vina-alyan-sunset',
      title: 'Viña Sunset Alyan',
      img: 'vina-alyan-sunset.jpg',
      category: 'Wine',
      price: 112000,
      familyDiscount: false,
      desc: 'Experiencia de atardecer en la Bodega Alyan, con cata exclusiva, snack y cena. Solo mayores de 18 años.',
      fullDesc: 'Disfruta de los mejores vinos con una cata exclusiva en la encantadora Bodega Alyan. Recorre la bodega, jardines y viñedos, y los barriles instagrameables de la bodega. Incluye snack y cena.',
      includes: ['Transporte', 'Guía Turístico', 'Seguro de Viaje', 'Ticket de Ingreso a la Bodega', 'Visita Guiada', 'Degustación de Vinos', 'Snack', 'Cena'],
      excludes: [],
      schedule: 'Tarde · A partir de las 13:30 HRS.',
      destinations: ['Visita a la Bodega', 'Jardines de la Bodega y Viñedos', 'Barriles Instagrameables'],
      tickets: 'Solo mayores de 18 años',
      location: 'Santiago'
    },
    {
      id: 'vina-alyan',
      title: 'Viña Alyan',
      img: 'vina-alyan.jpg',
      category: 'Wine',
      price: 47000,
      familyDiscount: false,
      desc: 'Bodega boutique familiar en el Valle del Maipo, famosa por sus vinos premium y experiencias exclusivas.',
      fullDesc: 'Bodega Alyan es una reconocida bodega boutique familiar en el Valle del Maipo, famosa por sus vinos premium y experiencias exclusivas. Con transporte seguro, cómodo y puntual, tu visita será libre de estrés. Ticket de ingreso a la bodega no incluido.',
      includes: ['Transporte', 'Seguro de Viaje'],
      excludes: ['Ticket de Ingreso a la Bodega'],
      schedule: 'Tarde · A partir de las 13:30 HRS.',
      destinations: ['Bodega Alyan'],
      tickets: 'Solo mayores de 18 años',
      location: 'Santiago'
    },
    {
      id: 'cousino-macul-bahai',
      title: 'Cousiño Macul & Templo Bahá\'í: Tradicional',
      img: 'cousino-macul-bahai.jpg',
      category: 'Wine',
      price: 74000,
      familyDiscount: false,
      desc: 'Experiencia entre viñedos centenarios, tour por la bodega y visita al imponente Templo Bahá\'í.',
      fullDesc: 'Experiencia panorámica entre viñedos centenarios, con la rica historia del vino chileno. Durante la visita disfrutarás del tradicional tour por la bodega Cousiño Macul. Para culminar, visitaremos el imponente Templo Bahá\'í, una de las obras arquitectónicas más impresionantes de Santiago.',
      includes: ['Transporte', 'Guía Turístico', 'Seguro de Viaje', 'Ticket de Ingreso a la Bodega', 'Visita Guiada', 'Degustación de Vinos', 'Copa de Vino Personalizada'],
      excludes: ['Alimentación'],
      schedule: 'Mañana (AM) / Tarde (PM) · Consultar disponibilidad',
      destinations: ['Visita a la Bodega', 'Visita al Templo Bahá\'í'],
      tickets: 'Solo mayores de 14 años',
      location: 'Santiago'
    },
    {
      id: 'cousino-macul-bahai-experiencia',
      title: 'Cousiño Macul & Templo Bahá\'í: Experiencia',
      img: 'cousino-macul-bahai-experiencia.jpg',
      category: 'Wine',
      price: 81000,
      familyDiscount: false,
      desc: 'Experiencia exclusiva en bici por la bodega, cata premium con sommelier y visita al Templo Bahá\'í.',
      fullDesc: 'Recorrerás en bicicleta parte de la bodega Cousiño Macul entre viñedos y paisajes encantadores, conocerás su historia en el tour tradicional y disfrutarás de una cata premium con sommelier maridada con quesos y frutos secos. El tour continúa hasta el imponente Templo Bahá\'í.',
      includes: ['Transporte', 'Guía Turístico', 'Seguro de Viaje', 'Ticket de Ingreso a la Bodega', 'Recorrido en Bicicleta', 'Degustación de Vinos Premium con Sommelier y Maridaje', 'Copa de Vino Personalizada'],
      excludes: ['Alimentación'],
      schedule: 'Mañana (AM) / Tarde (PM) · Consultar disponibilidad',
      destinations: ['Visita a la Bodega', 'Recorrido en Bicicleta', 'Ruta Tradicional', 'Visita al Templo Bahá\'í'],
      tickets: 'Solo mayores de 14 años',
      location: 'Santiago'
    },
    {
      id: 'concha-y-toro-premium',
      title: 'Concha y Toro: Experiencia Premium',
      img: 'concha-y-toro-premium.jpg',
      category: 'Wine',
      price: 71000,
      familyDiscount: false,
      desc: 'Enoturismo que combina tradición, innovación, historia y cultura en la bodega más famosa de Chile.',
      fullDesc: 'Experiencia única de enoturismo en Concha y Toro. Visita el Parque Centenario y la Casa Don Melchor, la bodega Guarda del Alto, los viñedos de Pirque, el Jardín de Variedades, la Plaza Concha y Toro, y finaliza en la tienda Centro del Vino.',
      includes: ['Transporte', 'Guía Turístico', 'Seguro de Viaje', 'Degustación de Vinos Premium con Sommelier y Maridaje', 'Copa de Vino Personalizada'],
      excludes: ['Alimentación'],
      schedule: 'Mañana (AM) / Tarde (PM) · Consultar disponibilidad',
      destinations: ['Visita a la Bodega Concha y Toro', 'Visita Viñedos', 'Parque y Jardines de la Bodega', 'Bodega Casillero del Diablo', 'Tienda de la Bodega'],
      tickets: 'Degustación de Vinos incluida',
      location: 'Santiago'
    },
    {
      id: 'concha-y-toro-marques',
      title: 'Concha y Toro: Experiencia Marqués',
      img: 'concha-y-toro-marques.jpg',
      category: 'Wine',
      price: 111000,
      familyDiscount: false,
      desc: 'Experiencia exclusiva en el centro de vinos Concha y Toro con la línea Marqués de Casa Concha y cata de seis vinos.',
      fullDesc: 'Experiencia exclusiva en el centro de vinos Concha y Toro con la línea Marqués de Casa Concha. El recorrido comienza con el nuevo circuito inmersivo del Centro de Vinos y finaliza con una cata guiada de seis vinos Marqués de Casa Concha, incluyendo las ediciones Azul y Oro, maridados con quesos selectos.',
      includes: ['Transporte', 'Guía Turístico', 'Seguro de Viaje', 'Degustación de Vinos Premium con Sommelier y Maridaje', 'Tabla de Quesos', 'Copa de Vino Personalizada'],
      excludes: ['Alimentación'],
      schedule: 'Mañana (AM) / Tarde (PM) · Consultar disponibilidad',
      destinations: ['Visita a la Bodega Concha y Toro', 'Parque Concha y Toro', 'Casa Don Melchor', 'Bodega Casillero del Diablo', 'Bodega Guarda del Alto', 'Mirador Concha y Toro'],
      tickets: 'Cata de 6 vinos incluida',
      location: 'Santiago'
    },
    {
      id: 'concha-y-toro-nocturna',
      title: 'Concha y Toro Nocturna',
      img: 'concha-y-toro-nocturna.jpg',
      category: 'Wine',
      price: 159000,
      familyDiscount: false,
      desc: 'El misterio del Casillero del Diablo cobra vida en una experiencia nocturna con cena de tres tiempos.',
      fullDesc: 'Al caer la noche sobre el Parque Concha y Toro, el enigmático Don Isidro te guía en un viaje nocturno lleno de historia, vino y leyenda. Comienza con una copa de vino espumoso, una degustación exclusiva de cuatro vinos Casillero del Diablo y el ingreso a la bodega subterránea. Concluye con una cena de tres tiempos en el restaurante Bodega 1883.',
      includes: ['Transporte', 'Guía Turístico', 'Seguro de Viaje', 'Degustación de Vinos', 'Sommelier y Maridaje', 'Copa de Vino Personalizada', 'Cena en Bodega 1883'],
      excludes: ['Alimentación'],
      schedule: 'Tarde · A partir de las 14:00 HRS.',
      destinations: ['Visita Nocturna a la Bodega', 'Parque Concha y Toro', 'Casa Don Melchor', 'Bodega Subterránea Casillero del Diablo'],
      tickets: 'Cena de 3 tiempos incluida',
      location: 'Santiago'
    },
    {
      id: 'vina-tarapaca',
      title: 'Viña Tarapacá: Degustación & Almuerzo',
      img: 'vina-tarapaca.jpg',
      category: 'Wine',
      price: 116000,
      familyDiscount: false,
      desc: 'Estancia exclusiva en la casa señorial de estilo toscano de Viña Tarapacá, con almuerzo de tres tiempos con maridaje.',
      fullDesc: 'Disfruta de una estancia exclusiva en la casa señorial de estilo toscano de Viña Tarapacá, construida en 1927. Explora sus jardines, conoce la historia de la bodega y saborea los vinos Tarapacá Gran Reserva. Incluye almuerzo de tres tiempos con maridaje preparado por el chef de la casa.',
      includes: ['Transporte', 'Guía Turístico', 'Seguro de Viaje', 'Ticket de Ingreso a la Bodega', 'Visita Guiada', 'Degustaciones de Vinos', 'Almuerzo'],
      excludes: ['Bebidas adicionales'],
      schedule: 'Mañana (AM) / Tarde (PM) · Consultar disponibilidad · No disponible Domingo',
      destinations: ['Visita a la Bodega', 'Parque y Jardín', 'Paseo por la Casona y el Viñedo'],
      tickets: 'Almuerzo de 3 tiempos incluido',
      location: 'Santiago'
    },
    {
      id: 'wine-experience-bosque-emiliana',
      title: 'Wine Experience: Casas del Bosque & Emiliana',
      img: 'wine-experience-bosque-emiliana.jpg',
      category: 'Wine',
      price: 178000,
      familyDiscount: false,
      desc: 'Tour de 2 bodegas con almuerzo en el galardonado restaurante Tanino, en el Valle de Casablanca.',
      fullDesc: 'Tour de 2 bodegas + almuerzo en el galardonado restaurante Tanino. Visita las bodegas Casas del Bosque y Emiliana, reconocidas internacionalmente, y disfruta de un almuerzo de 3 platos en el restaurante Tanino, referente gastronómico del Valle de Casablanca.',
      includes: ['Transporte', 'Guía Turístico', 'Seguro de Viaje', 'Ticket de Ingreso a la Bodega', 'Visita Guiada', 'Degustación de Vinos', 'Maridaje de Quesos y Chocolates', 'Almuerzo'],
      excludes: ['Bebidas adicionales'],
      schedule: 'Mañana · A partir de las 07:30 HRS.',
      destinations: ['Bodega Emiliana', 'Viñas Casas del Bosque', 'Restaurante Tanino'],
      tickets: 'Almuerzo incluido · Solo mayores de 18 años',
      location: 'Santiago'
    },
    {
      id: 'pucon-caburgua',
      title: 'Tour Pucón y Caburga',
      img: 'pucon-caburgua.jpg',
      category: 'Naturaleza',
      price: 50000,
      familyDiscount: false,
      desc: 'Ruta por la pasarela Quelhue con vistas a tres volcanes, el Salto Mariman, los Ojos del Caburga y las termas.',
      fullDesc: 'Partiremos hacia el río Trancura donde visitaremos una pasarela con maravillosas vistas a tres volcanes. El viaje sigue por el Salto Mariman, los Ojos del Caburga, miradores de saltos de agua y lagunas, el Lago Caburga con sus arenas finas, para terminar en unas termas para relajarse y almorzar.',
      includes: ['Transporte', 'Guía Turístico', 'Seguro de Viaje', 'Ticket de Ingreso'],
      excludes: ['Alimentación'],
      schedule: 'Salida 15:00 HRS. · Retorno 20:00 HRS.',
      destinations: ['Pasarela Quelhue', 'Ruca Mapuche', 'Ojos de Caburga', 'Laguna Azul', 'Lago Caburga', 'Termas Pucón Indómito'],
      tickets: 'Ticket de Ingreso incluido',
      location: 'Pucón'
    },
    {
      id: 'termas-geometricas',
      title: 'Tour Termas Geométricas',
      img: 'termas-geometricas.jpg',
      category: 'Relax',
      price: 90000,
      familyDiscount: false,
      desc: '20 pozones de diferentes temperaturas en 450 metros de quebradas y dos cascadas, dentro del Parque Nacional Villarrica.',
      fullDesc: 'Dentro del Parque Nacional Villarrica se encuentra este rústico centro termal con 20 pozones de diferentes temperaturas, ubicado en 450 metros de quebradas y dos cascadas de agua, unidos a través de pasarelas de madera.',
      includes: ['Traslado al Hospedaje', 'Ticket de Ingreso'],
      excludes: ['Seguros', 'Alimentos'],
      schedule: 'Recogida 12:00 - 12:30 · Regreso 20:00',
      destinations: ['Termas Geométricas'],
      tickets: 'Ticket de Ingreso incluido',
      location: 'Pucón'
    },
    {
      id: 'huilo-huilo',
      title: 'Tour Huilo Huilo',
      img: 'huilo-huilo.jpg',
      category: 'Naturaleza',
      price: 75000,
      familyDiscount: false,
      desc: 'La Reserva Biológica Huilo Huilo: el Hotel Montaña Mágica, el Salto Huilo Huilo y la mitología del sector.',
      fullDesc: 'Visita la Reserva Biológica Huilo Huilo. Conoce el espectacular Hotel Montaña Mágica, rodeado de naturaleza y seres mágicos que dan vida a la mitología del sector, y el Salto Huilo Huilo. Incluye Panguipulli, Neltume, Salto La Leona, Museo de los Volcanes, criaderos de ciervos, hoteles de la zona y Puerto Fuy.',
      includes: ['Traslado al Hospedaje', 'Guía Personalizado', 'Tickets de Entrada', 'Protocolos Sanitarios'],
      excludes: ['Seguros', 'Alimentos'],
      schedule: 'Recogida 08:00 - 08:30 · Regreso 20:00',
      destinations: ['Panguipulli', 'Localidad Neltume', 'Reserva Huilo Huilo', 'Museo de los Volcanes', 'Criaderos de Ciervos', 'Puerto Fuy'],
      tickets: 'Tickets de Entrada incluidos',
      location: 'Pucón'
    },
    {
      id: 'torres-paine-milodon',
      title: 'Torres del Paine y Cuevas del Milodón',
      img: 'torres-paine-milodon.jpg',
      category: 'Naturaleza',
      price: 90000,
      familyDiscount: false,
      desc: 'Visita la Cueva del Milodón y el Parque Nacional Torres del Paine, cruzando la estepa magallánica.',
      fullDesc: 'La excursión se inicia con una visita a la Cueva del Milodón. Luego continuamos hacia Torres del Paine cruzando estancias y un paisaje que va desde la estepa al bosque. En el camino es posible avistar ñandúes y guanacos.',
      includes: ['Traslados a Domicilio y Hoteles', 'Guía Bilingüe'],
      excludes: ['Seguros', 'Alimentos', 'Ticket de Ingreso Parque Torres del Paine'],
      schedule: 'Punta Arenas: 05:00 - 21:00 · Puerto Natales: 08:00 - 18:00',
      destinations: ['Puerto Natales', 'Cueva del Milodón', 'Parque Nacional Torres del Paine', 'Cascada Río Paine', 'Laguna Amarga y Lago Sarmiento', 'Cerro Castillo'],
      tickets: 'Precio: Puerto Natales CLP 90.000 · Punta Arenas CLP 110.000',
      location: 'Patagonia'
    },
    {
      id: 'pinguino-rey',
      title: 'Pingüino Rey: Tierra del Fuego',
      img: 'pinguino-rey.jpg',
      category: 'Naturaleza',
      price: 110000,
      familyDiscount: false,
      desc: 'Visita los museos de Tierra del Fuego y descubre pingüinos rey y de Magallanes en su hábitat natural.',
      fullDesc: 'Visita los museos de Tierra del Fuego y sus muestras de fauna, arqueología y antropología. Descubre la historia de la fiebre del oro en Chile y una gran biodiversidad de áreas marítimas y terrestres, con fauna como el pingüino de Magallanes, pingüino rey y tucu tucu.',
      includes: ['Traslados a Domicilio y Hoteles', 'Tickets de Transbordo de Ida y Regreso', 'Guía Bilingüe'],
      excludes: ['Ticket de Ingreso Parque Pingüino Rey (CLP 18.000)', 'Almuerzo (CLP 16.000)', 'Seguros'],
      schedule: 'Recogida 05:00 - 05:30 · Regreso 20:00',
      destinations: ['Tierra del Fuego', 'Navegación en Ferry (Punta Delgada)', 'Parque Pingüino', 'Cerro Sombrero', 'Estancia San Gregorio'],
      tickets: 'Ticket Parque Pingüino Rey CLP 18.000 no incluido',
      location: 'Patagonia'
    },
    {
      id: 'fuerte-bulnes',
      title: 'Fuerte Bulnes + Museo Interactivo + Hito Geográfico',
      img: 'fuerte-bulnes.jpg',
      category: 'Historia',
      price: 45000,
      familyDiscount: false,
      desc: 'Antigua fortificación del Estrecho de Magallanes, con trekking, museo interactivo y el hito geográfico de la mitad de Chile.',
      fullDesc: 'Fuerte Bulnes es una antigua fortificación construida para asegurar la soberanía chilena. Existen senderos para realizar trekking de aproximadamente una hora. Además se visita el hito del centro geográfico de Chile, Puerto de Hambre y Bahía Mansa.',
      includes: ['Traslados a Domicilio y Hoteles', 'Guía Bilingüe'],
      excludes: ['Seguros', 'Ticket de Ingreso Parque Estrecho', 'Alimentos'],
      schedule: 'AM 08:00 - 14:00 · PM 13:00 - 19:00',
      destinations: ['Parque Estrecho', 'Fuerte Bulnes', 'Museo Interactivo', 'Hito Geográfico de la Mitad de Chile'],
      tickets: 'Ticket Parque Estrecho no incluido',
      location: 'Patagonia'
    },
    {
      id: 'city-tour-punta-arenas',
      title: 'City Tour en Punta Arenas',
      img: 'city-tour-punta-arenas.jpg',
      category: 'City Tour',
      price: 45000,
      familyDiscount: false,
      desc: 'La historia de los pueblos originarios de la Patagonia austral, siguiendo los pasos de los colonos.',
      fullDesc: 'Visitar Punta Arenas es encontrarse con la historia de los pueblos originarios de la Patagonia austral y seguir los pasos de los colonos que pisaron estas tierras en busca de nuevos horizontes.',
      includes: ['Traslados a Domicilio y Hoteles', 'Guía Bilingüe'],
      excludes: ['Seguros', 'Ticket de Ingreso Parque Estrecho', 'Alimentos'],
      schedule: 'AM 08:00 - 14:00 · PM 13:00 - 19:00',
      destinations: ['Plaza de Armas Muñoz Gamero', 'Mirador Cerro de la Cruz', 'Costanera de la Ciudad', 'Cementerio Municipal Sara Braun', 'Monumento al Ovejero'],
      tickets: null,
      location: 'Patagonia'
    },
    {
      id: 'navegacion-glaciar-grey',
      title: 'Navegación Glaciar Grey',
      img: 'navegacion-glaciar-grey.jpg',
      category: 'Aventura',
      price: 160000,
      familyDiscount: false,
      desc: 'Navegación de 2 horas 45 minutos por el Lago Grey hasta el imponente glaciar, dentro de Torres del Paine.',
      fullDesc: 'El pasajero debe presentarse en el Hotel Lago Grey dentro del Parque Nacional Torres del Paine para el check-in una hora antes del zarpe, y caminar 30-40 minutos hacia la playa del lago. La navegación al Glaciar Grey tiene una duración de 2 horas 45 minutos aproximadamente.',
      includes: ['Pisco Sour o Bebida'],
      excludes: ['Traslado del Alojamiento hacia la Embarcación', 'Seguros', 'Alimentos'],
      schedule: 'AM 08:00 - 14:00 · PM 13:00 - 19:00',
      destinations: ['Glaciar Grey'],
      tickets: null,
      location: 'Patagonia'
    },
    {
      id: 'trekking-base-torres',
      title: 'Trekking Base Torres',
      img: 'trekking-base-torres.jpg',
      category: 'Aventura',
      price: 90000,
      familyDiscount: false,
      desc: 'El sendero más famoso del Parque Nacional Torres del Paine hasta la Base Torres, con la laguna esmeralda como postal.',
      fullDesc: 'La espectacular ruta que lleva a la clásica postal del parque. El sendero hacia la Base Torres del Paine es intenso y el más famoso de todos. Observar las torres Monzino, Central y D\'Agostini sobre la laguna esmeralda de la base es casi una experiencia religiosa.',
      includes: ['Guía Bilingüe', 'Bastones'],
      excludes: ['Seguros', 'Ticket Parque Nacional Torres del Paine', 'Alimentos'],
      schedule: 'Punta Arenas: 05:00 - 23:00 · Puerto Natales: 06:30 - 21:00',
      destinations: ['Torres del Paine', 'Laguna Amarga', 'Río Ascencio', 'Bosque Lenga', 'Refugio Chileno'],
      tickets: 'Precio: Puerto Natales CLP 90.000 · Punta Arenas CLP 110.000',
      location: 'Patagonia'
    },
    {
      id: 'trekking-faro-san-isidro',
      title: 'Trekking al Faro San Isidro',
      img: 'trekking-faro-san-isidro.jpg',
      category: 'Aventura',
      price: 75000,
      familyDiscount: false,
      desc: 'El último faro del continente americano, en la península de Brunswick, con la Cordillera Darwin de fondo.',
      fullDesc: 'Ubicado en el extremo sur de la península de Brunswick, al sur de Punta Arenas, es considerado el último faro del continente americano. Teniendo como fondo la Cordillera Darwin y junto a un tupido bosque nativo.',
      includes: ['Traslado Hospedaje', 'Guía Bilingüe'],
      excludes: ['Seguros', 'Alimentos'],
      schedule: 'Recogida 08:00 - 08:30 · Regreso 15:00',
      destinations: ['Bosque de Lenga', 'Isla Dawson', 'Cordillera Darwin', 'Faro San Isidro'],
      tickets: null,
      location: 'Patagonia'
    },
    {
      id: 'trekking-pali-aike',
      title: 'Trekking Volcanes Pali Aike',
      img: 'trekking-pali-aike.jpg',
      category: 'Aventura',
      price: 50000,
      familyDiscount: false,
      desc: 'Derrrames de lava basáltica, conos volcánicos, cuevas naturales y cráteres que se asemejan a paisajes lunares.',
      fullDesc: 'Pali Aike se ubica en la estepa magallánica y su superficie está cubierta por extensos derrames de lava basáltica, conos volcánicos de baja altura, cuevas naturales, cráteres y campos de lava que se asemejan a paisajes lunares.',
      includes: ['Traslado Hospedaje', 'Guía Bilingüe'],
      excludes: ['Ticket Parque Pali Aike', 'Seguros', 'Alimentos'],
      schedule: 'Recogida 07:00 - 07:30 · Regreso 19:30',
      destinations: ['Parque Nacional Pali Aike', 'Cueva Pali Aike', 'Cráter Morada del Diablo', 'Laguna Ana'],
      tickets: 'Ticket Parque Pali Aike no incluido',
      location: 'Patagonia'
    },
    {
      id: 'trekking-reserva-magallanes',
      title: 'Trekking Reserva Nacional Magallanes',
      img: 'trekking-reserva-magallanes.jpg',
      category: 'Aventura',
      price: 45000,
      familyDiscount: false,
      desc: 'Excursión de medio día por una boscosa área protegida a 8 km de Punta Arenas, con senderos de trekking y mountain bike.',
      fullDesc: 'Esta excursión de medio día permite conocer la Reserva Nacional Magallanes, una boscosa área protegida con una variedad de senderos habilitados para trekking y mountain bike. Ubicada a 8 km al oeste de Punta Arenas, con 20.878 hectáreas y el río de las Minas, lugar del hallazgo de carbón.',
      includes: ['Traslado Hospedaje', 'Guía Bilingüe'],
      excludes: ['Seguros', 'Alimentos'],
      schedule: 'Recogida 07:00 - 07:30 · Regreso 19:30',
      destinations: ['Reserva Nacional de Magallanes', 'Sendero Movilidad Reducida', 'Sendero Bocatoma', 'Circuito Los Ñirres', 'Circuito Los Coigües'],
      tickets: null,
      location: 'Patagonia'
    },
    {
      id: 'navegacion-balmaceda-serrano',
      title: 'Navegación Glaciares Balmaceda y Serrano',
      img: 'navegacion-balmaceda-serrano.jpg',
      category: 'Aventura',
      price: 175000,
      familyDiscount: false,
      desc: 'Navegación por el fiordo para admirar los glaciares Balmaceda y Serrano, con colonias de cormoranes y lobos marinos.',
      fullDesc: 'Navegar por estos glaciares significa admirar la majestuosidad de terrenos casi inexplorados. El trayecto parte en el muelle Puerto Bories, desde donde observarás colonias de cormoranes y lobos marinos. El glaciar Balmaceda se admira desde la nave; para visitar Serrano hay una breve caminata por un lago.',
      includes: ['Aperitivo con Hielo Milenario del Glaciar', 'Entrada al Parque Bernardo O\'Higgins', 'Almuerzo (Estancia Perales)', 'Traslados Respectivos', 'Guía Bilingüe'],
      excludes: ['Traslado Hospedaje hacia la Agencia en Puerto Natales', 'Seguros'],
      schedule: 'Punto de encuentro 07:00 · Regreso 14:00',
      destinations: ['Puerto Bories', 'Parque Bernardo O\'Higgins', 'Glaciar Serrano', 'Glaciar Balmaceda'],
      tickets: 'Entrada Parque Bernardo O\'Higgins incluida',
      location: 'Patagonia'
    },
    {
      id: 'navegacion-isla-magdalena',
      title: 'Navegación Isla Magdalena',
      img: 'navegacion-isla-magdalena.jpg',
      category: 'Aventura',
      price: 105000,
      familyDiscount: false,
      desc: 'Navegación por el Estrecho de Magallanes hasta Isla Magdalena, hogar de más de 60.000 pingüinos magallánicos.',
      fullDesc: 'Navegación a través del Estrecho de Magallanes hasta Isla Magdalena, donde se encuentra el Monumento Natural Los Pingüinos, lugar que alberga a más de 60.000 especies de pingüinos magallánicos.',
      includes: ['Guía Bilingüe', 'Tickets de Ingreso'],
      excludes: ['Seguros', 'Alimentos'],
      schedule: 'AM 07:00 - 12:00 · PM 13:00 - 18:00',
      destinations: ['Terminal Bus Sur (Catamarán)', 'Navegación a Isla Magdalena'],
      tickets: 'Tickets de Ingreso incluidos',
      location: 'Patagonia'
    }
  ];

  /* =============================================
     REVIEWS — localStorage
     Per-tour: reviews_{tourId}
     Global: vo_all_reviews
     ============================================= */
  function getReviews(tourId) {
    try {
      return JSON.parse(localStorage.getItem('reviews_' + tourId)) || [];
    } catch(e) { return []; }
  }

  function addReview(tourId, name, stars, text) {
    var reviews = getReviews(tourId);
    reviews.unshift({ name: name, stars: stars, text: text, date: new Date().toLocaleDateString('es-CL') });
    localStorage.setItem('reviews_' + tourId, JSON.stringify(reviews));
  }

  function getAllReviews() {
    try { return JSON.parse(localStorage.getItem('vo_all_reviews')) || []; }
    catch(e) { return []; }
  }

  function addGlobalReview(tourId, tourName, name, stars, text) {
    var reviews = getAllReviews();
    reviews.unshift({ name: name, tour: tourId, tourName: tourName, stars: stars, text: text, date: new Date().toLocaleDateString('es-CL') });
    localStorage.setItem('vo_all_reviews', JSON.stringify(reviews));
  }

  function addReviewSynced(tourId, tourName, name, stars, text) {
    addReview(tourId, name, stars, text);
    addGlobalReview(tourId, tourName, name, stars, text);
  }

  function renderStarsStr(count) {
    var s = '';
    for (var i = 0; i < 5; i++) s += i < count ? '★' : '☆';
    return s;
  }

  function getAvgRating(tourId) {
    var reviews = getReviews(tourId);
    if (!reviews.length) return null;
    var sum = reviews.reduce(function(a, r) { return a + r.stars; }, 0);
    return (sum / reviews.length).toFixed(1);
  }

  /* =============================================
     SEED REVIEWS
     ============================================= */
  function seedReviews() {
    var VER = '5';
    if (localStorage.getItem('vo_seed_version') === VER) return;

    var tourNames = {};
    TOURS.forEach(function(t) { tourNames[t.id] = t.title; });

    var seeds = {
      'salitreras-oasis': [
        { name: 'María González', stars: 5, text: 'Increíble experiencia. El guía Polo es espectacular, conoce cada rincón de las salitreras. El almuerzo en Pica fue delicioso. 100% recomendado.', date: '15/06/2026' },
        { name: 'Carlos Mendoza', stars: 5, text: 'Viajé con mi familia y fue perfecto. Los niños disfrutaron mucho. El oasis de Pica es un paraíso en el desierto.', date: '02/05/2026' },
        { name: 'Ana Rodríguez', stars: 5, text: 'Tour Full Day completo, todo bien organizado. Las salitreras son impresionantes, sentí que viajé al siglo XIX.', date: '20/04/2026' }
      ],
      'laguna-roja': [
        { name: 'Pedro Sánchez', stars: 5, text: 'La Laguna Roja es un lugar mágico. Las fotos no le hacen justicia. Imperdible.', date: '10/06/2026' },
        { name: 'Laura Fernández', stars: 5, text: 'Larga pero vale cada minuto. Los paisajes del altiplano son espectaculares.', date: '28/05/2026' }
      ],
      'parapente': [
        { name: 'Roberto Díaz', stars: 5, text: 'Volar sobre el Cerro Dragón y la costa de Iquique fue la mejor experiencia de mi vida.', date: '12/07/2026' },
        { name: 'Sofía Vargas', stars: 5, text: 'Muy profesional el instructor. Me sentí segura todo el tiempo. 100% recomendado.', date: '01/07/2026' },
        { name: 'Diego Morales', stars: 5, text: 'Segunda vez que vuelo con ellos. Siempre una experiencia increíble.', date: '18/06/2026' }
      ],
      'sandboard': [
        { name: 'Valentina Rojas', stars: 5, text: 'El Cerro Dragón es increíble para sandboard. Super divertido.', date: '05/07/2026' },
        { name: 'Martín López', stars: 4, text: 'Muy buena experiencia. La duna es enorme y la bajada es emocionante.', date: '22/06/2026' }
      ],
      'city-tour': [
        { name: 'Isabella Castro', stars: 5, text: 'Perfecto para conocer Iquique en pocas horas. La navegación fue lo mejor.', date: '08/07/2026' },
        { name: 'Andrés Figueroa', stars: 5, text: 'Excelente tour para llegar y conocer la ciudad. Recomendado para el primer día.', date: '25/06/2026' }
      ],
      'parque-isluga': [
        { name: 'Carmen Silva', stars: 5, text: 'El Volcán Isluga es majestuoso. La experiencia con la cultura aymara fue muy emotiva.', date: '14/06/2026' }
      ],
      'termas-mamina': [
        { name: 'Jorge Tapia', stars: 5, text: 'Las termas de Mamiña son increíbles. El barro chino es una experiencia única.', date: '30/06/2026' }
      ],
      'pisagua': [
        { name: 'Lucía Herrera', stars: 5, text: 'Pisagua es historia viva. La gastronomía costera es espectacular.', date: '18/06/2026' }
      ],
      'buceo': [
        { name: 'Felipe Reyes', stars: 5, text: 'El buceo en Playa Blanca es espectacular. La vida marina es impresionante.', date: '05/07/2026' }
      ],
      'geoglifos': [
        { name: 'Gabriela Muñoz', stars: 5, text: 'Los Geoglifos de Pintados son fascinantes. Un tour cultural muy recomendado.', date: '10/06/2026' }
      ],
      'termas-chusmiza': [
        { name: 'Ricardo Pizarro', stars: 5, text: 'Las termas de Chusmiza a 3.200 msnm son mágicas. El trekking con llamas fue único.', date: '22/06/2026' }
      ],
      'salar-huasco': [
        { name: 'Patricia Vega', stars: 5, text: 'El Salar del Huasco es un paraíso. Vimos flamencos. Imperdible.', date: '01/07/2026' }
      ],
      'huatacondo': [
        { name: 'Francisco Álvarez', stars: 5, text: 'Huatacondo es pura aventura. Las huellas de dinosaurios son algo único.', date: '15/06/2026' }
      ],
      'salitreras': [
        { name: 'Daniela Contreras', stars: 5, text: 'Humberstone y Santa Laura son Patrimonio UNESCO por algo. Muy bien organizado.', date: '28/06/2026' }
      ]
    };

    /* Write per-tour */
    Object.keys(seeds).forEach(function(tourId) {
      localStorage.setItem('reviews_' + tourId, JSON.stringify(seeds[tourId]));
    });

    /* Write global */
    var all = [];
    Object.keys(seeds).forEach(function(tourId) {
      seeds[tourId].forEach(function(r) {
        all.push({ name: r.name, tour: tourId, tourName: tourNames[tourId] || tourId, stars: r.stars, text: r.text, date: r.date });
      });
    });
    localStorage.setItem('vo_all_reviews', JSON.stringify(all));
    localStorage.setItem('vo_seed_version', VER);
  }
  seedReviews();

  /* =============================================
     RENDER TOUR CARDS
     ============================================= */
  var container = document.getElementById('tours-grid');
  if (container) {
    TOURS.forEach(function(t) {
      var card = document.createElement('article');
      card.className = 'tour-card';
      card.setAttribute('data-tour-id', t.id);
      var avg = getAvgRating(t.id);
      var ratingHTML = avg ? '<span class="tour-card-rating">' + avg + ' ★</span>' : '';
      var discountBadge = t.familyDiscount ? '<span class="tour-card-discount">👨‍👩‍👧‍👦 Descuento Familia</span>' : '';
      card.innerHTML =
        '<div class="tour-card-image" style="background-image: url(\'img/tours/' + t.img + '\');">' +
          '<span class="tour-card-badge">' + t.category + '</span>' + ratingHTML + discountBadge +
        '</div>' +
        '<div class="tour-card-body">' +
          '<span class="tour-card-category">' + (t.location || 'Iquique') + '</span>' +
          '<h3>' + t.title + '</h3>' +
          '<p class="tour-card-desc">' + t.desc + '</p>' +
          '<div class="tour-card-footer">' +
            '<span class="tour-price">$' + t.price.toLocaleString('es-CL') + ' <span>/ persona</span></span>' +
            '<button class="btn-details" data-tour-id="' + t.id + '">Ver detalles</button>' +
          '</div>' +
        '</div>';
      container.appendChild(card);
    });
  }

  /* =============================================
     MODAL — Solo opiniones del tour
     ============================================= */
  var modal = null;

  function openModal(id) {
    var t = TOURS.find(function(x) { return x.id === id; });
    if (!t) return;

    var reviews = getReviews(t.id);
    var avg = getAvgRating(t.id);
    var count = reviews.length;

    var reviewsHtml = '';
    reviews.forEach(function(r) {
      var initials = r.name.split(' ').map(function(w){return w[0]}).join('').substring(0,2).toUpperCase();
      reviewsHtml +=
        '<blockquote class="testimonial-card">' +
          '<div class="testimonial-stars">' + renderStarsStr(r.stars) + '</div>' +
          '<p class="testimonial-text">"' + r.text + '"</p>' +
          '<footer class="testimonial-author">' +
            '<span class="testimonial-avatar">' + initials + '</span>' +
            '<cite>' +
              '<span class="testimonial-name">' + r.name + '</span>' +
              '<span class="testimonial-date">' + r.date + '</span>' +
            '</cite>' +
          '</footer>' +
        '</blockquote>';
    });

    modal.innerHTML =
      '<div class="modal-backdrop"></div>' +
      '<div class="modal-panel" role="dialog" aria-modal="true" aria-label="' + t.title + '">' +
        '<button class="modal-close" aria-label="Cerrar">&times;</button>' +
        '<div class="modal-image" style="background-image: url(\'img/tours/' + t.img + '\');">' +
          '<span class="modal-category-badge">' + t.category + '</span>' +
        '</div>' +
        '<div class="modal-body">' +
          '<h2 class="modal-title">' + t.title + '</h2>' +
          '<p class="modal-desc">' + t.fullDesc + '</p>' +
          '<div class="modal-price-row">' +
            '<span class="modal-price-label">Precio</span>' +
            '<span class="modal-price-value">$' + t.price.toLocaleString('es-CL') + ' <small>por persona</small></span>' +
          '</div>' +
          (t.familyDiscount ? '<div class="modal-family-discount"><span class="modal-icon">👨‍👩‍👧‍👦</span><div><strong>Descuento para familias de 5+ personas</strong><small>Consulta por WhatsApp</small></div></div>' : '') +
          '<div class="modal-schedule"><span class="modal-icon">🕐</span> ' + t.schedule + '</div>' +
          '<a href="https://wa.me/56961470160?text=Hola%2C%20quiero%20reservar%20' + encodeURIComponent(t.title) + '" target="_blank" rel="noopener" class="modal-wsp-btn">Reservar ahora por WhatsApp</a>' +
          '<div class="reviews-section">' +
            '<h3 class="reviews-title">Opiniones' + (avg ? ' <span class="reviews-avg">' + avg + ' ★ (' + count + ')</span>' : (count ? ' (' + count + ')' : '')) + '</h3>' +
            '<div class="testimonials-grid">' +
              (reviewsHtml || '<p class="reviews-empty">Sé el primero en dejar tu opinión sobre este tour</p>') +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>';

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    setTimeout(function() { modal.classList.add('active'); }, 10);

    modal.querySelector('.modal-close').addEventListener('click', closeModal);
    modal.querySelector('.modal-backdrop').addEventListener('click', closeModal);
    document.addEventListener('keydown', handleEsc);
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
    setTimeout(function() { modal.style.display = 'none'; }, 300);
    document.removeEventListener('keydown', handleEsc);
  }

  function handleEsc(e) { if (e.key === 'Escape') closeModal(); }

  modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.id = 'tour-modal';
  document.body.appendChild(modal);

  document.addEventListener('click', function(e) {
    var btn = e.target.closest('.btn-details');
    if (btn) {
      e.preventDefault();
      var id = btn.getAttribute('data-tour-id');
      if (id) openModal(id);
    }
  });

  /* =============================================
     HEADER + MOBILE MENU + SMOOTH SCROLL
     ============================================= */
  var header = document.querySelector('.header');
  window.addEventListener('scroll', function() {
    header.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  var toggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function() {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
      toggle.innerHTML = open ? '✕' : '☰';
    });
    nav.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.innerHTML = '☰';
      });
    });
    document.addEventListener('click', function(e) {
      if (!header.contains(e.target) && nav.classList.contains('open')) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.innerHTML = '☰';
      }
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });

  /* =============================================
     MAIN PAGE — RENDER REVIEWS GRID
     ============================================= */
  var REVIEWS_VISIBLE = 3;
  var allReviewsExpanded = false;

  function buildReviewCard(r) {
    var initials = r.name.split(' ').map(function(w){return w[0]}).join('').substring(0,2).toUpperCase();
    return '<blockquote class="testimonial-card">' +
      '<div class="testimonial-stars">' + renderStarsStr(r.stars) + '</div>' +
      '<p class="testimonial-text">"' + r.text + '"</p>' +
      '<footer class="testimonial-author">' +
        '<span class="testimonial-avatar">' + initials + '</span>' +
        '<cite>' +
          '<span class="testimonial-name">' + r.name + '</span>' +
          '<span class="testimonial-date">' + r.date + ' · ' + r.tourName + '</span>' +
        '</cite>' +
      '</footer>' +
    '</blockquote>';
  }

  function renderUserReviews() {
    var list = document.getElementById('user-reviews-list');
    if (!list) return;
    var reviews = getAllReviews();
    if (!reviews.length) { list.innerHTML = '<p class="reviews-empty">Sé el primero en dejar tu opinión</p>'; return; }
    var html = '';
    var limit = allReviewsExpanded ? reviews.length : Math.min(REVIEWS_VISIBLE, reviews.length);
    for (var i = 0; i < limit; i++) html += buildReviewCard(reviews[i]);
    if (reviews.length > REVIEWS_VISIBLE) {
      html += '<div class="reviews-show-more">' +
        '<button class="btn-show-more" id="btn-show-more-reviews">' +
          (allReviewsExpanded ? 'Mostrar menos' : 'Ver todas las opiniones (' + reviews.length + ')') +
        '</button></div>';
    }
    list.innerHTML = html;
    var btn = document.getElementById('btn-show-more-reviews');
    if (btn) {
      btn.addEventListener('click', function() {
        allReviewsExpanded = !allReviewsExpanded;
        renderUserReviews();
      });
    }
  }

  /* =============================================
     MAIN PAGE — REVIEW FORM
     ============================================= */
  var mainSelectedStars = 0;
  var mainStarEls = document.querySelectorAll('#main-review-stars .star-btn');

  function updateMainStars(hoverVal) {
    mainStarEls.forEach(function(s) {
      var val = parseInt(s.getAttribute('data-star'));
      var active = hoverVal ? val <= hoverVal && val > mainSelectedStars : val <= mainSelectedStars;
      s.textContent = val <= (hoverVal || mainSelectedStars) ? '★' : '☆';
      s.classList.toggle('active', val <= mainSelectedStars);
      s.classList.toggle('hover', active);
    });
  }

  mainStarEls.forEach(function(el) {
    el.addEventListener('click', function() {
      mainSelectedStars = parseInt(this.getAttribute('data-star'));
      updateMainStars(0);
    });
    el.addEventListener('mouseenter', function() {
      updateMainStars(parseInt(this.getAttribute('data-star')));
    });
    el.addEventListener('mouseleave', function() {
      updateMainStars(0);
    });
  });

  var mainForm = document.getElementById('main-review-form');
  if (mainForm) {
    mainForm.addEventListener('submit', function(e) {
      e.preventDefault();
      var name = (document.getElementById('main-review-name').value || '').trim();
      var tourId = document.getElementById('main-review-tour').value;
      var text = (document.getElementById('main-review-text').value || '').trim();
      var tourSelect = document.getElementById('main-review-tour');
      var tourName = tourSelect.options[tourSelect.selectedIndex].text;

      if (!name || !tourId || !text || !mainSelectedStars) {
        alert('Por favor completa todos los campos y selecciona una puntuación.');
        return;
      }

      addReviewSynced(tourId, tourName, name, mainSelectedStars, text);

      mainForm.style.display = 'none';
      document.getElementById('main-review-success').style.display = 'block';
      renderUserReviews();

      setTimeout(function() {
        mainForm.style.display = '';
        document.getElementById('main-review-success').style.display = 'none';
        mainForm.reset();
        mainSelectedStars = 0;
        updateMainStars(0);
      }, 3000);
    });
  }

  renderUserReviews();

})();
