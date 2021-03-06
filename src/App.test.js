import React from "react";
import App from "./App";
import { shallow, configure } from "enzyme";
import { Provider } from "react-redux";
import Adapter from "enzyme-adapter-react-16";
import configureStore from "redux-mock-store";

configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  const middlewares = [];
  const mockStore = configureStore(middlewares);
  const store = mockStore({});
  const wrapper = shallow(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(wrapper.find(App).length).toBe(1);
});
