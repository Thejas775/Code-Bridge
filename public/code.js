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
const instructionsContent = "<h2>What is an HTML 5 boilerplate?</h2><p>Boilerplate code or just boilerplate are sections of code that are repeated in multiple places with little to no variation.A boilerplate in HTML is a template you will add at the start of your project. You should add this boilerplate to all of your HTML pages.</p><img src=\"assets/boiler.png\"><h2>What is a doctype in HTML?</h2><p>The first line in your HTML code should be the doctype declaration. A doctype tells the browser what version of HTML the page is written in.</p><p>If you forget to include this line of code in your file, then some of the HTML 5 tags like <article>, < footer >, and <header>  may not be supported by the browser.</p><h2>What are head tags in HTML?</h2><p>The head tags contain information that is processed by machines. Inside the head tags, you will nest metadata which is data that describes the document to the machine.</p><h2>CSS Stylesheet</h2><p>This code will link your custom CSS to the HTML page.  rel=\"stylesheet\" defines the relationship between the HTML file and the external stylesheet.</p> <h2> Task:</h2> <p> The boiler plate is already inbuilt in the code editor. So go ahead type in your name and click on the run button to see the output. Click on HTML button at top write something and then click on the run button.</p> ";

const iframeDocument = document.getElementById("instructions-content").contentDocument;
iframeDocument.body.innerHTML = instructionsContent;
iframeDocument.body.style.color = "white";
