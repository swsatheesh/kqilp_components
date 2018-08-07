import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import debounce from 'lodash/debounce';

import Pouch from './pouch';
import createStoreHelper from '../redux/create_store_helper';


class PouchProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            pouch: undefined,
            store: undefined,
        };
    }
    componentDidMount() {
        this.createPouchDB();
    }
    createPouchDB() {
        let dbName = this.props.id;
        
        const pouchDB = new Pouch(dbName, { auto_compaction: true });
        window.PouchDB = pouchDB;
    
        this.setState({ pouch: pouchDB });
    
        const saveToPouch = function save(store) {
          pouchDB.saveState(store.getState());
        };
    
        const debounceSave = debounce(saveToPouch, 1000);

        pouchDB.getState().then((doc) => {
          delete doc._id; // eslint-disable-line
          delete doc._rev; // eslint-disable-line
          const store = createStoreHelper({ experiment: this.props.reducers }, doc);
          store.subscribe(() => debounceSave(store), 1000);
          this.setState({ isLoading: false, store });
        }).catch((e) => {
          if (e.status === 404) {
            const store = createStoreHelper({ experiment: this.props.reducers }, this.props.config);
            // store.dispatch(this.props.startupAction());
            store.subscribe(() => debounceSave(store), 1000);
            this.setState({ isLoading: false, store });
          }
        });
    }
    render() {
        if (this.state.isLoading) {
            return <div>{'LOADING, please wait.'}</div>;
          }
          return (<Provider store={this.state.store}>
            {Children.only(this.props.children)}
          </Provider>);
    }
}

PouchProvider.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.element,
    reducers: PropTypes.func.isRequired,
    config: PropTypes.object.isRequired
};

export default PouchProvider;