import Item from "./components/item/index"
import Card from "./components/card/index"

const App = () => {
  return(
    <>
      <h1>Hello world com React</h1>
      <p>Eu sou um paragrafo = )</p>
      <ul>
          <Item>
            Item 1
          </Item>
          <Item>
            Item 2
          </Item>
          <Item>
            Item 3
          </Item>
      </ul>
      <Card></Card>
    </>
  )
}

export default App;