import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import SearchBar from "../components/SearchBar";
import Home from "../screens/Home";
import { expect, it } from "@jest/globals";

it("renders default elements", () => {
  const { getByTestId, getByPlaceholderText } = render(<SearchBar />);
  getByTestId("searchButton");
  getByPlaceholderText("Search Location");
});

it("Check callback function for search button", () => {
  const onPress = jest.fn();
  const testID = "searchButton";
  const { getByText } = render(<Home />);

  const { getByTestId } = render(<SearchBar clickHandler={onPress} />);

  const searchButton = getByTestId(testID);

  fireEvent.press(searchButton);
  expect(onPress).toHaveBeenCalledTimes(1);
});
