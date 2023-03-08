import styled from "styled-components";

export const FooterWrapper = styled.footer`
	background-color: #fafafa;
`;

export const Menu = styled.nav`
	width: 100%;
	@media screen {
	}
`;

export const List = styled.ul`
	border-bottom: 1px solid #000;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-wrap: wrap;
	margin-bottom: 40px;
	padding-top: 40px;
	padding-bottom: 40px;

	@media (max-width: 592px) {
		flex-direction: column;
	}
`;

export const Item = styled.li``;

export const SocialWrapper = styled.section`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;

	@media (max-width: 425px) {
		margin: 0 auto;
		max-width: 250px;
	}
`;

export const Icon = styled.a`
	background-color: #000;
	border-radius: 100%;
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 40px;
	margin: 15px;
	width: 40px;

	svg {
		font-size: 1.5rem;
	}
`;

export const Copyrights = styled.section`
	text-align: center;
	margin: 40px 0;
	width: 100%;
`;
