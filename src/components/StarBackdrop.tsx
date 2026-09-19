export function StarBackdrop() {
  return (
    <div className="star-backdrop" aria-hidden="true">
      <svg
        className="star-backdrop-main"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          fill="currentColor"
          points="50,2 61.8,36.5 98.5,38.2 69.5,60.2 80.9,95.5 50,75.2 19.1,95.5 30.5,60.2 1.5,38.2 38.2,36.5"
        />
      </svg>
      <svg
        className="star-backdrop-side"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          fill="currentColor"
          points="50,2 61.8,36.5 98.5,38.2 69.5,60.2 80.9,95.5 50,75.2 19.1,95.5 30.5,60.2 1.5,38.2 38.2,36.5"
        />
      </svg>
    </div>
  );
}
