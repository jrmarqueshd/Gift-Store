import { lazy, Suspense } from "react";

const SectionAbout = lazy(() => import(/* webpackChunkName: "[request]" */"../../containers/SectionAbout"));
const SectionServices = lazy(() => import(/* webpackChunkName: "[request]" */"../../containers/SectionServices"));
const SectionCalltoaction = lazy(() => import(/* webpackChunkName: "[request]" */"../../containers/SectionCalltoaction"));
const SectionBlog = lazy(() => import(/* webpackChunkName: "[request]" */"../../containers/SectionBlog"));

export default function Home() {
	return (
		<>
			<Suspense fallback={<>loading about...</>}>
				<SectionAbout />
			</Suspense>
			<Suspense fallback={<>loading services...</>}>
				<SectionServices />
			</Suspense>
			<Suspense fallback={<>loading call to action...</>}>
				<SectionCalltoaction />
			</Suspense>
			<Suspense fallback={<>loading blog...</>}>
				<SectionBlog />
			</Suspense>
		</>
	);
}
