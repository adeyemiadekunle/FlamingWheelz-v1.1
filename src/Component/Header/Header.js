import { Head, DownloadBtn, Container, Img, StyledLink, Nav, HeaderContainer, ImgCon } from './styles';
import { Link } from 'react-router-dom';
import Logo from "../../Image/Header/Logo.png"


function Header() {
   

    return (
        <>
            <HeaderContainer>
                <Head>
                    <ImgCon><Link to="/">
                        <span> 
                            <Img src={Logo} Img/>
                        </span>
                    </Link>
                    </ImgCon>

                    <Container>
                    <Nav>  
                        <StyledLink to="/" end ><span></span>Home</StyledLink>
                        <StyledLink to="/nft" > <span></span> NFT</StyledLink>
                        <StyledLink to="/about" > <span></span>About</StyledLink>  
                        <StyledLink to="/marketplace" ><span></span>Market</StyledLink>    
                        <StyledLink to="/ecosystem" ><span></span>Ecosystem</StyledLink>    
                    </Nav>
                    <div>
                    <DownloadBtn>Download Demo</DownloadBtn>
                    </div>
                    </Container>

                </Head>

            </HeaderContainer>
        </>
    );
}

export default Header;
