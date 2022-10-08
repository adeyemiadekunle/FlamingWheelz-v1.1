import React, { useState, useEffect } from 'react'
import { Head, Top_Header, Side_Menu_Container, Side_Menu_Header, Side_Menu_Wrapper, Img, StyledLink, HeaderContainer, Side_Menu_Overlay, ImgCon, OpenMenu, Menu_Content, Menu_Icon } from './styles';
import { Link } from 'react-router-dom';
import Logo from "../../Image/Header/New_Logo_red.png"
import { FaBars, FaTimes } from "react-icons/fa";



const Menu = () => {
    return (
        <>
            <StyledLink to="/" end ><span></span>Home</StyledLink>
            <StyledLink to="/nft" > <span></span> NFT</StyledLink>
            <StyledLink to="/about" > <span></span>About</StyledLink>
            <StyledLink to="/marketplace" ><span></span>Market</StyledLink>
            <StyledLink to="/ecosystem" ><span></span>Ecosystem</StyledLink>
        </>
    );
}

function Header() {

    const [isOpen, setIsOpen] = useState(false);

    //  To Toggle Menu and Close it
    const menuOpen = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <>
            <HeaderContainer>
                <Head>
                    <Top_Header>
                        <ImgCon><Link to="/">
                            <span>
                                <Img src={Logo} Img />
                            </span>
                        </Link>
                        </ImgCon>
                        <OpenMenu onClick={menuOpen}>
                            <FaBars />
                        </OpenMenu>
                    </Top_Header>

                    <div className='sticky_i=Icon'>
                    </div>

                    {/* <div>{!isOpen && (<Side_Menu_Overlay></Side_Menu_Overlay>)}</div> */}
                    <div>
                        {isOpen && (<Side_Menu_Container>
                            
                            <Side_Menu_Header>
                                <Menu_Icon onClick={closeMenu}> <FaTimes  /></Menu_Icon>
                            </Side_Menu_Header>

                            <Side_Menu_Wrapper>
                                <Menu_Content>
                                    <Menu />   
                                </Menu_Content>
                            </Side_Menu_Wrapper>

                        </Side_Menu_Container>)}
                    </div>
                </Head>
            </HeaderContainer>
        </>
    );
}

export default Header;
