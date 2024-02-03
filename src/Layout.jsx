import { Box } from "@chakra-ui/react"
import MainTable from "./components/MainTable"
import MainModal from "./components/modal/MainModal"


const Layout = () => {
  
  return (
    <Box>
       <MainTable  /> 
       <MainModal/>
    </Box>
  )
}

export default Layout