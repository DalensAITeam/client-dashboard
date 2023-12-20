import CompressedNav from "./Components/CompressedNav"
import DataScreen from "./Components/DataScreen"
import Header from "./Components/Header"

const DataManagerScreen = () => {
  return (
    <div className="flex">
      <CompressedNav/>
      <div className="min-w-[calc(100vw - 100px)] px-[1.2rem] py-[.7rem] flex min-h-screen flex-col">
      <Header/>
      <DataScreen/>
      </div>
    </div>
  )
}

export default DataManagerScreen