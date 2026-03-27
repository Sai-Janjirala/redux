import { useDispatch, useSelector } from 'react-redux'
import { removeCollection } from '../redux/features/collectionSlice'

const CollectionPage = () => {
  const dispatch = useDispatch()
  const items = useSelector((state) => state.collection.items)

  if (!items.length) {
    return (
      <section className='rounded bg-slate-800 p-6'>
        <h1 className='text-3xl font-bold text-white'>Collection</h1>
        <p className='mt-3 text-slate-300'>No saved items yet.</p>
      </section>
    )
  }

  return (
    <section className='space-y-8'>
      <div className='rounded bg-slate-800 p-6'>
        <div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
          <div>
            <h1 className='text-3xl font-bold text-white'>Collection</h1>
            <p className='mt-2 text-sm text-slate-300'>Your saved items are shown below.</p>
          </div>

          <div className='rounded bg-slate-700 px-4 py-3'>
            <p className='text-sm text-white'>Saved items: {items.length}</p>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {items.map((item) => (
          <div
            key={item.id}
            className='overflow-hidden rounded bg-slate-800'
          >
            <a href={item.url} target='_blank' rel='noreferrer'>
              {item.type === 'photo' ? (
                <img
                  className='h-80 w-full object-cover object-center'
                  src={item.src}
                  alt={item.title}
                />
              ) : (
                <video
                  className='h-80 w-full object-cover object-center'
                  autoPlay
                  loop
                  muted
                  src={item.src}
                />
              )}
            </a>
            <div className='flex items-start justify-between gap-4 p-5'>
              <div className='min-w-0'>
                <p className='mb-2 text-xs uppercase text-slate-400'>{item.type}</p>
                <h2 className='line-clamp-2 text-lg font-semibold text-white'>{item.title || `${item.type} item`}</h2>
              </div>
              <button
                onClick={() => dispatch(removeCollection(item.id))}
                className='cursor-pointer rounded bg-red-600 px-3 py-2 text-sm font-medium text-white active:scale-95'
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CollectionPage
