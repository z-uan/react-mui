import React from "react"

const publicRoutes: RouteType[] = [
  {
    path: "/login",
    component: React.lazy(() => import("../containers/Guest/Login"))
  },
  {
    path: "/forgot-password",
    component: React.lazy(() => import("../containers/Guest/PasswordForgot"))
  },
  {
    path: "/password-recovery",
    component: React.lazy(() => import("../containers/Guest/PasswordRecovery"))
  },
]

export default publicRoutes