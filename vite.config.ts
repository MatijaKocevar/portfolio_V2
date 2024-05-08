/// <reference types="vite/client" />
// eslint-disable-next-line import/named
import { defineConfig } from "vite";
import svgr from "@svgr/rollup";
import react from "@vitejs/plugin-react";
import mkcert from "vite-plugin-mkcert";

export default () => {
    return defineConfig({
        base: "/portfolio_V2/",
        // base: "/",
        plugins: [react(), mkcert(), svgr()],
        server: {
            port: 44444,
            host: true,
            cors: true,
        },
    });
};
