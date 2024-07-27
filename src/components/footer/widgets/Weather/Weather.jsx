import './Weather.css';
export default function Weather(props) {
  const {
    title,
    averageTemperature,
    morningTemperature,
    daytimeTemperature,
  } = props;

  return (
    <div className="Weather-widget">
     <h3 className="Widget-title">
      <a href="#" className="Widget-title__link">
        {title}
      </a>
     </h3>
      <div className="Weather-widget-degrees">
        <span className="Weather-widget-degrees__average">
          {averageTemperature}&deg;
        </span>
        <div className="Weather-widget-degrees__in-detail">
          <span className="Weather-widget-degrees__in-detail-morning">
            Утром {morningTemperature},
          </span>
          <span className="Weather-widget-degrees__in-detail-afternoon">
            днём {daytimeTemperature}
          </span>
        </div>
      </div>
    </div>
  );
}