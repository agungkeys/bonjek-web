import React, { useRef, useState, useEffect } from 'react';
import { createPopper } from "@popperjs/core";
import NextLink from '../link/NextLink';

function Search({ list, searchKey, handleChange, handleClearSearchKey, handleDismiss}){
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
  const [searchText, setSearchText] = useState(searchKey || '');
  
  const btnDropdownRef = useRef(null);
  const popoverDropdownRef = useRef(null);
  const wrapperRef = useRef(null);
  useOutsideDismiss(wrapperRef);

  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start"
    });
    if(list){
      setDropdownPopoverShow(true);
    }
  };

  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
    handleDismiss && handleDismiss();
  };

  function useOutsideDismiss(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          closeDropdownPopover();
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  function handleClickItem(item){
    setDropdownPopoverShow(false);
    setSearchText(`${item.naming.make} ${item.naming.model} ${item.naming.version}`);
  }

  return(
    <>
      <div className="">
        <div ref={wrapperRef} className="relative align-middle w-full">
          <div className="text-black bg-white flex items-center justify-center w-full">
            <div className="w-full border rounded overflow-hidden flex items-center">
              <div className="flex-grow relative">
                <input 
                  type="text" 
                  className="w-full px-4 py-2" placeholder="Search..." 
                  value={searchKey}
                  ref={btnDropdownRef}
                  onClick={() => openDropdownPopover()}
                  onChange={handleChange}
                >
                </input>
                {!!searchKey.length && 
                  <button onClick={() => handleClearSearchKey()} className="absolute right-3 top-0 bottom-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                }
              </div>
              <button className="flex items-center justify-center px-4 border-l">
                <svg className="h-4 lg:h-5 w-4 lg:w-5 text-grey-dark" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/></svg>
              </button>
            </div>
          </div>
          <div
            ref={popoverDropdownRef}
            className={
              (dropdownPopoverShow ? "block " : "hidden ") +
              "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg w-full lg:max-w-screen-md"
            }
            style={{ minWidth: "12rem" }}
          >
            {list && list.map((item, key) => 
              <NextLink key={key} href={`?q=${item.naming.make} ${item.naming.model} ${item.naming.version}`}>
                <a
                  onClick={() => handleClickItem(item)}
                  className={
                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray hover:bg-blue-50"
                  }
                >
                  {`${item.naming.make} ${item.naming.model} ${item.naming.version && `- ` || ''}${item.naming.version && item.naming.version || ''}`}
                </a>
              </NextLink>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;