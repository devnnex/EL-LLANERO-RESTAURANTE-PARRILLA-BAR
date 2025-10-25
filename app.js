// app.js — lógica completa para The Boss (con imágenes locales)

// ---------- Config ----------
const BUSINESS_PHONE = '573107733123'; // <- reemplaza por el número real (sin '+')
const DELIVERY_FEE = 4000; // tarifa por defecto de domicilio

// ---------- Datos de ejemplo ----------
const products = [
  { // === PICADAS ===
  id: 'pic1',
  category: 'picadas',
  title: 'Picada Llanera X2',
  price: 45000,
  desc: 'Pollo, cabro, sobrebarriga, carne semi oreada, chorizo, yuca al vapor, papas artesanas y monedas de plátano.',
  image: 'images/picada_llanera_x2.png',
  ingredients: ['Pollo', 'Cabro', 'Sobrebarriga', 'Carne semi oreada', 'Chorizo', 'Yuca al vapor', 'Papas artesanas', 'Monedas de plátano'],
  extras: [{ name: 'Queso gratinado', price: 2000 }, { name: 'Chorizo adicional', price: 2500 }, { name: 'Porción de papas a la francesa', price: 3500 }]
},
{
  id: 'pic2',
  category: 'picadas',
  title: 'Picada Llanera X4',
  price: 80000,
  desc: 'Pollo, cabro, sobrebarriga, carne semi oreada, chorizo, yuca al vapor, papas artesanas y monedas de plátano.',
  image: 'images/picada_llanera_x4.png',
  ingredients: ['Pollo', 'Cabro', 'Sobrebarriga', 'Carne semi oreada', 'Chorizo', 'Yuca al vapor', 'Papas artesanas', 'Monedas de plátano'],
  extras: [{ name: 'Queso gratinado', price: 2000 }, { name: 'Chorizo adicional', price: 2500 }, { name: 'Porción de papas a la francesa', price: 3500 }]
},
{
  id: 'pic3',
  category: 'picadas',
  title: 'Picada Barranqueña X1',
  price: 35000,
  desc: 'Carne, pechuga, salchicha, chorizo, papas a la francesa y queso gratinado o rallado.',
  image: 'images/picada_barranquena_x1.png',
  ingredients: ['Carne', 'Pechuga', 'Salchicha', 'Chorizo', 'Papas a la francesa', 'Queso gratinado o rallado'],
  extras: [{ name: 'Queso adicional', price: 1500 }, { name: 'Porción extra de papas', price: 3000 }, { name: 'Chorizo adicional', price: 2500 }]
},
{
  id: 'pic4',
  category: 'picadas',
  title: 'Picada Barranqueña X2',
  price: 40000,
  desc: 'Carne, pechuga, salchicha, chorizo, papas a la francesa y queso gratinado o rallado.',
  image: 'images/picada_barranquena_x2.png',
  ingredients: ['Carne', 'Pechuga', 'Salchicha', 'Chorizo', 'Papas a la francesa', 'Queso gratinado o rallado'],
  extras: [{ name: 'Queso adicional', price: 1500 }, { name: 'Porción extra de papas', price: 3000 }, { name: 'Chorizo adicional', price: 2500 }]
},
{
  id: 'pic5',
  category: 'picadas',
  title: 'Picada Barranqueña X4',
  price: 75000,
  desc: 'Carne, pechuga, salchicha, chorizo, papas a la francesa y queso gratinado o rallado.',
  image: 'images/picada_barranquena_x4.png',
  ingredients: ['Carne', 'Pechuga', 'Salchicha', 'Chorizo', 'Papas a la francesa', 'Queso gratinado o rallado'],
  extras: [{ name: 'Queso adicional', price: 1500 }, { name: 'Porción extra de papas', price: 3000 }, { name: 'Chorizo adicional', price: 2500 }]
},
{
  id: 'pic6',
  category: 'picadas',
  title: 'Picada Barranqueña Familiar X10',
  price: 160000,
  desc: 'Carne, pechuga, salchicha, chorizo, queso gratinado, pollo y carne desmechada, vegetales y papas a la francesa.',
  image: 'images/picada_barranquena_familiar.png',
  ingredients: ['Carne', 'Pechuga', 'Salchicha', 'Chorizo', 'Queso gratinado', 'Pollo desmechado', 'Carne desmechada', 'Vegetales', 'Papas a la francesa'],
  extras: [{ name: 'Porción de carne', price: 6000 }, { name: 'Queso adicional', price: 1500 }, { name: 'Porción de papas extra', price: 3500 }]
}
,
{
  id: 'pap1',
  category: 'papas llaneras',
  title: 'Salchipapa',
  price: 16000,
  desc: 'Salchicha americana, 250g de papa a la francesa, salsas y queso rallado',
  image: 'images/salchipapa.png',
  ingredients: ['Salchicha americana', 'Papa a la francesa', 'Salsas', 'Queso rallado'],
  extras: [
    { name: 'Queso adicional', price: 1500 },
    { name: 'Salchicha extra', price: 2000 },
    { name: 'Pollo desmechado', price: 3500 },
    { name: 'Carne desmechada', price: 4500 },
    { name: 'Chorizo', price: 6000 },
    { name: 'Huevos de codorniz', price: 1500 },
    { name: 'Porción de papas adicionales', price: 3500 }
  ]
},
{
  id: 'pap2',
  category: 'papas llaneras',
  title: 'Salchipollo',
  price: 22000,
  desc: 'Salchicha americana, pollo desmechado o en cuadros, papas a la francesa, verduras y queso rallado',
  image: 'images/salchipollo.png',
  ingredients: ['Salchicha americana', 'Pollo desmechado', 'Papa a la francesa', 'Verduras', 'Queso rallado'],
  extras: [
    { name: 'Queso adicional', price: 1500 },
    { name: 'Salchicha extra', price: 2000 },
    { name: 'Pollo adicional', price: 3500 },
    { name: 'Carne desmechada', price: 4500 },
    { name: 'Chorizo', price: 6000 },
    { name: 'Huevos de codorniz', price: 1500 },
    { name: 'Porción de papas adicionales', price: 3500 }
  ]
},
{
  id: 'pap3',
  category: 'papas llaneras',
  title: 'Salchicarne',
  price: 24000,
  desc: 'Salchicha americana, carne desmechada, papas a la francesa, verduras y queso gratinado',
  image: 'images/salchicarne.png',
  ingredients: ['Salchicha americana', 'Carne desmechada', 'Papa a la francesa', 'Verduras', 'Queso gratinado'],
  extras: [
    { name: 'Queso adicional', price: 1500 },
    { name: 'Salchicha extra', price: 2000 },
    { name: 'Carne desmechada', price: 4500 },
    { name: 'Chorizo', price: 6000 },
    { name: 'Huevos de codorniz', price: 1500 },
    { name: 'Porción de papas adicionales', price: 3500 }
  ]
},
{
  id: 'pap4',
  category: 'papas llaneras',
  title: 'Salchichoripollo',
  price: 27000,
  desc: 'Salchicha americana, chorizo, pollo desmechado en salsa de la casa, papas a la francesa, verduras y queso gratinado',
  image: 'images/salchichoripollo.png',
  ingredients: ['Salchicha americana', 'Chorizo', 'Pollo desmechado', 'Salsa de la casa', 'Papa a la francesa', 'Verduras', 'Queso gratinado'],
  extras: [
    { name: 'Queso adicional', price: 1500 },
    { name: 'Chorizo adicional', price: 3000 },
    { name: 'Pollo adicional', price: 3500 },
    { name: 'Carne desmechada', price: 4500 },
    { name: 'Huevos de codorniz', price: 1500 },
    { name: 'Porción de papas adicionales', price: 3500 }
  ]
},
{
  id: 'pap5',
  category: 'papas llaneras',
  title: 'Salchicoricarne',
  price: 30000,
  desc: 'Salchicha americana, chorizo, carne desmechada, papas a la francesa, verduras y queso gratinado',
  image: 'images/salchicoricarne.png',
  ingredients: ['Salchicha americana', 'Chorizo', 'Carne desmechada', 'Papa a la francesa', 'Verduras', 'Queso gratinado'],
  extras: [
    { name: 'Queso adicional', price: 1500 },
    { name: 'Chorizo adicional', price: 3000 },
    { name: 'Carne desmechada', price: 4500 },
    { name: 'Huevos de codorniz', price: 1500 },
    { name: 'Porción de papas adicionales', price: 3500 }
  ]
}
,
{
  id: 'bra1',
  category: 'a la brasa',
  title: 'Pechuga Gratinada',
  price: 35000,
  desc: 'Pechuga de pollo a la plancha cubierta con queso gratinado, acompañada de papas a la francesa, ensalada y salsa de la casa',
  image: 'images/alabrasa1.png',
  ingredients: ['Pechuga de pollo', 'Queso gratinado', 'Papas a la francesa', 'Ensalada', 'Salsa de la casa'],
  extras: [
    { name: 'Queso adicional', price: 1500 },
    { name: 'Tocineta', price: 2500 },
    { name: 'Porción de papas adicionales', price: 3500 },
    { name: 'Huevos de codorniz', price: 1500 },
    { name: 'Ensalada adicional', price: 2000 }
  ]
},
{
  id: 'bra2',
  category: 'a la brasa',
  title: 'Pechuga Asada',
  price: 30000,
  desc: 'Jugosa pechuga de pollo asada a la brasa, servida con papas a la francesa, ensalada y salsa de la casa',
  image: 'images/alabrasa2.png',
  ingredients: ['Pechuga de pollo', 'Papas a la francesa', 'Ensalada', 'Salsa de la casa'],
  extras: [
    { name: 'Queso adicional', price: 1500 },
    { name: 'Tocineta', price: 2500 },
    { name: 'Porción de papas adicionales', price: 3500 },
    { name: 'Huevos de codorniz', price: 1500 }
  ]
},
{
  id: 'bra3',
  category: 'a la brasa',
  title: 'Bistec a Caballo',
  price: 37000,
  desc: 'Clásico bistec de res con huevo frito encima, acompañado de papas a la francesa, ensalada y salsa de la casa',
  image: 'images/alabrasa3.png',
  ingredients: ['Bistec de res', 'Huevo frito', 'Papas a la francesa', 'Ensalada', 'Salsa de la casa'],
  extras: [
    { name: 'Huevo adicional', price: 1500 },
    { name: 'Porción de papas adicionales', price: 3500 },
    { name: 'Queso adicional', price: 1500 },
    { name: 'Ensalada adicional', price: 2000 }
  ]
},
{
  id: 'bra4',
  category: 'a la brasa',
  title: 'Carne Semi Oreada Pequeña',
  price: 35000,
  desc: 'Porción pequeña de carne semi oreada a la brasa, servida con papas a la francesa, ensalada y salsa de la casa',
  image: 'images/alabrasa4.png',
  ingredients: ['Carne semi oreada', 'Papas a la francesa', 'Ensalada', 'Salsa de la casa'],
  extras: [
    { name: 'Porción de carne adicional', price: 6000 },
    { name: 'Porción de papas adicionales', price: 3500 },
    { name: 'Ensalada adicional', price: 2000 }
  ]
},
{
  id: 'bra5',
  category: 'a la brasa',
  title: 'Carne Semi Oreada Grande',
  price: 40000,
  desc: 'Porción grande de carne semi oreada a la brasa, servida con papas a la francesa, ensalada y salsa de la casa',
  image: 'images/alabrasa5.png',
  ingredients: ['Carne semi oreada', 'Papas a la francesa', 'Ensalada', 'Salsa de la casa'],
  extras: [
    { name: 'Porción de carne adicional', price: 6000 },
    { name: 'Porción de papas adicionales', price: 3500 },
    { name: 'Ensalada adicional', price: 2000 }
  ]
},
{
  id: 'bra6',
  category: 'a la brasa',
  title: 'Sobrebarriga',
  price: 45000,
  desc: 'Deliciosa sobrebarriga a la brasa, servida con papas a la francesa, ensalada y salsa de la casa',
  image: 'images/alabrasa6.png',
  ingredients: ['Sobrebarriga', 'Papas a la francesa', 'Ensalada', 'Salsa de la casa'],
  extras: [
    { name: 'Porción de sobrebarriga adicional', price: 7000 },
    { name: 'Porción de papas adicionales', price: 3500 },
    { name: 'Ensalada adicional', price: 2000 }
  ]
},
{
  id: 'bra7',
  category: 'a la brasa',
  title: 'Cabro con Pepitoria',
  price: 47000,
  desc: 'Tierno cabro a la brasa acompañado de su tradicional pepitoria, papas a la francesa y ensalada',
  image: 'images/alabrasa7.png',
  ingredients: ['Cabro', 'Pepitoria', 'Papas a la francesa', 'Ensalada'],
  extras: [
    { name: 'Porción de cabro adicional', price: 8000 },
    { name: 'Porción de papas adicionales', price: 3500 },
    { name: 'Ensalada adicional', price: 2000 }
  ]
}
,
{
  id: 'cor1',
  category: 'cortes premium madurados',
  title: 'Churrasco 300g',
  price: 40000,
  desc: 'Exquisito corte de churrasco de 300 gramos, madurado y asado a la perfección, acompañado de papas a la francesa, ensalada y salsa de la casa',
  image: 'images/corte1.png',
  ingredients: ['Churrasco 300g', 'Papas a la francesa', 'Ensalada', 'Salsa de la casa'],
  extras: [
    { name: 'Porción adicional de churrasco', price: 8000 },
    { name: 'Porción de papas adicionales', price: 3500 },
    { name: 'Ensalada adicional', price: 2000 },
    { name: 'Queso gratinado', price: 1500 }
  ]
},
{
  id: 'cor2',
  category: 'cortes premium madurados',
  title: 'Chatas 300g',
  price: 40000,
  desc: 'Corte de chatas maduradas de 300 gramos, jugosas y suaves, servidas con papas a la francesa, ensalada y salsa de la casa',
  image: 'images/corte2.png',
  ingredients: ['Chatas 300g', 'Papas a la francesa', 'Ensalada', 'Salsa de la casa'],
  extras: [
    { name: 'Porción adicional de chatas', price: 8000 },
    { name: 'Porción de papas adicionales', price: 3500 },
    { name: 'Ensalada adicional', price: 2000 },
    { name: 'Queso gratinado', price: 1500 }
  ]
},
{
  id: 'cor3',
  category: 'cortes premium madurados',
  title: 'Bife Chorizo 300g',
  price: 45000,
  desc: 'Corte premium de bife chorizo madurado, 300 gramos de sabor intenso y textura suave, acompañado de papas a la francesa, ensalada y salsa de la casa',
  image: 'images/corte3.png',
  ingredients: ['Bife chorizo 300g', 'Papas a la francesa', 'Ensalada', 'Salsa de la casa'],
  extras: [
    { name: 'Porción adicional de bife chorizo', price: 9000 },
    { name: 'Porción de papas adicionales', price: 3500 },
    { name: 'Ensalada adicional', price: 2000 },
    { name: 'Queso gratinado', price: 1500 }
  ]
},
{
  id: 'cor4',
  category: 'cortes premium madurados',
  title: 'Punta Anca 300g',
  price: 40000,
  desc: 'Corte de punta de anca madurado de 300 gramos, asado al término perfecto y acompañado de papas a la francesa, ensalada y salsa de la casa',
  image: 'images/corte4.png',
  ingredients: ['Punta anca 300g', 'Papas a la francesa', 'Ensalada', 'Salsa de la casa'],
  extras: [
    { name: 'Porción adicional de punta de anca', price: 8000 },
    { name: 'Porción de papas adicionales', price: 3500 },
    { name: 'Ensalada adicional', price: 2000 },
    { name: 'Queso gratinado', price: 1500 }
  ]
}
,

{
  id: 'ham1',
  category: 'hamburguesas',
  title: 'La Hawaiana',
  price: 20000,
  desc: '150 g de carne premium, rodaja de piña oro miel, doble queso mozzarella, tocineta ahumada, vegetales y papas a la francesa.',
  image: 'images/burger1.png',
  ingredients: ['Carne premium 150g', 'Piña oro miel', 'Queso mozzarella doble', 'Tocineta ahumada', 'Vegetales', 'Papas a la francesa'],
  extras: [
    { name: 'Queso adicional', price: 1500 },
    { name: 'Tocineta extra', price: 2000 },
    { name: 'Piña adicional', price: 1500 },
    { name: 'Porción de papas adicionales', price: 3500 }
  ]
},
{
  id: 'ham2',
  category: 'hamburguesas',
  title: 'Crispy Llanera',
  price: 30000,
  desc: '150 g de carne premium, aro de cebolla, mezcla campesina de pollo y maíz, tocineta ahumada, queso mozzarella, vegetales y papas a la francesa.',
  image: 'images/burger2.png',
  ingredients: ['Carne premium 150g', 'Aro de cebolla', 'Pollo y maíz campesino', 'Tocineta ahumada', 'Queso mozzarella', 'Vegetales', 'Papas a la francesa'],
  extras: [
    { name: 'Aros de cebolla adicionales', price: 2000 },
    { name: 'Queso adicional', price: 1500 },
    { name: 'Tocineta extra', price: 2000 },
    { name: 'Porción de papas adicionales', price: 3500 }
  ]
},
{
  id: 'ham3',
  category: 'hamburguesas',
  title: 'La Mega',
  price: 35000,
  desc: '150 g de carne premium, 150 g de sobrebarriga en tiras, doble tocineta, pechuga a la plancha, carne asada en cuadros, chorizo de la casa, huevo frito, queso cheddar, queso gratinado, vegetales y papas a la francesa.',
  image: 'images/burger3.png',
  ingredients: ['Carne premium 150g', 'Sobrebarriga en tiras', 'Tocineta doble', 'Pechuga a la plancha', 'Carne asada en cuadros', 'Chorizo de la casa', 'Huevo frito', 'Queso cheddar', 'Queso gratinado', 'Vegetales', 'Papas a la francesa'],
  extras: [
    { name: 'Carne adicional', price: 5000 },
    { name: 'Tocineta extra', price: 2000 },
    { name: 'Huevo adicional', price: 1500 },
    { name: 'Queso adicional', price: 1500 },
    { name: 'Porción de papas adicionales', price: 3500 }
  ]
}
,

{
  id: 'per1',
  category: 'perros',
  title: 'Clásico Pero Sabroso',
  price: 15000,
  desc: 'Pan artesanal, salchicha americana, tocineta ahumada en nuestra salsa caramelizada, queso gratinado y papas a la francesa.',
  image: 'images/hotdog1.png',
  ingredients: ['Pan artesanal', 'Salchicha americana', 'Tocineta ahumada', 'Salsa caramelizada', 'Queso gratinado', 'Papas a la francesa'],
  extras: [
    { name: 'Tocineta extra', price: 2000 },
    { name: 'Queso adicional', price: 1500 },
    { name: 'Salchicha adicional', price: 3000 },
    { name: 'Porción de papas adicionales', price: 3500 }
  ]
},
{
  id: 'per2',
  category: 'perros',
  title: 'Súper Llanero',
  price: 20000,
  desc: 'Pan artesanal, salchicha americana, 130g de pollo desmechado en nuestra salsa de la casa, queso gratinado y papas a la francesa.',
  image: 'images/hotdog2.png',
  ingredients: ['Pan artesanal', 'Salchicha americana', 'Pollo desmechado 130g', 'Salsa de la casa', 'Queso gratinado', 'Papas a la francesa'],
  extras: [
    { name: 'Pollo adicional', price: 3500 },
    { name: 'Tocineta extra', price: 2000 },
    { name: 'Queso adicional', price: 1500 },
    { name: 'Porción de papas adicionales', price: 3500 }
  ]
}
,
{
  id: 'opc1',
  category: '¿Aún no sabes qué comer?',
  title: 'Patacón de la Casa',
  price: 26000,
  desc: 'Plátano frito estripado, 100g de carne, 100g de pechuga, chorizo artesanal, vegetales frescos, queso gratinado, tocineta ahumada y aguacate.',
  image: 'images/patacon1.png',
  ingredients: ['Plátano frito estripado', 'Carne 100g', 'Pechuga 100g', 'Chorizo artesanal', 'Vegetales frescos', 'Queso gratinado', 'Tocineta ahumada', 'Aguacate'],
  extras: [
    { name: 'Carne adicional', price: 3500 },
    { name: 'Pechuga adicional', price: 3500 },
    { name: 'Chorizo extra', price: 2500 },
    { name: 'Porción de aguacate extra', price: 2000 }
  ]
},
{
  id: 'opc2',
  category: '¿Aún no sabes qué comer?',
  title: 'Maíz Súper Llanero',
  price: 25000,
  desc: 'Cama de papas, 150g de maíz dulce, 100g de carne, 100g de pechuga, chorizo artesanal, verduras y combinación de nuestras deliciosas salsas, queso rallado y aguacate.',
  image: 'images/patacon2.png',
  ingredients: ['Papas fritas', 'Maíz dulce 150g', 'Carne 100g', 'Pechuga 100g', 'Chorizo artesanal', 'Verduras', 'Salsas de la casa', 'Queso rallado', 'Aguacate'],
  extras: [
    { name: 'Carne adicional', price: 3500 },
    { name: 'Pechuga adicional', price: 3500 },
    { name: 'Maíz extra', price: 1500 },
    { name: 'Queso adicional', price: 1500 }
  ]
},
{
  id: 'opc3',
  category: '¿Aún no sabes qué comer?',
  title: 'Papitas Llaneras',
  price: 20000,
  desc: 'Papas a la francesa, pollo desmechado y tocineta en nuestra salsa de la casa.',
  image: 'images/patacon3.png',
  ingredients: ['Papas a la francesa', 'Pollo desmechado', 'Tocineta', 'Salsa de la casa'],
  extras: [
    { name: 'Pollo adicional', price: 3000 },
    { name: 'Tocineta extra', price: 2000 },
    { name: 'Porción de papas adicionales', price: 3500 }
  ]
}
,
{
  id: 'ent1',
  category: 'Entradas',
  title: 'Chorizo de la Casa',
  price: 5000,
  desc: 'Porción de chorizo artesanal acompañado de yuca al vapor.',
  image: 'images/entrada1.png',
  ingredients: ['Chorizo artesanal', 'Yuca al vapor'],
  extras: [
    { name: 'Porción adicional de chorizo', price: 3000 },
    { name: 'Yuca extra', price: 1500 }
  ]
},
{
  id: 'ent2',
  category: 'Entradas',
  title: 'Tostones Fritos',
  price: 15000,
  desc: '5 patacones servidos con salsa de la casa y queso rallado.',
  image: 'images/entrada2.png',
  ingredients: ['Patacones', 'Salsa de la casa', 'Queso rallado'],
  extras: [
    { name: 'Patacones adicionales', price: 2000 },
    { name: 'Queso extra', price: 1500 },
    { name: 'Salsa adicional', price: 1000 }
  ]
},
{
  id: 'ent3',
  category: 'Entradas',
  title: 'Pepitoria',
  price: 20000,
  desc: 'Tradicional pepitoria acompañada de papas a la francesa.',
  image: 'images/entrada3.png',
  ingredients: ['Pepitoria', 'Papas a la francesa'],
  extras: [
    { name: 'Porción extra de pepitoria', price: 4000 },
    { name: 'Papas adicionales', price: 2500 }
  ]
}
,
{
  id: 'ej1',
  category: 'Ejecutivo',
  title: 'Carne Asada',
  price: 17000,
  desc: 'Carne asada al término ideal, acompañada con arroz, ensalada y papas.',
  image: 'images/ejecutivo1.png',
  ingredients: ['Carne asada', 'Arroz', 'Ensalada', 'Papas fritas'],
  extras: [
    { name: 'Porción adicional de carne', price: 4000 },
    { name: 'Arroz extra', price: 1500 },
    { name: 'Ensalada adicional', price: 1000 }
  ]
},
{
  id: 'ej2',
  category: 'Ejecutivo',
  title: 'Hígado Encebollado',
  price: 17000,
  desc: 'Hígado encebollado tradicional, acompañado de arroz, papas y ensalada.',
  image: 'images/ejecutivo2.png',
  ingredients: ['Hígado encebollado', 'Arroz', 'Papas', 'Ensalada'],
  extras: [
    { name: 'Porción adicional de hígado', price: 3000 },
    { name: 'Cebolla extra', price: 1000 }
  ]
},
{
  id: 'ej3',
  category: 'Ejecutivo',
  title: 'Carne Bistec',
  price: 19000,
  desc: 'Carne tipo bistec servida con arroz, ensalada y papas a la francesa.',
  image: 'images/ejecutivo3.png',
  ingredients: ['Carne bistec', 'Arroz', 'Ensalada', 'Papas a la francesa'],
  extras: [
    { name: 'Carne adicional', price: 4000 },
    { name: 'Papas adicionales', price: 2000 }
  ]
},
{
  id: 'ej4',
  category: 'Ejecutivo',
  title: 'Carne Sudada',
  price: 17000,
  desc: 'Carne sudada con papa criolla y arroz, servida con ensalada fresca.',
  image: 'images/ejecutivo4.png',
  ingredients: ['Carne sudada', 'Papa criolla', 'Arroz', 'Ensalada'],
  extras: [
    { name: 'Porción adicional de carne', price: 4000 },
    { name: 'Papa criolla extra', price: 1500 }
  ]
},
{
  id: 'ej5',
  category: 'Ejecutivo',
  title: 'Pollo Asado',
  price: 17000,
  desc: 'Pechuga o presa de pollo asado, servida con arroz, papas y ensalada.',
  image: 'images/ejecutivo5.png',
  ingredients: ['Pollo asado', 'Arroz', 'Papas', 'Ensalada'],
  extras: [
    { name: 'Porción adicional de pollo', price: 4000 },
    { name: 'Salsa adicional', price: 1000 }
  ]
},
{
  id: 'ej6',
  category: 'Ejecutivo',
  title: 'Pollo Frito',
  price: 20000,
  desc: 'Crujiente pollo frito acompañado de papas a la francesa, arroz y ensalada.',
  image: 'images/ejecutivo6.png',
  ingredients: ['Pollo frito', 'Papas a la francesa', 'Arroz', 'Ensalada'],
  extras: [
    { name: 'Porción adicional de pollo', price: 5000 },
    { name: 'Papas adicionales', price: 2000 }
  ]
},
{
  id: 'ej7',
  category: 'Ejecutivo',
  title: 'Pechuga',
  price: 22000,
  desc: 'Pechuga jugosa a la plancha con arroz, papas a la francesa y ensalada.',
  image: 'images/ejecutivo7.png',
  ingredients: ['Pechuga a la plancha', 'Arroz', 'Papas a la francesa', 'Ensalada'],
  extras: [
    { name: 'Pechuga adicional', price: 5000 },
    { name: 'Salsa adicional', price: 1000 }
  ]
},
{
  id: 'ej8',
  category: 'Ejecutivo',
  title: 'Hígado Asado',
  price: 16000,
  desc: 'Hígado asado servido con arroz, papas fritas y ensalada fresca.',
  image: 'images/ejecutivo8.png',
  ingredients: ['Hígado asado', 'Arroz', 'Papas fritas', 'Ensalada'],
  extras: [
    { name: 'Porción adicional de hígado', price: 3000 },
    { name: 'Arroz extra', price: 1500 }
  ]
},
{
  id: 'ej9',
  category: 'Ejecutivo',
  title: 'Hígado Bistec',
  price: 18000,
  desc: 'Hígado preparado al estilo bistec, acompañado de arroz, papas y ensalada.',
  image: 'images/ejecutivo9.png',
  ingredients: ['Hígado tipo bistec', 'Arroz', 'Papas', 'Ensalada'],
  extras: [
    { name: 'Porción adicional de hígado', price: 3500 },
    { name: 'Papas adicionales', price: 2000 }
  ]
}

,
// === BEBIDAS ===
{
  id: 'b1',
  category: 'Bebidas',
  title: 'Cerezada',
  price: 7000,
  desc: 'Refrescante bebida de cereza natural servida fría.',
  image: 'images/cerezada.png',
  ingredients: ['Jugo de cereza', 'Hielo'],
},
{
  id: 'b2',
  category: 'Bebidas',
  title: 'Hierba Buena',
  price: 10000,
  desc: 'Bebida fría de hierba buena natural, ideal para refrescarte.',
  image: 'images/hierbaBuena.png',
  ingredients: ['Hierba buena', 'Hielo', 'Limón'],
},
{
  id: 'b3',
  category: 'Bebidas',
  title: 'Vaso de Panelada',
  price: 4500,
  desc: 'Vaso de refrescante bebida de panela fría o caliente según preferencia.',
  image: 'images/vaso-panelada.png',
  ingredients: ['Agua de panela', 'Limón'],
},
{
  id: 'b4',
  category: 'Bebidas',
  title: 'Jarra de Panelada',
  price: 8000,
  desc: 'Jarra de deliciosa bebida de panela para compartir.',
  image: 'images/jarra-panelada.png',
  ingredients: ['Agua de panela', 'Hielo', 'Limón'],
},
{
  id: 'b5',
  category: 'Bebidas',
  title: 'Michelada Tradicional',
  price: 4500,
  desc: 'Michelada clásica con limón, sal y toques de salsas al gusto.',
  image: 'images/michelada-tradicional.png',
  ingredients: ['Cerveza', 'Limón', 'Sal', 'Salsa inglesa'],
},
{
  id: 'b6',
  category: 'Bebidas',
  title: 'Michelada de Cerezada',
  price: 4500,
  desc: 'Michelada con toque dulce de cerezada, refrescante y diferente.',
  image: 'images/michelada-cerezada.png',
  ingredients: ['Cerveza', 'Cerezada', 'Limón', 'Sal'],
},
{
  id: 'b7',
  category: 'Bebidas',
  title: 'Agua',
  price: 3500,
  desc: 'Botella de agua natural.',
  image: 'images/agua.png',
  ingredients: ['Agua'],
},
{
  id: 'b8',
  category: 'Bebidas',
  title: 'Granizado Tropical',
  price: 7000,
  desc: 'Granizado de maracuyá, mango o fresa, con textura frappé.',
  image: 'images/granizado-tropical.png',
  ingredients: ['Fruta natural', 'Hielo frappé'],
},
{
  id: 'b9',
  category: 'Bebidas',
  title: 'Granizado de Cerezada',
  price: 7000,
  desc: 'Granizado helado de cerezada, dulce y refrescante.',
  image: 'images/granizado-cerezada.png',
  ingredients: ['Cerezada', 'Hielo frappé'],
},
{
  id: 'b10',
  category: 'Bebidas',
  title: 'Gaseosa Personal',
  price: 4500,
  desc: 'Gaseosa personal de diferentes sabores.',
  image: 'images/gaseosa-personal.png',
  ingredients: ['Gaseosa fría'],
},
{
  id: 'b11',
  category: 'Bebidas',
  title: 'Gaseosa 1.5 Lt',
  price: 8500,
  desc: 'Gaseosa familiar de 1.5 litros para compartir.',
  image: 'images/gaseosa-1-5.png',
  ingredients: ['Gaseosa fría'],
},
{
  id: 'b12',
  category: 'Bebidas',
  title: 'Soda y Ginger',
  price: 5000,
  desc: 'Soda o ginger ale fría y refrescante.',
  image: 'images/soda-ginger.png',
  ingredients: ['Soda', 'Hielo'],
},
{
  id: 'b13',
  category: 'Bebidas',
  title: 'Cerveza Nacional',
  price: 4500,
  desc: 'Cerveza nacional bien fría.',
  image: 'images/cerveza-nac.png',
  ingredients: ['Cerveza fría'],
},
{
  id: 'b14',
  category: 'Bebidas',
  title: 'Cerveza Importada',
  price: 7000,
  desc: 'Cerveza importada de calidad premium.',
  image: 'images/cerveza-imp.png',
  ingredients: ['Cerveza importada fría'],
},
{
  id: 'b15',
  category: 'Bebidas',
  title: 'Coronita',
  price: 5000,
  desc: 'Cerveza Coronita fría y refrescante.',
  image: 'images/coronita.png',
  ingredients: ['Cerveza coronita fría'],
}
];

