import filter from "../assets/filter.svg";
import notification from "../assets/notification.svg";
import hailday from "../assets/hailday.svg";
import night from "../assets/night.svg";
import heart from "../assets/heart.svg";
import chart from "../assets/chart.svg";
import warning from "../assets/warning.svg";
import search from "../assets/search.svg";
import ChartSection from "./ChartSection";
import { useState } from "react";

const DataScreen = () => {
  const [searchText, setSearchText] = useState("");
  const handleSearch = (ev) => {
    ev.preventDefault();
    alert(searchText);
  };
  return (
    <div className="DataScreen pt-8">
      <h4 className="heading">Data Manager</h4>
      <div className="DataScreen-data-filter flex items-center justify-between">
        <div className="DataScreen-dates flex items-center justify-between">
          <h6 className="Datascreen-date text-[15px]">30 Days</h6>
          <h6 className="Datascreen-date text-[15px]">12 Months</h6>
          <h6 className="Datascreen-date text-[15px]">7 Days</h6>
          <h6 className="Datascreen-date text-[15px]">24 Hours</h6>
        </div>
        <div className="DataScreen-dates-filters flex items-center justify-between">
          <img
            className="w-[40px] h-[40px] border-[.1px] border-[solid] border-[rgb(142,141,141)] flex justify-center items-center px-[0] py-[2px] rounded-[10px]"
            src={notification}
            alt=""
          />

          <img
            className="w-[40px] h-[40px] border-[.1px] border-[solid] border-[rgb(142,141,141)] flex justify-center items-center px-[0] py-[2px] rounded-[10px]"
            src={filter}
            alt=""
          />
        </div>
      </div>
      <div className="DataCreen-group-chart grid grid-cols-[repeat(4,_1fr)] gap-[1.4rem] px-[0] py-[1.2rem]">
        <div className="DataCreen-group-container border-[1.3px] border-[solid] border-[rgb(142,141,141)] rounded-[10px] flex flex-col justify-around p-[.9rem] gap-[.6rem]">
          <img className="w-[30px]" src={hailday} alt="" />
          <h4 className="DataCreen-group-container-text text-[14px] text-[#797979]">
            Total Animal Count
          </h4>
          <h3 className="DataCreen-group-container-number text-[30px] font-extrabold">
            250
          </h3>
        </div>

        <div className="DataCreen-group-container border-[1.3px] border-[solid] border-[rgb(142,141,141)] rounded-[10px] flex flex-col justify-around p-[.9rem] gap-[.6rem]">
          <img className="w-[30px]" src={night} alt="" />
          <h4 className="DataCreen-group-container-text text-[14px] text-[#797979]">
            Total Animal Count
          </h4>
          <h3 className="DataCreen-group-container-number text-[30px] font-extrabold">
            250
          </h3>
        </div>

        <div className="DataCreen-group-container border-[1.3px] border-[solid] border-[rgb(142,141,141)] rounded-[10px] flex flex-col justify-around p-[.9rem] gap-[.6rem]">
          <img className="w-[30px]" src={heart} alt="" />
          <h4 className="DataCreen-group-container-text text-[14px] text-[#797979]">
            Health Status
          </h4>
          <div className="DataCreen-group-container-text-wrapper flex items-center gap-8">
            <div className="group-wrapper flex items-center gap-[.3rem]">
              <img className="warning-img w-[20px]" src={warning} alt="" />
              <p className="smaller-text">
                Threats:<span>0</span>
              </p>
            </div>
            <p className="smaller-text">
              Status:<span>Perfect</span>
            </p>
          </div>
        </div>

        <div className="DataCreen-group-container border-[1.3px] border-[solid] border-[rgb(142,141,141)] rounded-[10px] flex flex-col justify-around p-[.9rem] gap-[.6rem]">
          <div id="group-wrapper" className="flex items-center justify-between">
            <h4 className="DataCreen-group-container-text text-[14px] text-[#797979]">
              Health Status
            </h4>
            <img
              id="DataCreen-group-container-Chart"
              className="w-[70px]"
              src={chart}
              alt=""
            />
          </div>
          <div className="group-wrapper flex items-center gap-[.3rem]">
            <img className="warning-img w-[20px]" src={warning} alt="" />
            <p className="smaller-text">Animals not feeding</p>
          </div>
        </div>
      </div>

      <div className="Data_Screen_Chart flex items-center justify-between">
        <div className="Chart-screen-wrappers border-[1px] border-[solid] border-[rgb(142,141,141)] p-[10px] rounded-[10px]">
          <div
            className="Chart-screen-wrappers-options flex items-center justify-between w-[600px]"
            id="Chart-screen-wrappers-with-chart"
          >
            <h4 className="chart-screen-heading text-[19px]">Analytics</h4>
            <select name="" className="chart-screen-select p-[2px] rounded-[3px] outline-[none]" id="">
              <option value="">2023</option>
              <option value="">2024</option>
            </select>
          </div>
          <ChartSection />
        </div>
        <div
          className="Chart-screen-wrappers w-[450px] h-[345px] border-[1px] border-[solid] border-[rgb(142,141,141)] p-[10px] rounded-[10px]"
          id="Chart-screen-wrappers-without-chart"
        ></div>
      </div>

      <div className="DataScreen_History mt-8 flex flex-col border-[.1px] border-[solid] border-[rgb(142,141,141)] p-[1.2rem] rounded-[10px]">
        <div className="data_screen-container flex items-center justify-between">
          <h4 className="chart-screen-heading text-[19px]">Data History</h4>
          <form
            onSubmit={handleSearch}
            className="data-screen-search relative flex items-center"
          >
            <img className="absolute" src={search} alt="" />
            <input
              className="data-screen-history-input outline-none  min-w-[18rem] pt-[.5rem] pr-[.6rem] pb-[.6rem] pl-[2.3rem] rounded-tl-[5px] rounded-br-[0] rounded-tr-[0] rounded-bl-[5px] border-[.1px] border-[solid] border-[rgb(142,141,141)]"
              id="data-screen-history-input"
              type="text"
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              className="data-screen-history-input outline-none px-[1.3rem] py-[.6rem] text-[white] bg-[#a3ff47] border-none text-[15px] rounded-tl-[0] rounded-br-[5px] cursor-pointer rounded-tr-[5px] rounded-bl-[0] uppercase"
              type="submit"
            >Search</button>

          </form>
          <div className="data-screen-select-date flex items-center border-[.1px] border-[solid] border-[rgb(142,141,141)] p-[3px] rounded-[10px] gap-[5px]">
            <img className="h-[30px]" src={notification} alt="" />
            <select
              name=""
              className="chart-screen-history-select border-[none] outline-[none]"
              id=""
            >
              <option value="">Select Date</option>
              <option value="">2024</option>
            </select>
          </div>
        </div>
        <div className="data-screen-history-body">
          <table>
            <tr className="top-table">
              <th>No</th>
              <th>Total Animals Count</th>
              <th>Health Status</th>
              <th>Feedback</th>
              <th>Feeding Behaviour</th>
              <th>Animal Type</th>
              <th>Weight Measurements</th>
            </tr>

            <tr>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DataScreen;
