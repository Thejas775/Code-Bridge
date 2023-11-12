const htmlButton = document.getElementById("htmlButton");
const cssButton = document.getElementById("cssButton");
const jsButton = document.getElementById("jsButton");
const htmlCode = document.getElementById("htmlCode");
const cssCode = document.getElementById("cssCode");
const jsCode = document.getElementById("jsCode");
const outputFrame = document.getElementById("outputFrame");
const runButton = document.getElementById("runButton");
const codeEditor = document.querySelector(".code-editor");

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
const instructionsContent = "<h2>HTML headings are titles or subtitles that you want to display on a webpage.</h2> <img src=\"assets/headings.png\"><h2> There are totally 6 heading tags</h2><img src=\"assets/head.png\"><h2>Your task</h2><p> Try out every tag in the codeblock given to the right and click on run button. Feel free to make your changes as well.";

const iframeDocument = document.getElementById("instructions-content").contentDocument;
iframeDocument.body.innerHTML = instructionsContent;
iframeDocument.body.style.color = "white";
