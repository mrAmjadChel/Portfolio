const FormatedDate = ({ isHighlight ,children: date }) => {
  return (
    <div>
      <span
        className={`text-sm ${
            isHighlight ? "text-primaryAccent" : " "
        }`}
      >
        {date}
      </span>
    </div>
  );
};
export default FormatedDate;
