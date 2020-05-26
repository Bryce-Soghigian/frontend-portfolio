import React from 'react'
import Carousel from './Carousel'
import styled from 'styled-components'
export default function NeralStyle() {
    const StyleTransferContainer = styled.div`
            background: #011627;
    height: 93vh;
    width: 100vw;
    border-bottom: 1px solid #4b6478;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (min-width: 800px) {
      background: #011627;
      height: 93vh;
      width: 100vw;
      border-bottom: 1px solid #4b6478;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
    }
  
    `
    const imageArray = ["https://raw.githubusercontent.com/Bryce-Soghigian/style-transfer-with-spell/master/images/picaso.jpg","https://raw.githubusercontent.com/Bryce-Soghigian/style-transfer-with-spell/master/images/dancing.jpeg","https://raw.githubusercontent.com/Bryce-Soghigian/style-transfer-with-spell/master/images/brycestarry.png"]
    return (
        <StyleTransferContainer>
            <Carousel images ={imageArray}/>
        </StyleTransferContainer>
    )
}
