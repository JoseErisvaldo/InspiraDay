import { useLocation } from 'react-router-dom'
import CompoLogin from '../../Components/CompoAuth/CompoLogin'
import CompoCreateAccount from '../../Components/CompoAuth/CompoCreateAccount'


export default function Auth() {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const mode = queryParams.get('mode') || 'login'
  return (
    <div className="w-screen">
      {mode === 'login' ? (
        <div className="flex justify-center items-center h-screen">
          <CompoLogin />
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <CompoCreateAccount />
        </div>
      )}
    
    </div>
  )
}
