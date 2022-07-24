const INIT_STATE = {
    carts: []
};

export const cartreducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "ADD_CART":
            const itemIndexAdd = state.carts.findIndex((item) => item.id === action.payload.id);

            if (itemIndexAdd >= 0) {
                state.carts[itemIndexAdd].qnty += 1;

            }
            else {
                const temp = { ...action.payload, qnty: 1 }
                return {
                    ...state,
                    carts: [...state.carts, temp]
                }
            }

        case "RMV_CART":
            const data = state.carts.filter((el) => el.id !== action.payload);
            return {
                ...state,
                carts: data

            }

        case "RMV_ONE":
            const itemIndexDecrement = state.carts.findIndex((item) => item.id === action.payload.id);
            if (state.carts[itemIndexDecrement].qnty >= 1) {
                const dltItem = state.carts[itemIndexDecrement].qnty -= 1;

                return {
                    ...state,
                    carts: [...state.carts]
                }
            }
            else if(state.carts[itemIndexDecrement].qnty === 1){
                const data = state.carts.filter((el) => el.id !== action.payload);
                return {
                    ...state,
                    carts: data
    
                }

            }


        default:
            return state

    }

}