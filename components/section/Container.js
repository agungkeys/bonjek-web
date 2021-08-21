import React from "react";

function Container({children}) {
  return(
    <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      {children}
    </div>
  )
}

export default Container;