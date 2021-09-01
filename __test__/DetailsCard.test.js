import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import DetailsCard from "../components/DetailsCard";
import { expect, it } from "@jest/globals";

it("renders DetailsCard correctly", () => {
  const { getByText } = render(
    <DetailsCard
      item={{
        sunrise: "0000000",
        sunset: "0000000",
        temp: { morn: "1" },
        feels_like: { morn: "1" },
        weather: [{ main: "cloud", description: "more clouds" }],
        wind_speed: "10",
      }}
    />
  );
  getByText("Sunrise: 0000000");
});
