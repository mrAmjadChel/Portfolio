const Picture = ({ Picture, alt }) => {
  if (!Picture) return null
  return (
    <div>
      <img
        src={Picture}
        alt={alt}
        className=" w-5/6 border-2 border-slate-400 rounded-md"
      />
    </div>
  );
};
export default Picture;
