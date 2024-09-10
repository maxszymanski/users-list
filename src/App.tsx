import Headers from './components/Headers'
import UsersList from './components/UsersList'

function App() {
    return (
        <main className="justyfy-center duration:500 flex min-h-screen w-full items-center bg-gradient-to-r from-[#7b7a94] via-[#b3b3ec] to-[#c1c1db] transition-all dark:from-[rgba(2,0,36,1)] dark:via-[rgba(2,2,19,1)] dark:to-[rgba(8,8,80,1)]">
            <Headers />
            <UsersList />
        </main>
    )
}

export default App

// background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
