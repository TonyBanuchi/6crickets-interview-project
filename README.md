# 6crickets-interview-project
Interview Project for 6crickets. Contains General and Angular coding projects.

# Problem Descriptions

1. Angular coding problem
There is an API endpoint called /api/deadline which returns { secondsLeft: number } JSON object containing the number of seconds left to some constant deadline date (deadline date never changes). Write an Angular component (and any other Angular classes/functions if needed) that will retrieve data from backend and will display “Seconds left to deadline: X” countdown timer (X should be updated every second). Please take your time to write performance optimized code that could be then copy-pasted into some bigger Angular project.

2. General coding problem
[The author of this story problem is neither a photographer nor a hardware engineer, so please forgive any implausibility.] Suppose we want to construct a versatile software camera by combining many inflexible hardware cameras. Each hardware camera works well for a particular range of subject distances and for a particular range of light levels. The software camera will measure the light level and subject distance of each shot and choose an appropriate hardware camera to capture it. There are many hardware cameras on the market, and we are considering various proposals for which ones to include in our design. Write a function that takes the desired characteristics of the software camera (range of subject distances and range of light levels that it should support) and a list of hardware cameras with their respective characteristics, and tests whether that set of hardware cameras will suffice.

Project built using Angular front-end, simple JSON fuax data backend, and generic microservices for communicating between faux back-end and front-end.


# 6cricketsInterviewProject

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.7.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
