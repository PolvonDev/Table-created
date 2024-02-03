import {  Search2Icon } from "@chakra-ui/icons";
import { Box, Button, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";

const Header = () => {
  const { openModal } = useContext(ModalContext);

  return (
    <Box
      className="header"
      pl={"20px"}
      rounded={"4px"}
      pr={"20px"}
      display={"flex"}
      w={"1060px"}
      pb={"10px"}
      pt={"10px"}
      justifyContent={"space-between"}
    >
      <Box
        justifyContent={"space-between"}
        alignItems={"center"}
        display={"flex"}
        w={"100px"}
      >
        <Text fontSize={"30px"}>id</Text>
        <Box color={"grey"} fontSize={"25px"}>
          |
        </Box>
      </Box>

      <Box
        w={"300px"}
        justifyContent={"space-between"}
        alignItems={"center"}
        display={"flex"}
      >
        <Text fontSize={"30px"}>title</Text>
        <Box gap={"10px"} display={"flex"}>
          <Button
            backgroundColor={"white"}
            onClick={openModal}
            className="header"
            border={"none"}
          >
            <Search2Icon color={"grey"} fontSize={"14px"} />
          </Button>
          <Box color={"grey"} fontSize={"25px"}>
            |
          </Box>
        </Box>
      </Box>

      <Box
        justifyContent={"space-between"}
        alignItems={"center"}
        display={"flex"}
        w={"200px"}
      >
        <Text fontSize={"30PX"}>Difficultytitle</Text>
        <Box color={"grey"} fontSize={"25px"}>
          |
        </Box>
      </Box>

      <Box
        justifyContent={"space-between"}
        alignItems={"center"}
        display={"flex"}
        w={"80px"}
      >
        <Text fontSize={"20px"}>Tags id</Text>
        <Box color={"grey"} fontSize={"25px"}>
          |
        </Box>
      </Box>

      <Box
        // justifyContent={'start'}
        alignItems={"center"}
        display={"flex"}
        w={"220px"}
      >
        {/* <Button backgroundColor={'white'} h={'24px'} mr={'10px'}  border={"none"}>
          <ChevronDownIcon />
        </Button> */}
        <Text pl={"40px"} fontSize={"30px"}>
          Tags name
        </Text>

        <Box></Box>
      </Box>
    </Box>
  );
};

export default Header;
