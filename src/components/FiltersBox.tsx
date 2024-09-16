import { useAppDispatch, useAppSelector } from '../hooks'
import { filterUsers, setSearchTerm } from '../services/usersSlice'
import SortUsers from './SortUsers'

function FiltersBox() {
    const dispatch = useAppDispatch()
    const searchTerm = useAppSelector((state) => state.users.searchTerm)

    return (
        <div className="px-8 py-8 md:py-8 xl:fixed xl:px-0">
            <div className="mx-auto flex w-full max-w-[375px] flex-col justify-between text-center">
                <h2 className="mb-8 mt-2 font-kalam text-2xl dark:text-darktext md:text-4xl">
                    Search and Sort
                </h2>
                <div className="flex w-full items-center gap-12">
                    <div className="relative">
                        <input
                            id="search"
                            type="search"
                            className="w-full rounded-xl border border-lightborder bg-secondBg px-5 py-2 shadow-[0px_0px_26px_2px] shadow-violet-100 outline-none focus:border-primary dark:border-darkborder dark:bg-darkbg dark:shadow-darkborder dark:focus:border-primary"
                            placeholder={`Search `}
                            value={searchTerm}
                            onChange={(e) => {
                                dispatch(setSearchTerm(e.target.value))
                                dispatch(filterUsers())
                            }}
                        />
                    </div>
                    <SortUsers />
                </div>
            </div>
        </div>
    )
}

export default FiltersBox
