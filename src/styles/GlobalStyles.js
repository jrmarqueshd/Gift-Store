import { createGlobalStyle } from "styled-components";

export const DefaultStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Homemade+Apple|Kulim+Park:400,600,600i,700,700i&display=swap');

    *{
        box-sizing: border-box;
        color: inherit;
        font-family: 'Kulim Park', sans-serif;
        font-size: 1em;
        list-style: none;
        margin: 0;
        padding: 0;
        text-decoration: none;
    }

    body{
        font-size: 18px;
    }

    h1{
        font-family: 'Homemade Apple', cursive;
    }

    h2, h3, h4, h5{
        font-weight: 400;
        
        &.semibold{
            font-weight: 600;
        }

        &.bold{
            font-weight: 700;
        }

        &.italic{
            font-style: italic;
        }
    }

    h2{
        font-size: 2.66rem;

        &.destach{
            font-size: 3.11rem;
        }
    }

    h3{
        font-size: 1.77rem;
    }

    h4{
        font-size: 1.33rem;
    }

    button > a,
    li > a {
		padding: 12px 25px;
		display: block;
	}

    a:focus,
    input:focus,
    textarea:focus,
    select:focus,
    button:focus {
        box-shadow: 0 0 2pt 1pt rgba(179, 230, 254, 1) !important;
        outline-color: transparent !important;
    }

    .wrapper-button{
        @media (max-width: 767px){
            width: 100%;
        }
    }
`;
