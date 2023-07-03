import Hd from './layout/Hd'
import Ft from './layout/Ft'
import Content from './layout/Content'
import Tt from './Tt'
import Study from './Study'
import Licomponent from './component/Licomponent'
import Licomponent2 from './component/Licomponent2'

export default function App(props) {  
    return (
      <>
          <Hd scrollcls="scroll" action={false}></Hd>          
          <Content cid="content"></Content>
          <Licomponent></Licomponent>
          <Licomponent2></Licomponent2>
          <Ft fid="ft"></Ft>
      </>
        
    )
}
