export default function Popular({ title, items }) {
  return (
    <div className="Favorites-widget">
      <h3 className="Widget-title">
        <a href="#" className="Widget-title__link">
            {title}
        </a>
      </h3>
      <ul className="Widget-list">
      {items.map(({ term, definition }, index) => {
        return (
          <li  className="Widget-list__item" key={index}>
            <b>{term}</b> &ndash; {definition}
          </li>
        );
      })}
    </ul>
    </div>
  );
}