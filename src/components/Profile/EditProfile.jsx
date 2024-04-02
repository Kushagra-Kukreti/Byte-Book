import {
	Avatar,
	Button,
	Center,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	Stack,
} from "@chakra-ui/react";
import { useRef, useState } from "react";

const EditProfile = ({ isOpen, onClose }) => {
	const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		bio: "",
	});
	const [avatarSrc, setAvatarSrc] = useState(""); // State to hold the src for Avatar
	const fileRef = useRef(null);

	// Function to handle file selection
	const handleFileSelect = (e) => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setAvatarSrc(reader.result); // Set the src for Avatar
			};
			reader.readAsDataURL(file);
		}
	};

	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent bg={"black"} boxShadow={"xl"} border={"1px solid gray"} mx={3}>
					<ModalHeader />
					<ModalCloseButton />
					<ModalBody>
						<Flex bg={"black"}>
							<Stack spacing={4} w={"full"} maxW={"md"} bg={"black"} p={6} my={0}>
								<Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
									Edit Profile
								</Heading>
								<FormControl>
									<Stack direction={["column", "row"]} spacing={6}>
										<Center>
											<Avatar size='xl' src={avatarSrc} border={"2px solid white "} /> {/* Set src to avatar */}
										</Center>
										<Center w='full'>
											<Button w='full' onClick={() => fileRef.current.click()}>
												Edit Profile Picture
											</Button>
											<Input
												type="file"
												accept="image/*"
												ref={fileRef}
												hidden={true}
												onChange={handleFileSelect} // Call handleFileSelect on file selection
											/>
										</Center>
									</Stack>
								</FormControl>

								<FormControl>
									<FormLabel fontSize={"sm"}>Full Name</FormLabel>
									<Input
										placeholder={"Full Name"}
										size={"sm"}
										type={"text"}
										onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
									/>
								</FormControl>

								<FormControl>
									<FormLabel fontSize={"sm"}>Username</FormLabel>
									<Input
										placeholder={"Username"}
										size={"sm"}
										type={"text"}
										onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
									/>
								</FormControl>

								<FormControl>
									<FormLabel fontSize={"sm"}>Bio</FormLabel>
									<Input
										placeholder={"Bio"}
										size={"sm"}
										type={"text"}
										onChange={(e) => setInputs({ ...inputs, bio: e.target.value })}
									/>
								</FormControl>

								<Stack spacing={6} direction={["column", "row"]}>
									<Button
										bg={"red.400"}
										color={"white"}
										w='full'
										size='sm'
										_hover={{ bg: "red.500" }}
										onClick={onClose}
									>
										Cancel
									</Button>
									<Button
										bg={"blue.400"}
										color={"white"}
										size='sm'
										w='full'
										_hover={{ bg: "blue.500" }}
										onClick={onClose}
									>
										Submit
									</Button>
								</Stack>
							</Stack>
						</Flex>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default EditProfile;
