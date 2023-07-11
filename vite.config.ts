// eslint-disable-next-line import/named
import { PluginOption, defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import react from "@vitejs/plugin-react";
import mkcert from "vite-plugin-mkcert";

//currently debugging is broken in vite. This is a workaround. It reloads the page upon change.
const fullReloadAlways: PluginOption = {
	handleHotUpdate({ server }) {
		server.ws.send({ type: "full-reload" });
		return [];
	},
} as PluginOption;

// https://vitejs.dev/config/
export default defineConfig({
	base: "/portfolio_V2/",
	plugins: [react(), svgr(), fullReloadAlways, mkcert()],
	server: {
		port: 44444,
		host: true,
		https: true,
		cors: true,
	},
});
