import React, { useState } from "react";

const ProductTabs = ({ description, details, shipping }) => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="mt-12">
      {/* Tabs */}
      <div className="flex gap-6 border-b">
        {["description", "details", "shipping"].map((tab) => (
          <button
            key={tab}
            className={`pb-2 font-medium capitalize ${
              activeTab === tab
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-6 text-gray-700">
        {activeTab === "description" && <p>{description}</p>}
        {activeTab === "details" && <p>{details}</p>}
        {activeTab === "shipping" && <p>{shipping}</p>}
      </div>
    </div>
  );
};

export default ProductTabs;
