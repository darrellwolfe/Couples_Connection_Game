# Couples Connection Game

Simple, offline-first web app for couples: spin a colorful wheel to pick a deck and get a playful prompt, dare, or date idea.

## Features
- Spinner wheel with 4 color families (Truth, Dare, Indoors, Outdoors)
- 8 sub-decks + 1 extra category:
  - Truth, Spicy Truth, Dare, Spicy Dare
  - Date Indoors (short), Date Indoors (long)
  - Date Outside (short), Date Outside (long)
  - Scavenger Hunt (local, photo-friendly tasks)
- All prompts are local to the app (no network needed)

## Edit Prompts
- Truth/Dare prompts live in `script.js` at the top.
- Indoor/Outdoor date ideas are in arrays `indoorDatePrompts` and `outdoorDatePrompts`.
- Short/Long lists are auto‑derived by alternating items.
- Scavenger Hunt lives in `scavengerPrompts`.

Open and edit: `script.js`

## Run As Website
Open `index.html` in a browser or host the folder (e.g., GitHub Pages).

## Mobile Apps (Capacitor)
This repo is configured to package the same web assets for Android and iOS using Capacitor.

Requirements
- Node.js 18+
- Android Studio (Android)
- Xcode on macOS (iOS, optional)

Project config
- Capacitor config: `capacitor.config.ts` (uses `webDir: 'www'`)
- Web assets folder used by native apps: `www/`

First‑time setup
1) Install deps
   - `npm install`
2) Add platforms (one‑time)
   - Android: `npx cap add android`
   - iOS (optional): `npx cap add ios`
3) Sync assets into native projects
   - `npx cap sync`
4) Open in IDEs
   - Android: `npx cap open android`
   - iOS (macOS): `npx cap open ios`

Working with web files
- Edit the root files (`index.html`, `script.js`, `style.css`).
- Copy to `www/` and sync before rebuilding native:
  - PowerShell example: `Copy-Item -Force index.html,script.js,style.css www\`
  - Then: `npx cap sync android`

Helpful npm scripts
- `npm run cap:add:android` → `cap add android`
- `npm run cap:add:ios` → `cap add ios`
- `npm run cap:copy` → `cap copy`
- `npm run cap:update` → `cap update`
- `npm run cap:open:android` → `cap open android`
- `npm run cap:open:ios` → `cap open ios`

Generate icons & splash (recommended)
1) `npm i -D @capacitor/assets`
2) Put source images in `resources/` (the tool prints guidance)
3) `npx @capacitor/assets generate`
4) `npx cap sync android` (and/or ios)

Android versioning
- File: `android/app/build.gradle`
  - `versionCode` (integer) must increase for every Play release
  - `versionName` (string) is what users see
- App name/ID
  - Name: `android/app/src/main/res/values/strings.xml` (`app_name`)
  - ID: `android/app/build.gradle` (`applicationId`) – keep stable after publishing

Build release (Play Store)
- Android Studio → Build → Generate Signed Bundle/APK… → Android App Bundle (AAB)
- Create/choose keystore, pick `release`, finish
- Upload the AAB in Google Play Console (start with Internal testing)

iOS (optional, on a Mac)
- `npx cap add ios` → `npx cap open ios`
- Set signing in Xcode, Archive, and upload to App Store Connect (expect 17+/Mature rating due to suggestive content)

## Troubleshooting
- Wheel doesn’t spin on desktop: ensure browser allows CSS transitions and no “reduced motion” accessibility setting is forcing no animation. Mobile prefers‑reduced‑motion path is supported.
- Capacitor copy/sync errors: ensure `www/` exists and contains your web files; then run `npx cap sync`.
- Android Studio SDK prompts: accept installs for SDK Platform, Build‑Tools, and Platform‑Tools.

## License
No explicit license added. Treat as All Rights Reserved unless the author adds a license.
- Test run in Android Studio: npx cap open android
