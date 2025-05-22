"use client"

import React, { useEffect } from "react"
import MainLayout from "../../LayOut/MainLayout"
import NumberOfAnimals from "./components/pages/NumberOfAnimals/NumberOfAnimals"
import GeneralHealth from "./components/pages/GeneralHealth/GeneralHealth"
import FeedingAlarm from "./components/pages/FeednigAlarm/FeedingAlarm"
import FeedingStatus from "./components/pages/FeedingStatus/FeedingStatus"
import Metrics from "./components/pages/metrics/Metrics"
import QuickMonitoring from "./components/pages/quickMonitoring/QuickMonitoring"
import { useAnimalDetection } from '../../context/AnimalDetectionContext';

// Error boundary for component error handling
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error("Component error:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <div>Something went wrong.</div>
    }
    return this.props.children
  }
}

const errorCardFallback = (
  <div className="p-6 text-center text-red-600">
    <div className="font-semibold mb-2">Unable to load data</div>
    <div className="text-xs text-gray-500">There was a problem fetching data from the backend. Please try again later.</div>
  </div>
);

const DashboardMain = () => {
  const { detectionData, streamStats } = useAnimalDetection();
  
  // Calculate totals and stats from detection data
  const totalStats = Object.values(detectionData).reduce((acc, curr) => {
    // Calculate feeding based on time of day and activity patterns
    const timeOfDay = new Date().getHours();
    const isFeeding = timeOfDay >= 6 && timeOfDay <= 9 || // Morning feeding time
                     timeOfDay >= 16 && timeOfDay <= 19;   // Evening feeding time
    const feedingMultiplier = isFeeding ? 0.7 : 0.2;      // More animals feed during feeding times
    
    return {
      totalAnimals: (acc.totalAnimals || 0) + curr.animalCount,
      threatCount: (acc.threatCount || 0) + (curr.threatState !== 'Normal' ? 1 : 0),
      feedingCount: (acc.feedingCount || 0) + Math.round(curr.animalCount * feedingMultiplier),
      states: {
        active: timeOfDay >= 6 && timeOfDay <= 18 ? 75 : 25, // More active during day
        feeding: isFeeding ? 80 : 30,
        health: curr.threatState === 'Normal' ? 90 : 60
      }
    };
  }, { states: { active: 50, feeding: 40, health: 75 } });

  useEffect(() => {
    document.title = "Dashboard | DalensAI"
  }, [])

  return (
    <MainLayout activePage="dashboard">
      <div className="w-full bg-gray-50 min-h-screen">
        <div className="p-4 lg:p-6">
          <div className="max-w-[1920px] mx-auto space-y-8">
            {/* Grid layout container */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 items-start">
              {/* Main content area (left 2/3) */}
              <div className="xl:col-span-2 space-y-8">
                {/* QuickMonitoring */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-0 h-[70vh] overflow-hidden">
                  <ErrorBoundary fallback={errorCardFallback}>
                    <div className="w-full h-full">
                      <QuickMonitoring />
                    </div>
                  </ErrorBoundary>
                </div>
                
                {/* Metrics */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-0 h-[280px]">
                  <ErrorBoundary fallback={errorCardFallback}>
                    <Metrics animalStats={totalStats} />
                  </ErrorBoundary>
                </div>
              </div>

              {/* Sidebar (right 1/3) */}
              <div className="space-y-6">
                {/* Animal Statistics */}
                <div className="bg-white rounded-xl shadow border border-gray-100">
                  <div className="px-4 py-3 flex justify-between items-center border-b border-gray-100">
                    <h3 className="text-gray-800 text-sm font-medium">Animal Statistics</h3>
                    <span className="text-xs text-gray-500">Live</span>
                  </div>
                  <ErrorBoundary fallback={errorCardFallback}>
                    <div className="px-4 pb-4">
                      <NumberOfAnimals
                        totalAnimals={totalStats.totalAnimals || 0}
                        threatCount={totalStats.threatCount || 0}
                        feedingCount={totalStats.feedingCount || 0}
                      />
                    </div>
                  </ErrorBoundary>
                </div>

                {/* Health Monitor */}
                <div className="bg-white rounded-xl shadow border border-gray-100">
                  <div className="px-4 py-3 flex justify-between items-center border-b border-gray-100">
                    <h3 className="text-gray-800 text-sm font-medium">Health Monitor</h3>
                    <span className="text-xs text-gray-500">Updated</span>
                  </div>
                  <ErrorBoundary fallback={errorCardFallback}>
                    <div className="px-4 pb-4">
                      <GeneralHealth />
                    </div>
                  </ErrorBoundary>
                </div>

                {/* Feeding Alerts */}
                <div className="bg-white rounded-xl shadow border border-gray-100">
                  <div className="px-4 py-3 flex justify-between items-center border-b border-gray-100">
                    <h3 className="text-gray-800 text-sm font-medium">Feeding Alerts</h3>
                    <span className="text-xs text-gray-500">Real-time</span>
                  </div>
                  <ErrorBoundary fallback={errorCardFallback}>
                    <div className="px-4 pb-4">
                      <FeedingAlarm />
                    </div>
                  </ErrorBoundary>
                </div>

                {/* Feed Level Status */}
                <div className="bg-white rounded-xl shadow border border-gray-100">
                  <div className="px-4 py-3 flex justify-between items-center border-b border-gray-100">
                    <h3 className="text-gray-800 text-sm font-medium">Feed Level Status</h3>
                    <span className="text-xs text-gray-500">Current</span>
                  </div>
                  <ErrorBoundary fallback={errorCardFallback}>
                    <div className="px-4 pb-4">
                      <FeedingStatus />
                    </div>
                  </ErrorBoundary>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default DashboardMain
