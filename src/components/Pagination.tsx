 import React from "react";

interface FuncProps{
  paginate(number: Number):void
}

const Pagination = ( { paginate,activePage,currentPage }:any ) => {

  const pageNumbers = [1,2,3,4,5]
  return (
    <div>
      <div className="container mx-auto px-4">
        <nav
          className="flex flex-row flex-nowrap justify-between md:justify-center items-center"
          aria-label="Pagination"
        >
          <a
            className={`flex w-10 h-10 mr-1 justify-center items-center rounded-full border border-gray-200  hover:border-gray-300 ${currentPage > 1 ?"bg-[#1199fa0d] fill-white": "bg-white text-black"}`}
            href="#"
            title="Previous Page"
            onClick={() => currentPage > 1 && paginate(currentPage - 1)}
          >
            <span className="sr-only">Previous Page</span>
            <svg
              className="block w-4 h-4 "
              viewBox="0 0 256 512"
              // fill="#fff"
              aria-hidden="true"
              role="presentation"
              // width={30}
            >
              <path d="M238.475 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L50.053 256 245.546 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L10.454 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z"></path>
            </svg>
          </a>
        { pageNumbers.map(number =>(

          <a
          key={number}
          onClick={()=>{  console.log("rrer");
                      paginate(number)
            }}
          
          className={`hidden md:flex w-10 h-10 mx-2 justify-center items-center rounded-full border border-gray-200  text-black hover:border-gray-300 ${number === activePage ? "bg-[#1199fa0d]  text-white ":"bg-white  text-black" } `}
          href="#"
          title={`Page ${number}`}
          >
            {number}
          </a>
        )

        )

          } 
         
          <a
            className={`flex w-10 h-10 mr-1 justify-center items-center rounded-full border border-gray-200  hover:border-gray-300 ${currentPage < 5 ?"bg-[#1199fa0d] fill-white": "bg-white text-black"}`}
            href="#"
            title="Next Page"
            onClick={() => currentPage < 5 && paginate(currentPage + 1)}
          >
            <span className="sr-only">Next Page</span>
            <svg
              // width={30}
              className="block w-4 h-4 "
              viewBox="0 0 256 512"
              // fill="#fff"
              aria-hidden="true"
              role="presentation"
            >
              <path d="M17.525 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L205.947 256 10.454 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L34.495 36.465c-4.686-4.687-12.284-4.687-16.97 0z"></path>
            </svg>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
