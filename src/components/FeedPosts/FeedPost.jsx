import { Box, Image } from "@chakra-ui/react";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";
 

// eslint-disable-next-line react/prop-types
const FeedPost = ({ img,name }) => {

	return (
		<>
			<PostHeader img ={img} name ={name}/>
			<Box my={2} borderRadius={4} overflow={"hidden"}>
				<Image src={img} alt={"FEED POST IMG"} />
			</Box>
			<PostFooter />
		</>
	);
};

export default FeedPost;
