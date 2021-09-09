import styled from 'styled-components';

const PortfolioItemContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 6rem;

    &:last-child {
        margin-bottom: 0;
    }
`

const PortfolioDescriptionContainer = styled.div`
    margin: auto 5rem;
`

const PortfolioImageContainer = styled.div`
    margin: auto;
`

const PortfolioImage = styled.img`
    width: 600px;
    height: 100%;
    max-height: 350px;
    overflow: hidden;
`

const PortfolioHeader = styled.h6`
    font-size: 1.5rem;
    text-transform: uppercase;
    font-family: 'Circular Std', Helvetica, sans-serif;
    font-weight: 300;
    opacity: 0.3;
`

const PortfolioCompany = styled.h1`
    font-size: 3rem;
    font-family: 'Circular Std', Helvetica, sans-serif;
    font-weight: 500;
    margin: 1rem 0;
`

const PortfolioDescription = styled.p`
    font-size: 1.8rem;
    font-family: 'Circular Std', Helvetica, sans-serif;
`

const PortfolioLink = styled.a`
    display: inline-block;
    font-family: 'Circular Std', Helvetica, sans-serif;
    margin-top: 2.5rem;
    font-size: 1.5rem;
    text-transform: uppercase; 
    color: #4690AE;
    transition: color 600ms;

    &:after {
        content: '>';
        opacity: 0;
        position: absolute;
    }

    &:hover {
        color: #0f2027;
        transition: 600ms;
    }

    &:hover:after {
        opacity: 1;
        transition: 600ms;
        bottom: 1px;
        right: 38.5rem;
    }
`

export { 
    PortfolioItemContainer,
    PortfolioDescriptionContainer,
    PortfolioImageContainer,
    PortfolioImage,
    PortfolioHeader,
    PortfolioCompany,
    PortfolioDescription,
    PortfolioLink
 }