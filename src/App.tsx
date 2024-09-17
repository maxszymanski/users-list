import Headers from './components/Headers'
import Main from './components/Main'

function App() {
    return (
        <div className="duration:500 text text-red h-screen w-full overflow-hidden bg-bg font-nunito font-normal text-darkbg transition-all dark:bg-darkSecondBg dark:text-darktext">
            <Headers />
            <Main />
        </div>
    )
}

export default App
