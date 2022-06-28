import styled from "styled-components";

export const ProjectBoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    height: 400px;
    margin: 50px 10px;
    border-top: 7px solid rgb(255, 89, 89);
    border-radius: 20%;
    transform: translateZ(0);
    transition: transform 0.25s ease-out;

    &:hover {
        cursor: pointer;
        transform: scale(1.05);
    }
`;

export const ProjectName = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 100%;
`;