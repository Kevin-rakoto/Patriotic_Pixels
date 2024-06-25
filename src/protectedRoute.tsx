import { Navigate } from 'react-router-dom';
import { ReactNode } from 'react';

interface ProtectedRouteProps {
    isAuthenticated: boolean;
    children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ isAuthenticated, children }) => {
    if (!isAuthenticated) {
        return <Navigate to='/login' replace />;
    }
    return <>{children}</>;
};

export default ProtectedRoute;
