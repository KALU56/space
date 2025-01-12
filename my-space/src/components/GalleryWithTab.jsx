import React from "react";
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";

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
    {
      label: "sprical",
      value: "sprical",
      images: [
        { imageLink: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" },
      ],
    },
    {
      label: "bisnese",
      value: "bisnese",
      images: [
        { imageLink: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" },
      ],
    },
  
    {
      label: "life expriancce",
      value: "life expriancce",
      images: [
        { imageLink: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" },
      ],
    },
    {
      label: "important-advice",
      value: "important-advice",
      images: [
        { imageLink: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" },
      ],
    },
    // Additional data items...
  ];

  return (
    <Tabs value="all">
      <TabsHeader>
        {data.map(({ label, value }) => (
          <Tab key={value} value={value}>{label}</Tab>
        ))}
      </TabsHeader>
      <TabsBody className="grid grid-cols-1 gap-4">
        {data.map(({ value, images }) => (
          <TabPanel key={value} value={value} className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {images.map(({ imageLink }, index) => (
              <div key={index}>
                <img className="h-40 w-full max-w-full rounded-lg object-cover object-center" src={imageLink} alt="image-photo" />
              </div>
            ))}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
