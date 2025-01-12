import React from "react";
import { Input } from "@material-tailwind/react";
import { SearchIcon } from "@heroicons/react/24/solid"; // Ensure this is installed

function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Input
        label="Search"
        className="w-1/2 max-w-md"
        icon={<SearchIcon className="h-5 w-5 text-gray-500" />}
      />
    </div>
  );
}

export default Home;
