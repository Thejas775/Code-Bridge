const htmlButton = document.getElementById("htmlButton");
const cssButton = document.getElementById("cssButton");
const jsButton = document.getElementById("jsButton");
const htmlCode = document.getElementById("htmlCode");
const cssCode = document.getElementById("cssCode");
const jsCode = document.getElementById("jsCode");
const outputFrame = document.getElementById("outputFrame");
const runButton = document.getElementById("runButton");
const codeEditor = document.querySelector(".code-editor");
outputFrame.contentDocument.body.innerHTML = "<h1>Output will be displayed here</h1>"

let activeEditor = "html"; 

htmlButton.addEventListener("click", () => {
    setActiveEditor("html");
});

cssButton.addEventListener("click", () => {
    setActiveEditor("css");
});

jsButton.addEventListener("click", () => {
    setActiveEditor("js");
});

function setActiveEditor(editor) {
    activeEditor = editor;
    updateEditorVisibility();
}

function updateEditorVisibility() {
    htmlCode.style.display = activeEditor === "html" ? "block" : "none";
    cssCode.style.display = activeEditor === "css" ? "block" : "none";
    jsCode.style.display = activeEditor === "js" ? "block" : "none";
    
}

runButton.addEventListener("click", () => {
    const html = htmlCode.value;
    const css = `<style>${cssCode.value}</style>`;
    const js = `<script>${jsCode.value}</script>`;

    outputFrame.contentDocument.body.innerHTML = `${html}${css}${js}`;
});

updateEditorVisibility();


document.addEventListener('DOMContentLoaded', function () {
    Split(['#instructions', '#code-editor', '#output'], {
        sizes: [33, 33, 33],
        minSize: [100, 200, 100],
        elementStyle: function (dimension, size, gutterSize) {
            return {
                'flex-basis': 'calc(' + size + '% - ' + gutterSize + 'px)',
            }
        },
        gutterStyle: function (dimension, gutterSize) {
            return {
                'flex-basis': gutterSize + 'px',
            }
        }
    });
});


//Below is the content for page 1
const instructionsContent = "<h2>This is a prewritten instruction</h2><p>More instructions...</p><h2>This is a prewritten instruction</h2><p>More instructions...</p><h2>This is a prewritten instruction</h2><p>More instructions...</p><h2>This is a prewritten instruction</h2><p>More instructions...</p><h2>This is a prewritten instruction</h2><p>More instructions...</p><h2>This is a prewritten instruction</h2><p>More instructions...</p><h2>This is a prewritten instruction</h2><p>More instructions...</p><h2>This is a prewritten instruction</h2><p>More instructions...</p><h2>This is a prewritten instruction</h2><p>More instructions...</p><h2>This is a prewritten instruction</h2><p>More instructions...</p><h2>This is a prewritten instruction</h2><p>More instructions...</p><h2>This is a prewritten instruction</h2><p>More instructions...</p><h2>This is a prewritten instruction</h2><p>More instructions...</p><h2>This is a prewritten instruction</h2><p>More instructions...</p><h2>This is a prewritten instruction</h2><p>More instructions...</p><h2>This is a prewritten instruction</h2><p>More instructions...</p><h2>This is a prewritten instruction</h2><p>More instructions...</p><h2>This is a prewritten instruction</h2><p>More instructions...</p><h2>This is a prewritten instruction</h2><p>More instructions...</p><h2>This is a prewritten instruction</h2><p>More instructions...</p><h2>This is a prewritten instruction</h2><p>More instructions...</p><h2>This is a prewritten instruction</h2><p>More instructions...</p>";

const iframeDocument = document.getElementById("instructions-content").contentDocument;
iframeDocument.body.innerHTML = instructionsContent;
iframeDocument.body.style.color = "white";
