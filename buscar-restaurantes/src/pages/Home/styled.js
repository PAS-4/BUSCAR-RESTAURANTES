import styled from "styled-components";

export const Container = styled.div`
    background-color: ${(props) => props.theme.colors.background};
    width: 360px;
    height: 100vh;
    overflow-y: auto;
`;

export const Busca = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #fff;
`;