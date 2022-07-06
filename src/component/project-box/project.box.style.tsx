import styled from "styled-components";

export const ProjectBoxContainer = styled.div`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    max-height: 400px;
    margin: 50px 10px;
    border-top: 7px solid white;
    border-radius: 20%;
    transform: translateZ(0);
    transition: transform 0.25s ease-out;
    box-shadow: 0px 1px 2px #eee, 0px 2px 2px #e9e9e9, 0px 3px 2px #ccc, 0px 4px 2px #c9c9c9, 0px 5px 2px #bbb, 0px 6px 2px #b9b9b9, 0px 7px 2px #999, 0px 7px 2px rgba(0,0,0,.5), 0px 7px 2px rgba(0,0,0,0.1), 0px 7px 2px rgba(0,0,0,.73), 0px 3px 5px rgba(0,0,0,.3), 0px 5px 10px rgba(0,0,0,.37), 0px 10px 10px rgba(0,0,0,.1), 0px 20px 20px rgba(0,0,0,0.1);

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
    font-size: 25px;
`;