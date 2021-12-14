import NavTabs from './NavTabs'

export default function NavBar(props) {
    const { setShowFigures, setShowAcc, setCurrentPage, setSearchType, setSearchTerm } = props;
  return (
    <div>
      <div>        
        <NavTabs setShowFigures={setShowFigures} setShowAcc={setShowAcc} setCurrentPage={setCurrentPage} setSearchType={setSearchType} setSearchTerm={setSearchTerm}></NavTabs>
      </div>
    </div>
  );
}
