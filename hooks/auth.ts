import { User } from "@/types"
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import useSWR from "swr"
import axios from "../lib/axios"

type UseAuthProps = {
  middleware?: "auth" | "guest"
  redirectIfAuthenticated?: string
}

type AuthResponse = {
  user: User
  register: any
  login: any
  forgotPassword: any
  resetPassword: any
  resendEmailVerification: any
  logout: any
  sendMagicLink: any
}
export const useAuth = ({ middleware, redirectIfAuthenticated }: UseAuthProps = {}): AuthResponse => {
  const navigate = useNavigate()
  const params = useParams()

  const {
    data: user,
    error,
    mutate,
  } = useSWR("/api/user", () =>
    axios
      .get("/api/user")
      .then((res) => res.data)
      .catch((error) => {
        if (error.response.status !== 409) throw error

        navigate("/verify-email")
      }),
  )

  const csrf = () => axios.get("/sanctum/csrf-cookie")

  const register = async ({ setErrors, ...props }) => {
    await csrf()

    setErrors([])

    axios
      .post("/register", props)
      .then(() => mutate())
      .catch((error) => {
        if (error.response.status !== 422) throw error

        setErrors(error.response.data.errors)
      })
  }

  const login = async ({ setErrors, setStatus, ...props }) => {
    await csrf()

    setErrors([])
    setStatus(null)

    axios
      .post("/login", props)
      .then(() => mutate())
      .catch((error) => {
        if (error.response.status !== 422) throw error

        setErrors(error.response.data.errors)
      })
  }

  const forgotPassword = async ({ setErrors, setStatus, email }) => {
    await csrf()

    setErrors([])
    setStatus(null)

    axios
      .post("/forgot-password", { email })
      .then((response) => setStatus(response.data.status))
      .catch((error) => {
        if (error.response.status !== 422) throw error

        setErrors(error.response.data.errors)
      })
  }

  const resetPassword = async ({ setErrors, setStatus, ...props }) => {
    await csrf()

    setErrors([])
    setStatus(null)

    axios
      .post("/reset-password", { token: params.token, ...props })
      .then((response) => navigate("/login?reset=" + btoa(response.data.status)))
      .catch((error) => {
        if (error.response.status !== 422) throw error

        setErrors(error.response.data.errors)
      })
  }

  const resendEmailVerification = ({ setStatus }) => {
    axios.post("/email/verification-notification").then((response) => setStatus(response.data.status))
  }

  const logout = async () => {
    if (!error) {
      await axios.post("/logout").then(() => mutate())
    }

    window.location.pathname = "/login"
  }

  const sendMagicLink = async ({ setErrors, setStatus, ...props }) => {
    await csrf()

    setErrors([])
    setStatus(null)

    axios
      .post("/send-magic-link", props)
      .then((response) => {
        setStatus(response.data.message)
        mutate()
      })
      .catch((error) => {
        if (error.response.status !== 422) throw error

        setErrors(error.response.data.errors)
      })
  }

  useEffect(() => {
    if (middleware === "guest" && redirectIfAuthenticated && user) navigate(redirectIfAuthenticated)
    if (window.location.pathname === "/verify-email" && user?.email_verified_at) navigate(redirectIfAuthenticated)
    if (middleware === "auth" && error) logout()
  }, [user, error])

  return {
    user,
    register,
    login,
    forgotPassword,
    resetPassword,
    resendEmailVerification,
    logout,
    sendMagicLink,
  }
}
