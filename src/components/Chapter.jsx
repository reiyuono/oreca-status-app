export const Chapter = (props) => {
  const chapters = ["新序章", "新1章", "新2章", "新3章", "新4章", "新5章", "新6章", "新7章", "外伝"]
  return (
    <div className="chapters clearfix">
      {chapters.map((chapter, index) =>
        <div key={index}>
          <button className="chapter" value={index} onClick={(e) => {
            props.setChapter(e.target.value)
            props.setView(false)
          }}>{chapter}</button>
        </div>
      )}
    </div>
  );
};