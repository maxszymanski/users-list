function TableCategory() {
    return (
        <div className="flex w-full justify-around gap-2 bg-white px-4 py-4 text-sm font-semibold dark:bg-darkTable md:w-[768px] xl:w-[800px] xl:py-6 xl:text-lg">
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
        </div>
    )
}

export default TableCategory
