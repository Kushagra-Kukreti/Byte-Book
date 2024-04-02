import { Avatar, Box, Button, Flex, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types, no-unused-vars
const SuggestedUser = ({ name,img,onSuggestedClick}) => {
 


  const [isFollowing,setIsFollowing] = useState(false)

  const [followerCount,setFollowerCount] = useState(467)

  useEffect(()=>{
   
	if(isFollowing === true){
		setFollowerCount(followerCount+1);
	}
	else setFollowerCount(followerCount-1);


  },[isFollowing]);
	return (
		<Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
			<Flex alignItems={"center"} gap={2}>
				<Link to={"/profile"} onClick={()=>onSuggestedClick()}>
					<Avatar  size={"md"} src={img} />
				</Link>
				<VStack spacing={2} alignItems={"flex-start"} onClick={()=>onSuggestedClick()}>
					<Link to={"/profile"}>
						<Box fontSize={12} fontWeight={"bold"}>
							{name}
						</Box>
					</Link>
					<Box fontSize={11} color={"gray.500"}>
						{followerCount} followers
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
