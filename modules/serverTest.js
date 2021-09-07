const testServer = (request, response) => {
    try {
      response.status(200).send('connected');
    } catch (error) {
      response.status(500).send(error);
    }
  }

module.exports = testServer;