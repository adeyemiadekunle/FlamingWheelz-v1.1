import { Head, DownloadBtn, BtnContainer, Img, StyledLink, NavContainer } from './styles';
import { Link } from 'react-router-dom';
import Logo from "./Image/Logo.png"


function Header() {
   

    return (
        <>
            <div>
                <Head>
                    <div><Link to="/">
                        <span> 
                            <Img src={Logo} Img/>
                        </span>
                    </Link>
                    </div>
                    <BtnContainer>
                    <NavContainer>  
                        <StyledLink to="/" end ><span></span>Home</StyledLink>
                        <StyledLink to="/nft" > <span></span> NFT</StyledLink>
                        <StyledLink to="/about" > <span></span>About</StyledLink>  
                        <StyledLink to="/marketplace" ><span></span>Market</StyledLink>    
                        <StyledLink to="/ecosystem" ><span></span>Ecosystem</StyledLink>    
                    </NavContainer>
                    <div>
                    <DownloadBtn>Download Demo</DownloadBtn>
                    </div>
                    </BtnContainer>
                    
                </Head>
            </div>
        </>
    );
}

export default Header;
