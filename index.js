const PageHtml = require('./lib/HTML');
const htmlTemplate = require('./src/html-template');
const cssTemplate = require('./src/css-template');
const { writeHtml, writeCss } = require('./utils/generate-site');

const dataNeeded = new PageHtml()
    .getProjectName();
    dataNeeded
    // .then(console.log('this is log',{dataNeeded}));
    // .then(data => {
    //     console.log(data);
    //     return htmlTemplate(data)
    // })
    // .then(pageHtml => {
    //     return writeHtml(pageHtml)
    // })
    // .then(() => cssTemplate())
    // .then(pageCss => {
    //     return writeCss(pageCss)
    // })
    // .catch(err => {
    //     console.log(err);
    // })


