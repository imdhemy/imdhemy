#!/usr/bin/env node

const fs = require('fs');
const {mdToPdf} = require('md-to-pdf');

const {success, danger, info, loading, stopLoading} = require('./message');
const config = require('./config');

/**
 * The main function.
 * @return {Promise<void>}
 */
async function main() {
  info('📎️Converting markdown to pdf...');
  info('😴 It may take a while...');

  const loadingId = loading();
  const pdf = await mdToPdf({path: './cv.md'}, config.mdToPdf);

  if (pdf) {
    if (!fs.existsSync('./build')) {
      fs.mkdirSync('./build');
    }

    fs.writeFileSync('build/cv.pdf', pdf.content, {flag: 'w'});

    stopLoading(loadingId);
  }
}

main().then(() => {
  success('🚀 PDF generated successfully.');
}).catch((err) => {
  danger(err);
  process.exit(1);
});
