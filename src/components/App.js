import useLogin from "../hooks/useLogin";
import AssetList from '../views/AssetList';
import '../styles/App.css'

const App = () => {
    useLogin()
    return (
        <div className='container'>
            <AssetList />
        </div>
    )
}
export default App