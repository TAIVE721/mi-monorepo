export function Header({ calculate, categories, elements }) {
  return (
    <>
      <header>
        <nav>
          <h1>PROJECT MARS</h1>
          <ul>
            <li
              onClick={() => {
                calculate();
              }}
            >
              Calculate weight
            </li>
            <li
              onClick={() => {
                categories();
              }}
            >
              Categories
            </li>
            <li
              onClick={() => {
                elements();
              }}
            >
              Elements
            </li>
          </ul>
          <div></div>
        </nav>
      </header>
    </>
  );
}
