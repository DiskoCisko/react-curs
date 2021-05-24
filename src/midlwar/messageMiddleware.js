import AUTHORS from './../components/authors';
import {ADD_MES} from './../actions/actionTypes';
import {addMes, upChat} from './../actions/actions';
import BOT_ANS from './../components/bot_ans';

export default store => next => (action) => {
    switch (action.type) {
       case ADD_MES: {
        const content = action.payloid;
        if (content.messege.author === "User") {
            setTimeout(()=> {
                store.dispatch(addMes(content.id, {text: BOT_ANS[Math.floor(Math.random() * BOT_ANS.length)], author: AUTHORS.bot}))
                store.dispatch(upChat(content.id))
            }, 0)
          }
       }
       default:
            return next(action);
    }
}