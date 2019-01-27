import React from "react";
import { shallow, configure } from "enzyme";
import { Provider } from "react-redux";
import Adapter from "enzyme-adapter-react-16";
import configureStore from "redux-mock-store";
import { WeatherWidget } from "./WeatherWidget";

configure({ adapter: new Adapter() });
describe("WeatherWidget", () => {
  const middlewares = [];
  const mockStore = configureStore(middlewares);
  const store = mockStore({});

  it("should render without problems", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <WeatherWidget />
      </Provider>
    );

    expect(wrapper.find(WeatherWidget).length).toBe(1);
  });
});
