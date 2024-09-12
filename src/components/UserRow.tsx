function UserRow({ user }) {
    const fullName = `${user.firstname} ${user.lastname}`
    const userName = user.login.username
    const phone = user.phone
    const email = user.email

    return (
        <div className="bg-table flex w-[768px] justify-around gap-2 border-t border-lightborder px-4 py-5 text-sm odd:bg-white dark:border-darkborder dark:odd:bg-darkTable dark:even:bg-darkbg xl:w-[800px] xl:py-8 xl:text-base">
            <p className="w-40">{fullName}</p>
            <p className="w-36">{userName}</p>
            <p className="w-32">{phone}</p>
            <p className="w-60">{email}</p>
        </div>
    )
}

export default UserRow
