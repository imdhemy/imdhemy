#!/usr/bin/env node

const {mdToPdf} = require('md-to-pdf');

const {success, danger, info, loading, stopLoading} = require(
  './services/message');
const fs = require('fs');

/**
 * The main function.
 * @return {Promise<void>}
 */
async function main() {
  info('📎️Converting markdown to pdf...');
  info('😴 It may take a while...');
  
  const loadingId = loading();
  const pdf = await mdToPdf({path: './cv.md'});
  
  if (pdf) {
    fs.writeFileSync('cv.pdf', pdf.content, {flag: 'w'});
    
    stopLoading(loadingId);
  }
}

main().then(() => {
  success('🚀 PDF generated successfully.');
}).catch(err => {
  danger(err);
  process.exit(1);
});
