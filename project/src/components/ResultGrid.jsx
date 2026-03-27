
import { useDispatch, useSelector } from 'react-redux'
import { fetchPhotos, fetchVideos } from '../api/mediaApi'
import { setLoading, setError, setResults } from '../redux/features/searchSlice'
import { useEffect } from 'react'
import ResultCard from './ResultCard'

const ResultGrid = () => {

    const dispatch = useDispatch()
    const { query, activeTab, results, loading, error } = useSelector((store) => store.search)

    useEffect(function () {
        if (!query) return
        const getData = async () => {
            try {
                dispatch(setLoading())
                let data = []
                if (activeTab == 'photos') {
                    let response = await fetchPhotos(query)                    
                    data = response.results.map((item) => ({
                        id: item.id,
                        type: 'photo',
                        title: item.alt_description,
                        thumbnail: item.urls.small,
                        src: item.urls.full,
                        url:item.links.html
                    }))
                }
                if (activeTab == 'videos') {
                    let response = await fetchVideos(query)
                    

                    data = response.videos.map((item) => ({
                        id: item.id,
                        type: 'video',
                        title: item.user.name || 'video',
                        thumbnail: item.image,
                        src: item.video_files[0].link,
                        url:item.url
                    }))
                }
                
                dispatch(setResults(data))

            } catch (err) {
                dispatch(setError(err.message))
            }
        }
        getData()
    }, [query, activeTab,dispatch])

    if (error) {
        return (
            <div className='mt-6 rounded bg-slate-800 p-6 text-center'>
                <h3 className='text-2xl font-bold text-white'>Error</h3>
                <p className='mt-3 text-sm text-slate-300'>{error}</p>
            </div>
        )
    }

    if (loading) {
        return (
            <div className='mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                {Array.from({ length: 6 }).map((_, idx) => (
                    <div key={idx} className='h-80 animate-pulse rounded bg-slate-700' />
                ))}
            </div>
        )
    }

    if (!results.length) {
        return (
            <div className='mt-6 rounded bg-slate-800 p-6 text-center'>
                <h3 className='text-2xl font-bold text-white'>No results found</h3>
                <p className='mt-3 text-sm text-slate-300'>Try another search word.</p>
            </div>
        )
    }

    return (
        <div className='mt-6 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {results.map((item, idx) => {
                return <div key={idx}>
                    <ResultCard item={item} />
                </div>
            })}
        </div>
    )
}

export default ResultGrid
