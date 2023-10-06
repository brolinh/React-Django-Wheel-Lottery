import Container from '@mui/material/Container';

import { useDispatch, useSelector } from 'react-redux'

const Dashboard = () => {
    
    const dispatch = useDispatch()
    return (
        <Container className="mt-5">
            Dashboard
        </Container>
    )
}
export default Dashboard;