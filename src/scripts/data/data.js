/**
 * Get data from services
 */
class Restaurant {
  /**
   * main url
   * */
  constructor() {
    this._baseUrl = 'https://restaurant-api.dicoding.dev/';
    this._token = '12345';
  }

  /**
   * call data with base url and method
   * @param {string} path
   * @param {string} callMethod
   * @return {json} data
   * */
  async call(path, callMethod) {
    let response;
    switch (callMethod) {
      case 'POST':
        response = await fetch(this._baseUrl + path, {
          method: callMethod,
          headers: {
            'X-Auth-Token': this._token,
          },
        });
        break;
      case 'GET':
        response = await fetch(this._baseUrl + path, {
          method: callMethod,
        });
        break;
    }
    const data = await response.json();
    return data;
  }
}

export default Restaurant;
