// import { Fragment } from "react";
function Pagination({ pagesArray, page, setPage }) {
  return (
    <div>
      {page && (
        <>
          <button disabled={page === 1} onClick={() => setPage(page - 1)}>
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
                onClick={() => setPage(p)}
              >
                {p}
              </button>
            );
          })}
          <button
            disabled={pagesArray.length === page}
            onClick={() => setPage(page + 1)}
          >
            Page suivante
          </button>
        </>
      )}
    </div>
  );
}

export default Pagination;
