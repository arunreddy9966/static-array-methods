import logo from './logo.svg';
import './App.css';
import TenthStudent from './Classes/TenthStudent';

function App() {

  // let sanjay=new TenthStudent();
  // sanjay.telMarks=81;
  // sanjay.hindiMarks=81;
  // sanjay.engMarks=81;
  // sanjay.mathsMarks=81;
  // sanjay.sciMarks=81;
  // sanjay.socMarks=81;
  // sanjay.calculateResult()
  
  console.log(TenthStudent.passMarks);

  TenthStudent.aboutTenth();

let actorsOfTollywood=["chiranjeevi",
                       "balakrishna",
                       "venkatesh",
                       "nagarjuna",
                       "raviteja",
                       "prabhas",
                       "pawankalyan",
                       "maheshbabu",
                       "ntr",
                       "ram charan",
                       "alluarjun",
                       "vijay devarakonda",
                       "nitin",
                       "nani",
                       "naga chaitanya",
                       "kalyan ram",
                       "akhil",
                       "varun tej",
                       "ram",
                       "allari naresh",
                       "sai dharamtej",
                       "saikumar",
                       "jagapatibabu",
];


  return (
    <div className="App">
    <h1>Learning Array Methods</h1>
    <button onClick={()=>{
      console.log( actorsOfTollywood.length);
      for(let i=0;i< actorsOfTollywood.length; i++){
        console.log(actorsOfTollywood[i]);
      }
    }}>Length</button>

    <button onClick={()=>{
      console.log(actorsOfTollywood[8]);
      console.log(actorsOfTollywood.at(8));
    }}>at</button>

    <button onClick={()=>{
      console.log(actorsOfTollywood);
      console.log(actorsOfTollywood.toString());
      console.log(actorsOfTollywood.join("--->"));
    }}>toString,join</button>

    <button onClick={()=>{
      actorsOfTollywood.push("jagapatibabu");
      console.log(actorsOfTollywood);
    }}>push</button>

    <button onClick={()=>{
      console.log(actorsOfTollywood);
      actorsOfTollywood.pop();
      console.log(actorsOfTollywood);
    }}>pop</button>

    <button onClick={()=>{
      console.log(actorsOfTollywood);
      actorsOfTollywood.shift();
      console.log(actorsOfTollywood);
    }}>shift</button>

    <button onClick={()=>{
      console.log(actorsOfTollywood);
      actorsOfTollywood.unshift("suman");
      console.log(actorsOfTollywood);
    }}>unshift</button>

    <button onClick={()=>{
      console.log(actorsOfTollywood);
      //actorsOfTollywood.splice(10,5);
      // actorsOfTollywood.splice(
      // 10,
      // 6,
      // "mohanbabu",
      // "vishnu",
      //  "manoj"
      //   );
      actorsOfTollywood.splice(0,0,"nagabau");
      console.log(actorsOfTollywood);
    }}>splice</button>
    
    </div>
  );
}

export default App;
