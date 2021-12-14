import NavTabs from './NavTabs'

export default function NavBar(props) {
    const { setShowFigures, setShowAcc, setCurrentPage } = props;
  return (
    <div>
      <div>        
        <NavTabs setShowFigures={setShowFigures} setShowAcc={setShowAcc} setCurrentPage={setCurrentPage}></NavTabs>
      </div>
    </div>
  );
}
