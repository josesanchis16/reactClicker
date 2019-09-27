//Import store
import store from './../store';

const action = async (action) => {
    switch (action) {
        //Boton para cerrar los popups
        case 'closePopup':
            try {
                await store.dispatch({
                    type: 'closeAll'
                });
            } catch (e) {
                console.log(e);
            }
    }
}

export default action;