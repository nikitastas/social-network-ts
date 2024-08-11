import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {PostDataType, DialogDataType, MessageDataType} from './redux/state';

type Props = {
    posts: Array<PostDataType>
    dialogs: Array<DialogDataType>
    messages: Array<MessageDataType>
    newPostText: string
    dispatch: (action: any) => void
}

function App({posts, dialogs, messages, newPostText, dispatch}: Props) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path='/profile/*' element={<Profile posts={posts}
                                                                   newPostText={newPostText}
                                                                   dispatch={dispatch}/>}/>
                        <Route path='/dialogs/*' element={<Dialogs dialogs={dialogs} messages={messages}/>}/>
                        <Route path='/news' element={<h1>News</h1>}/>
                        <Route path='/music' element={<h1>Music</h1>}/>
                        <Route path='/settings' element={<h1>Settings</h1>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>


    );
}


export default App;
