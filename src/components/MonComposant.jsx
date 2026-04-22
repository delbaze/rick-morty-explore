function MonComposant({ data, setState }) {
  return (
    <div>
      <ul>
        {!data ? (
          <div>Pas de données</div>
        ) : (
          <>
            {data.map((s) => (
              <li key={s}>{s}</li>
            ))}
            <button onClick={() => setState(["d", "e", "f"])}>
              Mettre à jour le tableau
            </button>
          </>
        )}
      </ul>
    </div>
  );
}

export default MonComposant;
// export default withMyArray(MonComposant);
