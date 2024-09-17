function UsersCount({
    filteredCount,
    totalCount,
}: {
    filteredCount: number
    totalCount: number
}) {
    return (
        <div className="w-full border-t border-lightborder bg-secondBg px-4 py-4 text-center text-xs dark:border-darkborder dark:bg-darkTable sm:px-8 sm:py-5 sm:text-sm xl:py-6">
            <p>
                Showing <span className="font-bold">{filteredCount}</span> out
                of <span className="font-bold">{totalCount}</span> users
            </p>
        </div>
    )
}

export default UsersCount
