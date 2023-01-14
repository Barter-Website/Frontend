import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as styled from './styles';

import Header from '../../components/Header';
import Category from '../../components/Category';
import data from "../../pages/MainPage/data.json";
import heart from "../../img/heart.png";
import activeHeart from "../../img/activeHeart.svg";
import { useEffect } from 'react';



const MainPage = () => {
    const navigate = useNavigate();
    const navigateToPostPage = () => {
        navigate('/postpage');
    }

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
        return (
            datalist.map(product =>
            (
                <ProductItem key={product.id} id={product.id} name={product.name} seller={product.seller} days={product.days} like={product.like} />
            ))
        )
    }

    const ProductItem = ({ id, name, seller, days, like }) => {
        const [isLike, setLike] = useState(like)

        const toggleClick = () => {
            setLike(like => !!!like)
        }

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
                    <styled.HeartIcon src={isLike ? activeHeart : heart} onClick={toggleClick} />
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
                <styled.AddProductBtn onClick={navigateToPostPage}>
                    <span>+</span>
                </styled.AddProductBtn>
            </styled.RecentlyProductHeader>
            {/* <styled.SortBy>
                <span>MOST POPULAR</span>
                <span>RECENT</span>
            </styled.SortBy> */}
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