const categories = [...new Set(products.map(p=>p.category))];

// ---------- Estado ----------
let cart = JSON.parse(localStorage.getItem('tb_cart') || '[]');
let activeCategory = 'picadas';

// ---------- DOM refs ----------
const catalogEl = document.getElementById('catalog');
const categoriesEl = document.querySelector('.categories');
const navBtns = document.querySelectorAll('.nav-btn');
const cartCountEl = document.getElementById('cart-count');
const cartDrawer = document.getElementById('cart-drawer');
const cartItemsEl = document.getElementById('cart-items');
const cartSubtotalEl = document.getElementById('cart-subtotal');
const cartDeliveryEl = document.getElementById('cart-delivery');
const cartTotalEl = document.getElementById('cart-total');
const openCartBtn = document.getElementById('open-cart');
const closeCartBtn = document.getElementById('close-cart');
const checkoutBtn = document.getElementById('checkout-btn');
const productModal = document.getElementById('product-modal');
const modalContent = document.getElementById('modal-content');
const modalClose = document.getElementById('modal-close');
const checkoutModal = document.getElementById('checkout-modal');
const checkoutForm = document.getElementById('checkout-form');
const addressLabel = document.getElementById('address-label');
const checkoutClose = document.getElementById('checkout-close');
const backToCartBtn = document.getElementById('back-to-cart');
const clearCartBtn = document.getElementById('clear-cart');
const searchInput = document.getElementById('search');

