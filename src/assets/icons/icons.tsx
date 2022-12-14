import React from 'react'

export function LightMode() {
  return (
    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" font-size="0.9em" aria-hidden="true" focusable="false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"></path></svg>
  )
}
export function DarkMode() {
  return (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" fontSize="0.9em" aria-hidden="true" focusable="false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"></path></svg>
  )
}

export function Search() {
    return (
        <svg viewBox="0 0 24 24" focusable="false" className="chakra-icon css-1jbsmo"  fontSize="1em" aria-hidden="true"  height="1em" width="1em" ><path fill="currentColor" d="M23.384,21.619,16.855,15.09a9.284,9.284,0,1,0-1.768,1.768l6.529,6.529a1.266,1.266,0,0,0,1.768,0A1.251,1.251,0,0,0,23.384,21.619ZM2.75,9.5a6.75,6.75,0,1,1,6.75,6.75A6.758,6.758,0,0,1,2.75,9.5Z"></path></svg>
    )
  }
  
  export function DropDown() {
    return (
        <svg viewBox="0 0 24 24" focusable="false" className="chakra-icon css-yowamf"  height="1.5em" width="1.5em" aria-hidden="true"><path fill="currentColor" d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg>
    )
  }
  export function Unstar() {
    return (
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" aria-label="favorite" className="css-1do0qis" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M463 192H315.9L271.2 58.6C269 52.1 262.9 48 256 48s-13 4.1-15.2 10.6L196.1 192H48c-8.8 0-16 7.2-16 16 0 .9.1 1.9.3 2.7.2 3.5 1.8 7.4 6.7 11.3l120.9 85.2-46.4 134.9c-2.3 6.5 0 13.8 5.5 18 2.9 2.1 5.6 3.9 9 3.9 3.3 0 7.2-1.7 10-3.6l118-84.1 118 84.1c2.8 2 6.7 3.6 10 3.6 3.4 0 6.1-1.7 8.9-3.9 5.6-4.2 7.8-11.4 5.5-18L352 307.2l119.9-86 2.9-2.5c2.6-2.8 5.2-6.6 5.2-10.7 0-8.8-8.2-16-17-16zm-127.2 92.5c-10 7.2-14.2 20.2-10.2 31.8l30.1 87.7c1.3 3.7-2.9 6.8-6.1 4.6l-77.4-55.2c-4.9-3.5-10.6-5.2-16.3-5.2-5.7 0-11.4 1.7-16.2 5.2l-77.4 55.1c-3.2 2.3-7.4-.9-6.1-4.6l30.1-87.7c4-11.8-.2-24.8-10.3-32l-81-57.1c-3.2-2.2-1.6-7.3 2.3-7.3H196c12 0 22.7-7.7 26.5-19.1l29.6-88.2c1.2-3.6 6.4-3.6 7.6 0l29.6 88.2c3.8 11.4 14.5 19.1 26.5 19.1h97.3c3.9 0 5.5 5 2.3 7.2l-79.6 57.5z"></path></svg>
    )
  }

  export function MobileSearch() {
    return (
<svg viewBox="0 0 24 24" focusable="false" data-testid="searchBox" fontSize="0.9em" aria-hidden="true" height="1em" width="1em"><path fill="currentColor" d="M23.384,21.619,16.855,15.09a9.284,9.284,0,1,0-1.768,1.768l6.529,6.529a1.266,1.266,0,0,0,1.768,0A1.251,1.251,0,0,0,23.384,21.619ZM2.75,9.5a6.75,6.75,0,1,1,6.75,6.75A6.758,6.758,0,0,1,2.75,9.5Z"></path></svg>
    )
  }
  
   export function Hamburger() {
    return (
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" font-size="20" aria-hidden="true" focusable="false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path></svg>
    )
  }
  
  export function Cancel() {
    return (
     <svg viewBox="0 0 24 24" focusable="false" className="chakra-icon css-fqjpr" fontSize="13" aria-hidden="true" height="1em" width="1em"><path fill="currentColor" d="M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"></path></svg>
    )
  }
  

  export function ScrollBack() {
    return (
     <svg height="32px" id="Layer_1"  version="1.1" viewBox="0 0 512 512" width="32px" fill="#fff"  xmlns="http://www.w3.org/2000/svg"><polygon points="352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256 "/></svg>
    )
  }
  
  
   export function MainLogo() {
    return (
    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.7 51.7" width="36px" height="32px"><title>Cryptomaniac</title><path d="M317.78,373.93a25.84,25.84,0,1,1-34.86,11,25.85,25.85,0,0,1,34.86-11h0Z" transform="translate(-280 -371)" style={
      {
  "fill": "rgba(17, 153, 250, 0.05)",
  "fillRule": "evenodd"
}
    }></path><path d="M315.86,406a13.68,13.68,0,0,1-7.7,4.2l-1.2,5.41-3.5-.78,1-4.51a13.63,13.63,0,0,1-3.52-.85l-1,4.57-3.5-.78,1.24-5.61A13.59,13.59,0,0,1,303,383.56l1.24-5.61,3.5,0.78-1,4.57a13.62,13.62,0,0,1,3.55.72l1-4.51,3.5,0.78-1.2,5.41a13.54,13.54,0,0,1,3.7,3.86,12.94,12.94,0,0,1,1.51,3.21l-5.63,1.78a8.46,8.46,0,0,0-.84-1.83A7.7,7.7,0,1,0,310,403.35a8.22,8.22,0,0,0,1.54-1.3l4.34,4h0Z" transform="translate(-280 -371)" style={{"fill": "rgb(255, 255, 255)"}}></path></svg>
    )
  }
  
  export function ScrollForward() {
    return (
     <svg height="32px" id="Layer_1"  version="1.1" viewBox="0 0 512 512" width="32px" fill="#fff" xmlns="http://www.w3.org/2000/svg"> <polygon points="160,128.4 192.3,96 352,256 352,256 352,256 192.3,416 160,383.6 287.3,256 "/></svg>
    )
  }
  