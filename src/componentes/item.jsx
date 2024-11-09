import { Link } from "react-router-dom";

export default function Item({ product}) {
  
  return (
    <>
      <div className="flex justify-center items-center min-h-screen ">
        <div className="max-w-[720px] mx-auto">
          <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 border-solid border-4 border-blue-700">
            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
              <img
                src={product.image}
                alt="card-image"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-red-700">
                  {product.nombre}
                </p>
                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-700">
                 $ {product.price}
                </p>
              </div>
             
            </div>
            <div className="p-6 pt-0">
              <Link
                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                to={`/item/${product.id}`}
              >
                Ver más
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
