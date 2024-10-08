import styled from 'styled-components';
import homelogo from './images/home-logo.svg'
import searchicon from './images/search-icon.svg'
import navhome from './images/nav-home.svg'
import navjobs from './images/nav-jobs.svg'
import navmessaging from './images/nav-messaging.svg'
import navnetwork from './images/nav-network.svg'
import navnotifications from './images/nav-notifications.svg'
import navwork from './images/nav-work.svg'
import user from './images/user.svg'
import downicon from './images/down-icon.svg'


const Header = (props) => {
    return(
        <Container>
            <Content>
                <Logo>
                    <a href="/home">
                        <img src={homelogo} alt='' /> 
                    </a>
                </Logo>
                <Search>
                    <div>
                        <input type='text' placeholder='Search' />
                    </div>
                    <SearchIcon>
                        <img src={searchicon} alt="" />
                    </SearchIcon>
                </Search>
                <Nav>
                    <NavListWrap>
                        <NavList className='active'>
                            <a>
                                <img src={navhome} alt='' />
                                <span>Home</span>
                            </a>
                        </NavList>

                        <NavList>
                            <a>
                                <img src={navnetwork} alt='' />
                                <span>My Networks</span>
                            </a>
                        </NavList>

                        <NavList>
                            <a>
                                <img src={navjobs} alt='' />
                                <span>Jobs</span>
                            </a>
                        </NavList>

                        <NavList>
                            <a>
                                <img src={navmessaging} alt='' />
                                <span>Messaging</span>
                            </a>
                        </NavList>

                        <NavList>
                            <a>
                                <img src={navnotifications} alt='' />
                                <span>Notifications</span>
                            </a>
                        </NavList>

                        <User>
                            <a>
                                <img src={user} alt='' />
                                <span>Me</span>
                                <img src={downicon} alt='' />
                            </a>

                            <Signout>
                                <a>
                                    Signout
                                </a>
                            </Signout>
                        </User>

                        <Work>
                            <a>
                                <img src={navwork} alt='' />
                                <span>
                                    Work
                                    <img src={downicon} alt='' />
                                </span>
                            </a>
                        </Work>

                    </NavListWrap>
                </Nav>
            </Content>
        </Container>
    )
};

const Container = styled.div`
    background-color: white;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    left: 0;
    padding: 0 24px;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 100;
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    margin: 0 auto;
    min-height: 100%;
    max-width: 1128px;
`;

const Logo = styled.span`
margin-right: 8px;
font-size: 0px;
`;

const Search = styled.div`
    opacity: 1;
    flex-grow: 1;
    position: relative;

    & > div{
        max-width: 280px;
        input {
            border: none;
            box-shadow: none;
            background-color: #eef3f8;
            border-radius: 2px;
            color: rgba(0, 0, 0, 0.9);
            width: 218px;
            padding: 0 8px 0 40px;
            line-height: 1.75;
            font-weight: 400;
            font-size: 14px;
            height: 34px;
            border-color: #dce6f1;
            vertical-align: text-top;
        }
    }
`;

const SearchIcon = styled.div`
    width: 40px;
    position: absolute;
    z-index: 1;
    top: 10px;
    left: 2px;
    border-radius: 0 2px 2px 0;
    margin: 0;
    pointer-events: none;
    display: flex;
    justify-content: center;
    align-items: center;

`;

const Nav = styled.nav`
    margin-left: auto;
    display: block;
    @media (max-width: 768px) {
        position: fixed;
        left: 0;
        bottom: 0;
        background: white;
        width: 100%;
    }
`;

const NavListWrap = styled.ul`
    display: flex;
    flex-wrap: nowrap;
    list-style-type: none;

    .active {
        span:after {
            content: "";
            transform: scale(1);
            border-bottom: 2px solid var(--white, #fff);
            bottom: 0;
            left: 0;
            position: absolute;
            transition: transform 0.2s ease-in-out;
            width: 100%;
            border-color: rgba(0, 0, 0, 0.9);
        }
    }
`;

const NavList = styled.li`
    display: flex;
    align-items: center;
    a{
        align-items: center;
        background: transparent;
        display: flex;
        flex-direction: column;
        font-size: 12px;
        font-weight: 400;
        justify-content: center;
        line-height: 1.5;
        min-height: 42px;
        min-width: 80px;
        position: relative;
        text-decoration: none;
        span {
            color: rgba(0, 0, 0, 0.6);
            display: flex;
            align-items: center;
        }
        @media (max-width: 768px) {
            min-width: 70px;
        }
    }
    &:hover, &:active {
        a {
            span {
                color: rgba(0, 0, 0, 0.9);
            }
        }
    }
`;

const Signout = styled.div`
    position: absolute;
    top: 45px;
    background: white;
    border-radius: 0 0 5px 5px;
    width: 100px;
    height: 40px;
    font-size: 16px;
    transition-duration: 167ms;
    text-align: center;
    display: none;
`;


const User = styled(NavList)`
    a > svg {
        width: 24px;
        border-radius: 50%;
    }
    a > img {
        width: 24px;
        height: 24px;
        border-radius: 50%;
    }
    span {
        display: flex;
        align-items: center;
    }

    &:hover {
        ${Signout} {
            align-items: center;
            display: flex;
            justify-content: center;
        }
    }
`;

const Work = styled(User)`
    border-left: 1px solid rgba(0, 0, 0, 0.08);
`;


export default Header;