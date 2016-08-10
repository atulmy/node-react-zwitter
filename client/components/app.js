import React from 'react';

import Header from './common/header';
import Footer from './common/footer';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Header />

                <hr />

                { this.props.children }

                <hr />

                <Footer />
            </div>
        );
    }
}

export default App;