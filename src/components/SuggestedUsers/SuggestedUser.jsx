import { Avatar, Box, Button, Flex, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types, no-unused-vars
const SuggestedUser = ({ name,img}) => {
 


  const [isFollowing,setIsFollowing] = useState(false)
	return (
		<Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
			<Flex alignItems={"center"} gap={2}>
				<Link to={"/"}>
					<Avatar  size={"md"} src={img} />
				</Link>
				<VStack spacing={2} alignItems={"flex-start"}>
					<Link to={"/"}>
						<Box fontSize={12} fontWeight={"bold"}>
							{name}
						</Box>
					</Link>
					<Box fontSize={11} color={"gray.500"}>
						{"467"} followers
					</Box>
				</VStack>
			</Flex>
	
				<Button
					fontSize={13}
					bg={"transparent"}
					p={0}
					h={"max-content"}
					fontWeight={"medium"}
					color={"blue.400"}
					cursor={"pointer"}
					_hover={{ color: "white" }}
					onClick ={()=>setIsFollowing(prev=> !prev)}
				>
					{  isFollowing ? "Unfollow" : "Follow"}
				</Button>
	
		</Flex>
	);
};

export default SuggestedUser;
