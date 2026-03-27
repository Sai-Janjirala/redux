import { useDispatch } from 'react-redux'
import { addCollection, addedToast } from '../redux/features/collectionSlice'
import { toast } from 'react-toastify'

const ResultCard = ({ item }) => {

    const dispatch = useDispatch()

    const addToCollection = (item) => {
        dispatch(addCollection(item))
        dispatch(addedToast())
        toast.success('Saved to collection')
    }

    return (
        <div className='overflow-hidden rounded bg-slate-800'>
            <a target='_blank' rel='noreferrer' className='block h-full' href={item.url}>
                {item.type == 'photo' ? <img className='h-80 w-full object-cover object-center' src={item.src} alt={item.title} /> : ''}
                {item.type == 'video' ? <video className='h-80 w-full object-cover object-center' autoPlay loop muted src={item.src}></video> : ''}
            </a>
            <div className='flex items-center justify-between gap-3 p-4'>
                <div className='min-w-0'>
                    <p className='mb-1 text-xs uppercase text-slate-400'>{item.type}</p>
                    <h2 className='line-clamp-2 text-lg font-semibold text-white capitalize'>{item.title || `${item.type} result`}</h2>
                </div>
                <button
                    onClick={() => {
                        addToCollection(item)
                    }}
                    className='shrink-0 cursor-pointer rounded bg-blue-600 px-3 py-2 text-sm font-medium text-white active:scale-95'
                >
                    Save
                </button>
            </div>
        </div>
    )
}

export default ResultCard
