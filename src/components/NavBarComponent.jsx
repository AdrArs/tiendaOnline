const NavBar = () => {
  return (
    <>
      <div> navBar</div>
      <button type="button"
              className="flex text-sm rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"  data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom">
        <span className="sr-only">Open user menu</span>
        <img className="w-9 h-9 rounded-full" src="/user-circle.png" alt="user photo"/>
      </button>
    </>
  )
}

export default NavBar;