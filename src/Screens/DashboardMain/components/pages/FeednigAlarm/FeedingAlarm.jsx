"use client"

import "./FeedingAlarm.css"
import { useState, useEffect } from "react"

const FeedingAlarm = () => {
  console.log("Rendering FeedingAlarm component")
  const [alarmTime, setAlarmTime] = useState("08:00")
  const [isAlarmActive, setIsAlarmActive] = useState(false)
  const [nextAlarm, setNextAlarm] = useState("")

  // Handle time change
  const handleTimeChange = (e) => {
    setAlarmTime(e.target.value)
    calculateNextAlarm(e.target.value)
  }

  // Toggle alarm active state
  const toggleAlarm = () => {
    setIsAlarmActive(!isAlarmActive)
  }

  // Calculate next alarm time based on current time
  const calculateNextAlarm = (timeString) => {
    const now = new Date()
    const [hours, minutes] = timeString.split(":").map(Number)

    const alarmDate = new Date()
    alarmDate.setHours(hours, minutes, 0, 0)

    // If alarm time is earlier than current time, set it for tomorrow
    if (alarmDate < now) {
      alarmDate.setDate(alarmDate.getDate() + 1)
    }

    // Format the next alarm time
    const timeUntil = alarmDate - now
    const hoursUntil = Math.floor(timeUntil / (1000 * 60 * 60))
    const minutesUntil = Math.floor((timeUntil % (1000 * 60 * 60)) / (1000 * 60))

    setNextAlarm(`${hoursUntil}h ${minutesUntil}m from now`)
  }

  // Initialize next alarm on component mount
  useEffect(() => {
    calculateNextAlarm(alarmTime)
  }, [])

  return (
    <div className="w-full bg-white rounded-lg border shadow-sm overflow-hidden">
      <div className="p-4 border-b">
        <h2 className="text-lg font-medium">Set Feeding Alarm</h2>
      </div>

      <div className="p-4 flex flex-col items-center">
        <div className="flex items-center gap-2 w-full max-w-xs">
          <input
            type="number"
            min="1"
            max="12"
            value={alarmTime.split(":")[0]}
            onChange={(e) => {
              const hours = e.target.value.padStart(2, "0")
              const minutes = alarmTime.split(":")[1]
              setAlarmTime(`${hours}:${minutes}`)
              calculateNextAlarm(`${hours}:${minutes}`)
            }}
            className="w-12 text-center border-b-2 border-lime-500 focus:outline-none text-xl"
          />
          <span className="text-xl">:</span>
          <input
            type="number"
            min="0"
            max="59"
            value={alarmTime.split(":")[1]}
            onChange={(e) => {
              const hours = alarmTime.split(":")[0]
              const minutes = e.target.value.padStart(2, "0")
              setAlarmTime(`${hours}:${minutes}`)
              calculateNextAlarm(`${hours}:${minutes}`)
            }}
            className="w-12 text-center border-b-2 border-lime-500 focus:outline-none text-xl"
          />
          <select
            className="ml-2 border-b-2 border-lime-500 focus:outline-none text-xl"
            onChange={(e) => {
              const hours = Number.parseInt(alarmTime.split(":")[0])
              const minutes = alarmTime.split(":")[1]
              const newHours =
                e.target.value === "PM" && hours < 12 ? hours + 12 : e.target.value === "AM" && hours === 12 ? 0 : hours
              setAlarmTime(`${newHours.toString().padStart(2, "0")}:${minutes}`)
              calculateNextAlarm(`${newHours.toString().padStart(2, "0")}:${minutes}`)
            }}
          >
            <option>AM</option>
            <option>PM</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default FeedingAlarm