// ---------- Init ----------
function init(){
  renderCategories();
  setActiveCategory(activeCategory);
  bindEvents();
  refreshCartUI();
}
init();

// ---------- Render categorías ----------
function renderCategories(){
  categoriesEl.innerHTML = '';
  categories.forEach(cat=>{
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = cat === activeCategory ? 'active' : '';
    btn.dataset.cat = cat;
    btn.textContent = capitalize(cat);
    btn.addEventListener('click', ()=> switchCategory(cat));
    categoriesEl.appendChild(btn);
  });
}

// ---------- Cambiar categoría ----------
function setActiveCategory(cat){
  activeCategory = cat;
  Array.from(document.querySelectorAll('.categories button')).forEach(b=> b.classList.toggle('active', b.dataset.cat === cat));
  Array.from(navBtns).forEach(b=> b.classList.toggle('active', b.dataset.cat === cat));
  renderProducts(cat);
}

function switchCategory(cat){
  const ct = catalogEl;
  ct.classList.remove('fade-in');
  ct.classList.add('fade-out');
  setTimeout(()=>{
    setActiveCategory(cat);
    ct.classList.remove('fade-out');
    ct.classList.add('fade-in');
  }, 180);
}

// ---------- Render productos ----------
function renderProducts(cat){
  const q = (searchInput.value || '').trim().toLowerCase();
  const items = products.filter(p => p.category === cat && (p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q)));
  catalogEl.innerHTML = '';

  if(items.length === 0){
    catalogEl.innerHTML = `<div class="no-results">No hay productos</div>`;
    return;
  }

  items.forEach(p=>{
    const el = document.createElement('article');
    el.className = 'card';
    el.innerHTML = `
      <img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.title)}">
      <div class="title">${escapeHtml(p.title)}</div>
      <div class="desc">${escapeHtml(p.desc)}</div>
      <div class="meta">
        <div class="price">$${numberWithCommas(p.price)}</div>
        <button class="add" data-id="${p.id}">Agregar</button>
      </div>
    `;
    el.querySelector('.add').addEventListener('click', ()=> openProductModal(p.id));
    catalogEl.appendChild(el);
  });
}

