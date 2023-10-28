import statusJson from "../status.json"
import { Table } from "./Table";

export const Results = (props) => {
  const info = statusJson[props.number];
  const dir = "https://www.konami.com/amusement/ac/orecabattle/monsterguide/";
  const imgPath = info.img_path;
  const imgUrl = dir+imgPath;
  const HP = info.HP;
  const AT = info.AT;
  const SP = info.SP;

  //序章補正を判定
  let offset = 0;
  if (info.chapter === 0 && info.offset) {
    offset = 1;
  }
  //3次元配列を作成
  const status = Array(3);
  for (let i = 0; i < 3; i++) {
    status[i] = Array(6);
    for (let j = 0; j < 6; j++) {
      status[i][j] = Array(10);
    }
  }
  const baseValue = [HP, AT, SP]; //基準値

  //HP,AT,SP
  for (let i = 0; i < 3; i++) {
    //個体値
    for (let j = 0; j < 6; j++) {
      //レベル
      for (let k = 0; k < 10; k++) {
        status[i][j][k] = parseInt(baseValue[i]*(83.3+1.67*(k+1)+j+offset)/100); //実数値を計算
      }
    }
  }
  return (
    <div>
      <div>
        <img src={imgUrl} alt={info.number}/>
      </div>
      <div className="baseValue">
        <table>
          <thead>
            <tr>
              <td>HP</td>
              <td>AT</td>
              <td>SP</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{HP}</td>
              <td>{AT}</td>
              <td>{SP}</td>
            </tr>
          </tbody>
        </table>
      </div>
      {status.map((status, index) =>
        <Table key={index} status={status}/>
      )}
    </div>
  );
};