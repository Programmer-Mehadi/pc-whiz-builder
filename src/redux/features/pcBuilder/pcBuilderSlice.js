

import { createSlice } from '@reduxjs/toolkit'

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
        ]

    },
    reducers: {

    }
})

// Action creators are generated for each case reducer function
export const { } = pcBuilderSlice.actions

export default pcBuilderSlice.reducer