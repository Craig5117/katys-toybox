import NavTabs from './NavTabs'

export default function NavBar(props) {
    const { setShowFigures, setShowAcc } = props;
  return (
    <div>
      <div>        
        <NavTabs setShowFigures={setShowFigures} setShowAcc={setShowAcc} ></NavTabs>
      </div>
    </div>
  );
}
