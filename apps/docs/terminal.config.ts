// The documentation site in the `terminal` theme: the same pages and the same components, with a look of its own (src/themes/terminal/site.css).
// `vp dev --config terminal.config.ts` to look at it, `vp build --config terminal.config.ts` for its build.
import { defineConfig } from 'vite-plus';
import { docsSite } from './src/vite-plugin.ts';

export default defineConfig({ plugins: [docsSite({ theme: 'terminal' })] });
