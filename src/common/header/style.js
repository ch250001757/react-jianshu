import styled from 'styled-components';


export const Wrapper = styled.div`
    height:58px;
    border-bottom:1px solid #f0f0f0;
`


export const WrapperHeader  = styled.div`
    min-width:768px;
    max-width:1440px;
    margin:0 auto;
    position:relative;
    height:100%
`
export const Logo  = styled.a.attrs({
    href:'/'
})`
    display:block;
    float:left;
    width:100px;
    height:100%  
`
export const Nav  = styled.div`
    display:block;
    float:left;
    width:960px;
    margin: 0 auto;
    height:100%  
`
export const NavItem  = styled.div`
    padding: 0 15px;
    line-height:58px;
    color:#333;
    &.left {
        float:left;
    }
    &.right {
        float:right;
        color:#969696
    }
    &.active {
        color:red
    }
`
export const SearchWrapper  = styled.div`
    float:left;
    position:relative;
    .iconfont{
        position: absolute;
        right: 2px;
        bottom: 4px;
        width: 30px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        border-radius: 25px;
        &.active {
            background: #969696;
        }
    }
    .my-node-enter {
        transition: all 300ms ease-out;
      }
    .my-node-enter-active {
        width:240px;
      }
    .my-node-exit {
        transition: all 300ms ease-out;
      }
    .my-node-exit-active {
        width:200px;
      }
`


export const InputSearch  = styled.input.attrs({
    placeholder:'请输入'
})`
    width:200px;
    height:38px;
    font-size:15px;
    border-radius:38px;
    line-height:38px;  
    outline:none;
    padding:0 20px;
    margin-top:10px;
    box-sizing:border-box;
    border:none
    background:#eee;
    &::placeholder{
        color:#999
    }
    &.active {
        width:240px;
    }
`

export const Addition = styled.div`
    position:absolute;
    right:0;
    height:56px;
    
`
export const Button = styled.div`
    float:right;
    padding:0 20px;
    line-height:40px;
    border:1px solid #ec6149;
    border-radius:19px;
    margin-top:9px;
    &.reg {
        color:#ea6f5a;
        margin-left:15px;
        .iconfont {
            margin-right:5px
        }
    }
`