// ---------- Modal producto ----------
function openProductModal(productId) {
  const p = products.find(x => x.id === productId);
  if (!p) return;

  productModal.classList.remove('hidden');
  productModal.setAttribute('aria-hidden', 'false');
  modalContent.innerHTML = '';

  const modalInner = document.createElement('div');
  modalInner.className = 'modal-inner';
  modalInner.innerHTML = `
    <div class="modal-header">
      <img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.title)}" class="modal-img">
      <h3>${escapeHtml(p.title)} — $${numberWithCommas(p.price)}</h3>
      <p class="desc">${escapeHtml(p.desc)}</p>
    </div>
    <div class="modal-body scrollable-area"></div>
    <div class="modal-footer">
      <div class="qty-controls">
        <button id="qty-decr" type="button">-</button>
        <span id="qty-val">1</span>
        <button id="qty-incr" type="button">+</button>
      </div>
      <div class="price-actions">
        <div id="price-breakdown">
          <div><strong>Subtotal:</strong> <span id="subtotal">$${numberWithCommas(p.price)}</span></div>
          <div><strong>Adicionales:</strong> <span id="extras-total">$0</span></div>
          <div><strong>Total:</strong> <span id="modal-price">$${numberWithCommas(p.price)}</span></div>
        </div>
        <button id="modal-add" class="btn-primary" type="button">Añadir al carrito</button>
      </div>
    </div>
  `;

  const scrollArea = modalInner.querySelector('.scrollable-area');
  let ingSection = null, extrasSection = null;

  // === Sección generadora ===
  function buildSection(title, items, dataAttr) {
    const section = document.createElement('div');
    section.className = 'section collapsed';

    const header = document.createElement('div');
    header.className = 'section-header';
    header.innerHTML = `<strong>${title} ▼</strong>`;

    const body = document.createElement('div');
    body.className = 'section-body checklist';

    items.forEach((item, idx) => {
      const id = `${dataAttr}-${p.id}-${idx}`;
      const label = document.createElement('label');
      label.className = 'check-item';

      if (dataAttr === 'ing') {
        label.innerHTML = `
          <input type="checkbox" data-ing="${escapeHtml(item)}" id="${id}">
          <span>Quitar ${escapeHtml(item)}</span>
        `;
      } else {
        label.innerHTML = `
          <div class="extra-item">
            <label>
              <input type="checkbox" data-extra="${escapeHtml(item.name)}" data-price="${item.price}" id="${id}">
              <span>${escapeHtml(item.name)} (+$${numberWithCommas(item.price)})</span>
            </label>
            <div class="extra-qty hidden">
              <button type="button" class="ex-decr">-</button>
              <span class="ex-val">1</span>
              <button type="button" class="ex-incr">+</button>
            </div>
          </div>
        `;
      }

      body.appendChild(label);
    });

    section.appendChild(header);
    section.appendChild(body);
    scrollArea.appendChild(section);
    return { section, header };
  }

  // === Ingredientes y adicionales ===
  if (p.ingredients?.length) {
    const { section, header } = buildSection('Quitar ingredientes', p.ingredients, 'ing');
    ingSection = section;
    header.addEventListener('click', () => {
      const open = !ingSection.classList.contains('collapsed');
      ingSection.classList.toggle('collapsed', open);
      header.innerHTML = `<strong>Quitar ingredientes ${open ? '▼' : '▲'}</strong>`;
      if (extrasSection) {
        extrasSection.classList.add('collapsed');
        extrasSection.querySelector('.section-header').innerHTML = '<strong>Agregar adicionales ▼</strong>';
      }
    });
  }

  if (p.extras?.length) {
    const { section, header } = buildSection('Agregar adicionales', p.extras, 'ex');
    extrasSection = section;
    header.addEventListener('click', () => {
      const open = !extrasSection.classList.contains('collapsed');
      extrasSection.classList.toggle('collapsed', open);
      header.innerHTML = `<strong>Agregar adicionales ${open ? '▼' : '▲'}</strong>`;
      if (ingSection) {
        ingSection.classList.add('collapsed');
        ingSection.querySelector('.section-header').innerHTML = '<strong>Quitar ingredientes ▼</strong>';
      }
    });
  }

  modalContent.appendChild(modalInner);

  // === Lógica de cantidad ===
  let qty = 1;
  function getExtrasSum() {
    let total = 0;
    modalContent.querySelectorAll('input[data-extra]:checked').forEach(chk => {
      const price = Number(chk.dataset.price);
      const parent = chk.closest('.extra-item');
      const exQty = Number(parent.querySelector('.ex-val').textContent);
      total += price * exQty;
    });
    return total;
  }

  function updateModalPrice() {
    const extrasSum = getExtrasSum();
    const subtotal = p.price * qty;
    const total = subtotal + extrasSum;

    document.getElementById('subtotal').textContent = '$' + numberWithCommas(subtotal);
    document.getElementById('extras-total').textContent = '$' + numberWithCommas(extrasSum);
    document.getElementById('modal-price').textContent = '$' + numberWithCommas(total);
  }

  // === Eventos de cantidad global ===
  modalContent.querySelector('#qty-decr').addEventListener('click', () => {
    if (qty > 1) qty--;
    document.getElementById('qty-val').textContent = qty;
    updateModalPrice();
  });
  modalContent.querySelector('#qty-incr').addEventListener('click', () => {
    qty++;
    document.getElementById('qty-val').textContent = qty;
    updateModalPrice();
  });

  // === Checkbox adicionales con contador ===
  modalContent.addEventListener('change', e => {
    if (e.target.matches('input[data-extra]')) {
      const extraItem = e.target.closest('.extra-item');
      const qtyBox = extraItem.querySelector('.extra-qty');
      qtyBox.classList.toggle('hidden', !e.target.checked);
      updateModalPrice();
    }
  });

// === Control preciso de botones + y - para adicionales ===
['click', 'touchstart'].forEach(evtType => {
  modalContent.addEventListener(evtType, e => {
    const btn = e.target.closest('.ex-incr, .ex-decr');
    if (!btn) return;

    e.stopPropagation();
    e.preventDefault();

    // Previene clicks múltiples simultáneos
    if (btn.disabled) return;
    btn.disabled = true;
    setTimeout(() => btn.disabled = false, 150);

    const qtyBox = btn.closest('.extra-qty');
    const valEl = qtyBox.querySelector('.ex-val');
    let val = Number(valEl.textContent);

    if (btn.classList.contains('ex-incr')) val++;
    else if (val > 1) val--;

    valEl.textContent = val;
    updateModalPrice();
  });
});



  // === Añadir al carrito ===
  modalContent.querySelector('#modal-add').addEventListener('click', () => {
    const removed = Array.from(modalContent.querySelectorAll('input[data-ing]:checked')).map(i => i.dataset.ing);
    const extras = Array.from(modalContent.querySelectorAll('input[data-extra]:checked')).map(i => {
      const parent = i.closest('.extra-item');
      const exQty = Number(parent.querySelector('.ex-val').textContent);
      return {
        name: i.dataset.extra,
        price: Number(i.dataset.price),
        qty: exQty
      };
    });
    addToCart({ productId: p.id, title: p.title, price: p.price, qty, removed, extras });
    closeProductModal();
  });
}









