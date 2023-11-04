/** @jsx jsx */
/** @jsxFrag Fragment */

import { Hono } from "https://deno.land/x/hono/mod.ts";
import { jsx } from "https://deno.land/x/hono/middleware.ts";

import type { FC } from "https://deno.land/x/hono/jsx/index.ts";

const app = new Hono();

const Layout: FC = (props) => {
	return (
		<html>
			<body>{props.children}</body>
		</html>
	);
};

const Top: FC<{ messages: string[] }> = (props: { messages: string[] }) => {
	return (
		<Layout>
			<h1>Hello Hono!</h1>
			<ul>
				{props.messages.map((message) => {
					return <li>{message}!!</li>;
				})}
			</ul>
		</Layout>
	);
};

app.get("/", (c) => {
	const messages = ["Good Morning", "Good Evening", "Good Night"];
	return c.html(<Top messages={messages} />);
});

export default app.fetch;

export const config = {
	path: "/*",
};
