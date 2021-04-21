import './App.css';
import Feed from './Feed';
import Header from './Header';
import Login from './Login';
import SideBar from './SideBar';
import { useStateValue } from './StateProvider';
import Widgets from './Widgets';
function App() {
    const [{user}, dispatch] = useStateValue();

    return (
        <div className="App">
            <h1>Facebook clone</h1>
            {!user
                ? (<Login/>)
                : (
                    <div>
                        {/* Header */}
                        <Header/> {/*App body */}
                        {/*SideBar*/}
                        {/*Feed*/}
                        {/*Widget*/}
                        <div className="app_body">
                            <SideBar/>
                            <Feed/>
                            <Widgets/>
                        </div>
                    </div>
                )}
        </div>
    );
}

export default App;