function closeProductModal(){
  productModal.classList.add('hidden');
  productModal.setAttribute('aria-hidden','true');
  modalContent.innerHTML = '';
}
modalClose.addEventListener('click', closeProductModal);
productModal.addEventListener('click', (e)=>{ if(e.target === productModal) closeProductModal(); });

// ---------- Carrito ----------
function addToCart(item){
  const key = generateCartKey(item);
  const existing = cart.find(c => c.key === key);
  if(existing){ existing.qty += item.qty; }
  else{ cart.push({...item, key}); }
  persistCart();
  refreshCartUI();
}

function generateCartKey(it){
  const extrasPart = (it.extras || []).map(e => e.name).sort().join('|') || '';
  const removedPart = (it.removed || []).slice().sort().join('|') || '';
  return `${it.productId}::${extrasPart}::${removedPart}`;
}

function persistCart(){
  localStorage.setItem('tb_cart', JSON.stringify(cart));
}

function refreshCartUI(){
  cartCountEl.textContent = String(cart.reduce((s,i) => s + i.qty, 0));
  cartItemsEl.innerHTML = '';
  let subtotal = 0;

  if(cart.length === 0){
    cartItemsEl.innerHTML = '<div class="muted">Tu carrito está vacío</div>';
  } else {
    cart.forEach((c, idx)=>{
      const extrasText = (c.extras && c.extras.length) ? ('+' + c.extras.map(e=>e.name).join(', ')) : '';
      const removedText = (c.removed && c.removed.length) ? ('(sin ' + c.removed.join(', ') + ')') : '';
      const extrasSum = (c.extras || []).reduce((s,e)=> s + (e.price || 0), 0);
      const itemTotal = (c.price + extrasSum) * c.qty;
      subtotal += itemTotal;

      const row = document.createElement('div');
      row.className = 'cart-item';
      row.innerHTML = `
        <div class="info">
          <div><strong>${escapeHtml(c.title)}</strong> ${escapeHtml(removedText)}</div>
          <div class="muted">${escapeHtml(extrasText)}</div>
        </div>
        <div style="text-align:right">
          <div>$${numberWithCommas(itemTotal)}</div>
          <div class="qty-controls">
            <button data-action="decr" data-idx="${idx}" type="button">-</button>
            <span>${c.qty}</span>
            <button data-action="incr" data-idx="${idx}" type="button">+</button>
            <button data-action="del" data-idx="${idx}" type="button">🗑</button>
          </div>
        </div>
      `;
      cartItemsEl.appendChild(row);
    });
  }

  cartSubtotalEl.textContent = '$' + numberWithCommas(subtotal);
  
 cartDeliveryEl.textContent = '$0';
cartTotalEl.textContent = '$' + numberWithCommas(subtotal);

  // bind buttons
  cartItemsEl.querySelectorAll('button').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const action = btn.dataset.action;
      const i = Number(btn.dataset.idx);
      if(Number.isNaN(i)) return;
      if(action === 'incr') cart[i].qty++;
      else if(action === 'decr') cart[i].qty = Math.max(1, cart[i].qty - 1);
      else if(action === 'del') cart.splice(i, 1);
      persistCart();
      refreshCartUI();
    });
  });
}

