import { createApp } from './app.js';
import { config } from './config.js';
import { waitForDatabase } from './db.js';

await waitForDatabase();

createApp().listen(config.port, () => {
  console.log(`Backend listening on port ${config.port}`);
});
