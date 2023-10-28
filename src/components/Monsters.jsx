import monsters from "../monsters.json"

export const Monsters = (props) => {
  //章で絞り込み
  const chapterMonsters = monsters.filter((monster) => 
    monster.chapter === Number(props.chapter)
  );
  //キーワードで絞り込み
  const selectedMonsters = chapterMonsters.filter((monster) => 
    monster.name.indexOf(props.name) > -1
  );
  return (
    <div className="monsters">
      {selectedMonsters.map((monster) => 
        <div key={monster.number}>
          <button className="monster" value={monster.number} onClick={(e) => {
            props.setView(true)
            props.setNumber(monster.number)
          }}>{monster.name}</button>
        </div>
      )}
    </div>
  );
};