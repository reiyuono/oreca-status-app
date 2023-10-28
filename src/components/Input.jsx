export const Input = (props) => {
  
  return (
    <div>
      <input type="text" placeholder="モンスター名" 
      onChange={(e) => props.setName(e.target.value)} 
      onClick={(e) => props.setView(false)}/>
    </div>
  );
};