// ---------- Interacciones UI ----------
openCartBtn.addEventListener('click', ()=>{ cartDrawer.classList.remove('hidden'); cartDrawer.setAttribute('aria-hidden','false'); });
closeCartBtn.addEventListener('click', ()=>{ cartDrawer.classList.add('hidden'); cartDrawer.setAttribute('aria-hidden','true'); });
checkoutBtn.addEventListener('click', ()=>{ cartDrawer.classList.add('hidden'); openCheckout(); });
clearCartBtn.addEventListener('click', ()=>{ if(confirm('Vaciar carrito?')){ cart = []; persistCart(); refreshCartUI(); } });

// ---------- Checkout ----------
function openCheckout(){
  if(cart.length === 0){ alert('El carrito está vacío.'); return; }
  checkoutForm.reset();
  addressLabel.classList.add('hidden');
  checkoutModal.classList.remove('hidden');
  checkoutModal.setAttribute('aria-hidden','false');
}

checkoutClose.addEventListener('click', ()=>{ checkoutModal.classList.add('hidden'); checkoutModal.setAttribute('aria-hidden','true'); });
backToCartBtn.addEventListener('click', ()=>{ checkoutModal.classList.add('hidden'); cartDrawer.classList.remove('hidden'); });

// Mostrar campo dirección sólo si es domicilio
checkoutForm.addEventListener('change', () => {
  const method = checkoutForm.querySelector('input[name="method"]:checked')?.value || 'recoger';
  const addressLabel = document.getElementById('address-label');
  const envioRow = document.getElementById('envio-row');
  const deliveryEl = document.getElementById('cart-delivery');
  const totalEl = document.getElementById('cart-total-checkout');

  // Mostrar campo de dirección solo si es domicilio
  addressLabel.classList.toggle('hidden', method !== 'domicilio');

  // Calcular subtotal
  const subtotal = cart.reduce((s, i) => {
    const extrasSum = (i.extras || []).reduce((x, e) => x + (e.price || 0), 0);
    return s + (i.price + extrasSum) * i.qty;
  }, 0);

  // Calcular envío y total
  const delivery = method === 'domicilio' && subtotal > 0 ? DELIVERY_FEE : 0;
  const total = subtotal + delivery;

  // Mostrar u ocultar fila de envío
  envioRow.classList.toggle('hidden', method !== 'domicilio');

  // Actualizar textos
  deliveryEl.textContent = `$${numberWithCommas(delivery)}`;
  totalEl.textContent = `$${numberWithCommas(total)}`;
});





