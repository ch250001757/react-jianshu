import React from 'react'
import { Wrapper, WrapperHeader, Logo, Nav, NavItem, InputSearch, Addition, Button, SearchWrapper } from './style'
import { CSSTransition } from 'react-transition-group';
import { connect } from "react-redux";
import { actionHeader } from './store-header'
import logo from '../../static/logo.png'

function Header(props) {
        return (
            <Wrapper>
                <WrapperHeader>
                    <Logo >
                        <img src={logo} alt="" style={{ width: '100%' }} />
                    </Logo>
                    <Nav>
                        <NavItem className="left active">首页</NavItem>
                        <NavItem className="left">下载App</NavItem>
                        <NavItem className="right">
                            <span className="iconfont">&#xe636;</span>
                        </NavItem>
                        <NavItem className="right">登录</NavItem>
                        <SearchWrapper>
                            <CSSTransition
                                in={props.show}
                                timeout={300}
                                classNames="my-node"
                            >
                                <InputSearch className={props.show ? "active" : ""} onFocus={props.searchFocus} onBlur={props.searchBlur} />
                            </CSSTransition>
                            <span className={props.show ? "iconfont active" : "iconfont"}>&#xe61b;</span>
                        </SearchWrapper>

                    </Nav>
                    <Addition>
                        <Button className="reg">
                            <span className="iconfont">&#xe624;</span>  注册
                        </Button>
                        <Button className="wri">写文章</Button>
                    </Addition>
                </WrapperHeader>
            </Wrapper>
        )
}

const mapStateToProps = (state) => {
    return {
        show: state.HeaderReducer.show
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchFocus() {
            dispatch(actionHeader.searchFocus())
        },
        searchBlur() {
            dispatch(actionHeader.searchBlur())
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header)

