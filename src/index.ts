import { Hono } from "hono";
import { jsx } from "hono/jsx";

const app = new Hono();

app.get("/", (c) => {
  return c.html(
    <html>
      <head>
        <title>Meine persönliche Seite</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body class="p-8 text-center">
        <h1 class="text-4xl font-bold">Hallo, ich bin Alpay!</h1>
        <p class="mt-4">Kurz‑Bio, Interessen, Links …</p>
        <ul class="mt-4 space-y-2">
          <li><a href="https://github.com/alpay" class="text-blue-600">GitHub</a></li>
          <li><a href="mailto:alpay@example.com" class="text-blue-600">E‑Mail</a></li>
        </ul>
      </body>
    </html>
  );
});

export default app;
