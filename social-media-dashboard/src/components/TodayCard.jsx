const TodayCard = ({ title, theme, social, num, perc, color, icon }) => {
  return (
    <div
      className={`col mb-3 mb-lg-0 todayCard text-center ${
        theme ? "on" : "off"
      } rounded-1 row align-items-center`}
    >
      <h5 className="col-6 py-3 m-0 text-start text-secondary fw-bold">
        {title}
      </h5>
      <div className="col-6 py-3 m-0 text-end">
        <img width={30} src={social} />
      </div>
      <h3 className="col-6 py-3 m-0 text-start fw-semibold">{num}</h3>
      <div className="col-6 py-3 m-0 text-end analytics">
        <img src={icon} />
        <span className={`ms-2 fs-4 text-${color} fw-bold`}>{perc}%</span>
      </div>
    </div>
  );
};

export default TodayCard;
