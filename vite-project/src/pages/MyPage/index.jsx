import React, { useState } from 'react';
import * as styled from './styles';
import Header from '../../components/Header/index.jsx'
import profileImg from '../../assets/profileImg.png'
import edit from '../../assets/edit.png'
import otherProductImage from '../../assets/otherProductImage.png'
import arrowLeft from '../../assets/arrowLeft.png'
import arrowRight from '../../assets/arrowRight.png'
import exchange from '../../assets/exchange.png'
import data from '../MyPage/data.json'
import history from '../MyPage/history.json'
import Category from '../../components/Category';

const MyPage = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const [userName, setUserName] = useState("wink");
    const [userEmail, setUserEmail] = useState("wink");
    const [userPassword, setPassword] = useState("wink");

    const changeName=()=>{
        set(userName)
    }

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
    
    const HistoryContainerBox=()=>{
        return (
            history.history.map(h=>(
                <styled.historyContainerBox>
                    <styled.historyLeft>
                        <img src={otherProductImage}/>
                        <text>{h.name1}</text>
                    </styled.historyLeft>
                        <img className='exchange' src={exchange}/>
                    <styled.historyRight>
                        <text>{h.name2}</text>
                        <img src={otherProductImage}/>
                    </styled.historyRight>
                </styled.historyContainerBox>
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

            <styled.bodyContainer>
                <styled.infoContainer>
                    <styled.profileImgContainer>
                        <img src={profileImg} />
                        <button className='imgUpload'>이미지 업로드</button>
                        <button className='imgDelete'>이미지 제거</button>
                    </styled.profileImgContainer>
                    <styled.editContainer>
                        <div className='nameEditBox'>
                            <text className='userName'>{userName}</text>
                            <img src={edit} onClick={changeName}/>
                        </div>
                        <div className='editBox'>
                            <text className='inputTitle'>Email:</text>
                            <input className='editInput' defaultValue={userEmail}/>
                        </div>
                        <div className='editBox'>
                            <text className='inputTitle'>Password:</text>
                            <input className='editInput' defaultValue={userPassword}/>
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
                    <HistoryContainerBox/>
                </styled.historyContainer>
            </styled.bodyContainer>

        </styled.container>
    

    )}
    export default MyPage