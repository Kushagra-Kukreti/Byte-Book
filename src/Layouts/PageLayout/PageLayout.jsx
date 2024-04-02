import { Box, Flex} from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useLocation ,useNavigate} from "react-router-dom";
import { useEffect } from "react";
// eslint-disable-next-line react/prop-types
const PageLayout = ({ children }) => {
	const { pathname } = useLocation();
	const canRenderSidebar = pathname !== "/auth" ;

	const navigate = useNavigate();

    useEffect(()=>{
		if(localStorage.getItem("access_token") === null)
		return navigate("/auth");
	},[])
	
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
