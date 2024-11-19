import './App.css'
import { Button } from './components/ui/Button'
import { PlusIcon } from './icons/Plusicon'
import { ShareIcon } from './icons/ShareIcon'

function App() {

  return (
    <>
      <Button 
        variant={"primary"}
        startIcon={<PlusIcon size={"lg"} />} 
        endIcon={<ShareIcon size={"lg"} />} 
        size="lg" 
        title={"Share"}
      ></Button>

<Button 
        variant={"secondary"}
        startIcon={<PlusIcon size={"lg"} />} 
        endIcon={<ShareIcon size={"lg"} />} 
        size="lg" 
        title={"Share"}
      ></Button>


      <Button 
        variant={"primary"}
        startIcon={<PlusIcon size={"sm"} />} 
        endIcon={<ShareIcon size={"sm"} />} 
        size="sm" 
        title={"Share"}
      ></Button>
    </>
  ) 
}

export default App