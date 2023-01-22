const OverAllCard = ({
  name,
  icon,
  theme,
  social,
  userName,
  socialNum,
  today,
  todayColor,
}) => {
  return (
    <div
      className={`overAllCard card py-5 text-center ${
        theme ? "on" : "off"
      } rounded-1 ${name}`}
    >
      <div className="social mb-3">
        <img src={social} />
        <span className="ms-2 fw-semibold text-secondary">{userName}</span>
      </div>
      <h1 className={`fw-bold mb-0 ${theme && "text-light"}`}>{socialNum}</h1>
      <p className="mt-0 text-muted">FOLLOWERS</p>
      <div className="analytics">
        <img src={icon} />
        <span className={`ms-2 text-${todayColor} fw-bold`}>{today} Today</span>
      </div>
    </div>
  );
};

export default OverAllCard;
