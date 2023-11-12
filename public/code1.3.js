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
const instructionsContent = "<h2> What is CSS?</h2><p>CSS (Cascading Style Sheets) is a markup language used to define and apply styles to HTML elements and web pages. CSS allows you to control the layout, colors, fonts, and other visual aspects of your web content. It enables you to create visually pleasing and easy-to-use web designs. CSS works by using a series of rules, selectors, and declarations to define styles for different elements on a page. CSS is widely used by web designers and developers to create beautiful and functional websites.</p><p>In our code editor, there is a section called as css, when you click on it it open's up the css panel, where you can write css code.</p><h2>Why Use CSS?</h2><p>CSS is used to define styles for your web pages, including the design, layout and variations in display for different devices and screen sizes.</p><h2>CSS Saves a Lot of Work!</h2><p>The style definitions are normally saved in external .css files.With an external stylesheet file, you can change the look of an entire website by changing just one file!</p><h2>Task:</h2><img src=\"assets/css.png\"><p>Write the same class inside the css block editor. You can access it by using the CSS button. Then use the h11 heading tag to write your name. Click on run and check the output. Feel free to experiment.";

const iframeDocument = document.getElementById("instructions-content").contentDocument;
iframeDocument.body.innerHTML = instructionsContent;
iframeDocument.body.style.color = "white";
