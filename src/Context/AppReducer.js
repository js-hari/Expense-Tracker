


/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */


export default(state, action) => {

    switch(action.type){
        case 'DELETE TRANSACTION':
            return{
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }

        
        case 'ADD TRANSACTION':
            return{
                ...state,
                transactions: [action.payload, ...state.transactions]
            }

        
        default:
            return state;
    }
}