import React, {useEffect, useState} from 'react';
import './NameAndPrice.css';

import {useDispatch, useSelector} from "react-redux";
import {Button} from "@mui/material";
import {setPrice} from "../actions/actions";
import {json} from "stream/consumers";
import {priceReducer} from "../reducers/priceReducer";
import { Dispatch, AnyAction } from '@reduxjs/toolkit';
import axios from "axios";


const handleClick = async (dispatch: Dispatch<AnyAction>) => {
    console.log("hello there");
    const baseUrl = 'https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?id=1';
    let priceFetch = 0;
    // await fetch(baseUrl, {
    //     mode: 'cors',
    //     method: 'GET',
    //     headers: {
    //         "X-CMC_PRO_API_KEY": "KEY",
    //     }
    // }).then((data) => data.json()).then((jsonData) => {
    //     priceFetch = jsonData["data"]["1"]["quote"]["USD"]["price"];
    //     dispatch(setPrice(priceFetch));
    //     console.log(jsonData["data"]["1"]["quote"]["USD"]["price"]);
    //
    // }).catch((err) => console.log(err));
    console.log("after fetch"+priceFetch);

    axios({
        method: "GET",
        headers: {
            'Access-Control-Allow-Origin': '*',
            "X-CMC_PRO_API_KEY": "KEY"
        },
        url: baseUrl,
    }).then((data)=> {
        console.log(data.data.data['1']['quote']['USD']['price']);
        dispatch(setPrice(data.data.data['1']['quote']['USD']['price']));
    }).catch((err)=> {console.log(err)});


}

const priceSelector = (state:any)=> {
    console.log(state);
    return state.price.price;
}


const NameAndPrice = (props:nameAndPriceProps) => {
    const price = useSelector(priceSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("hello, I am useEffect");
        setInterval(()=> {
            // handleClick(dispatch);
            console.log("reloading");
        },5000);
    }, [price]);
    return (
        <div className="key-value-pair">
            <div className="key">{props.label}:</div>
            <div className="value">{price}</div>
            <Button onClick={()=> handleClick(dispatch)}>Click</Button>
        </div>
    );
};

type nameAndPriceProps = {
    label: string;
    value: number;
}

export default NameAndPrice;