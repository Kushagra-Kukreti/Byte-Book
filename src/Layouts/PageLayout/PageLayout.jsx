import { Box, Flex} from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useLocation } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const PageLayout = ({ children }) => {
	const { pathname } = useLocation();
	const canRenderSidebar = pathname !== "/auth" ;

	return (
		<Flex>
			{/* sidebar on the left */}
			{canRenderSidebar ? (
				<Box w={{ base: "70px", md: "240px" }}>
					<Sidebar />
				</Box>
			) : null}
			<Box flex={1} w={{ base: "calc(100% - 70px)", md: "calc(100% - 240px)" }} mx={"auto"}>
				{children}
			</Box>
		</Flex>
	);
};

export default PageLayout;
