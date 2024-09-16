import FiltersBox from './FiltersBox'
import UsersList from './UsersList'

function Main() {
    return (
        <main className="h-full w-full overflow-scroll pb-24 xl:pt-12">
            <div className="relative mx-auto w-full max-w-[1400px] justify-between lg:px-8 xl:flex">
                <FiltersBox />
                <UsersList />
            </div>
        </main>
    )
}

export default Main
