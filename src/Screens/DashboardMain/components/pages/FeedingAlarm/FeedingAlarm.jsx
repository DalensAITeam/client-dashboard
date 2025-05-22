"use client"

import React, { useState, useEffect } from "react"
import "./FeedingAlarm.css"

const FeedingAlarm = ({ feedingStatus = 0 }) => {
  const [alarmTime, setAlarmTime] = useState("08:00")
  const [nextAlarm, setNextAlarm] = useState("")

  const calculateNextAlarm = (timeString) => {
    const now = new Date()
    const [hours, minutes] = timeString.split(":").map(Number)
    const alarmDate = new Date()
    alarmDate.setHours(hours, minutes, 0, 0)

    if (alarmDate < now) {
      alarmDate.setDate(alarmDate.getDate() + 1)
    }

    const timeUntil = alarmDate - now
    const hoursUntil = Math.floor(timeUntil / (1000 * 60 * 60))
    const minutesUntil = Math.floor((timeUntil % (1000 * 60 * 60)) / (1000 * 60))

    setNextAlarm(`Next alarm in ${hoursUntil}h ${minutesUntil}m`)
  }

  useEffect(() => {
    calculateNextAlarm(alarmTime)
    const interval = setInterval(() => calculateNextAlarm(alarmTime), 60000)
    return () => clearInterval(interval)
  }, [alarmTime])

  const getAlarmStatus = (feeding) => {
    if (feeding >= 60) return { color: 'text-green-500', bgColor: 'bg-green-50' }
    if (feeding >= 40) return { color: 'text-yellow-500', bgColor: 'bg-yellow-50' }
    return { color: 'text-red-500', bgColor: 'bg-red-50' }
  }

  const status = getAlarmStatus(feedingStatus)

  return (
    <div className="flex flex-col h-full w-full p-2">
      <div className="flex items-center justify-between mb-4">
        <input
          type="time"
          value={alarmTime}
          onChange={(e) => {
            setAlarmTime(e.target.value)
            calculateNextAlarm(e.target.value)
          }}
          className="p-2 rounded text-gray-700 bg-gray-50 focus:outline-none border-b-2 border-lime-500"
        />
        <div className={`text-sm font-medium ${status.color}`}>
          {nextAlarm}
        </div>
      </div>

      <div className={`flex-1 ${status.bgColor} rounded-lg p-4 flex items-center justify-center`}>
        <div className="text-center">
          <div className={`text-3xl font-bold ${status.color}`}>
            {feedingStatus}%
          </div>
          <div className="text-sm text-gray-600 mt-2">
            Feeding Rate
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeedingAlarm
