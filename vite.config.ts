import * as reactPlugin from "vite-plugin-react";
import tsconfigPath from "vite-tsconfig-paths";
import type { UserConfig } from "vite";

const config: UserConfig = {
  jsx: "react",
  plugins: [reactPlugin, tsconfigPath()],
};

export default config;
