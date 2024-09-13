function TableCategory() {
    return (
        <li className="mb-4 flex w-full justify-around gap-2 border-b border-lightborder bg-white px-4 py-4 text-sm font-semibold shadow-2xl shadow-violet-100 dark:border-darkborder dark:bg-darkTable dark:shadow-darkborder sm:mb-0 sm:border-0 xl:py-6 xl:text-lg">
            <div className="hidden sm:block sm:min-w-32 md:min-w-40">
                <p>Full name </p>
            </div>
            <div className="hidden sm:block sm:min-w-28 md:min-w-36">
                <p>Username</p>
            </div>
            <div className="hidden sm:block sm:min-w-32">
                <p>Phone</p>
            </div>
            <div className="hidden sm:block sm:min-w-52 md:min-w-60">
                <p>Email</p>
            </div>
        </li>
    )
}

export default TableCategory
