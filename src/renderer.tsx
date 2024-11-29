import { jsxRenderer } from "hono/jsx-renderer";

export const renderer = jsxRenderer(() => {
  return (
    <html>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover"
        />
        <link href="/src/style.css" rel="stylesheet" />
        <script type="module" src="/src/client.ts"></script>

        <link rel="stylesheet" href="/static/icon-styles.css" />
      </head>
      <body class="w-full relative min-h-dvh">
        <div
          id="root"
          class="relative w-full h-[100dvh] overflow-hidden select-none bg-slate-800 text-black"
        ></div>
      </body>
    </html>
  );
});
