import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "../../components/navbar/slider/Slider";
import { setIsSelectedTab } from "../../redux/appSlice";
import "./CostCalculator.css";

const tabs = [
  {
    name: "monthly",
    description: "Number of days for which the plan is active are",
  },
  {
    name: "pay-as-you-go",
    description:
      "Please select no. of days for which the plan should be active",
  },
  {
    name: "on-premise",
    description: "Number of days for which the plan is active are",
  },
];

const CostCalculator = () => {
  const dispatch = useDispatch();

  const selectedTab = useSelector((store) => {
    return store.app.isSelectedTab;
  });

  const handleClick = (ele) => {
    dispatch(setIsSelectedTab(ele));
  };

  return (
    <div id="CostCalculation" className="page_common_container flex flex-col">
      <div className="common_container_style flex flex-col">
        <h1 className="flex font_light text-4xl py-16">
          <div className="top_header_text">Cost calculator</div>
        </h1>
        <div>
          <p className="flex flex-col md:flex-row font_light pb-8">
            Empowering Informed Decisions at CloudifyTests! Transparency is
            paramount, which is why we offer a user-friendly cost calculator.
            Tailor your pricing effortlessly by entering key parameters like
            parallel sessions, iterations, and session duration.
          </p>
        </div>
        <div className="py-4 flex justify-between items-center">
          <h3 className="font_bold text-xl">Choose Your Plan</h3>
          <button className="common_button bg-primary-btn-color !w-auto px-2">
            Know More
          </button>
        </div>
        <div className="flex justify-center sm:justify-between">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={
                selectedTab.name === tab.name
                  ? "selected_tab"
                  : "calculator_header"
              }
              onClick={() => {
                handleClick(tab);
              }}
            >
              <h3 className="font_light text-xl">{tab.name}</h3>
            </div>
          ))}
        </div>
        <div className="number_of_days">
          <h3 className="font_light text-xl flex justify-center items-center">
            {selectedTab.description}
          </h3>
          <div className="font_light text-xl">
            <div className="font_light text-xl flex justify-center items-center gap-5">
              <div className="no_of_days_text">No. of days</div>
              <input
                type={"number"}
                className="input"
                disabled={selectedTab.name === "pay-as-you-go"}
              />
              <div className="days_text">Days</div>
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2  gap-2 cost-calculator py-4">
          {/* column 1 */}
          <div className="cost-calculator-column">
            <div className="cost-calculator-row">
              <div className="font_light text-xl flex font-semibold custom_padding">
                Number Of Parallel Session
              </div>
              <Slider />
              <div className="font_light text-xl flex font-semibold custom_padding">
                Number Of Iterations Per Day
              </div>
              <Slider />
              <div className="font_light text-xl flex font-semibold custom_padding">
                Average Session Duration
              </div>
              <Slider />
            </div>

            <button className="common_button bg-primary-btn-color reset">
              Reset
            </button>
          </div>
          {/* column 2 */}
          <div className="cost-calculator-column">
            <div className="cost-calculator-row">
              <div class="w-full flex justify-between text-xl gap-3 count">
                <div>Total Session Count per day</div>
                <div>30</div>
              </div>
              <div class="flex justify-between text-xl gap-3 count">
                <div>Total Hourly Usage per day</div>
                <div>
                  10 <sup>hrs</sup>
                </div>
              </div>
              <div class="flex justify-between text-xl items-center cost_per_session">
                <div>Cost per session</div>
                <div>$ 0.27</div>
              </div>
              <div class="flex justify-between text-xl items-center total_cost font-semibold">
                <div>Total Cost</div>
                <div>$ 200.00</div>
              </div>
            </div>

            <button className="text-xl common_button bg-primary-btn-color get_started">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostCalculator;
