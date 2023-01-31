
import StepProgress from './stepProgress'
import Form from './form'
import CardContainer from './cartContainer'
import ProgressControl from './progressControl'

//style...
const container = {width:'90%', margin: '0 auto'}

function Main(){
  return (
    <main className="site-header">
      <div className="main-container" style={container}>
        <StepProgress></StepProgress>
        <Form></Form>
        <CardContainer></CardContainer>
        <ProgressControl></ProgressControl>
      </div>
    </main>
  )
};
export default Main;