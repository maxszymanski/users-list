import { useAppDispatch, useAppSelector } from '../hooks'
import {
    filterUsers,
    selectSearchOption,
    setSearchTerm,
} from '../services/usersSlice'

function FiltersBox() {
    const dispatch = useAppDispatch()
    const selectedSearchOption = useAppSelector(
        (state) => state.users.selectedSearchOption
    )
    const searchTerm = useAppSelector((state) => state.users.searchTerm)

    return (
        <div className="px-8 py-4 md:py-8 lg:fixed lg:w-[150px] lg:px-0">
            <div className="flex w-full flex-col justify-between text-center">
                <h2 className="font-kalam text-2xl dark:text-darktext md:text-4xl">
                    Search and Sort
                </h2>
                <div className="flex w-full flex-col items-center gap-4 overflow-hidden">
                    <button>sort by</button>
                    <input
                        type="search"
                        className="w-full rounded-full bg-secondBg px-4 py-2 dark:bg-darkbg"
                        placeholder={`Search by ${selectedSearchOption}`}
                        value={searchTerm}
                        onChange={(e) => {
                            dispatch(setSearchTerm(e.target.value))
                            dispatch(filterUsers())
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default FiltersBox
