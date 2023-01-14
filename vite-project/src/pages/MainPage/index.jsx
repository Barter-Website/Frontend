import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
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

    const [datalist, setDatalist] = useState([]);

    const MoreView = () => {
        setDatalist(data["products"])
    }

    useEffect(() => {
        const response = axios.get('http://localhost:8080/api/products', {})
            .then(function (response) {
                console.log(JSON.stringify(response.data));

                let numOfProducts = response.data.length;

                // console.log(item);
                let arr = [];
                for (var i = 0; i < numOfProducts; i++) {
                    let ProductInfo = {
                        id: response.data[i].id,
                        title: response.data[i].title,
                        productCategory: response.data[i].productCategory,
                        areaCategory: response.data[i].areaCategory,
                        userName: response.data[i].user.id
                    }
                    arr[i] = ProductInfo;
                }


                setDatalist(arr)
                // item.map(item => (<ProductItem key={item.id} title={item.title} seller={item.seller} days={item.days} />))
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    const ProductItemList = () => {
        console.log(datalist)
        return (
            datalist.map(product =>
            (

                <ProductItem id={product.id} title={product.title} name={product.title} seller={product.userName} category={product.areaCategory} like={product.like} />
            ))
        )
    }


    const ProductItem = ({ id, name, seller, category, like }) => {
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
                    <span>{category}</span>
                </styled.FoodName>
                <styled.LikeBtn>
                    <styled.HeartIcon src={isLike ? activeHeart : heart} onClick ={toggleClick}/>
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
                {/* {arr.map(item => <ProductItemList />)} */}
            </styled.RecentlyProductList>
            <styled.ViewAllProducts onClick={MoreView}>
                <span>View All Products</span>
                <styled.MoreBtn />
            </styled.ViewAllProducts>
        </styled.Container>
    )
}

export default MainPage;