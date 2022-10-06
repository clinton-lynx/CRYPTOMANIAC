import React from 'react'

const ExchangeRateModal = () => {
    return (
        <>
            <section className="currency-converter">
                <h1 className="section-currency">currency converter</h1>
                <form action="" className="converter-form">
                    <div className="first-currency">
                        <label htmlFor="input1">amount</label>
                        <input className="input" type="text" name="input1" required/>
                        <select name="coin" className="primary-input">
                            <option value="btc">btc</option>
                            <option value="xrp">xrp</option>
                            <option value="get">get</option>
                            <option value="loco">loco</option>
                            <option value="qwe">qwe</option>
                        </select>
                    </div>
                    <div className="arrow-sign-wrapper">
                        <img src="https://crypto.com/price/icons/swap-vertical.svg" alt="arrow sign"/>
                    </div>
                    <div className="second-currency">
                        <label htmlFor="input2">currency</label>
                        <input className="input" type="text" name="input2" required/>
                        <select name="coin" className="secondary-input">
                            <option value="btc">usd</option>
                            <option value="xrp">xrp</option>
                            <option value="get">get</option>
                            <option value="loco">loco</option>
                            <option value="qwe">qwe</option>
                        </select>
                    </div>
                </form>
                <div className="result-wrapper">
                    <p className="result-currency">1btc = 0.03usd</p>
                </div>
                <div className="currency-converter-right">
                    <h1 className="section-currency-title">exchange rate</h1>
                    <p className="exchange-rate">1btc = 0.03usd</p>
                </div>
            </section>
        </>
    )
}

export default ExchangeRateModal
