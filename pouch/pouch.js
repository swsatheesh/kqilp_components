import PouchDB from 'pouchdb-browser';

class Pouch extends PouchDB {
  getState() {
    return this.get('config');
  }

  saveState(state) {
    this.get('config').then(doc =>
      this.put({ ...doc, ...state }))
      .catch(() => this.put({ _id: 'config', ...state }));
  }

  getFromCache(viewId) {
    return this.getAttachment(viewId, `${viewId}.png`);
  }

  saveToCache(viewId, blob) {
    return this.putAttachment(viewId, `${viewId}.png`, blob, 'image/png');
  }
}

export default Pouch;