# What

The App created here is a current weather widget written in React.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

It uses the following technologies:

- React
- Redux
- Redux thunk
- SASS (on top of Atomic Design)

## How

To start the project simply follow these steps:

    $ npm install

Register an account at [OpenWeatherMap](https://home.openweathermap.org/), copy and paste the app key given in the [.env](.env) file.

Once done, it's possible to start the application with

    $ npm start

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser (should open automatically).

To run tests, just run

    $ npm test

### Implementation notes (the struggle is real)

The project initially used [AccuWeather APIs](https://developer.accuweather.com/). It required two different calls to (1) get the city key code, (2) call the current weather API endpoint. This proved to be quite challenging in terms of design of the Redux store and how to manage it from a UX perspective. I was way too much into the implementation when I realised that the free version of the API has got a very low limit (50 calls a day), which is unrealistic especially when trying to develop an application using those endpoint.

I've immediately moved over to the [OpenWeatherMap APIs](https://openweathermap.org) which proved to be much more fault tolerant and also simplified the overall application, since now I don't need to fetch the city first before querying for the current weather conditions.

The two implementation are still availble in the code together with the relative unit tests.

The APIs calls have been wrapped in an internal library for ease of use and better maintainability. The returned data is also being dehyrdatated to ease the integration with the rest of the application.

### Testing

## TODO

This is a very brief list of things that I would have loved to work on given more time (thanks AccuWeather):

- error handling (the functionality is there just to be finished)
- more tests: specifically more unit, e2e, and cross-browser testing.
- more responsibility segregation in the code (I would have preferred separating React components from Redux "Containers")
- a better UI, possibly even responsive, use of icons for displaying the weather conditions
- a better UX, with improved interaction across different elements (e.g. use of geolocation APIs)
- integrate the whole thing in a CI pipeline
