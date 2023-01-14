import React, { useState } from 'react';
import * as styled from './styles';
import axios from 'axios';

import Header from '../../components/Header';
import contentIcon from '../../assets/content.svg';
import photoIcon from '../../assets/photo.svg';
import categoryIcon from '../../assets/category.svg';
import fruitsIcon from '../../assets/fruitsIcon.svg';
import Category from '../../components/Category';
import clothes from '../../img/clothes.svg';
import sports from '../../img/sports.svg';
import device from '../../img/device.svg';
import baby from '../../img/baby.svg';
import food from '../../img/food.svg';
import furniture from '../../img/furniture.svg';



const PostPage = () => {
    
    const FormList = (props) => {
        return (
            <styled.formListContainer>
                <styled.formList className={props.selected ? 'selected' : ''}>
                    <styled.iconBox className={props.selected ? 'selected' : ''}>
                        <img src={props.icon} />
                    </styled.iconBox>
                    <styled.textBox>
                        <text className='formTitle'>{props.formTitle}</text>
                        <text className='formTitleE'>{props.formTitleE}</text>
                    </styled.textBox>
                </styled.formList>
            </styled.formListContainer>
        )
    }
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const [userId, setUserId] = useState("user250");

    const onTitleHandler=(e)=>{
        setTitle(e.target.value);
    }
    const onContentHandler=(e)=>{
        setContent(e.target.value);
    }

    const Submit = () => {
        console.log(region, content, product, title, userId);
        const response = axios.post(
          `http://localhost:8080/api/products?areaCategory=${region}&content=${content}&productCategory=${product}&title=${title}&userId=${userId}`,
          {
            "areaCategory": region,
            "content": content,
            "productCategory": product,
            "title": title,
            "userId":userId
          },
          {
            headers: {
              // 'accept': 'application/json',
              'Content-Type': 'application/json'
            }
          }
        )
          .then(function (response) {
            console.log(JSON.stringify(response.data));
            // navigateToMainPage();
            // if (response.data.data.accessToken) {
            //   localStorage.setItem('login-token', response.data.data.accessToken);
            // }
          })
          .catch(function (error) {
            console.log("1111");
            console.log(error);
            
          });
      }

    const [product, setProduct] = useState("product")
    const SelectProductCategory =(e) =>{
        setProduct(e.target.id)
        console.log(e.target.id)
    }

    const category=[[clothes,"CLOTHES"],[sports,"SPORTS"], [device,"DIGITAL"], [baby,"BABY"], [food,"FOOD"], [furniture, "FURNITURE"]]

    const CategoryList = () => {
        return(
            category.map(c =>
                (
                    <styled.categoryList id={c[1]} onClick={SelectProductCategory} className={(c[1]==product)?"selected":""}>
                        <img src={c[0]}/>
                        <text>{c[1]}</text>
                    </styled.categoryList>
                ))
        )
    }


    const [region, setRegion] = useState("region")
    const SelectRegionCategory =(e) =>{
        setRegion(e.target.id)
        console.log(e.target.id)
    }

    const regionCategory=["SEOUL","BUSAN","INCHEON", "GWANGJU","ULSAN"]

    const RegionCategoryList = () => {
        return(
            regionCategory.map(r =>
                (
                    <styled.regionCategory id={r} onClick={SelectRegionCategory} className={(r==region)?"selected":""}>{r}</styled.regionCategory>
                    
                ))
        )
    }

    const [showImages, setShowImages] = useState([]);


    // 이미지 상대경로 저장
    const handleAddImages = (event) => {
        const imageLists = event.target.files;
        let imageUrlLists = [...showImages];

        for (let i = 0; i < imageLists.length; i++) {
            const currentImageUrl = URL.createObjectURL(imageLists[i]);
            imageUrlLists.push(currentImageUrl);
        }

        if (imageUrlLists.length > 10) {
            imageUrlLists = imageUrlLists.slice(0, 10);
        }

        setShowImages(imageUrlLists);
    };

    // X버튼 클릭 시 이미지 삭제
    const handleDeleteImage = (id) => {
        setShowImages(showImages.filter((_, index) => index !== id));
    };


    return (
        <styled.container>
            <Header />
            <Category />
            <styled.body>
                <styled.formLists>
                    <styled.title>상품 등록</styled.title>
                    <FormList icon={contentIcon} formTitle={'상품명 & 내용'} formTitleE={'product name & content'} selected={true} />
                    <FormList icon={photoIcon} formTitle={'사진'} formTitleE={'photos'} selected={false}/>
                    <FormList icon={categoryIcon} formTitle={'카테고리'} formTitleE={'category'} selected={false} />
                </styled.formLists>

                <styled.postForms>
                    <styled.title>상품명 & 내용</styled.title>
                    <styled.postForm>
                        <div className='title'>상품명</div>
                        <div className='titleE'>product name</div>
                        <input className='input' value={title} onChange={onTitleHandler}></input>
                        <div className='title' >내용</div>
                        <div className='titleE'>content</div>
                        <input className='contentInput' value={content} onChange={onContentHandler}></input>
                    </styled.postForm>

                    <styled.title>사진</styled.title>
                    <styled.postForm>
                        <styled.imgInput>{showImages.length > 0 ? showImages.map(item => <img src={item} className="uploadedImg" />) : '이미지를 추가하세요'}</styled.imgInput>
                        <input type="file" multiple onChange={handleAddImages}></input>

                    </styled.postForm>

                    <styled.title>카테고리</styled.title>
                    <styled.postForm>
                        <text className='title'>상품 카테고리</text>
                        <styled.categoryContainer>
                            <CategoryList/>
                        </styled.categoryContainer>
                        <text className='title'>지역 카테고리</text>
                        <styled.regionCategoryContainer>
                            <RegionCategoryList/>
                        </styled.regionCategoryContainer>
                    </styled.postForm>
                </styled.postForms>
            </styled.body>
            <styled.submitButton onClick={Submit}>등록하기</styled.submitButton>
        </styled.container>
    );
};

export default PostPage;
