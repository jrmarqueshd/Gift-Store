import styled from "styled-components";

export const Figure = styled.figure`
	display: flex;
	position: relative;
	width: 100%;

	@media (max-width: 767px) {
		padding-right: 15px;
		padding-left: 15px;
	}
`;

export const Image = styled.div<{ background: string }>`
	background-image: url(${props => props.background});
	background-size: cover;
	background-position: center center;

	@media (max-width: 767px) {
		background-color: rgba(0, 0, 0, 0.6);
		background-attachment: fixed;
		background-blend-mode: color;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
	}

	@media (min-width: 768px) {
		width: 40%;
	}

	@media (min-width: 992px) {
		width: 50%;
	}
`;

export const Description = styled.figcaption`
	padding-right: 15px;
	padding-bottom: 130px;
	padding-left: 15px;

	@media (max-width: 767px) {
		padding-top: 40px;
		padding-bottom: 80px;
		text-align: center;
		color: #fff;
		z-index: 1;
	}

	@media (min-width: 768px) {
		background-color: #f1f1f2;
		width: 60%;
	}

	@media (min-width: 992px) {
		padding-top: 150px;
		padding-right: 75px;
		padding-left: 75px;
		width: 50%;
	}

	@media (min-width: 1040px) {
		padding-right: 150px;
	}

	@media (min-width: 1200px) {
		padding-left: 150px;
	}
`;

export const Title = styled.h2`
	margin-bottom: 30px;

	@media (max-width: 592px) {
		font-size: 2.88rem !important;
	}

	@media (max-width: 767px) {
		margin-top: 60px;
	}

	@media (min-width: 768px) and (max-width: 991px) {
		margin-top: 150px;
	}
`;

export const Content = styled.p`
	margin-bottom: 50px;

	@media (max-width: 475px) {
		margin-bottom: 25px;
	}

	@media (max-width: 767px) {
		text-align: center !important;
	}
`;
