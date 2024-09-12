function TableCategory() {
    return (
        <div className="flex w-[768px] justify-around gap-2 bg-white px-4 py-4 text-sm font-semibold dark:bg-darkTable xl:w-[800px] xl:py-6 xl:text-lg">
            <div className="w-40">
                <p>Full name </p>
            </div>
            <div className="w-36">
                <p>Username</p>
            </div>
            <div className="w-32">
                <p>Phone</p>
            </div>
            <div className="w-60">
                <p>Email</p>
            </div>
        </div>
    )
}

export default TableCategory
