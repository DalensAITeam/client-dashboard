import CompressedNav from "./CompressedNav";
import DataScreen from "./DataScreen";
import Header from "./Header";

const Screen = () => {
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

export default Screen