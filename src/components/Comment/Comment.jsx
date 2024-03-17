import { Avatar, Flex, Skeleton, SkeletonCircle, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Comment = () => {
    
	const[isLoading,setIsLoading] = useState(true)

	useEffect(()=>{
setTimeout(()=>{
   setIsLoading(false)
},3000)
	},[])
   if(isLoading) return <CommentSkeleton />;
	return (
		<Flex gap={4}>
			<Link >
				<Avatar src="img2.jpg" size={"sm"} />
			</Link>
			<Flex direction={"column"}>
				<Flex gap={2} alignItems={"center"}>
					<Link  >
						<Text fontWeight={"bold"} fontSize={12}>
							{"Shweta"}
						</Text>
					</Link>
					<Text fontSize={14}>{"nice one"}</Text>
				</Flex>
				<Text fontSize={12} color={"gray"}>
					{" 1m ago"}
				</Text>
			</Flex>
		</Flex>
	);
};

export default Comment;

const CommentSkeleton = () => {
	return (
		<Flex gap={4} w={"full"} alignItems={"center"}>
			<SkeletonCircle h={10} w='10' />
			<Flex gap={1} flexDir={"column"}>
				<Skeleton height={2} width={100} />
				<Skeleton height={2} width={50} />
			</Flex>
		</Flex>
	);
};
