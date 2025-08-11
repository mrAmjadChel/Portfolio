const Tech = ({ isHighlight, data }) => {
  return (
    <div>
      <div className="flex gap-2">
        {data.map((e, i) => (
          <div
            key={`${e}-tech-${i}`}
            className={`px-2 py-1 text-primaryAccent bg-primaryBase rounded-md ${
              isHighlight ? "bg-primaryContent text-primaryBg" : " "
            }`}
          >
            {e}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Tech;
