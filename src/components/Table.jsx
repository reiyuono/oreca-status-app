export const Table = (props) => {
  const levelColor = ["#f4a460", "#f4a460", "#f4a460", "#f4a460", "#f4a460", "#f4a460", "#d3d3d3", "#d3d3d3", "#d3d3d3", "#ffd700"];
  const indexColor = ["#000000", "#ffff00", "#00ff00", "#0000ff", "#800080", "#ff0000"];
  const fontColor = ["#ffffff", "#000000", "#000000", "#ffffff", "#ffffff", "#ffffff"];
  
  return (
    <div className="status">
      <table>
        <thead>
          <tr>
            <th key={0}></th>
            {
              [...Array(10).keys()].map((level, index) => 
                <td key={index} style={{backgroundColor: levelColor[level]}}>{level+1}</td>
              )
            }
          </tr>
        </thead>
        <tbody>
        {
          [...Array(6).keys()].map((indi_value, index) => 
            <tr key={index}>
              <td style={{backgroundColor: indexColor[index], color: fontColor[index]}}>{indi_value}</td>
              {
                props.status[index].map((value, level) => 
                  <td key={level}>{value}</td>
                )
              }
            </tr>
          )
        }
        </tbody>
      </table>
    </div>
  );
};