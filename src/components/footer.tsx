import React from "react"
import {MainLogo} from "../assets/icons/icons"
import "../assets/styles/components/footer.scss"

const Footer = () => {
    return (
        <div>
            <footer className="main-footer">
                <div className="footer-top">
                    <div className="top-left">

                        <h2 className="list-item-header">
                            <span className="crptomaniac-logo"><MainLogo/></span>Cryptomaniac</h2>
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
                                    <path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" fill="#fff"/>
                                    <g clipPath="url(#clip0_748_6396)">
                                        <path d="M14.9341 27.5011H11.2903V15.8175H14.9341V27.5011ZM13.1103 14.2237C11.9451 14.2237 11 13.2628 11 12.1026C11 11.5454 11.2223 11.0109 11.6181 10.6169C12.0138 10.2228 12.5506 10.0015 13.1103 10.0015C13.6699 10.0015 14.2067 10.2228 14.6025 10.6169C14.9982 11.0109 15.2205 11.5454 15.2205 12.1026C15.2205 13.2628 14.2751 14.2237 13.1103 14.2237ZM28.5718 27.5011H24.9358V21.8136C24.9358 20.4581 24.9084 18.7198 23.0414 18.7198C21.1469 18.7198 20.8565 20.1925 20.8565 21.7159V27.5011H17.2166V15.8175H20.7114V17.4112H20.7624C21.2489 16.4933 22.4372 15.5245 24.2101 15.5245C27.8978 15.5245 28.5758 17.9425 28.5758 21.0831V27.5011H28.5718Z" fill="#26333F"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_748_6396">
                                            <rect width="17.5758" height="20" fill="white" transform="translate(11 10)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                {" "} </a>
                            <a href='https://github.com/clinton-lynx/CRYPTOMANIAC' className="social-icon">
                                <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                                    <g fill="#fafafa"><path fillRule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z" clipRule="evenodd"/><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm-.743-.55M28.93 94.535c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zm-.575-.618M31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm0 0M34.573 101.373c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm0 0M39.073 103.324c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm0 0M44.016 103.685c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm0 0M48.614 102.903c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"/></g>
                                </svg>
                            </a>
                            <a href='https://twitter.com/clinton_lynx' className="social-icon">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" fill="#fff"/>
                                    <path d="M27.1498 16.5184C27.1612 16.6728 27.1612 16.8272 27.1612 16.9816C27.1612 21.6912 23.4493 27.1176 16.665 27.1176C14.5749 27.1176 12.6333 26.5331 11 25.5184C11.297 25.5515 11.5825 25.5625 11.8909 25.5625C13.6155 25.5625 15.2031 25 16.4708 24.0405C14.849 24.0074 13.4898 22.9816 13.0216 21.5699C13.25 21.6029 13.4784 21.625 13.7183 21.625C14.0495 21.625 14.3807 21.5809 14.6891 21.5037C12.9987 21.1728 11.7309 19.739 11.7309 18.0073V17.9632C12.222 18.228 12.7932 18.3934 13.3984 18.4154C12.4048 17.7757 11.7538 16.6838 11.7538 15.4485C11.7538 14.7868 11.9365 14.1801 12.2563 13.6507C14.0723 15.8125 16.802 17.2242 19.8629 17.3787C19.8058 17.114 19.7716 16.8382 19.7716 16.5625C19.7716 14.5992 21.4162 13 23.4607 13C24.5228 13 25.4822 13.4301 26.1561 14.125C26.9898 13.9706 27.7893 13.6728 28.4975 13.2647C28.2233 14.0919 27.6409 14.7868 26.8756 15.2279C27.618 15.1508 28.3376 14.9522 29 14.6765C28.4975 15.3823 27.8693 16.011 27.1498 16.5184Z" fill="#26333F"/>
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
