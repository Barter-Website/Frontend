import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as styled from './styles';

import Header from '../../components/Header';
import Category from '../../components/Category';

const MainPage = () => {
    const ProductItem = () => {
        return(
            <styled.RecentlyProductItem>
                <styled.ItemImg>
                    <styled.FoodImg />
                </styled.ItemImg>
                <styled.FoodName>
                    <span>Fresh Local Tomatoes</span>
                    <span>Jessica Pierpoint</span>
                    <span>2 Days ago</span>
                </styled.FoodName>
                <styled.LikeBtn>
                    <styled.HeartIcon />
                </styled.LikeBtn>
            </styled.RecentlyProductItem>
        )
    }


    return(
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
                <styled.AddItem>
                    <styled.AddBtn />
                </styled.AddItem>
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
            </styled.RecentlyProductList>
            <styled.RecentlyProductList>
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
            </styled.RecentlyProductList>
            <styled.ViewAllProducts>
                <span>View All Products</span>
                <styled.MoreBtn />
            </styled.ViewAllProducts>
        </styled.Container>
    )
}

export default MainPage;