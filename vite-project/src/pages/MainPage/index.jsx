import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as styled from './styles';

import Header from '../../components/Header';
import Category from '../../components/Category';
import data from "../../pages/MainPage/data.json";
import { useEffect } from 'react';



const MainPage = () => {
    const [datalist, setDatalist] = useState(data["products"].slice(0, 10));

    const MoreView = () => {
        setDatalist(data["products"])
    }

    useEffect(() => {
        datalist.map(product => (
            <ProductItem key={product.id} name={product.name} seller={product.seller} days={product.days} />
        ))
    }, [datalist])

    const ProductItemList = () => {
        console.log(datalist)
        return (
            datalist.map(product =>
            (
                <ProductItem key={product.id} name={product.name} seller={product.seller} days={product.days} />
            ))
        )
    }

    const ProductItem = ({ name, seller, days }) => {
        return (
            <styled.RecentlyProductItem>
                <styled.ItemImg>
                    <styled.FoodImg />
                </styled.ItemImg>
                <styled.FoodName>
                    <span>{name}</span>
                    <span>{seller}</span>
                    <span>{days} Days ago</span>
                </styled.FoodName>
                <styled.LikeBtn>
                    <styled.HeartIcon />
                </styled.LikeBtn>
            </styled.RecentlyProductItem>
        )
    }


    return (
        <styled.Container>
            <Header />
            <Category />
            <styled.CategoryBox>
                <styled.CategoryBoxHeader>
                    <span>Category</span>
                    <span>View All Categories</span>
                    <styled.LeftBtn>
                        <styled.Leftarrow />
                    </styled.LeftBtn>
                    <styled.RightBtn>
                        <styled.Rightarrow />
                    </styled.RightBtn>
                </styled.CategoryBoxHeader>
                <styled.CategoryList>
                    <styled.CategoryItem>
                        <styled.Clothes />
                        <span>Clothes</span>
                    </styled.CategoryItem>
                    <styled.CategoryItem>
                        <styled.Sports />
                        <span>Sports / Leisure</span>
                    </styled.CategoryItem>
                    <styled.CategoryItem>
                        <styled.Device />
                        <span>Device</span>
                    </styled.CategoryItem>
                    <styled.CategoryItem>
                        <styled.Baby />
                        <span>Baby</span>
                    </styled.CategoryItem>
                    <styled.CategoryItem>
                        <styled.Food />
                        <span>Food</span>
                    </styled.CategoryItem>
                    <styled.CategoryItem>
                        <styled.Furniture />
                        <span>Furniture</span>
                    </styled.CategoryItem>
                </styled.CategoryList>
            </styled.CategoryBox>

            <styled.RecentlyProductHeader>
                <span>Recently Added Products</span>
            </styled.RecentlyProductHeader>
            <styled.SortBy>
                <span>MOST POPULAR</span>
                <span>RECENT</span>
            </styled.SortBy>
            <styled.HrLine />
            <styled.RecentlyProductList>
                <ProductItemList />
            </styled.RecentlyProductList>
            <styled.ViewAllProducts onClick={MoreView}>
                <span>View All Products</span>
                <styled.MoreBtn />
            </styled.ViewAllProducts>
        </styled.Container>
    )
}

export default MainPage;