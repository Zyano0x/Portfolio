import "@portfolio/env/web";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: "export",
	basePath: "/portfolio",
	assetPrefix: "/portfolio",
	typedRoutes: true,
	reactCompiler: true,
	images: {
		unoptimized: true,
	},
};

export default nextConfig;
