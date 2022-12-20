import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 100px;
`;

export const HrLine = styled.div`
    width: 1718px;
    height: 0px;
    border: 0.2px solid #323334;
`;

export const CategoryList = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 585px;
    margin-top: 40px;
    margin-bottom: 40px;

    > span {
        font-family: 'Roboto-Medium';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        color: #323334;
    }
`;