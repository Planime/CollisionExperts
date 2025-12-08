import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

const isProd = process.env.NODE_ENV === 'production'

// ============================
// Console Security Banner
// ============================
const consoleWarningScript = `
if (window.location.hostname !== "localhost") {
    console.log("%cSTOP!", "color: red; font-size: 60px; font-weight: bold;");
    console.log("%cThis area is intended for developers.", "font-size: 20px;");
    console.log("%cIf someone told you to paste code here, it's a scam that can give them access to your accounts.",
                "font-size: 18px; color: red; font-weight: bold;");
}
`;

// ============================
// Disable console functions (PRODUCTION ONLY)
// ============================
const disableConsoleScript = `
if (window.location.hostname !== "localhost") {
    console.log = function(){};
    console.warn = function(){};
    console.error = function(){};
    console.info = function(){};
    console.debug = function(){};
}
`;

// ============================
// Disable Right-Click & DevTools Hotkeys (SAFE)
// ============================
const disableRightClickAndKeysScript = `
if (window.location.hostname !== "localhost") {

    // Disable right-click
    document.addEventListener("contextmenu", e => e.preventDefault());

    // Disable devtools hotkeys
    document.addEventListener("keydown", function(e) {
        if (
            e.key === "F12" ||
            (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "C" || e.key === "J")) ||
            (e.metaKey && e.altKey && e.key === "I") || // Mac Cmd+Opt+I
            (e.ctrlKey && e.key === "U") // View Source
        ) {
            e.preventDefault();
            e.stopPropagation();
        }
    });

    // ❌ DevTools detection removed to avoid breaking mobile browsers
}
`;

// ============================
// Optional: Make text unselectable (mild obfuscation)
// ============================
const blurSourceCodeStyle = `
if (window.location.hostname !== "localhost") {
    const style = document.createElement("style");
    style.innerHTML = "* { -webkit-user-select: none !important; user-select: none !important; }";
    document.head.appendChild(style);
}
`;

export default defineConfig({
    plugins: [
        react(),
        tailwindcss()
    ],

    resolve: {
        alias: {
            '@screens': path.resolve(__dirname, 'src/screens'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@hooks': path.resolve(__dirname, 'src/hooks'),
            '@icons': path.resolve(__dirname, 'src/icons'),
            '@config': path.resolve(__dirname, 'src/config'),
            '@utils': path.resolve(__dirname, 'src/utils'),
            '@store': path.resolve(__dirname, 'src/store'),
            '@constants': path.resolve(__dirname, 'src/constants')
        }
    },

    build: {
        rollupOptions: {
            output: {
                intro: isProd
                    ? consoleWarningScript +
                      disableConsoleScript +
                      disableRightClickAndKeysScript +
                      blurSourceCodeStyle
                    : "",
            }
        }
    }
})
