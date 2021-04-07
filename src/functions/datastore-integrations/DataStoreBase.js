class DataStoreBase {

  constructor() {
    const abstractMethods = [
      'fetchItems',
      'getCredentials',
      'setCredentials'
    ];
    const unimplemented = abstractMethods.filter(
      m => typeof this[m] !== "function"
    );
    if (unimplemented.length) {
      throw new TypeError(unimplemented.join(',') + " must be overriden");
    }
  }

  /**
   * Retrieves items from the DataStore
   *
   * @abstract
   * @returns {Promise<Array<Object>>} a promise to the items.
   */
  fetchItems() {
    throw new Error();
  }

  /**
   * Retrieves the credentials needed for the DataStore to work.
   *
   * This method is needed to ensure testability, removing the
   * datastore credentials from the methods to be tested.
   *
   * @abstract
   * @returns {Object|string} credentials needed for the integration;
   */
  getCredentials() {
    throw new Error();
  }

  /**
   * Sets the credentials needed for the DataStore to work.
   *
   * This method is needed to ensure testability, removing the
   * datastore credentials from the methods to be tested.
   *
   * @param {Object|string} credentials needed for the integration;
   * @abstract
   */
  setCredentials(credentials) {
    throw new Error();
  }

}

module.exports = DataStoreBase;
