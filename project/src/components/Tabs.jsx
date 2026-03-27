
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTabs } from '../redux/features/searchSlice'

const Tabs = () => {
    const tabs = ['photos', 'videos']
 
    const dispatch = useDispatch()

    const activeTab = useSelector((state)=>state.search.activeTab)

    return (
        <div className='mt-6 flex flex-wrap items-center justify-between gap-4'>
            <div>
                <h2 className='text-2xl font-bold text-white'>Results</h2>
                <p className='mt-1 text-sm text-slate-300'>Choose photos or videos.</p>
            </div>

            <div className='flex items-center gap-2'>
            {tabs.map(function (elem, idx) {
                return (
                    <button
                        className={`${(activeTab==elem?'bg-blue-600 text-white':'bg-slate-600 text-white')} cursor-pointer rounded px-4 py-2 text-sm font-medium uppercase active:scale-95`}
                        key={idx}
                        onClick={() => {
                            dispatch(setActiveTabs(elem))
                        }}
                    >
                        {elem}
                    </button>
                )
            })}
            </div>
        </div>
    )
}

export default Tabs
