
export const filterReducer = (state, action) => {
    const {type, payload} = action;
    switch (type) {
        case "PRODUCT_LIST":
            return { ...state, productList: payload.products };
        case "SORT_BY":
            return { ...state, sortyBy: payload.sortyBy };
        case "RATINGS":
            return { ...state, ratings: payload.ratings };
        case "BEST_SELLER_ONLY":
            return { ...state, bestSellerOnly: payload.bestSellerOnly} ;
        case "IN_STOCK_ONLY":
            return { ...state, inStockOnly: payload.inStockOnly };
        case "CLEAR_FILTER":
            return { ...state, inStockOnly: false, bestSellerOnly: false, sortyBy:null, ratings:null}
        default:
            throw new Error('No case found');
    }
}