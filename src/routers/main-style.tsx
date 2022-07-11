import styled from "styled-components";

export const Header = styled.h2`
    min-width: 250px;
    padding: 40px 0;
    font-size: 50px;
`;

export const MainContainer = styled.div`
    margin: 0 auto;
    max-width: 1433px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 70px;
    justify-items: center;

    @media only screen and (max-width: 1263px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (max-width: 886px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;