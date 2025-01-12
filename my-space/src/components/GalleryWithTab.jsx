import React from "react";
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";
import { IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

// Gallery component with next/prev tab navigation (changing labels between All and Favorite)
export function GalleryWithTab() {
  const data = [
    {
      label: "All",
      value: "all",
      images: [
        { imageLink: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80" },
      ],
    },
    {
      label: "Favorite",
      value: "favorite",
      images: [
        { imageLink: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" },
      ],
    },
  ];

  const [activeTab, setActiveTab] = React.useState("all"); // Track the active tab

  // Handle "Next" (>>) and "Previous" (<<) tab navigation
  const nextTab = () => {
    setActiveTab("favorite"); // Change to "Favorite" tab
  };

  const prevTab = () => {
    setActiveTab("all"); // Change back to "All" tab
  };

  // Find the active tab data based on the current active tab
  const activeTabData = data.find(tab => tab.value === activeTab);

  return (
    <div className="relative">
      <Tabs value={activeTab} onChange={setActiveTab}>
        <TabsHeader>
          {/* Only render the active tab */}
          <Tab value={activeTab}>
            {activeTab === "all" ? "All" : "Favorite"}
          </Tab>
        </TabsHeader>
        <TabsBody>
          {/* Render the content of the active tab */}
          <TabPanel value={activeTab}>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {activeTabData?.images.map(({ imageLink }, index) => (
                <div key={index} className="flex justify-center items-center">
                  <img
                    className="h-40 w-full max-w-full rounded-lg object-cover object-center"
                    src={imageLink}
                    alt="image-photo"
                  />
                </div>
              ))}
            </div>
          </TabPanel>
        </TabsBody>
      </Tabs>

      {/* Navigation buttons to switch tabs */}
      <div className="absolute bottom-4 right-4 flex gap-4">
        <IconButton
          size="sm"
          variant="outlined"
          onClick={prevTab}
        >
          <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
        </IconButton>
        <IconButton
          size="sm"
          variant="outlined"
          onClick={nextTab}
        >
          <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
        </IconButton>
      </div>
    </div>
  );
}
