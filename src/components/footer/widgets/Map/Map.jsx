export default function Map({ title, items }) {
    return (
      <div className="Map-widget">
        <h3 className="Widget-title">
              <a href="#" className="Widget-title__link">
                  {title}
              </a>
        </h3>
        <ul className="Widget-list">
        {items.map(({ content }, index) => {
          return (
            <li className="Widget-list__item" key={index}>
              {content}
            </li>
              );
          })}
        </ul>
      </div>
    );
  }