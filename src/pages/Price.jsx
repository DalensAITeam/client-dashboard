import React, { useState } from "react";
import { FaCrown, FaCheck, FaRocket, FaUserFriends } from "react-icons/fa";

const PlanFeature = ({ included, children }) => (
  <div className="flex items-center space-x-3">
    <div className={`rounded-full p-1 ${included ? 'text-lime-500' : 'text-gray-400'}`}>
      <FaCheck size={12} />
    </div>
    <span className={included ? 'text-gray-800' : 'text-gray-400'}>{children}</span>
  </div>
);

const Plans = ({ title, price, features, icon: Icon, popular, period }) => {
  return (
    <div className={`relative flex font-['poppins'] rounded-xl flex-col border ${
      popular ? 'border-lime-500 shadow-lg scale-105' : 'border-gray-200'
    } items-stretch p-6 transition-all hover:shadow-lg`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-lime-500 text-white text-sm px-4 py-1 rounded-full">
            Most Popular
          </div>
        </div>
      )}
      
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <p className="text-gray-500 text-sm">Perfect for {title.toLowerCase()} users</p>
        </div>
        <div className={`p-2 rounded-lg ${popular ? 'bg-lime-50 text-lime-600' : 'bg-gray-50 text-gray-600'}`}>
          <Icon size={24} />
        </div>
      </div>

      <div className="mt-4 mb-6">
        <div className="flex items-baseline">
          <span className="text-3xl font-bold text-gray-900">₦{price}</span>
          <span className="ml-2 text-gray-500">/{period}</span>
        </div>
      </div>

      <div className="flex-grow">
        <div className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <PlanFeature key={index} included={feature.included}>
              {feature.text}
            </PlanFeature>
          ))}
        </div>
      </div>

      <button className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
        popular
          ? 'bg-lime-500 text-white hover:bg-lime-600'
          : 'bg-gray-50 text-gray-800 hover:bg-gray-100'
      }`}>
        Get Started
      </button>
    </div>
  );
};

const Price = () => {
  const [billingPeriod, setBillingPeriod] = useState('month');

  const plans = [
    {
      title: "Basic",
      price: billingPeriod === 'month' ? "2,000" : "20,000",
      icon: FaUserFriends,
      features: [
        { included: true, text: "Up to 2 cameras" },
        { included: true, text: "Basic analytics" },
        { included: true, text: "7-day video history" },
        { included: false, text: "Advanced AI detection" },
        { included: false, text: "24/7 support" },
      ],
    },
    {
      title: "Premium",
      price: billingPeriod === 'month' ? "10,000" : "100,000",
      icon: FaCrown,
      popular: true,
      features: [
        { included: true, text: "Up to 5 cameras" },
        { included: true, text: "Advanced analytics" },
        { included: true, text: "30-day video history" },
        { included: true, text: "Advanced AI detection" },
        { included: true, text: "Priority support" },
      ],
    },
    {
      title: "Enterprise",
      price: billingPeriod === 'month' ? "31,000" : "310,000",
      icon: FaRocket,
      features: [
        { included: true, text: "Unlimited cameras" },
        { included: true, text: "Custom analytics" },
        { included: true, text: "90-day video history" },
        { included: true, text: "Advanced AI detection" },
        { included: true, text: "24/7 dedicated support" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6 space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your livestock monitoring needs. All plans include our core features to help you get started.
          </p>
          
          <div className="mt-6 inline-flex items-center p-1 bg-gray-100 rounded-lg">
            <button
              onClick={() => setBillingPeriod('month')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                billingPeriod === 'month'
                  ? 'bg-white text-gray-800 shadow-sm'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('year')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                billingPeriod === 'year'
                  ? 'bg-white text-gray-800 shadow-sm'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {plans.map((plan) => (
            <Plans
              key={plan.title}
              {...plan}
              period={billingPeriod === 'month' ? 'month' : 'year'}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Need a custom plan? {" "}
            <a href="#" className="text-lime-600 hover:text-lime-700">
              Contact our sales team
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Price;
