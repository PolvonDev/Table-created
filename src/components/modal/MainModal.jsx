import { Box, Button, Input, Modal, ModalBody, ModalContent, ModalFooter,   } from "@chakra-ui/react"
import { useContext, useState } from "react"
import { ModalContext } from "../../context/ModalContext"
import { Search2Icon } from "@chakra-ui/icons"

const MainModal = () => {
    const {closeModal,open,state,setState}=useContext(ModalContext)
    const [inputData,setInputData]=useState('')
    const Search=()=>{
      const inputValue=inputData.toLowerCase()
      const newData=state.filter((value)=>{
        if(value.title.toLowerCase().includes(inputValue)){
          return value
        }
      })
      setState(newData);
    }    
   
   const insert=(event)=>{
    event.preventDefault()
    setInputData('')
   }

  return (
    <>


<Modal  size={"sm"} isOpen={open} onClose={closeModal}>
  <ModalContent>
    <ModalBody>
        <Input value={inputData} onChange={(e)=>setInputData(e.target.value)} mt={'5px'}  h={'25px'} outline={'none'} placeholder="search title"/>
    </ModalBody>

    <ModalFooter display={'flex'} justifyContent={'space-between'}>
    <Button onClick={Search} gap={'10px'} h={'32px'} colorScheme='green' mr={3} >
    <Search2Icon  fontSize={"11px"} />
      search
      </Button>
      <Box>

      <Button onClick={insert} h={'32px'} colorScheme='blue' mr={3} >
      insert
      </Button>
      <Button h={'32px'} colorScheme='blue' mr={3} onClick={closeModal}>
        Close
      </Button>
      </Box>
    </ModalFooter>
  </ModalContent>
</Modal>
    </>
  )
}

export default MainModal