import Search from 'src/components/search';
import Filters from 'src/components/filters';
import UserLists from 'src/components/user-lists';
import 'src/styles/index.scss';

const App = () => {
  return (
    <div className="app">
      <div className="drawer">
        <div className="drawer__container">
          <div className="drawer__body">
            <Search />
            <Filters />
            <UserLists />
          </div>
        </div>
      </div>

      <div className="main-content">
        <div className="main-content__container">
          main-content
        </div>
      </div>
    </div>
  );
};

export default App;
