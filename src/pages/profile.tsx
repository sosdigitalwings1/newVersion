"use client"

import { User } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import type React from "react" // Added import for React

const ProfileButton: React.FC = () => {
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleClick = () => {
    if (isClient) {
      const isRegistered = localStorage.getItem("userToken") // This is a simple check. Use a proper auth system in production.
      if (isRegistered) {
        router.push("/profile")
      } else {
        router.push("/register")
      }
    }
  }

  return (
    <button className="hover:opacity-70 transition-opacity" onClick={handleClick}>
      <User className="w-[18px] h-[18px]" />
    </button>
  )
}

export default ProfileButton

