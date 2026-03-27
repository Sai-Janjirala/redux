import { useState } from 'react'
import { setQuery } from '../redux/features/searchSlice'
import { useDispatch } from 'react-redux'
const SearchBar = () => {
  const [text, setText] = useState('')

  const dispatch = useDispatch()
  
  const submitHandler = (e)=>{
    e.preventDefault()

    dispatch(setQuery(text))

    setText('')
  }

  return (
    <section className='rounded bg-slate-800 p-6'>
      <div className='mb-5'>
        <h1 className='text-3xl font-bold text-white'>Search Photos and Videos</h1>
        <p className='mt-2 text-sm text-slate-300'>
          Find media and save the items you like.
        </p>
      </div>

      <form
        className='flex flex-col gap-4 md:flex-row'
        onSubmit={
           (e)=>{
            submitHandler(e)
           }
        }
      >
        <label className='flex-1'>
          <input
            className='w-full rounded border border-slate-500 bg-white px-4 py-3 text-black outline-none'
            type='text'
            required
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder='search anything...'
          />
        </label>
        <button className='cursor-pointer rounded bg-blue-600 px-6 py-3 text-base font-semibold text-white active:scale-95'>
          Search
        </button>
      </form>
    </section>
  )
}

export default SearchBar
