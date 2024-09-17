import { UserInfoType } from '../types/types'

function UserInfo({ type, infoTitle, userDetail }: UserInfoType) {
    return (
        <div className={`flex items-center gap-2 ${type}`}>
            <p className="w-2/6 text-sm font-semibold xs:text-base sm:hidden">
                {infoTitle}
            </p>
            <p className="w-4/6 sm:w-full">{userDetail}</p>
        </div>
    )
}

export default UserInfo
