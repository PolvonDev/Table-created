import { Box, Container, Grid, GridItem, Text } from "@chakra-ui/react";
import { useContext } from "react";
import Header from "./Header";
import { ModalContext } from "../context/ModalContext";

const MainTable = () => {
   









  const { state, setState } = useContext(ModalContext);
  const onChangeCheckboxEvent = (e, index) => {
    let res = [...state];
    res[index].hasChecker = e.target.checked;
    setState(res);
  };
  console.log(state);

  return (
    <Container display={"flex"} justifyContent={"center"} w={"full"}>
      <Box
        p={"20px"}
        mt={"50px"}
        rounded={"8px"}
        width={"1200px"}
        border={"1px solid grey"}
      >
        <Header />

        <Grid>
          {state.map((list, index) => {
            return (
              <GridItem
                key={list.id}
                borderBottom={"1px solid grey"}
                pr={"10px"}
                p={"10px"}
                pl={"10px"}
              >
                <Box display={"flex"} justifyContent={"space-between"}>
                  <Box pl={"10px"} className="list__item" w={"100px"} as="ul">
                    <Box>{list.id}</Box>
                  </Box>
                  <Box pl={"10px"} className="list__item" w={"300px"} as="ul">
                    {list.title}
                  </Box>

                  <Box  pl={"10px"} className="list__item" w={"200px"} as="ul">
                    {list.difficultyTitle}
                  </Box>
                  <Box pl={"10px"} className="list__item" w={"100px"} as="ul">
                    {list.tags.slice(0, 1).map((el) => {
                      return (
                        <Box key={el.id}>
                          <Text>{el.id}</Text>
                        </Box>
                      );
                    })}
                  </Box>

                  <Box mr={"20px"} className="list__item" w={"200px"} as="ul">
                    {list.tags.slice(0, 1).map((el) => {
                      return (
                        <Box gap={"22px"} display={"flex"} key={el.id}>
                          <input
                            type="checkbox"
                            checked={el.hasChecker}
                            onChange={(e) => onChangeCheckboxEvent(e, index)}
                          />
                          <Text>{el.name}</Text>
                        </Box>
                      );
                    })}
                  </Box>
                </Box>
              </GridItem>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
};

export default MainTable;
