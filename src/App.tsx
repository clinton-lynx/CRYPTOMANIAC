import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.scss';
import HomePage from './pages/HomePage';
import NewsListing from './pages/NewsListing';
import './assets/styles/_main.scss';
import Trends from './components/Trends';
import AllCoins from './components/AllCoins';
import NFTs from './components/NFTs';
import RecentlyAdded from './components/RecentlyAdded';
import Crypto from './pages/Crypto';
import Dashboard from './pages/dashboard';


function App() {
    return (


        <BrowserRouter>
            <Routes>
                <Route path='/'
                    element={<HomePage/>}>
                    <Route path='trends'
                        element={<Trends/>}/>
                    <Route index
                        element={<AllCoins/>}/>
                    <Route path='all-coins'
                        element={<AllCoins/>}/>
                    <Route path='NFTs'
                        element={<NFTs/>}/>

                    <Route path='recently-added'
                        element={<RecentlyAdded/>}/>
                </Route>
                <Route path='/news-listing'
                    element={<NewsListing/>}/>
                <Route path='/dashboard'
                    element={<Dashboard/>}/>
                <Route path='all-coins/:coin'
                    element={<Crypto/>}/>

            </Routes>
        </BrowserRouter>

    );
}

export default App;
