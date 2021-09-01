import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import renderer from "react-test-renderer";
import SearchBar from "../components/SearchBar";
import Home from "../screens/Home";
import { expect, it } from "@jest/globals";

it("renders correctly", () => {
  renderer.create(<SearchBar />);
});

it("important elements exists", () => {
  const { getByTestId, getByPlaceholderText } = render(<SearchBar />);
  getByTestId("searchButton");
  getByPlaceholderText("Search Location");
});

it("Check callback clickhandler function for search button", () => {
  const clickHandlerMock = jest.fn();
  const { getByTestId } = render(<SearchBar clickHandler={clickHandlerMock} />);
  const searchButton = getByTestId("searchButton");
  fireEvent.press(searchButton);
  expect(clickHandlerMock).toHaveBeenCalledTimes(1);
});

it("Check callback updateSearchBar function for input", () => {
  const updateSearchBarMock = jest.fn();
  const { getByPlaceholderText } = render(
    <SearchBar updateSearchBar={updateSearchBarMock} />
  );
  const input = getByPlaceholderText("Search Location", "London");
  fireEvent.changeText(input);
  expect(updateSearchBarMock).toHaveBeenCalled();
});