// Envío por WhatsApp
checkoutForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const fd = new FormData(checkoutForm);
  const clientName = fd.get('name') || '';
  const clientPhone = fd.get('phone') || '';
  const method = fd.get('method') || 'recoger';
  const payment = fd.get('payment') || '';
  const address = fd.get('address') || '';
  const notes = fd.get('notes') || '';

  let textParts = [];
  textParts.push('🧾 *Nuevo Pedido - Club Sandwich & Juice ✅*');
  textParts.push(`👤 Cliente: ${clientName}`);
  textParts.push(`📞 Teléfono: ${clientPhone}`);
  textParts.push(`🚚 Tipo: ${method}`);
  if (method === 'domicilio') textParts.push(`🏠 Dirección: ${address}`);
  textParts.push(`💳 Pago: ${payment}`);
  textParts.push('');
  textParts.push('🍔 *Detalle del pedido:*');

  let subtotal = 0;
  cart.forEach(c => {
    const extrasList = (c.extras && c.extras.length)
      ? c.extras.map(x => `   ➕ ${x.qty}x ${x.name} ($${numberWithCommas(x.price * x.qty)})`).join('\n')
      : '';
    const removedText = (c.removed && c.removed.length)
      ? (' sin ' + c.removed.join(', '))
      : '';
    const extrasSum = (c.extras || []).reduce((s, e) => s + (e.price * e.qty || 0), 0);
    const itemTotal = (c.price + extrasSum) * c.qty;
    subtotal += itemTotal;

    textParts.push(`${c.qty}x ${c.title}${removedText} — *$${numberWithCommas(itemTotal)}*`);
    if (extrasList) textParts.push(extrasList);
  });

  const delivery = method === 'domicilio' ? DELIVERY_FEE : 0;
  const total = subtotal + delivery;

  textParts.push('');
  textParts.push(`🧮 Subtotal: $${numberWithCommas(subtotal)}`);
  if (method === 'domicilio') {
    textParts.push(`🚗 Envío: $${numberWithCommas(delivery)}`);
  } else {
    textParts.push(`🏪 Envío: Sin costo (recoge en el local)`);
  }
  textParts.push(`💰 *Total: $${numberWithCommas(total)}*`);

  if (notes) textParts.push(`📝 Notas: ${notes}`);

  const msg = encodeURIComponent(textParts.join('\n'));
  const bp = String(BUSINESS_PHONE || '').replace(/[^0-9]/g, '');

  if (!bp || bp.length < 8) {
    alert('Configura BUSINESS_PHONE en app.js con el número del negocio.');
    return;
  }

  const waUrl = `https://wa.me/${bp}?text=${msg}`;
  window.open(waUrl, '_blank');
});



