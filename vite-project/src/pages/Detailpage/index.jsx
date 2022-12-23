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

const DetailPage = () => {
    return(
        <styled.container>
            {/* <styled.headerContainer>
                <styled.logoImage src={logo}/>
                <styled.customInput></styled.customInput>
                <styled.hearderButton><styled.headerButtonImage className='user' src={user}/></styled.hearderButton>
                <styled.hearderButton><styled.headerButtonImage className='bucket' src={bucket}/></styled.hearderButton>
                <styled.hearderButton><styled.headerButtonImage className='heart'src={heart}/></styled.hearderButton>
            </styled.headerContainer> */}

            {/* <styled.navContainer>
                <styled.navButton>HOME</styled.navButton>
                <styled.navButton>CHATS</styled.navButton>
                <styled.navButton>ABOUT US</styled.navButton>
                <styled.navButton>COMMUNITY</styled.navButton>
                <styled.navButton>MY PAGE</styled.navButton>
            </styled.navContainer> */}
            
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
                        <text className='name'>Checked Duvet Cover Set<br></br></text>
                        <text className='amount'>Amount : 1<br></br></text>
                        <text>Light khaki green/white checks<br></br>Light khaki green/white checks<br></br>Light khaki green/white checks<br></br></text>
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

            <styled.footerContainer>
                <text className='footerTitle'>Other products from the same seller</text>
                <styled.footerImageContainer>
                    <img className='arrow' src={arrowLeft}/>
                    <styled.footerImage>
                        <img src={otherProductImage}/>
                        <text className='otherProductName'>Flannel Duvet Cover Set</text>
                    </styled.footerImage>
                    <styled.footerImage>
                        <img src={otherProductImage}/>
                        <text className='otherProductName'>Flannel Duvet Cover Set</text>
                    </styled.footerImage>
                    <styled.footerImage>
                        <img src={otherProductImage}/>
                        <text className='otherProductName'>Flannel Duvet Cover Set</text>
                    </styled.footerImage>
                    <styled.footerImage>
                        <img src={otherProductImage}/>
                        <text className='otherProductName'>Flannel Duvet Cover Set</text>
                    </styled.footerImage>
                    <img className='arrow'src={arrowRight}/>
                </styled.footerImageContainer>
            </styled.footerContainer>
        </styled.container>
    

    )}
    export default DetailPage