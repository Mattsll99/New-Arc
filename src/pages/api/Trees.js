const axios = require('axios');
const cheerio = require('cheerio');

export async function getRepositoryOrganization(url) {
  try {
    // Fetch the HTML content of the repository page
    const response = await axios.get(url);
    const html = response.data;

    // Load the HTML into cheerio
    const $ = cheerio.load(html);

    // Find the organization name element on the page
    const organizationElement = $('.author a span');
    const organization = organizationElement.text().trim();

    console.log(`Organization of the repository: ${organization}`);
  } catch (error) {
    console.error(`Error fetching repository data: ${error}`);
  }
}
