// Client

import React from 'react';

import Header from './common/header';
import Footer from './common/footer';
import FlashMessages from './common/flash-messages';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Header />

                <hr />

                <FlashMessages />

                { this.props.children }

                <hr />

                <Footer />
            </div>
        );
    }
}

export default App;