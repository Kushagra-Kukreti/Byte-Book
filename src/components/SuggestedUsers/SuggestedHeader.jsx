import { Avatar, Button, Flex, Text } from "@chakra-ui/react";
import { Link ,useNavigate} from "react-router-dom";

const SuggestedHeader = () => {

    const navigate = useNavigate()

	return (
		<Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
			<Flex alignItems={"center"} gap={2}>
				<Link to={"/"}>
					<Avatar size={"lg"} src={"/profile_pic.png"} />
				</Link>
				<Link to={"/"}>
					<Text fontSize={12} fontWeight={"bold"}>
						{"TEAM_KN"}
					</Text>
				</Link>
			</Flex>
			<Button
                onClick={()=>navigate("/auth")}
				size={"xs"}
				background={"transparent"}
				_hover={{ background: "transparent" }}
				fontSize={14}
				fontWeight={"medium"}
				color={"blue.400"}
				cursor={"pointer"}
			>
				Log out
			</Button>
		</Flex>
	);
};

export default SuggestedHeader;
