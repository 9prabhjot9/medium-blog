import { Navigate } from "react-router-dom";

export default function ProtectedRoute({children}: {children: React.ReactNode}) {
    const token = localStorage.getItem("token")

    if (!token || token === "null" || token === "undefined") {
        return <Navigate to="/signup" replace />
    }
    return <>{children}</>
}