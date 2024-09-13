function UserInfo({ type, infoTitle, userDetail }) {
    return (
        <div className={`flex items-center gap-2 ${type}`}>
            <p className="xs:text-base w-2/6 text-sm font-semibold sm:hidden">
                {infoTitle}
            </p>
            <p className="w-4/6 sm:w-full">{userDetail}</p>
        </div>
    )
}

export default UserInfo
