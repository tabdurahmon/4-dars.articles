import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hook/useFetch";

function SingleProduct() {
  const { id } = useParams();
  const url = "https://dummyjson.com/products/" + id;
  console.log(url);
  const { data, isPanding, error } = useFetch(url);
  console.log(data);

  return (
    <div>
      {data && (
        <div className="card flex-wrap lg:card-side bg-base-100 shadow-2xl">
          <figure>
            <img className="h-[800px] w-[900px]  " src={data.thumbnail} />
          </figure>
          <div className="card-body w-full text-center">
            <h2 className="text-4xl font-bold font-serif text-center mb-5">
              {data.title}
            </h2>
            <p className="text-xl italic">{data.description}</p>
            <div className="flex items-center justify-around mb-5">
              <span className="px-6 py-4 rounded-[200px]   font-bold">
                <span className="font-serif">Sale:</span>
                {data.discountPercentage}%{" "}
              </span>
            </div>
            <div className="flex text-center  items-center px-24 gap-52 mb-5">
              <span className="font-semibold">
                <span className="font-bold text-xl font-serif ">
                  New Price:{" "}
                </span>
                {(
                  data.price -
                  (data.price * data.discountPercentage) / 100
                ).toFixed(2)}
                ${" "}
              </span>
            </div>
            <div className="card-actions justify-center">
              <Link to="/products" className="btn  px-10 text-xl ">
                Back to Products
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SingleProduct;
