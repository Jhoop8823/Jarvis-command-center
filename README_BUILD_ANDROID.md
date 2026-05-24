# J.A.R.V.I.S Command Center — Android Build Kit

This package is designed for Android-only users who do not have a desktop.

## What this is
This is a Capacitor Android wrapper for your hosted J.A.R.V.I.S Command Center:
https://hizq3w7nw2z5u.kimi.place

It builds an installable Android APK that opens your hosted JARVIS app inside an Android WebView.

## Why this route is used
Your original project is a React/TypeScript web app with backend/API/database behavior.
Turning that directly into a fully offline APK would break server-side functions.
A wrapper APK is the correct first Android version because it keeps your hosted app functional.

## Easiest Android-only build method: GitHub Actions

1. Make a free GitHub account if you do not have one.
2. Create a new repository.
3. Upload every file from this ZIP to that repository.
4. Open the Actions tab.
5. Run “Build Android APK”.
6. When it finishes, open the run and download the artifact named:
   JARVIS-Command-Center-debug-apk
7. Extract the artifact ZIP.
8. Install `app-debug.apk` on your Galaxy phone/tablet.

## Android install note
Android may warn that the APK is from an unknown source.
Allow install from your browser/files app if you trust the build.

## Important limitation
This debug APK is for personal testing.
For Play Store release, you need a signed release APK/AAB.
