import { useSelector } from 'react-redux'
import { RootState } from 'my-redux/redux-store'

export const useAppSelector = useSelector.withTypes<RootState>()
