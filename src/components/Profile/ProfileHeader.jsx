import { Avatar, AvatarGroup, Button, Flex, Text, VStack, useDisclosure } from "@chakra-ui/react";
import EditProfile from "./EditProfile";
import { useEffect, useState } from "react";


const ProfileHeader = () => { 
	const { isOpen, onOpen, onClose } = useDisclosure();
    const [isFollowing,setIsFollowing] = useState(false);
	const [followerCount,setFollowerCount] = useState(100);

	useEffect(()=>{
      if(isFollowing){
		setFollowerCount(followerCount+1);
	  }
	  else setFollowerCount(followerCount-1);
	},[isFollowing])
	return (
		<Flex gap={{ base: 4, sm: 10 }} py={10} direction={{ base: "column", sm: "row" }}>
			<AvatarGroup size={{ base: "xl", md: "2xl" }} justifySelf={"center"} alignSelf={"flex-start"} mx={"auto"}>
				<Avatar src="/profile_pic.png" alt='TEAM KN logo' />
			</AvatarGroup>

			<VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
				<Flex
					gap={4}
					direction={{ base: "column", sm: "row" }}
					justifyContent={{ base: "center", sm: "flex-start" }}
					alignItems={"center"}
					w={"full"}
				>
					<Text fontSize={{ base: "sm", md: "lg" }}>{"TEAM_KN"}</Text>
					
						<Flex gap={4} alignItems={"center"} justifyContent={"center"}>
							<Button
								bg={"white"}
								color={"black"}
								_hover={{ bg: "whiteAlpha.800" }}
								size={{ base: "xs", md: "sm" }}
								onClick={onOpen}
							>
								Edit Profile
							</Button>
						</Flex>
					
 
						<Flex gap={4} alignItems={"center"} justifyContent={"center"}>
							<Button
								bg={"blue.500"}
								color={"white"}
								_hover={{ bg: "blue.600" }}
								size={{ base: "xs", md: "sm" }}
                                  onClick={()=>setIsFollowing(prev=>!prev)}
							>
								{isFollowing ? "Unfollow" : "Follow"}
							</Button>
						</Flex>
				
				</Flex>

				<Flex alignItems={"center"} gap={{ base: 2, sm: 4 }}>
					<Text fontSize={{ base: "xs", md: "sm" }}>
						<Text as='span' fontWeight={"bold"} mr={1}>
							{"4"}
						</Text>
						Posts
					</Text>
					<Text fontSize={{ base: "xs", md: "sm" }}>
						<Text as='span' fontWeight={"bold"} mr={1}>
							{followerCount}
						</Text>
						Followers
					</Text>
					<Text fontSize={{ base: "xs", md: "sm" }}>
						<Text as='span' fontWeight={"bold"} mr={1}>
							{"4"}
						</Text>
						Following
					</Text>
				</Flex>
				<Flex alignItems={"center"} gap={4}>
					{/* <Text fontSize={"sm"} fontWeight={"bold"}>
						{"Hell"}
					</Text> */}
				</Flex>
				<Text fontSize={"sm"}>{"This is a platform to make you better developers"}</Text>
			</VStack>
			{isOpen && <EditProfile isOpen={isOpen} onClose={onClose} />}
		</Flex>
	);
};

export default ProfileHeader;
