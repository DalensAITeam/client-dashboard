"use client"

import { useEffect } from "react"
import MainLayout from "../../LayOut/MainLayout"
import EnhancedLiveView from './Component/EnhancedLiveView'

/**
 * FarmMonitor - Main page for monitoring livestock with enhanced live view
 */
const FarmMonitor = () => {
  // Set page title
  useEffect(() => {
    document.title = "Farm Monitor | DalensAI"
    // Ensure dark theme is applied to the body
    document.documentElement.classList.add('dark')
    return () => {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  return (
    <MainLayout activePage="farm">
      <div className="relative h-[calc(100vh-64px)] w-full bg-gray-900">
        <EnhancedLiveView />
      </div>
    </MainLayout>
  )
}

export default FarmMonitor