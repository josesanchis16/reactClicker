import React, { Component } from 'react';
import { connect } from 'react-redux';

import buttonActions from './../../../Actions/buttonsAction';

//Import style
import './Share.css';

class Share extends Component {
    constructor(props) {
        super(props);
    }

    close = () => {
        buttonActions('closePopup');
    }

    render() {
        return (
            <div style={{ display: this.props.shareOpen ? 'flex' : 'none' }}>
                <div className="divBackground" onPointerUp={this.close}></div>
                <menu className="menuShare">
                <div className="divPopupGeneral">
                    <div className="headerPopup">
                        <p className="titleGeneral">Share</p>
                        <img src="/image/fruits/cross.png" onPointerUp={this.close} alt="" className="roundButtonSmall buttonRed" />
                    </div>
                    <hr />
                    <div className="divSocialNetworks">
                        <div className="socialNetwork">
                            <i className="snIcon w fab fa-whatsapp"></i>
                        </div>
                        <div className="socialNetwork">
                            <i class="snIcon f fab fa-facebook-f"></i>
                        </div>
                        <div className="socialNetwork">
                            <i class="snIcon t fab fa-twitter"></i>
                        </div>
                    </div>
                    <div className="snDescription">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero minima repellat aut similique explicabo. Ipsum natus nisi veritatis. Incidunt aliquid ullam libero dolor provident doloremque dolorum sit voluptatum dolore obcaecati?</p>
                    </div>
                </div>
            </menu>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        shareOpen: state.openedWindows.shareOpen,
    })
}

export default connect(mapStateToProps)(Share);