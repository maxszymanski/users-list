import { useAppDispatch, useAppSelector } from '../hooks'
import { selectSearchOption } from '../services/usersSlice'

function FiltersBox() {
    const dispatch = useAppDispatch()
    const selectedSearchOption = useAppSelector(
        (state) => state.users.selectedSearchOption
    )

    return (
        <div className="px-8 py-4 md:py-8">
            <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between">
                <h2 className="font-kalam text-2xl dark:text-darktext md:text-4xl">
                    Find, filter and sort
                </h2>
                <form className="flex flex-col items-center gap-4 overflow-hidden md:flex-row">
                    <select
                        defaultValue="name"
                        className="hover:red-500 rounded-full border border-lightborder bg-secondBg p-2.5 text-sm text-darkbg outline-none focus:border-primary focus:ring-primary dark:border-darkborder dark:bg-darkbg dark:text-secondBg dark:placeholder-gray-400 dark:focus:border-primary dark:focus:ring-primary"
                        onChange={(e) =>
                            dispatch(selectSearchOption(e.target.value))
                        }
                    >
                        <option disabled className="text-primary">
                            -- Select search type --
                        </option>
                        <option value="name" className="">
                            Search by name
                        </option>
                        <option value="username" className="">
                            Search by username
                        </option>
                        <option value="number" className="">
                            Search by phone number
                        </option>
                        <option value="email" className="">
                            Search by email
                        </option>
                    </select>
                    <input
                        type="search"
                        className="w-full rounded-full bg-secondBg px-4 py-2 dark:bg-darkbg"
                        placeholder={`Search by ${selectedSearchOption}`}
                    />
                </form>
            </div>
        </div>
    )
}

export default FiltersBox
