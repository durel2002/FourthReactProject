import './App.css';

function App() {
  const arry=["meat", "fish", "egg", "rice","bread",'spagehti',3];
  return (
    <>
    <ol type="i">
    <h3>
{arry.map((item,i) => <li key={i}> <b>{item}</b> </li>)}
    </h3>
    </ol>
    </>
  );
}

export default App;
