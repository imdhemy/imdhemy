const margin = '0.3in';

module.exports = {
  mdToPdf: {
    stylesheet: [
      './bin/style.css',
    ],
    script: [],
    pdf_options: {
      margin: {
        top: margin,
        right: margin,
        bottom: margin,
        left: margin,
      },
    },
  },
};
