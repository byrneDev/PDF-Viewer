const PDFEmbedJS = {
    pdfDoc: null,
    pageNum: 1,
    pageRendering: false,
    pageNumPending: null,
    scale: 1.0,
    canvas: null,
    ctx: null,

    // Load PDF and initialize viewer
    loadPDF: async function(containerId, pdfPath) {
        const container = document.getElementById(containerId);
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        container.appendChild(this.canvas);

        // Asynchronously load the PDF
        this.pdfDoc = await pdfjsLib.getDocument(pdfPath).promise;
        this.renderPage(this.pageNum);
    },

    // Render the current page
    renderPage: function(num) {
        this.pageRendering = true;

        // Get page and render it
        this.pdfDoc.getPage(num).then((page) => {
            const viewport = page.getViewport({scale: this.scale});
            this.canvas.height = viewport.height;
            this.canvas.width = viewport.width;

            const renderContext = {
                canvasContext: this.ctx,
                viewport: viewport
            };
            const renderTask = page.render(renderContext);

            renderTask.promise.then(() => {
                this.pageRendering = false;
                if (this.pageNumPending !== null) {
                    // New page rendering is pending
                    this.renderPage(this.pageNumPending);
                    this.pageNumPending = null;
                }
            });
        });
    },

    // Navigate to the next page
    nextPage: function() {
        if (this.pageNum >= this.pdfDoc.numPages) return;
        this.pageNum++;
        this.renderPage(this.pageNum);
    },

    // Navigate to the previous page
    prevPage: function() {
        if (this.pageNum <= 1) return;
        this.pageNum--;
        this.renderPage(this.pageNum);
    },

    // Zoom in
    zoomIn: function() {
        this.scale *= 1.1;
        this.renderPage(this.pageNum);
    },

    // Zoom out
    zoomOut: function() {
        this.scale /= 1.1;
        this.renderPage(this.pageNum);
    }
};
