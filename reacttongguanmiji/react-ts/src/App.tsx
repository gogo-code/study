interface AaaProps {
  name: string;
  content:React.ReactElement
}

function Aaa(props: AaaProps) {
  return <div>aaa, {props.name}</div>
}

function App() {
  return <div>
    <Aaa name="guang" content={<button>xxx</button>}></Aaa>
  </div>
}

export default App;