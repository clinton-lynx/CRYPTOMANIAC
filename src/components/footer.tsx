import React from "react"
import { MainLogo } from "../assets/icons/icons"
import "../assets/styles/components/footer.scss"

const Footer = () => {
  return (
    <div>
      <footer className="main-footer">
        <div className="footer-top">
          <div className="top-left">

            <h2 className="list-item-header"><span className="crptomaniac-logo"><MainLogo /></span>Cryptomaniac</h2>
            <p className="about-cryptomaniac">
            This is a cryptocurrency  app built using React 18,Redux,SCSS and Typescript. Consolidating RESTFUL calls from CoinGecko API into the React application to get cryptocurrency data such as live prices, trading volume, exchange volumes, historical data, crypto categories, images, and more...
            </p>
          </div>

 


        </div>
        <div className="bottom-wrapper">
          <div className="footer-bottom">
            <div className="bottom-left">
              <span className="copyright-text">Copyright © 2022 Cryptomaniac</span>
            </div>
            <div className="bottom-right">

              <a href="https://www.linkedin.com/in/clintonlynx/" className="social-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z"
                    fill="#fff"
                  />
                  <g clipPath="url(#clip0_748_6396)">
                    <path
                      d="M14.9341 27.5011H11.2903V15.8175H14.9341V27.5011ZM13.1103 14.2237C11.9451 14.2237 11 13.2628 11 12.1026C11 11.5454 11.2223 11.0109 11.6181 10.6169C12.0138 10.2228 12.5506 10.0015 13.1103 10.0015C13.6699 10.0015 14.2067 10.2228 14.6025 10.6169C14.9982 11.0109 15.2205 11.5454 15.2205 12.1026C15.2205 13.2628 14.2751 14.2237 13.1103 14.2237ZM28.5718 27.5011H24.9358V21.8136C24.9358 20.4581 24.9084 18.7198 23.0414 18.7198C21.1469 18.7198 20.8565 20.1925 20.8565 21.7159V27.5011H17.2166V15.8175H20.7114V17.4112H20.7624C21.2489 16.4933 22.4372 15.5245 24.2101 15.5245C27.8978 15.5245 28.5758 17.9425 28.5758 21.0831V27.5011H28.5718Z"
                      fill="#26333F"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_748_6396">
                      <rect width="17.5758" height="20" fill="white" transform="translate(11 10)" />
                    </clipPath>
                  </defs>
                </svg>{" "}
              </a>
              <a href='' className="social-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z"
                    fill="#fff"
                  />
                  <path
                    d="M24.4668 21.6875L25 18.2489H21.6659V16.0176C21.6659 15.0768 22.1317 14.1599 23.6249 14.1599H25.1407V11.2323C25.1407 11.2323 23.7652 11 22.45 11C19.7043 11 17.9095 12.6469 17.9095 15.6283V18.2489H14.8574V21.6875H17.9095V30H21.6659V21.6875H24.4668Z"
                    fill="#26333F"
                  />
                </svg>{" "}
              </a>
              <a href='https://twitter.com/clinton_lynx' className="social-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z"
                    fill="#fff"
                  />
                  <path
                    d="M27.1498 16.5184C27.1612 16.6728 27.1612 16.8272 27.1612 16.9816C27.1612 21.6912 23.4493 27.1176 16.665 27.1176C14.5749 27.1176 12.6333 26.5331 11 25.5184C11.297 25.5515 11.5825 25.5625 11.8909 25.5625C13.6155 25.5625 15.2031 25 16.4708 24.0405C14.849 24.0074 13.4898 22.9816 13.0216 21.5699C13.25 21.6029 13.4784 21.625 13.7183 21.625C14.0495 21.625 14.3807 21.5809 14.6891 21.5037C12.9987 21.1728 11.7309 19.739 11.7309 18.0073V17.9632C12.222 18.228 12.7932 18.3934 13.3984 18.4154C12.4048 17.7757 11.7538 16.6838 11.7538 15.4485C11.7538 14.7868 11.9365 14.1801 12.2563 13.6507C14.0723 15.8125 16.802 17.2242 19.8629 17.3787C19.8058 17.114 19.7716 16.8382 19.7716 16.5625C19.7716 14.5992 21.4162 13 23.4607 13C24.5228 13 25.4822 13.4301 26.1561 14.125C26.9898 13.9706 27.7893 13.6728 28.4975 13.2647C28.2233 14.0919 27.6409 14.7868 26.8756 15.2279C27.618 15.1508 28.3376 14.9522 29 14.6765C28.4975 15.3823 27.8693 16.011 27.1498 16.5184Z"
                    fill="#26333F"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
