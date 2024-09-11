import Headers from './components/Headers'
import Main from './components/Main'

function App() {
    return (
        <div className="duration:500 text text-red min-h-screen w-full bg-bg font-nunito font-normal text-darkbg transition-all dark:bg-darkSecondBg dark:text-darktext">
            <Headers />
            <Main />
        </div>
    )
}

export default App

// background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
// className="justyfy-center duration:500 to-[rgb(0, 0, 0)] flex min-h-screen w-full items-center bg-gradient-to-r from-[#929292] via-[#161616] transition-all dark:from-[rgba(2,0,36,1)] dark:via-[rgba(2,2,19,1)] dark:to-[rgba(8,8,80,1)]"
