import cartIcon from '../../img/cart-shopping-svgrepo-com.svg'
import menuIcon from '../../img/menu-svgrepo-com.svg'
import searchIcon from '../../img/search-svgrepo-com.svg'

const Header = () => {
  return <Header classname = " drop-shadow-header-shadow fixed top-0 left-0 z-[100] sha w-full p-5 bg-my-background flex items-center justify-between">
    {/* header left */}
    <div className='flex items-center'>
        <img src={menuIcon} alt="Menu" classname = "w-6 h-6 object-contain cursor-pointer" />
        <h1 className=' ml-2 text-sm font-bold'>ShehanZ <span className='text-red-900'>Coding</span></h1>
        <div className=' overflow-hidden ml-2 flex items-center rounded-full bg-[#ffd4d4] '>
            <input type="text" placeholder="Search" className='outline-none p-2 font-semibold w-[200px] bg-inherit ml-1' />
            <img src={searchIcon} alt="Search" classname = "w-6 h-6 object-contain cursor-pointer mr-2" />
        </div>
    </div>
    {/* header right */}
    <img src={cartIcon} alt="Cart"  classname = "w-6 h-6 object-contain cursor-pointer"/>

  </Header>
}
export default Header