import React from 'react';
import styled from 'styled-components'

const Button = styled.button`
 margin-left:4px;
 margin-right:4px;
 padding:1vh;
 background-color:${props=>props.Primary ? 'palevioletred':'while'};
 color:${props=>props.Primary ? 'white':'black'};
 border:${props=>props.Dashed?'dashed 1px #cecece': props.Primary ? 'none' : 'solid 1px #cecece'};


`


export default Button;