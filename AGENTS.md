# AGENTS: Working In This Repo

These notes help AI/code assistants make correct, minimal changes.

Scope
- Root of repository; applies to all files unless stated otherwise.

Project Overview
- Static web app (HTML/CSS/JS) with a spinner wheel and prompt decks.
- Mobile packaging via Capacitor (Android/iOS). Native projects live in `android/` and `ios/`.

Key Files
- `index.html` – UI shell and buttons
- `style.css` – styling and wheel visuals
- `script.js` – prompts, categories, wheel logic
- `capacitor.config.ts` – Capacitor config (uses `webDir: 'www'`)
- `www/` – compiled/static assets used by native apps

Decks & Categories
- Four color families on the wheel: `truth`, `dare`, `indoor`, `outdoor`.
- Sub‑decks map to families via `familyForCategory` in `script.js`:
  - `truth_mild`, `truth_spicy` → `truth`
  - `dare_mild`, `dare_spicy` → `dare`
  - `indoor_short`, `indoor_long` → `indoor`
  - `outdoor_short`, `outdoor_long` → `outdoor`
  - `scavenger` → `outdoor` (color only)
- The spinner chooses a family segment; the prompt is drawn from the selected sub‑deck.

Prompts
- Truth/Dare arrays at top of `script.js`.
- Date prompts: `indoorDatePrompts`, `outdoorDatePrompts`. Short/Long lists are auto‑split by alternating items.
- Scavenger tasks: `scavengerPrompts`.
- When adding prompts, preserve array structure and export names.

Implementation Guidelines
- Keep changes minimal; follow existing style and names.
- Do not rename keys in `familyForCategory`, `promptsByKey`, or UI button IDs without updating all references.
- Avoid restructuring the wheel unless requested; it relies on 8 segments mapped to the 4 families.
- If adding a new sub‑deck, map it to an existing family or add a new family with CSS color, legend, and wheel gradient updates.

Capacitor / Mobile
- `webDir` must remain `www`.
- Before `cap sync`, ensure `www/` contains updated web assets. If editing root files, copy them into `www/`.
- Do not change `applicationId` (Android) after publish. It is set in `android/app/build.gradle`.
- Version bumps for Android happen in `android/app/build.gradle` (`versionCode`/`versionName`). Do not auto‑bump unless asked.

Common Tasks
- Update prompts only in `script.js`.
- Add a button: update `index.html` buttons, `script.js` button bindings, and labels.
- Adjust wheel colors: edit CSS variables in `style.css` and wheel conic‑gradient stops.

Out of Scope (unless asked)
- Introducing frameworks/bundlers.
- Major refactors of wheel behavior or animations.
- Adding analytics/trackers.

