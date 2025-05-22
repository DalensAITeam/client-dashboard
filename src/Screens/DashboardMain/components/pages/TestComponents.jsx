export const TestNumberOfAnimals = () => {
    return (
      <div className="w-full bg-white rounded-lg border shadow-sm p-4">
        <h2 className="text-lg font-medium">Test: Total Number Of Animals</h2>
        <div className="flex justify-center gap-2 my-4">
          <div className="flex h-12 w-10 items-center justify-center rounded-md bg-gray-100 p-2 text-2xl font-medium text-gray-700">
            2
          </div>
          <div className="flex h-12 w-10 items-center justify-center rounded-md bg-gray-100 p-2 text-2xl font-medium text-gray-700">
            5
          </div>
          <div className="flex h-12 w-10 items-center justify-center rounded-md bg-gray-100 p-2 text-2xl font-medium text-gray-700">
            0
          </div>
        </div>
      </div>
    )
  }
  
  export const TestGeneralHealth = () => {
    return (
      <div className="w-full bg-white rounded-lg border shadow-sm p-4">
        <h2 className="text-lg font-medium">Test: General Health Status</h2>
        <div className="bg-gray-100 h-24 rounded-lg my-4"></div>
        <div className="flex justify-between">
          <span>Threats: 0</span>
          <span>
            Status: <span className="text-green-500">Perfect</span>
          </span>
        </div>
      </div>
    )
  }
  
  export const TestFeedingAlarm = () => {
    return (
      <div className="w-full bg-white rounded-lg border shadow-sm p-4">
        <h2 className="text-lg font-medium">Test: Set Feeding Alarm</h2>
        <div className="flex justify-center my-4">
          <input type="time" className="border-b-2 border-lime-500 text-xl" defaultValue="08:00" />
        </div>
      </div>
    )
  }
  
  export const TestFeedingStatus = () => {
    return (
      <div className="w-full bg-white rounded-lg border shadow-sm p-4">
        <h2 className="text-lg font-medium">Test: General Feeding Status</h2>
        <div className="flex justify-center my-4">
          <div className="h-32 w-32 rounded-full bg-lime-500 flex items-center justify-center">
            <span className="text-white text-2xl font-bold">70%</span>
          </div>
        </div>
      </div>
    )
  }
  