// ---------- Utilidades ----------
function bindEvents(){
  navBtns.forEach(b=> b.addEventListener('click', ()=> setActiveCategory(b.dataset.cat)));
  cartCountEl.addEventListener('dblclick', ()=> { if(confirm('Vaciar carrito?')){ cart = []; persistCart(); refreshCartUI(); } });
  checkoutModal.addEventListener('click', (e)=> { if(e.target === checkoutModal) checkoutModal.classList.add('hidden'); });
  searchInput.addEventListener('input', ()=> renderProducts(activeCategory));
}

function capitalize(s){ return String(s || '').charAt(0).toUpperCase() + String(s || '').slice(1); }
function numberWithCommas(x){ return String(x).replace(/\B(?=(\d{3})+(?!\d))/g, '.'); }
function escapeHtml(s){ return String(s || '').replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }



// ====== MENÚ LATERAL ======
const menuBtn = document.getElementById('menu-btn');
const sideMenu = document.getElementById('side-menu');
const closeMenu = document.getElementById('close-menu');

menuBtn.addEventListener('click', () => {
  // Primero activamos el menú
  sideMenu.classList.add('show');
  sideMenu.style.opacity = 0;
  sideMenu.style.transform = 'translateX(-20px)'; // empieza desplazado
  sideMenu.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

  // Forzamos el repaint antes de animar
  requestAnimationFrame(() => {
    sideMenu.style.opacity = 1;
    sideMenu.style.transform = 'translateX(0)';
  });
  sideMenu.classList.remove('hidden');
});


closeMenu.addEventListener('click', () => {
  sideMenu.classList.remove('show');
  setTimeout(() => sideMenu.classList.add('hidden'), 350);
});

// Cerrar tocando fuera del panel
sideMenu.addEventListener('click', (e) => {
  if (e.target === sideMenu) {
    sideMenu.classList.remove('show');
    setTimeout(() => sideMenu.classList.add('hidden'), 350);
  }
});




// ====== FORMULARIO DE PAGO ======

document.addEventListener("DOMContentLoaded", () => {
  const paymentSelect = document.getElementById("payment-method");
  const transferInfo = document.getElementById("transfer-info");
  const methodRadios = document.querySelectorAll('input[name="method"]');
  const addressLabel = document.getElementById("address-label");
  const envioRow = document.getElementById("envio-row");
  const cartDelivery = document.getElementById("cart-delivery");
  const DELIVERY_FEE = 5000; // 💰 valor del domicilio
  const accountNumber = document.getElementById("account-number");
  const copyBtn = document.getElementById("copy-account");

  // 🔸 Mostrar u ocultar dirección según método de entrega
  methodRadios.forEach(radio => {
    radio.addEventListener("change", () => {
      if (radio.value === "domicilio" && radio.checked) {
        addressLabel.classList.remove("hidden");
        envioRow.classList.remove("hidden");
        cartDelivery.textContent = `$${DELIVERY_FEE.toLocaleString()}`;
      } else if (radio.value === "recoger" && radio.checked) {
        addressLabel.classList.add("hidden");
        envioRow.classList.add("hidden");
        cartDelivery.textContent = "$0";
      }
    });
  });

  // 🔸 Mostrar info bancaria solo si selecciona transferencia
  paymentSelect.addEventListener("change", () => {
    if (paymentSelect.value === "transferencia") {
      transferInfo.classList.remove("hidden");
    } else {
      transferInfo.classList.add("hidden");
    }
  });

  // 🔸 Copiar número de cuenta
  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(accountNumber.textContent.trim())
      .then(() => {
        copyBtn.textContent = "¡Copiado!";
        copyBtn.classList.add("copied");
        setTimeout(() => {
          copyBtn.textContent = "Copiar";
          copyBtn.classList.remove("copied");
        }, 1800);
      })
      .catch(() => alert("No se pudo copiar"));
  });
});
