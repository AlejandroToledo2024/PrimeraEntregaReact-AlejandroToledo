const productos = [
    {
      id: 1,
      image: "./src/assets/remera-casual-mujer.jpg",
      price: 1500,
      nombre: "Camiseta Femenina Entrenamiento",
      description: "Esta camiseta de entrenamiento está diseñada especialmente para mujeres apasionadas del Club Nacional de Football. Es ideal para entrenamientos y actividades físicas, proporcionando confort y transpirabilidad.",
      categorias: "Remeras", 
    },
    {
      id: 2,
      image: "./src/assets/remera-home.jpg",
      price: 1700,
      nombre: "Camiseta Masculina Partido",
      description: "Camiseta oficial del Club Nacional de Football, diseñada para brindar máxima comodidad en los partidos. Fabricada con materiales de alta calidad para los aficionados más exigentes.",
      categorias:  "Remeras"
    },
    {
      id: 3,
      image: "./src/assets/camiseta-del-hincha.jpg",
      price: 1300,
      nombre: "Camiseta Del Hincha",
      description: "Top deportivo diseñado para ofrecer soporte y comodidad durante los entrenamientos intensos. Permite una gran transpirabilidad para mantenerte fresca.",
      categorias: "Remeras"
    },
    {
      id: 4,
      image: "./src/assets/remera-femenina.jpg",
      price: 950,
      nombre: "Camiseta Femenina Casual",
      description: "Camiseta casual para fanáticas del Club Nacional de Football, ideal para el uso diario. Hecha de materiales cómodos y suaves.",
      categorias:  "Remeras"
    },
    {
      id: 5,
      image: "./src/assets/pantalon.jpg",
      price: 1900,
      nombre: "Pantalones Deportivos",
      description: "Pantalones diseñados para entrenamientos o para un look deportivo casual. Ofrecen libertad de movimiento y durabilidad.",
      categorias: "Pantalones"
    },
    {
      id: 6,
      image: "./src/assets/short-hombre.jpg",
      price: 1250,
      nombre: "Short Deportivo Masculino",
      description: "Short ligero y cómodo, ideal para sesiones de entrenamiento intensas. Hecho para brindar libertad de movimiento y ventilación.",
      categorias: "Accesorios"
    },
    {
      id: 7,
      image: "./src/assets/medias.jpg",
      price: 750,
      nombre: "Medias de Entrenamiento",
      description: "Medias de entrenamiento de alta durabilidad. Proporcionan comodidad durante largos periodos de ejercicio.",
      categorias: "Accesorios"
    },
    {
      id: 8,
      image: "./src/assets/campera-impermeable.jpg",
      price: 1900,
      nombre: "Chaqueta Impermeable",
      description: "Chaqueta resistente al agua, perfecta para días lluviosos y fríos. Diseñada con materiales de alta calidad para mantenerte seca y abrigada.",
      categorias: "Accesorios"
    },
    {
      id: 9,
      image: "./src/assets/calzado.jpg",
      price: 650,
      nombre: "Championes",
      description: "Cinta absorbente para la cabeza, diseñada para mantener el sudor bajo control durante el ejercicio.",
      categorias:"Accesorios"
    },
    {
      id: 10,
      image: "./src/assets/mochila-umbro-nacional-tricolor-s-c.jpg",
      price: 600,
      nombre: "Mochilas",
      description: "Muñequeras absorbentes ideales para actividades deportivas. Ofrecen confort y protección durante el entrenamiento.",
      categorias: "Accesorios"
    },
    {
      id: 11,
      image: "./src/assets/gorro.jpg",
      price: 1500,
      nombre: "Gorra Oficial",
      description: "Gorra oficial del Club Nacional de Football, perfecta para protegerse del sol mientras representas al club.",
      categorias: "Accesorios"
    },
    {
      id: 12,
      image: "./src/assets/Buzo-hombre.jpg",
      price: 1200,
      nombre: "Buzo Deportivo Masculino",
      description: "Buzo deportivo que proporciona calidez y confort durante el entrenamiento, ideal para climas fríos.",
      categorias: "Remeras"
    },
    {
      id: 13,
      image: "./src/assets/remera-casual-hombre.jpg",
      price: 3000,
      nombre: "Remera Casual",
      description: "Remera de alta calidad para fanáticos del club, ideal para mantenerse abrigado en días frescos.",
      categorias: "Remeras"
    },
    {
      id: 14,
      image: "./src/assets/pantalon-entrenamiento.jpg",
      price: 2090,
      nombre: "Pantalón de Entrenamiento Masculino",
      description: "Pantalón diseñado para entrenamientos intensos. Proporciona comodidad y flexibilidad en cada movimiento.",
      categorias:"Pantalones"
    },
    {
      id: 15,
      image: "./src/assets/campera-mujer.jpg",
      price: 4560,
      nombre: "Campera Rompevientos Femenina",
      description: "Campera resistente al viento de alta calidad, ideal para los meses de invierno. Brinda una excelente protección contra el frío.",
      categorias: "Remeras"
    },
    {
      id: 16,
      image: "./src/assets/pantalon-mujer.jpg",
      price: 2500,
      nombre: "Pantalón Casual Deportivo Femenino",
      description: "Pantalón cómodo y versátil, ideal tanto para el deporte como para un look casual diario.",
      categorias: "Pantalones"
    },
    {
      id: 17,
      image: "./src/assets/campera-impermeable.jpg",
      price: 3600,
      nombre: "Campera de Invierno Masculina",
      description: "Campera diseñada para los días de invierno, proporciona calidez y protección en climas fríos.",
      categorias: "Accesorios"
    },
    {
      id: 18,
      image: "./src/assets/Botinera.jpg",
      price: 550,
      nombre: "Botinera",
      description: "Botinea con comodiad en sus espacios de almacenamientos para llevar lo necesario ya sea para partido , entrenamiento o actividad personal.",
      categorias: "Accesorios"
    },
    {
      id: 19,
      image: "./src/assets/chaleco.jpg",
      price: 2300,
      nombre: "Chaleco Deportivo Femenino",
      description: "Chaleco ajustado y cómodo, diseñado para proporcionar libertad de movimiento en los entrenamientos.",
      categorias: "Accesorios"
    },
    {
      id: 20,
      image: "./src/assets/chaqueta-elite.jpg",
      price: 3200,
      nombre: "Chaqueta Premium",
      description: "Chaqueta premium con un diseño elegante, resistente y duradera, perfecta para lucir en cualquier ocasión.",
      categorias: "Accesorios"
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