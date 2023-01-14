import React, { useState } from 'react';
import * as styled from './styles';
import logo from '../../assets/logo.png'
import user from '../../assets/user.svg'
import bucket from '../../assets/bucket.svg'
import heart from '../../assets/heart.svg'
import detailImage1 from '../../assets/detailImage1.png'
import detailImage2 from '../../assets/detailImage2.png'
import detailImage3 from '../../assets/detailImage3.png'
import otherProductImage from '../../assets/otherProductImage.png'
import arrowLeft from '../../assets/arrowLeft.png'
import arrowRight from '../../assets/arrowRight.png'

import Header from '../../components/Header';
import Category from '../../components/Category';
import data from "../../pages/Detailpage/data.json"

const DetailPage = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const ProductList=()=>{
        return (
            data.products.map(product=>(
                <styled.footerImage key={product.name}>
                        <img src={otherProductImage}/>
                        <span className='otherProductName'>{product.name}</span>
                </styled.footerImage>
            ))
        )
    }   

    const slideRight=()=>{
        console.log(slideIndex)
        if(slideIndex==3){
            setSlideIndex(0);
        }else{
            setSlideIndex(slideIndex+1);
        }   
    }

    const slideLeft=()=>{
        console.log(slideIndex)
        if(slideIndex==3 || slideIndex==0){
            setSlideIndex(0);
        }else{
            setSlideIndex(slideIndex-1);
        }   
    }

    return(
        <styled.container>
            
            <Header />
            <Category />

            <styled.bodyContainer>
                <styled.imageContainer>
                    <img className='detailImage1' src ={detailImage1}/>
                    <img src ={detailImage2}/>
                </styled.imageContainer>
                <img src ={detailImage3}/>
                <styled.textContainer>
                    <div className='textBox'>
                        <span className='name'>Checked Duvet Cover Set<br></br></span>
                        <span className='amount'>Amount : 1<br></br></span>
                        <span>Light khaki green/white checks<br></br>Light khaki green/white checks<br></br>Light khaki green/white checks<br></br></span>
                    </div>
                
                    <div>
                        <styled.customButton1>Select My Product</styled.customButton1>
                        <div>
                            <styled.customButton2>CHAT</styled.customButton2>
                            <styled.customButton3>LIKE</styled.customButton3>
                        </div>
                    </div>
                </styled.textContainer>
            </styled.bodyContainer>

            <styled.otherProductContainer>
                <span className='footerTitle'>Other products from the same seller</span>
                <styled.slideContainer>
                    <img className='arrow' src={arrowLeft} onClick={slideLeft}/>
                    <styled.showContainer>
                        <styled.footerImageContainer  style={{
                            transition: "all 500ms ease-in-out",
                            transform: `translateX(${
                                -1 * (410 * slideIndex)}px)`,}}>
                            <ProductList/>
                        </styled.footerImageContainer>
                    </styled.showContainer>
                    <img className='arrow'src={arrowRight} onClick={slideRight}/>
                </styled.slideContainer>
            </styled.otherProductContainer>
        </styled.container>
    

    )}
    export default DetailPage