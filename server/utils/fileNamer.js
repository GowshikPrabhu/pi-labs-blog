/**
 * Rename the blog file to be uploaded
 * @param {String} originalName Original name of the file
 * @returns {String} new name of the file
 */
const getBlobName = (originalName, authorName) => {
  // Use a random number to generate a unique file name,
  // removing "0." from the start of the string.
  const identifier = Math.random().toString().replace(/0\./, '');
  authorName = authorName.replace(/\s/g, '');
  return `${identifier}-${authorName}-${originalName}`;
};

module.exports = getBlobName;
