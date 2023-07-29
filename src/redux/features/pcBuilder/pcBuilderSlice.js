

import { createSlice } from '@reduxjs/toolkit';

export const pcBuilderSlice = createSlice({
    name: 'pcBuilder',
    initialState: {
        itemCategories: [
            { path: 'cpu-processor', value: 'CPU / Processor', url: "./images/featured/cpu.svg", productName: "", price: "", productImage: "" },
            { path: 'motherboard', value: 'Motherboard', url: "./images/featured/motherboard.svg", productName: "", price: "", productImage: "" },
            { path: 'ram', value: 'RAM', url: "./images/featured/ram.svg", productName: "", price: "", productImage: "" },
            { path: 'power-supply-unit', value: 'Power Supply Unit', url: "./images/featured/power-supply-unit.svg", productName: "", price: "", productImage: "" },
            { path: 'storage-device', value: 'Storage Device', url: "./images/featured/storage-device.svg", productName: "", price: "", productImage: "" },
            { path: 'monitor', value: 'Monitor', url: "./images/featured/monitor.svg", productName: "", price: "", productImage: "" },
            { path: 'others', value: 'Others', url: "./images/featured/others.svg", productName: "", price: "", productImage: "" }
        ],
        sum: 0,
        fullFill:0
    },
    reducers: {
        addProduct: (state, action) => {
            const data = action.payload;
            const preData = state.itemCategories;
            let full = 0
            let sum = 0
            const newData = preData.map((item,index) => {
                if (item.path === data?.category) {
                    item.productName = data?.productName;
                    item.price = data?.price;
                    item.productImage = data?.productImage;
                    sum = item.price
                    if (index + 1 < 7) {
                        full = 1
                    }
                    return item
                }
                else {
                    return item
                }
            })

            state.fullFill = state.fullFill + full;
            state.sum = Number(Number(state.sum) + Number(Number(sum).toFixed(2))).toFixed(2);
            state.itemCategories = newData
        },
        removeProduct: (state, action) => {
            const data = action.payload;
            const preData = state.itemCategories;
            let full = 0
            let sum = 0
            const newData = preData.map((item,index) => {
                if (item.path === data?.category) {
                    item.productName = "";
                    sum = item.price
                    item.price = "";
                    item.productImage = "";
                    if (index + 1 < 7) {
                        full = 1
                    }
                    return item
                }
                else {
                    return item
                }
            })
      
            state.fullFill = state.fullFill - full;
            state.sum = Number(Number(state.sum) - Number(Number(sum).toFixed(2))).toFixed(2);
            state.itemCategories = newData
        }
    }
})

// Action creators are generated for each case reducer function
export const { addProduct, removeProduct } = pcBuilderSlice.actions

export default pcBuilderSlice.reducer