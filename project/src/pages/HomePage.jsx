
import { useSelector } from 'react-redux'
import ResultGrid from '../components/ResultGrid'
import SearchBar from '../components/SearchBar'
import Tabs from '../components/Tabs'

const HomePage = () => {

  const {query} = useSelector((state)=>state.search)

  return (
    <div className='space-y-8'>
       <SearchBar />

        {query != '' ? <div><Tabs />
        <ResultGrid /></div> : (
          <section className='rounded bg-slate-800 p-6'>
            <div className='grid gap-4 md:grid-cols-3'>
              <div className='rounded bg-slate-700 p-4'>
                <h3 className='text-xl font-bold text-white'>Photos</h3>
                <p className='mt-2 text-sm text-slate-300'>Search photo results from the API.</p>
              </div>
              <div className='rounded bg-slate-700 p-4'>
                <h3 className='text-xl font-bold text-white'>Videos</h3>
                <p className='mt-2 text-sm text-slate-300'>Switch tabs to see video results.</p>
              </div>
              <div className='rounded bg-slate-700 p-4'>
                <h3 className='text-xl font-bold text-white'>Collection</h3>
                <p className='mt-2 text-sm text-slate-300'>Save media to view it later.</p>
              </div>
            </div>
          </section>
        )}

    </div>
  )
}

export default HomePage
