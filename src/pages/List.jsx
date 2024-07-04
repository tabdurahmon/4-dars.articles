import { useFetch } from "../Hook/hook";
import { NavLink } from "react-router-dom";

function List() {
  const {
    data: articles,
    isPending,
    error,
  } = useFetch(
    "https://online-json-server-api.up.railway.app/project/6677cd551d2cd3eb1143edd6/articles"
  );

  return (
    <div>
      {isPending && (
        <div className="w-[500px] ml-auto mr-auto  h-lvh flex justify-center pt-12">
          <h3 className="text-3xl font-semibold">Loading...</h3>
        </div>
      )}
      {error && <h3>{error}</h3>}
      {articles &&
        articles.data.map((article) => {
          return (
            <div
              className="ml-auto mr-auto  w-[500px] text-center py-10 px-5 rounded-sm  mb-5 shadow-xl "
              key={article.id}
            >
              <h3 className="font-bold mb-5">Title: {article.title}</h3>

              <p className="mb-4">
                Author: <i>{article.author}</i>
              </p>

              <NavLink
                className="text-blue-600 underline"
                to={`/articles/${article.id}`}
              >
                Read More
              </NavLink>
            </div>
          );
        })}
    </div>
  );
}

export default List;
