import React from 'react'
import { Link } from 'react-router-dom';
import '../assets/styles/components/table.scss';

type tableProps = {
    percent: string,
    name: string,
    price: string,
    logo: string,
    coinCap: string,
    subtitle: string,
    coinId: string
}

const Table = ({ name, price, logo,coinCap, coinId, subtitle, percent }: tableProps) => {
    return (
        <>
            {/* <Link to={`/all-coins/${coinId}`} className="crypto-table"> */}
             <tr className="assets__tableBody-row">
                 <td className="assets__tableBody-Data">
                    <span className="assets__tableBody-span">
                       {coinCap}
                    </span>
            <Link to={`/all-coins/${coinId}`} className="crypto-table">
                    <div className="AssetTableRow__ReorderListIconContainer">
                     
                    </div>
                    </Link>
                    
                </td>
                <td className="assets-name__tableBody-Data assets-name--tableData">
                <Link to={`/all-coins/${coinId}`} className="crypto-table">

                <img className="coin-image" src={logo} alt="" />  

                        <div className="assets__name">
                            <span className="assets__nameContent">
                            {name}
                            </span>
                            <span className="assets__nameAbbreviation">
                            {subtitle}
                            </span>
                        </div>
                  </Link>
                </td>
                <td className="assets__rates">
            <Link to={`/all-coins/${coinId}`} className="crypto-table">
                    <div className="assets-rate__InnerWrapper">
                        <span className="assets__price">
                        {price}
                        </span>    
                        <span className="price__percentage">
                        {percent}   
                    </span>
                       </div>
                    </Link>
                </td>
                <td className="assets-price__change">
            <Link to={`/all-coins/${coinId}`} className="crypto-table">

                    <span className="assets-price__changeContent">
                         {percent}  
                    </span>
                    </Link>
                </td>
              
                           </tr>


        </>
    )
}

export default Table