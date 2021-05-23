import styled,{createGlobalStyle} from 'styled-components';


const GlobalStyle = createGlobalStyle`
  *{
    box-sizing:border-box;
    margin:0;
    padding:0;
    text-decoration:none;
    a{
      color:black;
    }
    &:hover a{
      text-decoration:none;
    }
  }
`
export const Container = styled.div`
  z-index:1;
  width:100%;
  max-width:1300px;
  margin-right:0;
  margin-left:0;
  padding-left:50px;
  padding-right:50px;

  @media screen and (max-width:991px){
    padding-right:30px;
    padding-left:30px;
  }
`

export const Button = styled.button`
  border-radius:4px;
  background-color:${({black}) => (black ? '#141414' : '#ffffff')};
  color:${({black}) => (black ? '#ffffff' : '#141414')};
  white-space:nowrap;
  padding:${({big}) => (big ? '12px 64px' : '8px 10px')};
  outline:none;
  border:1px solid #ccc;
  cursor: pointer;

  &:hover{
    transition:all .3s ease-out;
    background-color:${({black}) => (black ? '#ffffff' : '#141414')};
    color:${({black}) => (black ? '#141414' : '#ffffff')};
  }
`

export default GlobalStyle;
