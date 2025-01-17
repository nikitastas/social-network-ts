import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import UsersContainer from "./components/Users/UsersContainer";


function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path="/profile/*" element={<Profile />}/>
                        <Route path="/dialogs/*" element={<DialogsContainer />}/>
                        <Route path="/users/*" element={<UsersContainer />}/>
                        <Route path="/news" element={<h1>News</h1>}/>
                        <Route path="/music" element={<h1>Music</h1>}/>
                        <Route path="/settings" element={<h1>Settings</h1>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>


    );
}


export default App;
