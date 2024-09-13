function UserRow({ user }) {
    const fullName = `${user.firstname} ${user.lastname}`
    const userName = user.login.username
    const phone = user.phone
    const email = user.email

    return (
        <div className="bg-table flex max-w-[768px] justify-around gap-2 border-t border-lightborder px-4 py-5 text-sm text-stone-800 odd:bg-white dark:border-darkborder dark:text-stone-300 dark:odd:bg-darkTable dark:even:bg-darkbg xl:max-w-[800px] xl:py-8 xl:text-base">
            <p className="sm:min-w-32 md:min-w-40">{fullName}</p>
            <p className="sm:min-w-28 md:min-w-36">{userName}</p>
            <p className="sm:min-w-32">{phone}</p>
            <p className="sm:min-w-52 md:min-w-60">{email}</p>
        </div>
    )
}

export default UserRow
