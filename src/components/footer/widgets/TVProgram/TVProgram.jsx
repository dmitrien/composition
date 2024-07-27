export default function TVProgram({ title, items }) {
  return (
    <div className="TV-program-widget">
        <h3 className="Widget-title">
            <a href="#" className="Widget-title__link">
                {title}
            </a>
        </h3>
        <ul className="Widget-list">
            {items.map(({ time, name, source }, index) => {
                return (
                <li className="Widget-list__item" key={index}>
                    <span className="Widget-list__item-time">
                    {time ? `${time}\u00A0\u00A0` : ''}
                    </span>
                    <span className="Widget-list__item-name">
                    {name}
                    </span>
                    <span className="Widget-list__item-source">
                    {source ? `\u00A0\u00A0${source}` : ''}
                    </span>
                </li>
                );
            })}
        </ul>
    </div>
  );
}