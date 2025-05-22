"use client"

import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { FaBell } from "react-icons/fa"
import headline from "../assets/headline.svg"

/**
 * Header component - Application header with navigation controls
 */
const Header = () => {
  const dispatch = useDispatch()
  const userData = useSelector((state) => state.userdata || {})
  const first_name = userData?.first_name || 'User'
  const notificationCount = useSelector((state) => 
    state.actions?.notifications?.unread || 0
  )

  return (
    <header className="sticky top-0 z-20 flex h-16 items-center justify-end border-b bg-white px-4 shadow-sm">
      <div className="flex items-center gap-6">
        <Link
          to="/notifications"
          className="relative text-gray-600 transition-colors hover:text-lime-500"
        >
          <FaBell size={20} />
          {notificationCount > 0 && (
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
              {notificationCount > 99 ? '99+' : notificationCount}
            </span>
          )}
        </Link>

        <Link 
          to="/settings/profile"
          className="flex items-center space-x-3 hover:opacity-80"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-lime-500 font-medium text-white shadow transition-transform hover:scale-105">
            {first_name[0]?.toUpperCase()}
          </div>
          <span className="hidden sm:inline text-sm font-medium text-gray-600">
            {first_name}
          </span>
        </Link>
      </div>
    </header>
  )
}

export default Header
