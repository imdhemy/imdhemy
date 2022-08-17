const margin = '0.5in';

module.exports = {
  mdToPdf: {
    stylesheet: ['./bin/style.css'],
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
