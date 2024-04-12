# PDF-Viewer
PDFEmbedJS is a lightweight, easy-to-use JavaScript library for embedding PDF documents into web pages. It provides seamless integration of PDFs with support for navigation, zooming, and asynchronous loading, enhancing the user's interaction with PDFs in web applications.

## Features

- **Simple Integration**: Embed PDFs into your web pages with just a few lines of code.
- **Navigation Controls**: Navigate through the PDF pages with next and previous buttons.
- **Zoom**: Easily zoom in and out of the PDF content for better readability.
- **Asynchronous Loading**: PDFs are loaded asynchronously to ensure your web page remains responsive.
- **Cross-Browser Support**: Works across modern web browsers for a wide audience reach.

## Getting Started

To use PDFEmbedJS in your project, follow these steps:

### Prerequisites

Ensure you have the following prerequisites installed:
- A modern web browser
- A local or remote web server to host your project files

### Installation

1. Download the `PDFEmbedJS.js` file from our repository.
2. Include `PDFEmbedJS.js` in your HTML file:

```html
<script src="path/to/PDFEmbedJS.js"></script>

```
### Add to HTML

```html
<div id="pdf-container"></div>

<script>
    PDFEmbedJS.loadPDF('pdf-container', 'path/to/your/pdf.pdf');
</script>
```

### Library Functions

```html
<div id="pdf-controls">
    <button id="prev">Previous</button>
    <button id="next">Next</button>
    <button id="zoomIn">Zoom In</button>
    <button id="zoomOut">Zoom Out</button>
</div>
<div id="pdf-container"></div>
```
### Additional JS

Bind event listeners to your buttons to call your library functions. You should do this after your library has been initialized and the PDF is loaded.

```js
document.getElementById('next').addEventListener('click', () => PDFEmbedJS.nextPage());
document.getElementById('prev').addEventListener('click', () => PDFEmbedJS.prevPage());
document.getElementById('zoomIn').addEventListener('click', () => PDFEmbedJS.zoomIn());
document.getElementById('zoomOut').addEventListener('click', () => PDFEmbedJS.zoomOut());
```
