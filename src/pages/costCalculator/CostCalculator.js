import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "../../components/navbar/slider/Slider";
import { setIsSelectedTab } from "../../redux/appSlice";
import "./CostCalculator.css";

const CostCalculator = () => {
  const dispatch = useDispatch();

  const selectedTab = useSelector((store) => {
    return store.app.isSelectedTab;
  });

  const handleClick = (ele) => {
    switch (ele) {
      case "monthly":
        dispatch(setIsSelectedTab("monthly"));
        break;
      case "pay-as-you-go":
        dispatch(setIsSelectedTab("pay-as-you-go"));
        break;
      case "on-premise":
        dispatch(setIsSelectedTab("on-premise"));
        break;
      default:
        break;
    }
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
        <h3 className="font_light text-3xl py-16 text-center ">
          Choose Your Plan
        </h3>
        <div className="flex justify-center sm:justify-between">
          <div
            className={
              selectedTab === "monthly" ? "selected_tab" : "calculator_header"
            }
          >
            <h3
              className="font_light text-3xl"
              onClick={() => {
                handleClick("monthly");
              }}
            >
              Monthly
            </h3>
          </div>
          <div
            className={
              selectedTab === "pay-as-you-go"
                ? "selected_tab"
                : "calculator_header"
            }
          >
            <h3
              className="font_light text-3xl"
              onClick={() => {
                handleClick("pay-as-you-go");
              }}
            >
              Pay-as-you-go
            </h3>
          </div>

          <div
            className={
              selectedTab === "on-premise"
                ? "selected_tab"
                : "calculator_header"
            }
          >
            <h3
              className="font_light text-3xl"
              onClick={() => {
                handleClick("on-premise");
              }}
            >
              On-premise{" "}
            </h3>
          </div>
        </div>
        <div className="number_of_days">
          <h3 className="font_light text-2xl flex justify-center items-center">
            Number of days for which the plan is active are
          </h3>
          <div className="font_light text-2xl">
            <div className="no_of_days_text">No. of days</div>
            <div className="font_light text-2xl flex justify-center items-center gap-5">
              <input className="input" />
              <div className="days_text">Days</div>
            </div>
          </div>
        </div>
        <div className="cost-calculation">
          <div className="font_light text-3xl flex font-semibold custom_padding">
            Number Of Parallel Session
          </div>
          <Slider />
          <div className="font_light text-3xl flex font-semibold custom_padding">
            Number Of Iterations Per Day
          </div>
          <Slider />
          <div className="font_light text-3xl flex font-semibold custom_padding">
            Average Session Duration
          </div>
          <Slider />
        </div>
        <div class="flex justify-between items-center">
          <div class="flex justify-between text-3xl gap-3 count">
            <div>Total Session Count per day</div>
            <div>30</div>
          </div>
          <div class="flex justify-between text-3xl gap-3 count">
            <div>Total Hourly Usage per day</div>
            <div>10 Hrs</div>
          </div>
        </div>
        <div class="flex justify-between text-4xl items-center cost_per_session">
          <div>Cost per session</div>
          <div>$ 0.27</div>
        </div>
        <div class="flex justify-between text-4xl items-center total_cost">
          <div>Total Cost</div>
          <div>$ 200.00</div>
        </div>
        <div class="flex justify-between items-center text-4xl ">
          <div className="common_button bg-primary-btn-color reset">Reset</div>
          <div className="common_button bg-primary-btn-color get_started">
            Get Started
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostCalculator;
