import { useAppDispatch, useAppSelector } from '../hooks'
import { filterUsers, setSearchTerm, sortUsers } from '../services/usersSlice'
import SortUsers from './SortUsers'

function FiltersBox() {
    const dispatch = useAppDispatch()
    const searchTerm = useAppSelector((state) => state.users.searchTerm)

    return (
        <div className="border-lightborder from-bg to-secondBg px-8 py-8 dark:bg-none md:py-8 xl:fixed xl:my-7 xl:rounded-xl xl:border xl:bg-gradient-to-b xl:px-5 xl:pb-24 xl:shadow-[0px_0px_26px_2px] xl:shadow-violet-100 xl:dark:border-darkborder xl:dark:bg-darkbg xl:dark:shadow-darkborder 2xl:px-8">
            <div className="mx-auto flex w-full max-w-[375px] flex-col justify-between text-center xl:max-w-[320px] 2xl:max-w-[420px]">
                <h2 className="mb-8 mt-2 font-kalam text-2xl text-primary dark:text-primary md:text-4xl xl:mb-12 xl:mt-12">
                    Search and Sort
                </h2>
                <div className="flex w-full items-center gap-8 md:gap-12 xl:gap-6">
                    <input
                        id="search"
                        type="search"
                        className="w-full rounded-xl border border-lightborder from-violet-100 to-bg px-5 py-2 shadow-[0px_0px_26px_2px] shadow-violet-100 outline-none transition-colors duration-300 placeholder:text-darkbg focus:border-primary focus:shadow-violet-300 dark:border-darkborder dark:bg-darkTable dark:bg-none dark:shadow-darkborder dark:placeholder:text-lighttext dark:focus:border-primary xl:bg-gradient-to-b"
                        placeholder={`Search `}
                        value={searchTerm}
                        onChange={(e) => {
                            dispatch(setSearchTerm(e.target.value))
                            dispatch(filterUsers())
                            dispatch(sortUsers())
                        }}
                    />

                    <SortUsers />
                </div>
            </div>
        </div>
    )
}

export default FiltersBox
