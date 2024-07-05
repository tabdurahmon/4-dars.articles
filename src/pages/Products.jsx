import { data } from "autoprefixer";
import { useFetch } from "../hook/useFetch";
import { Link, NavLink } from "react-router-dom";

function Products() {
  const url = "https://dummyjson.com/products";
  const { data: products, isPending, error } = useFetch(url);
  console.log(data);

  return (
    <div className="w-full text-center">
      {isPending && (
        <div className="w-full h-lvh flex justify-center pt-12">
          <h3 className="text-3xl font-semibold">Loading...</h3>
        </div>
      )}

      {error && <h3>{error}</h3>}

      <h1 className="font-bold font-serif mb-10 text-5xl">Products</h1>

      {products && (
        <div className="flex flex-wrap gap-5 justify-center ">
          {products.products.map((product) => {
            // console.log(product);
            return (
              <div className="card container ml-auto mr-auto   w-96 shadow-2xl  mb-5">
                <figure>
                  <img src={product.thumbnail} alt="Shoes" />
                </figure>
                <div className="card-body px-1 pb-5 ">
                  <h2 className="text-4xl font-bold font-serif h-44">
                    {product.title}
                  </h2>
                  <p className="text-orange-500 font-thin">
                    {product.description}
                  </p>
                  {/* The button to open modal */}
                  <label htmlFor="my_modal_7" className="btn">
                    <Link
                      to={`/singleProduct/${product.id}`}
                      className="btn btn-wide font-bold font-serif"
                    >
                      Read More
                    </Link>
                  </label>

                  {/* Put this part before </body> tag */}
                  <input
                    type="checkbox"
                    id="my_modal_7"
                    className="modal-toggle"
                  />
                  <div className="modal" role="dialog">
                    <div className="modal-box">
                      <h3 className="text-lg font-bold">Hello!</h3>
                      <p className="py-4">
                        This modal works with a hidden checkbox!
                      </p>
                    </div>
                    <label className="modal-backdrop" htmlFor="my_modal_7">
                      Close
                    </label>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Products;
