import { Button, Navbar, NavbarCollapse, NavbarLink, NavbarToggle, TextInput } from 'flowbite-react'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import{ AiOutlineSearch } from 'react-icons/ai'
import { FaMoon } from 'react-icons/fa'

export default function Header() {
    const path = useLocation().pathname;
  return (
    <Navbar className='border-b-2'>
        <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>UniPost</span>
        Blog
        </Link>

        <form>
            <TextInput
            type='text'
            placeholder='Search'
            rightIcon={AiOutlineSearch}
            className='hidden lg:inline'
            />
        </form>
        <Button className='p-[2px] rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 lg:hidden' pill>
              <span
    className='flex items-center justify-center w-10 h-10 rounded-full
    bg-white text-black
    dark:bg-gray-900 dark:text-white
    hover:bg-gray-100 dark:hover:bg-gray-800
    transition duration-300'
    >
            <AiOutlineSearch /> 
            </span>            
        </Button>
        <div className='flex gap-2 md:order-2'>
            <Button className='w-12 h-10 hidden sm:inline' color='light blue' pill>
                <FaMoon />
            </Button>
          <Link to='/sign-in'>
  <Button className='p-[2px] rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500'>
    
    <span
      className='block rounded-lg px-4 py-2 
      bg-white text-black
      dark:bg-gray-900 dark:text-white
      hover:bg-gray-100 dark:hover:bg-gray-800
      transition duration-300'
    >
      Sign In
    </span>

  </Button>
</Link>
          <NavbarToggle />
        </div>  
<NavbarCollapse>

  <NavbarLink as={'div'} active={path == "/"}>
    <Link
      to='/'
      className={`
      transition duration-300
      ${
        path === '/'
          ? 'text-pink-500 font-semibold'
          : 'text-gray-700 dark:text-gray-200'
      }
      hover:bg-gradient-to-r
      hover:from-pink-500
      hover:to-blue-500
      hover:bg-clip-text
      hover:text-transparent
      `}
    >
      Home
    </Link>
  </NavbarLink>

  <NavbarLink as={'div'} active={path == "/about"}>
    <Link
      to='/about'
      className={`
      transition duration-300
      ${
        path === '/about'
          ? 'text-purple-500 font-semibold'
          : 'text-gray-700 dark:text-gray-200'
      }
      hover:bg-gradient-to-r
      hover:from-pink-500
      hover:to-blue-500
      hover:bg-clip-text
      hover:text-transparent
      `}
    >
      About
    </Link>
  </NavbarLink>

  <NavbarLink as={'div'} active={path == "/projects"}>
    <Link
      to='/projects'
      className={`
      transition duration-300
      ${
        path === '/projects'
          ? 'text-blue-500 font-semibold'
          : 'text-gray-700 dark:text-gray-200'
      }
      hover:bg-gradient-to-r
      hover:from-pink-500
      hover:to-blue-500
      hover:bg-clip-text
      hover:text-transparent
      `}
    >
      Projects
    </Link>
  </NavbarLink>

</NavbarCollapse>
    </Navbar>
  )
}
