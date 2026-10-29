// Compatibility for local headless QA in this Windows execution environment.
// The renderer sandbox cannot start here; this applies only to this QA process.
import { Browser } from '../../../.agents/skills/design-taste-frontend/scripts/lib/cdp.mjs';
const launch = Browser.launch.bind(Browser);
Browser.launch = (options) => launch({
  ...options,
  extraArgs: ['--no-sandbox', ...(options?.extraArgs ?? [])],
});

export { Browser, sleep } from '../../../.agents/skills/design-taste-frontend/scripts/lib/cdp.mjs';
