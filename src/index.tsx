import { Hono } from "hono";
import { jsx } from "hono/jsx";

const app = new Hono();

app.get("/", (c) => {
  return c.html(
    <html lang="de">
      <head>
        <title>Alpay – Persönliche Homepage</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body class="flex items-center justify-center min-h-screen bg-gray-100">
        <div class="max-w-md w-full bg-white dark:bg-blue-900 p-6 rounded-xl shadow-lg space-y-4 text-center">
          <h1 class="text-3xl font-bold text-blue-800 dark:text-blue-200">
            Hallo, ich bin Alpay!
          </h1>
          <p class="text-gray-700 dark:text-gray-300">
            Ich bin Alpay, 24 Jahre alt und komme aus Hagen.
            Ich studiere Wirtschaftsinformatik im Master an der
            FernUniversität in Hagen.
          </p>
          <div class="space-y-2">
            <p class="text-gray-700 dark:text-gray-300">
              <a href="mailto:info@oalpay.ch" class="text-blue-600 hover:underline">
                info@oalpay.ch
              </a>
            </p>
            <p class="flex justify-center gap-4">
              <a href="https://github.com/Alpay491" class="text-blue-600 hover:underline">
                GitHub
              </a>
              <a href="https://www.fernuni-hagen.de/" class="text-blue-600 hover:underline">
                FernUniversität
              </a>
            </p>
          </div>
        </div>
      </body>
    </html>
  );
});

export default app;
