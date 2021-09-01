
export default function NavBar(props) {
    const { setShowFigures, setShowAcc } = props;
  return (
    <div>
      <div>
        <button onClick={()=> {setShowFigures(true); setShowAcc(false)}}>Figures</button>
        <button onClick={()=> {setShowFigures(false); setShowAcc(true)}}>Accessories</button>
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
      </div>
    </div>
  );
}
