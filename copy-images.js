import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create directory if it doesn't exist
const targetDir = path.join(__dirname, 'src', 'assets', 'projects');
if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
    console.log('✓ Created directory: src/assets/projects');
}

// Copy images
const images = [
    { from: 'shop.png', to: 'shop.png' },
    { from: 'news.png', to: 'news.png' },
    { from: 'To Do App.png', to: 'todo_app.png' }
];

images.forEach(img => {
    const source = path.join(__dirname, 'projects covers', img.from);
    const dest = path.join(targetDir, img.to);

    if (fs.existsSync(source)) {
        fs.copyFileSync(source, dest);
        console.log(`✓ Copied: ${img.from} → ${img.to}`);
    } else {
        console.log(`✗ Source not found: ${img.from}`);
    }
});

console.log('\n✅ All images copied successfully!');
