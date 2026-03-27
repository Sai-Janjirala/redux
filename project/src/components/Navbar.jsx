import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='bg-slate-800'>
      <div className='mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6'>
        <NavLink to='/' className='text-xl font-bold text-white'>
          Media Search App
        </NavLink>

        <div className='flex gap-3'>
          <NavLink
            to='/'
            className={({ isActive }) =>
              `rounded px-4 py-2 text-sm font-medium ${
                isActive ? 'bg-blue-600 text-white' : 'bg-slate-600 text-white'
              }`
            }
          >
            Search
          </NavLink>
          <NavLink
            to='/collection'
            className={({ isActive }) =>
              `rounded px-4 py-2 text-sm font-medium ${
                isActive ? 'bg-blue-600 text-white' : 'bg-slate-600 text-white'
              }`
            }
          >
            Collection
          </NavLink>
        </div>
      </div>
    </header>
  )
}

export default Navbar
