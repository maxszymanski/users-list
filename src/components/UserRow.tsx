import UserInfo from './UserInfo'

function UserRow({ user }) {
    const fullName = `${user.firstname} ${user.lastname}`
    const userName = user.login.username
    const phone = user.phone
    const email = user.email

    return (
        <li className="bg-table mb-4 flex flex-col gap-2 rounded-xl border-b border-t border-lightborder px-4 py-5 text-start text-xs text-stone-800 shadow-2xl shadow-violet-100 first:border-t-0 odd:bg-white dark:border-darkborder dark:text-stone-300 dark:shadow-darkborder dark:odd:bg-darkTable dark:even:bg-darkbg xs:px-6 xs:text-sm sm:mb-0 sm:flex-row sm:justify-around sm:rounded-none sm:border-b-0 sm:text-center xl:py-8 xl:text-base">
            <UserInfo
                infoTitle="Full Name"
                userDetail={fullName}
                type="sm:min-w-32 md:min-w-40"
            />
            <UserInfo
                infoTitle="Username"
                userDetail={userName}
                type="sm:min-w-28 md:min-w-36"
            />
            <UserInfo infoTitle="Phone" userDetail={phone} type="sm:min-w-32" />
            <UserInfo
                infoTitle="Email"
                userDetail={email}
                type="sm:min-w-52 md:min-w-60"
            />
        </li>
    )
}

export default UserRow
