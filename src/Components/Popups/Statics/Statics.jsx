import React, { Component } from 'react';
import { connect } from 'react-redux';

import buttonAction from './../../../Actions/buttonsAction';

//Import styles
import './Statics.css';

class Statics extends Component {
    constructor(props) {
        super(props);
    }

    close = () => {
        buttonAction('closePopup');
    }

    render() {
        return (
            <menu style={{ display: this.props.staticsOpen ? "flex" : 'none' }}>
                <div className="divPopupGeneral">
                    <div className='headerPopup'>
                        <p className="titleGeneral">Statics</p>
                        <img src="/image/fruits/cross.png" onPointerUp={this.close} alt="" className="roundButtonSmall buttonRed" />
                    </div>
                    <hr />
                    <div className="staticsSectionGeneral">
                        <div className="divSection">
                            <p className="generalSubtitles">InGame Statics</p>
                            <hr />
                            <div>
                                <p>Esto es una estadistica: 10234/123</p>
                                <p>Esto es una estadistica: 10234/123</p>
                                <p>Esto es una estadistica: 10234/123</p>
                                <p>Esto es una estadistica: 10234/123</p>
                                <p>Esto es una estadistica: 10234/123</p>
                                <p>Esto es una estadistica: 10234/123</p>
                                <p>Esto es una estadistica: 10234/123</p>
                            </div>
                        </div>
                        <div className="divSection">
                            <p className="generalSubtitles">InGame Statics</p>
                            <hr />
                            <div>
                                <p>Esto es una estadistica: 10234/123</p>
                                <p>Esto es una estadistica: 10234/123</p>
                                <p>Esto es una estadistica: 10234/123</p>
                                <p>Esto es una estadistica: 10234/123</p>
                                <p>Esto es una estadistica: 10234/123</p>
                                <p>Esto es una estadistica: 10234/123</p>
                                <p>Esto es una estadistica: 10234/123</p>
                            </div>
                        </div>
                        <div className="divSection">
                            <p className="generalSubtitles">InGame Statics</p>
                            <hr />
                            <div>
                                <p>Esto es una estadistica: 10234/123</p>
                                <p>Esto es una estadistica: 10234/123</p>
                                <p>Esto es una estadistica: 10234/123</p>
                                <p>Esto es una estadistica: 10234/123</p>
                                <p>Esto es una estadistica: 10234/123</p>
                                <p>Esto es una estadistica: 10234/123</p>
                                <p>Esto es una estadistica: 10234/123</p>
                            </div>
                        </div>
                    </div>
                </div>
            </menu >
        )
    }
}

const mapStateToProps = state => {
    console.log(state);
    return ({
        staticsOpen: state.openedWindows.staticsOpen,
    })
};

export default connect(mapStateToProps)(Statics);