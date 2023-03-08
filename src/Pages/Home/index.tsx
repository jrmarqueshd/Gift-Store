import SectionAbout from "../../containers/SectionAbout";
import SectionServices from "../../containers/SectionServices";
import SectionCalltoaction from "../../containers/SectionCalltoaction";
import SectionBlog from "../../containers/SectionBlog";

export default function Home() {
	return (
		<>
			<SectionAbout />
			<SectionServices />
			<SectionCalltoaction />
			<SectionBlog />
		</>
	);
}
