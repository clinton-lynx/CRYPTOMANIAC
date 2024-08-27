import {BrowserRouter, Routes, Route} from 'react-router-dom';

import HomePage from './pages/HomePage';
import NewsListing from './pages/NewsListing';
import './assets/styles/_main.scss';
import Trends from './components/Trends';
import AllCoins from './components/AllCoins';
import NFTs from './components/NFTs';
import RecentlyAdded from './components/RecentlyAdded';
import Crypto from './pages/Crypto';
import Dashboard from './pages/dashboard';
import { createContext, useContext, useState } from 'react';

interface ThemeContextProps {
    // Define your global state properties here
    theme: string;
    // toggleTheme: React.Dispatch<React.SetStateAction<string>>;/
    toggleTheme: (event: React.MouseEvent<HTMLButtonElement>) => void;
  }
const ThemeContext = createContext<ThemeContextProps | null>(null);
 
// export const useTheme = useContext(ThemeContext);
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
      throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
  };
  
function App() {
    const [theme, setTheme] = useState('dark');
    const toggleTheme = () =>{setTheme((prevTheme)=>(prevTheme === "dark" ? "light" : "dark"))}
    return (

<ThemeContext.Provider value={{theme, toggleTheme}} >

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
</ThemeContext.Provider>

    );
}

export default App;
