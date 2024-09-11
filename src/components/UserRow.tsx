function UserRow({ user }) {
    const fullName = `${user.firstname} ${user.lastname}`
    const userName = user.login.username
    const company = user.company.name
    const phone = user.phone
    const email = user.email
    const website = user.website

    return (
        <div className="flex w-fit justify-around gap-2 border-t border-lightborder px-4 py-5 text-sm even:bg-bg dark:border-darkborder dark:odd:bg-darkTable dark:even:bg-darkbg lg:w-full xl:py-8 xl:text-base">
            <p className="w-40">{fullName}</p>
            <p className="w-36">{userName}</p>
            <p className="w-36">{company}</p>
            <p className="w-32">{phone}</p>
            <p className="w-60">{email}</p>
            <p className="w-44">{website}</p>
        </div>
    )
}

export default UserRow
