import './App.css';
import data from './data'
 
// const [count, setcount] = useState(0)

function App() {
  return (
    <div className="App">
      {data && data.length > 0 ?
        data.map(data =>
          <div onClick={() => dokunId(data.id)}>
            <div>{data.question}</div>
          </div>
        ) :
        <div>not found</div>
      }
    </div>
  );
}

export default App;
