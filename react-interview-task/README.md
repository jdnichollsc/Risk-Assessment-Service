# Facewall

This client application comes in two flavours, located in the `packages/` folder:

- React (web)
- React Native

**Choose one flavour** and communicate with the interviewer which one you prefer.

Please note that this application is not perfect, most namely that the existing tests will show warnings.

During the technical interview we will work on the app in a pair programming scenario.

## Installation

Make sure you have following tools installed:

- `node` at least 10.x
- `yarn` at least 1.x 

For React Native:

- Android Studio: https://developer.android.com/studio
- Xcode: https://developer.apple.com/xcode/

Then go to the root of the repository and run:

```sh
$ yarn
```

## Running

```sh
$ yarn start:web       # React (web)
```

```sh
$ yarn start:packager  # Run in parallel with one below:

$ yarn start:ios       # React Native (iOS) or
$ yarn start:android   # React Native (Android)
```

## Testing

```sh
$ yarn test:web        # React (web)
```

```sh
$ yarn test:native     # React Native (iOS and Android)
```

### Supported OS

- **OSX**: React (web), React Native (iOS and Android)
- **Linux**: React (web), React Native (Android)
- **Windows**: React (web), React Native (Android)