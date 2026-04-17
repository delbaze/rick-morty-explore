import { useDispatch } from "react-redux";

// import { Fragment } from "react";
function Pagination({ pagesArray, page, setPage }) {
  const dispatch = useDispatch();
  return (
    <div>
      {page && (
        <>
          <button
            disabled={page === 1}
            onClick={() => dispatch(setPage(page - 1))}
          >
            Page précédente
          </button>
          {pagesArray.map((p) => {
            return (
              <button
                key={p}
                style={{
                  color: page === p ? "green" : "white",
                  fontWeight: page === p ? "bold" : "lighter",
                }}
                onClick={() => dispatch(setPage(p))}
              >
                {p}
              </button>
            );
          })}
          <button
            disabled={pagesArray.length === page}
            onClick={() => dispatch(setPage(page + 1))}
          >
            Page suivante
          </button>
        </>
      )}
    </div>
  );
}

export default Pagination;
