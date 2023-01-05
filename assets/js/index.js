window.onload = ()=>{
    const btnMenu = document.getElementById("header__menu");

    // add the event click to menu item;
    btnMenu.addEventListener("click", onLateralMenuButtonClick);
};

/**
    Handle click in lateral menu button; Hide or show the lateral menu * 
**/
const onLateralMenuButtonClick = () => {   
   // get lateral menu;
   const lateralMenu = document.getElementById("lateral-menu");

   /**
    * The toggle() method of the DOMTokenList interface removes an existing token from the list and returns false. If the token doesn't exist it's added and the function returns true. 
    * Ref: https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle
    */
   lateralMenu.classList.toggle("lateral-menu--show");
}