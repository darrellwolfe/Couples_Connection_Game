# Couples Connection Game

My attempt to synthesize date night ideas and various couples truth or dare games.

## Mobile Apps (Capacitor)

This web app is prepared to run as Android and iOS apps using Capacitor.

Prereqs: Node.js 18+, Android Studio (for Android), Xcode (for iOS).

Quick start:
- Install dependencies: `npm install`
- Add platforms (one-time): `npx cap add android` and `npx cap add ios`
- Copy web assets: `npx cap copy`
- Open in IDEs: `npx cap open android` and/or `npx cap open ios`

Notes
- The app serves the web assets from the project root (`webDir: '.'`).
- You can change the app id/name in `capacitor.config.ts` later.
- For Google Play submission, build a release in Android Studio and upload to Play Console.
- For App Store (optional), archive in Xcode and submit via App Store Connect.
