import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        font-family:Arial;
        box-sizing:border-box;
    }

    input,button,textarea {
        outline:none;
        border-width:0;
        background:none;
    }

    a {
        color:inherit;
        text-decoration:none;
    }

    body {
        margin:0;
        padding:0;
        background-color:rgba(0,0,0,.05);
    }

`;
