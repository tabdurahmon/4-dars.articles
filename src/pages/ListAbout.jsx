import { NavLink, useParams } from "react-router-dom";
import { useFetch } from "../Hook/hook";

function ListAbout() {
  const { id } = useParams();
  const url =
    "https://online-json-server-api.up.railway.app/project/6677cd551d2cd3eb1143edd6/articles/" +
    id;

  const { data: article, isPending, error } = useFetch(url);
  console.log(article);
  return (
    <div>
      {isPending && (
        <div className="w-full h-lvh flex justify-center pt-12">
          <h3 className="text-3xl font-semibold">Loading...</h3>
        </div>
      )}
      {error && <h3>{error}</h3>}

      {article && (
        <div>
          <img
            className="mb-5 object-cover w-full rounded-xl"
            src={article.image}
            alt={article.title}
          />
          <h2 className="w-full text-center font-bold text-2xl">
            {article.title}
          </h2>
          <p className="w-full text-center">
            <i>{article.author}</i>
          </p>
          <p className="text-center justify-between mb-5">{article.body}</p>
          <div className="w-full text-center">
            <NavLink className="text-blue-600 underline btn" to={"/articles"}>
              Back to Article
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
}

export default ListAbout;
