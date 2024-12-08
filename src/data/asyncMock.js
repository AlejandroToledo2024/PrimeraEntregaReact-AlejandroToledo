const productos = [
    {
      id: 1,
      image: "https://f.fcdn.app/imgs/bdb42d/tienda.nacional.uy/tnacuy/ba82/original/catalogo/NU342941_001_1/460x460/remera-cover-nacional-mujer-azul-marino.jpg",
      price: 1500,
      nombre: "Camiseta Femenina Entrenamiento",
      description: "Esta camiseta de entrenamiento está diseñada especialmente para mujeres apasionadas del Club Nacional de Football. Es ideal para entrenamientos y actividades físicas, proporcionando confort y transpirabilidad.",
      categorias: "Remeras", 
      stock: 10

    },
    {
      id: 2,
      image: "https://cnf.nyc3.cdn.digitaloceanspaces.com/thumbs/normal/HtDpV9I9xXHJFKBZmKBlV7ydUsAOfzoSDmyutKr96zMszqpLZ6OH3hT5cLOdzcKV.jpeg",
      price: 1700,
      nombre: "Camiseta Masculina Partido",
      description: "Camiseta oficial del Club Nacional de Football, diseñada para brindar máxima comodidad en los partidos. Fabricada con materiales de alta calidad para los aficionados más exigentes.",
      categorias:  "Remeras",
      stock: 10
    },
    {
      id: 3,
      image: "https://cnf.nyc3.cdn.digitaloceanspaces.com/thumbs/normal/5cYz4nPR5A6LB8Be39BPnRxaAUL1D7YmiEpiXtv5VJyyLLmETCwY5Kqm3ZLhc2x9.jpeg",
      price: 1300,
      nombre: "Camiseta Del Hincha",
      description: "Top deportivo diseñado para ofrecer soporte y comodidad durante los entrenamientos intensos. Permite una gran transpirabilidad para mantenerte fresca.",
      categorias: "Remeras",
      stock: 10
    },
    {
      id: 4,
      image: "https://f.fcdn.app/imgs/ea5239/tienda.nacional.uy/tnacuy/f864/original/catalogo/NU342941_009_1/460x460/remera-cover-nacional-mujer-blanco.jpg",
      price: 950,
      nombre: "Camiseta Femenina Casual",
      description: "Camiseta casual para fanáticas del Club Nacional de Football, ideal para el uso diario. Hecha de materiales cómodos y suaves.",
      categorias:  "Remeras",
      stock: 10
    },
    {
      id: 5,
      image: "https://http2.mlstatic.com/D_NQ_NP_850345-MLU76596577375_052024-O.webp",
      price: 1900,
      nombre: "Pantalones Deportivos",
      description: "Pantalones diseñados para entrenamientos o para un look deportivo casual. Ofrecen libertad de movimiento y durabilidad.",
      categorias: "Pantalones",
      stock: 10
    },
    {
      id: 6,
      image: "https://f.fcdn.app/imgs/e27699/www.timeout.com.uy/timeuy/7fb6/original/catalogo/NU142994_001_1/2000-2000/bermuda-ribbon-nacional-oficial-hombre-001.jpg",
      price: 1250,
      nombre: "Short Deportivo Masculino",
      description: "Short ligero y cómodo, ideal para sesiones de entrenamiento intensas. Hecho para brindar libertad de movimiento y ventilación.",
      categorias: "Accesorios",
      stock: 10
    },
    {
      id: 7,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF0aJdWU2sGURKOxHc5uHOlGZcbKDvLOXnGg&s",
      price: 750,
      nombre: "Medias de Entrenamiento",
      description: "Medias de entrenamiento de alta durabilidad. Proporcionan comodidad durante largos periodos de ejercicio.",
      categorias: "Accesorios",
      stock: 10
    },
    {
      id: 8,
      image: "https://once.com.uy/wp-content/uploads/2024/05/nu142979061-1.png",
      price: 1900,
      nombre: "Chaqueta Impermeable",
      description: "Chaqueta resistente al agua, perfecta para días lluviosos y fríos. Diseñada con materiales de alta calidad para mantenerte seca y abrigada.",
      categorias: "Accesorios",
      stock: 10
    },
    {
      id: 9,
      image: "https://f.fcdn.app/imgs/42edc7/www.stadium.com.uy/std/e52b/original/catalogo/129.001502910/640_640/championes-de-ninos-nacional-run-basic-kids-azul-marino-rojo.jpg",
      price: 650,
      nombre: "Championes",
      description: "Cinta absorbente para la cabeza, diseñada para mantener el sudor bajo control durante el ejercicio.",
      categorias:"Accesorios",
      stock: 10
    },
    {
      id: 10,
      image: "https://f.fcdn.app/imgs/b03c25/tienda.nacional.uy/tnacuy/014d/original/catalogo/NU942899_169_1/1920-1200/mochila-bolsilludo-nacional-azul-marino-azul-royal-blanco.jpg",
      price: 600,
      nombre: "Mochilas",
      description: "Muñequeras absorbentes ideales para actividades deportivas. Ofrecen confort y protección durante el entrenamiento.",
      categorias: "Accesorios",
      stock: 10
    },
    {
      id: 11,
      image: "https://disershop.com.uy/images/aadiser/productos/GPF-N21.jpg",
      price: 1500,
      nombre: "Gorra Oficial",
      description: "Gorra oficial del Club Nacional de Football, perfecta para protegerse del sol mientras representas al club.",
      categorias: "Accesorios",
      stock: 10
    },
    {
      id: 12,
      image: "https://bernachin.com.uy/wp-content/uploads/2024/03/buzo-plaquet-cndef-nacional-oficial-hombre-914.webp",
      price: 1200,
      nombre: "Buzo Deportivo Masculino",
      description: "Buzo deportivo que proporciona calidez y confort durante el entrenamiento, ideal para climas fríos.",
      categorias: "Remeras",
      stock: 10
    },
    {
      id: 13,
      image: "https://f.fcdn.app/imgs/ec86d6/tienda.nacional.uy/tnacuy/ca49/original/catalogo/N56002U0_001_1/460x460/remera-pro-training-camo-nacional-hombre-azul-marino.jpg",
      price: 3000,
      nombre: "Remera Casual",
      description: "Remera de alta calidad para fanáticos del club, ideal para mantenerse abrigado en días frescos.",
      categorias: "Remeras",
      stock: 10
    },
    {
      id: 14,
      image: "https://dinoel.com.uy/wp-content/uploads/2022/05/pantalon-umbro-cndef-roxa-dama-azul-marino-rojo-blanco-1.jpg",
      price: 2090,
      nombre: "Pantalón de Entrenamiento Masculino",
      description: "Pantalón diseñado para entrenamientos intensos. Proporciona comodidad y flexibilidad en cada movimiento.",
      categorias:"Pantalones",
      stock: 10
    },
    {
      id: 15,
      image: "https://f.fcdn.app/imgs/50df6d/www.globalsports.com.uy/gls/3088/original/catalogo/UMNU342931-4338-3/1500-1500/campera-puffer-cndef-nacional-oficial-r94.jpg",
      price: 4560,
      nombre: "Campera Rompevientos Femenina",
      description: "Campera resistente al viento de alta calidad, ideal para los meses de invierno. Brinda una excelente protección contra el frío.",
      categorias: "Remeras",
      stock: 10
    },
    {
      id: 16,
      image: "https://http2.mlstatic.com/D_NQ_NP_870593-MLU76301840672_052024-O.webp",
      price: 2500,
      nombre: "Pantalón Casual Deportivo Femenino",
      description: "Pantalón cómodo y versátil, ideal tanto para el deporte como para un look casual diario.",
      categorias: "Pantalones",
      stock: 10
    },
    {
      id: 17,
      image: "https://http2.mlstatic.com/D_NQ_NP_831485-MLU76330589244_052024-O.webp",
      price: 3600,
      nombre: "Campera de Invierno Masculina",
      description: "Campera diseñada para los días de invierno, proporciona calidez y protección en climas fríos.",
      categorias: "Accesorios",
      stock: 10
    },
    {
      id: 18,
      image: "https://http2.mlstatic.com/D_NQ_NP_972234-MLU72244530179_102023-O.webp",
      price: 550,
      nombre: "Botinera",
      description: "Botinea con comodiad en sus espacios de almacenamientos para llevar lo necesario ya sea para partido , entrenamiento o actividad personal.",
      categorias: "Accesorios",
      stock: 10
    },
    {
      id: 19,
      image: "https://www.mvdsport.uy/wp-content/uploads/2021/09/NU941300016S.jpg",
      price: 2300,
      nombre: "Chaleco Deportivo Femenino",
      description: "Chaleco ajustado y cómodo, diseñado para proporcionar libertad de movimiento en los entrenamientos.",
      categorias: "Accesorios",
      stock: 10
    },
    {
      id: 20,
      image: "https://http2.mlstatic.com/D_NQ_NP_812303-MLU79105307604_092024-O.webp",
      price: 3200,
      nombre: "Chaqueta Premium",
      description: "Chaqueta premium con un diseño elegante, resistente y duradera, perfecta para lucir en cualquier ocasión.",
      categorias: "Accesorios",
      stock: 10
    }
  ];
export const getProducts = ()=>{
    return new Promise ((resolve)=>{
        setTimeout(() => {
            resolve(productos)
    },1000)
})
}
export const findProductsId = (id)=>{
  return new Promise ((resolve)=>{
    setTimeout (() =>{
      resolve (productos.find(producto=>producto.id==id))
    },500)
  })
}

export const getProductsByCategory = ({id})=>{
  console.log(id)
  return new Promise ((resolve)=>{
    setTimeout (()=>{
      resolve (productos.filter(producto=>producto.categorias.toUpperCase()==id.toUpperCase()))
    })
  })
}