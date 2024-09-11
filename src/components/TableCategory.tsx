function TableCategory() {
    return (
        <div className="bg-table flex w-fit justify-around gap-2 px-4 py-4 text-sm font-semibold dark:bg-darkTable lg:w-full xl:py-6 xl:text-lg">
            <div className="w-40">
                <p>Full name </p>
            </div>
            <div className="w-36">
                <p>Username</p>
            </div>
            <div className="w-36">
                <p>Company</p>
            </div>
            <div className="w-32">
                <p>Phone</p>
            </div>
            <div className="w-60">
                <p>Email</p>
            </div>
            <div className="w-44">
                <p>Website</p>
            </div>
        </div>
    )
}

export default TableCategory
