import filter from "../assets/filter.svg";
import notification from "../assets/notification.svg";
import hailday from "../assets/hailday.svg";
import night from "../assets/night.svg";
import heart from "../assets/heart.svg";
import chart from "../assets/chart.svg";
import warning from "../assets/warning.svg";
import search from "../assets/search.svg";
import ChartSection from "./ChartSection";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./custom.css";

const DataScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [activeFilter, setActiveFilter] = useState("30 Days");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(5);
  const [sortField, setSortField] = useState("date");
  const [sortDirection, setSortDirection] = useState("desc");
  const [totalItems, setTotalItems] = useState(100);

  const threatState = useSelector((state) => state.actions.threatState);
  const animalNumber = useSelector((state) => state.actions.animalNumber);

  const filters = ["30 Days", "12 Months", "7 Days", "24 Hours"];

  const handleSearch = (ev) => {
    ev.preventDefault();
    setPage(1); // Reset to first page on new search
    // TODO: Implement actual search functionality
  };

  const handleSort = (field) => {
    setSortField(field);
    setSortDirection((currentDirection) =>
      field === sortField && currentDirection === "asc" ? "desc" : "asc"
    );
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  // Mock data loading simulation - replace with actual API call
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        // TODO: Replace with actual API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        // Mock data loading success
        setLoading(false);
      } catch (err) {
        setError("Failed to load data. Please try again.");
        setLoading(false);
      }
    };

    fetchData();
  }, [page, pageSize, sortField, sortDirection, activeFilter]);

  const totalPages = Math.ceil(totalItems / pageSize);

  return (
    <div className="space-y-6 p-6 bg-gray-50">
      {/* Header section */}
      <div className="flex flex-wrap gap-4 items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">Data Manager</h1>
        <div className="flex items-center gap-3">
          <button className="p-2.5 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-colors">
            <img src={notification} alt="Notifications" className="w-5 h-5" />
          </button>
          <button className="p-2.5 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-colors">
            <img src={filter} alt="Filter" className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Time filter tabs */}
      <div className="border-b border-gray-200 bg-white rounded-t-lg">
        <nav className="flex gap-6 px-6">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-1 py-3 text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? "text-lime-600 border-b-2 border-lime-500"
                  : "text-gray-500 hover:text-gray-700 hover:border-b-2 hover:border-gray-300"
              }`}
            >
              {filter}
            </button>
          ))}
        </nav>
      </div>

      {/* Stats grid */}
      <div className="flex flex-nowrap space-x-4 overflow-x-auto pb-4 px-6">
        {/* Day Stats */}
        <div className="flex-1 min-w-[250px] p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <img src={hailday} alt="Day Stats" className="w-8 h-8" />
            <span className="text-sm font-medium text-gray-500">Day Stats</span>
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-1">
            {animalNumber || "Loading..."}
          </h3>
          <p className="text-sm text-gray-600">Animals detected today</p>
        </div>

        {/* Night Stats */}
        <div className="flex-1 min-w-[250px] p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <img src={night} alt="Night Stats" className="w-8 h-8" />
            <span className="text-sm font-medium text-gray-500">Night Stats</span>
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-1">
            {animalNumber || "Loading..."}
          </h3>
          <p className="text-sm text-gray-600">Animals detected at night</p>
        </div>

        {/* Health Status */}
        <div className="flex-1 min-w-[250px] p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <img src={heart} alt="Health Stats" className="w-8 h-8" />
            <span className="text-sm font-medium text-gray-500">Health Status</span>
          </div>
          <div className="flex items-center gap-2 mb-1">
            <img src={warning} alt="" className="w-5 h-5" />
            <span className="text-base font-medium text-gray-700">
              {threatState || "No Threats"}
            </span>
          </div>
          <p className="text-sm text-gray-600">Overall: Perfect</p>
        </div>

        {/* Feeding Status */}
        <div className="flex-1 min-w-[250px] p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-gray-500">Feeding Status</span>
            <img src={chart} alt="Chart" className="w-8 h-8" />
          </div>
          <div className="flex items-center gap-2">
            <img src={warning} alt="" className="w-5 h-5" />
            <p className="text-sm text-gray-600">Animals not feeding</p>
          </div>
        </div>
      </div>

      {/* Analytics Section */}
      <div className="flex flex-nowrap space-x-6 overflow-x-auto mt-6 px-6">
        {/* Main Chart */}
        <div className="flex-[2] min-w-[600px] bg-white rounded-lg border border-gray-200 shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-800">Analytics</h2>
            <select className="px-3 py-2 text-sm bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent">
              <option value="2023">2023</option>
              <option value="2024">2024</option>
            </select>
          </div>
          <div className="h-[400px]">
            <ChartSection />
          </div>
        </div>

        {/* Threat Analytics */}
        <div className="flex-1 min-w-[300px] bg-white rounded-lg border border-gray-200 shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-800">Threat Analytics</h2>
            <button className="flex items-center gap-2 px-3 py-2 text-sm bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
              <img src={notification} alt="" className="w-4 h-4" />
              <span>Date</span>
            </button>
          </div>
          <div className="flex justify-between space-x-4">
            {["05.02", "06.02", "07.02", "08.02"].map((date, i) => (
              <div key={date} className="flex flex-col items-center">
                <div className="w-16 h-48 bg-gray-100 rounded-lg relative overflow-hidden">
                  <div
                    className="absolute bottom-0 w-full bg-blue-500 rounded-lg transition-all"
                    style={{ height: `${[40, 30, 20, 50][i]}%` }}
                  />
                </div>
                <span className="mt-2 text-sm text-gray-600">{date}.2024</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Data History */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-800">Data History</h2>
            <div className="flex items-center gap-4">
              <div className="relative">
                <select className="pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent appearance-none">
                  <option value="">Select Date</option>
                  <option value="2024">2024</option>
                </select>
              </div>
              <form onSubmit={handleSearch} className="flex">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className="pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-l-lg text-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent"
                    disabled={loading}
                  />
                  <img
                    src={search}
                    alt=""
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-lime-500 text-white text-sm font-medium rounded-r-lg hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={loading}
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>

        {error && (
          <div className="p-4 bg-red-50 border-b border-red-200">
            <div className="flex items-center text-red-600">
              <span className="text-sm">{error}</span>
            </div>
          </div>
        )}

        <div className="overflow-x-auto relative">
          {loading && (
            <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center z-10">
              <div className="animate-spin rounded-full h-8 w-8 border-2 border-lime-500 border-t-transparent"></div>
            </div>
          )}

          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th
                  onClick={() => handleSort("date")}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:text-gray-700"
                >
                  <div className="flex items-center gap-1">
                    Date
                    {sortField === "date" && (
                      <span>{sortDirection === "asc" ? "↑" : "↓"}</span>
                    )}
                  </div>
                </th>
                <th
                  onClick={() => handleSort("dayAnimals")}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:text-gray-700"
                >
                  <div className="flex items-center gap-1">
                    Animals (Day)
                    {sortField === "dayAnimals" && (
                      <span>{sortDirection === "asc" ? "↑" : "↓"}</span>
                    )}
                  </div>
                </th>
                <th
                  onClick={() => handleSort("nightAnimals")}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:text-gray-700"
                >
                  <div className="flex items-center gap-1">
                    Animals (Night)
                    {sortField === "nightAnimals" && (
                      <span>{sortDirection === "asc" ? "↑" : "↓"}</span>
                    )}
                  </div>
                </th>
                <th
                  onClick={() => handleSort("threats")}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:text-gray-700"
                >
                  <div className="flex items-center gap-1">
                    Threats
                    {sortField === "threats" && (
                      <span>{sortDirection === "asc" ? "↑" : "↓"}</span>
                    )}
                  </div>
                </th>
                <th
                  onClick={() => handleSort("health")}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:text-gray-700"
                >
                  <div className="flex items-center gap-1">
                    Health Status
                    {sortField === "health" && (
                      <span>{sortDirection === "asc" ? "↑" : "↓"}</span>
                    )}
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {/* Replace with actual data mapping */}
              {Array(5)
                .fill(null)
                .map((_, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-blue-600 hover:text-blue-800">
                      25/01/2024
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">260</td>
                    <td className="px-6 py-4 text-sm text-gray-900">250</td>
                    <td className="px-6 py-4 text-sm text-gray-900">No threats</td>
                    <td className="px-6 py-4 text-sm text-green-600">Perfect</td>
                  </tr>
                ))}
              {!loading && Array(5).fill(null).length === 0 && (
                <tr>
                  <td colSpan="5" className="px-6 py-4 text-sm text-gray-500 text-center">
                    No data available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-700">
              Showing{" "}
              <span className="font-medium">{(page - 1) * pageSize + 1}</span> to{" "}
              <span className="font-medium">{Math.min(page * pageSize, totalItems)}</span> of{" "}
              <span className="font-medium">{totalItems}</span> entries
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handlePageChange(page - 1)}
                disabled={page === 1 || loading}
                className="px-3 py-1 text-sm bg-white border border-gray-200 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              <div className="flex items-center gap-1">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  const pageNum = i + 1;
                  return (
                    <button
                      key={i}
                      onClick={() => handlePageChange(pageNum)}
                      disabled={loading}
                      className={`px-3 py-1 text-sm rounded ${
                        page === pageNum
                          ? "bg-lime-500 text-white"
                          : "bg-white border border-gray-200 hover:bg-gray-50"
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
                {totalPages > 5 && <span className="px-2">...</span>}
              </div>
              <button
                onClick={() => handlePageChange(page + 1)}
                disabled={page >= totalPages || loading}
                className="px-3 py-1 text-sm bg-white border border-gray-200 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataScreen;