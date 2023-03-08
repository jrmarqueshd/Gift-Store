import styled from "styled-components";

export const Wrapper = styled.section`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	margin: 0 auto;
	width: 100%;
	max-width: 1000px;

	@media (min-width: 768px) {
		padding: 15px;
	}
`;

export const Title = styled.h3`
	@media (max-width: 767px) {
		text-align: center;
		margin-bottom: 30px;
		padding-left: 15px;
		padding-right: 15px;
		width: 100%;
	}
`;
