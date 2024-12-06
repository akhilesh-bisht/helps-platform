import React from "react";
import User from "../components/User";
import data from "../components/mockData";

function Connections() {
  return (
    <div className="p-6 mt-14">
      {/* Flex container for user cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {data.map((user) => (
          <User
            key={user.id}
            name={user.name}
            category={user.category}
            email={user.email}
            location={user.location}
            phone={user.phone}
          />
        ))}
      </div>
    </div>
  );
}

export default Connections;
