import FiltersBox from './FiltersBox'
import UsersList from './UsersList'

function Main() {
    return (
        <main className="h-full w-full overflow-scroll pb-40">
            <FiltersBox />
            <div>
                <UsersList />
            </div>
        </main>
    )
}

export default Main
