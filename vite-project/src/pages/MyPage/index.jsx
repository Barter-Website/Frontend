import React, { useState } from 'react';
import * as styled from './styles';

import profileImg from '../../assets/profileImg.png'
import edit from '../../assets/edit.png'
import otherProductImage from '../../assets/otherProductImage.png'
import arrowLeft from '../../assets/arrowLeft.png'
import arrowRight from '../../assets/arrowRight.png'
import exchange from '../../assets/exchange.png'
import data from '../MyPage/data.json'

import Header from '../../components/Header/index.jsx'
import Category from '../../components/Category';

const MyPage = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const ProductList=()=>{
        return (
            data.products.map(product=>(
                <styled.listImage key={product.name}>
                        <img src={otherProductImage}/>
                        <span className='otherProductName'>{product.name}</span>
                </styled.listImage>
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
            <Header/>
            <Category />
            {/* <styled.navContainer>
                <styled.navButton>HOME</styled.navButton>
                <styled.navButton>CHATS</styled.navButton>
                <styled.navButton>ABOUT US</styled.navButton>
                <styled.navButton>COMMUNITY</styled.navButton>
                <styled.navButton>MY PAGE</styled.navButton>
            </styled.navContainer> */}

            <styled.bodyContainer>
                <styled.infoContainer>
                    <styled.profileImgContainer>
                        <img src={profileImg} />
                        <button className='imgUpload'>이미지 업로드</button>
                        <button className='imgDelete'>이미지 제거</button>
                    </styled.profileImgContainer>
                    <styled.editContainer>
                        <div className='nameEditBox'>
                            <text className='userName'>Wink</text>
                            <img src={edit}/>
                        </div>
                        <div className='editBox'>
                            <text className='inputTitle'>Email:</text>
                            <input className='editInput'/>
                        </div>
                        <div className='editBox'>
                            <text className='inputTitle'>Password:</text>
                            <input className='editInput'/>
                        </div>
                        <div className='editBox'>
                            <text className='inputTitle'>Password Check:</text>
                            <input className='editInput'/>
                        </div>
                    </styled.editContainer>
                </styled.infoContainer>

                <styled.likeContainer>
                    <span className='title'>Like</span>
                    <styled.slideContainer>
                        <img className='arrow' src={arrowLeft} onClick={slideLeft}/>
                        <styled.showContainer>
                            <styled.imageContainer  style={{
                                transition: "all 500ms ease-in-out",
                                transform: `translateX(${
                                    -1 * (410 * slideIndex)}px)`,}}>
                                <ProductList/>
                            </styled.imageContainer>
                        </styled.showContainer>
                        <img className='arrow'src={arrowRight} onClick={slideRight}/>
                    </styled.slideContainer>
                </styled.likeContainer>




                <styled.historyContainer>
                    <text className='historyTitle'>Trade History</text>
                    <styled.historyContainerBox>
                        <styled.historyLeft>
                            <img src={otherProductImage}/>
                            <text>Checked Duvet Cover Set</text>
                        </styled.historyLeft>
                        <img className='exchange' src={exchange}/>
                        <styled.historyRight>
                            <text>Checked Duvet Cover Set</text>
                            <img src={otherProductImage}/>
                        </styled.historyRight>
                    </styled.historyContainerBox>
                    <styled.historyContainerBox>
                        <styled.historyLeft>
                            <img src={otherProductImage}/>
                            <text>Checked Duvet Cover Set</text>
                        </styled.historyLeft>
                        <img className='exchange' src={exchange}/>
                        <styled.historyRight>
                            <text>Checked Duvet Cover Set</text>
                            <img src={otherProductImage}/>
                        </styled.historyRight>
                    </styled.historyContainerBox>
                    <styled.historyContainerBox>
                        <styled.historyLeft>
                            <img src={otherProductImage}/>
                            <text>Checked Duvet Cover Set</text>
                        </styled.historyLeft>
                        <img className='exchange' src={exchange}/>
                        <styled.historyRight>
                            <text>Checked Duvet Cover Set</text>
                            <img src={otherProductImage}/>
                        </styled.historyRight>
                    </styled.historyContainerBox>
                </styled.historyContainer>
            </styled.bodyContainer>

        </styled.container>
    

    )}
    export default MyPage