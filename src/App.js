
import { useEffect, useState  } from 'react';
import './App.css';
import Questions from './Components/Questions';
import Timer from './Components/Timer';
import Start from './Components/Start';


function App() {
 
  const [Qnumber,setQnumber] = useState(1);
  const [timeOut,setTimeOut] = useState(false);
  const [earned ,setEarned] = useState("Rs 0");
 
  const [user,SetUser] = useState(null);

        
  const data = [
             { id : 1, 
               question : "Who is the father of Computers?",
               answers : [
                   { text : "James Gosling", correct : false  },
                   { text : "Charles Babbage", correct : true },
                   { text : "Dennis Ritchie", correct : false  },
                   { text : 'Bjarne Stroustrup', correct : false },

               ],
            },   
             { id : 2, 
               question : "Which of the following language does the computer understand?",
               answers : [
                   { text : "c language", correct : false },
                   { text : 'Assembly language', correct : false },
                   { text : 'Binary language', correct : true },
                   { text : 'Basic language', correct : false },

               ],
            },   
             { id : 3, 
               question : "Which of the following computer language is written in binary codes only?",
               answers : [
                   { text : 'Pascal', correct : false },
                   { text : 'Machine language', correct : true },
                   { text : 'C', correct : false },
                   { text : 'C#', correct : false },

               ],
            },   
             { id : 4, 
               question : "Which of the following is not a characteristic of a computer?",
               answers : [
                { text : 'I.Q', correct : true },
                { text : 'Accuracy', correct : false },
                { text : 'Speed', correct : false },
                { text : 'Versatility', correct : false },

               ],
            },   
             { id : 5, 
               question : "Which of the following is the smallest unit of data in a computer?",
               answers : [
                { text : 'Bit', correct : true },
                { text : 'Nibble', correct : false },
                { text : 'KB', correct : false },
                { text : 'Byte', correct : false },

               ],
            },   
             { id : 6, 
               question : "Which of the following is not a type of computer code?",
               answers : [
                { text : 'EDIC', correct : true },
                { text : 'ASCII', correct : false },
                { text : 'BCD', correct : false },
                { text : 'EBCDIC', correct : false },

               ],
            },   
             { id : 7, 
               question : " Which of the following is designed to control the operations of a computer?",
               answers : [
                { text : 'Application', correct : false },
                { text : 'User', correct : false },
                { text : 'System', correct : true },
                { text : 'Utility', correct : false },

               ],
            },   
             { id : 8, 
               question : "Which of the following device use positional notation to represent a decimal number?",
               answers : [
                { text : 'Pascaline', correct : false },
                   { text : 'Abacus', correct : true },
                   { text : 'Computer', correct : false },
                   { text : 'Calculator', correct : false },

               ],
            },   
             { id : 9, 
               question : "Which of the following is used in EBCDIC?",
               answers : [
                { text : 'Super', correct : false },
                { text : 'Mainframe', correct : true },
                { text : 'Mini', correct : false },
                { text : 'Micro', correct : false },

               ],
            },   
             { id : 10, 
               question : " Which of the following is used for converting  pictures,maps into digital form?",
               answers : [
                { text : 'Image Scanner', correct : false },
                { text : ' Digitizer', correct : true },
                { text : 'MICR', correct : false },
                { text : 'Printer', correct : false },

               ],
            },   
             { id : 11, 
               question : "Which of the following can access the server?",
               answers : [
                { text : 'Web Client', correct : true },
                { text : 'User', correct : false },
                { text : 'Web Browser', correct : false },
                { text : 'Web Server', correct : false },

               ],
            },   
             { id : 12, 
               question : "Which of the following is known as the language made up of binary-coded instructions?",
               answers : [
                { text : 'High level', correct : false },
                { text : 'Basic', correct : false },
                { text : 'c', correct : false },
                { text : 'Machine', correct : true },

               ],
            },   
             { id : 13, 
               question : "Which of the following is created when a user opens an account in the computer system?",
               answers : [
                { text : 'SFD', correct : false },
                { text : 'MFD', correct : false },
                { text : 'Subdirectory', correct : true },
                { text : 'RFD', correct : false },

               ],
            },   
             { id : 14, 
               question : "Which of the following is a technique that marked the beginning of computer communications?",
               answers : [
                { text : 'User Environment', correct : false },
                { text : 'Batch Environment', correct : false },
                { text : 'Time Sharing', correct : true },
                { text : 'Message passing', correct : false },

               ],
            },   
             { id : 15, 
               question : "Which of the following is the first neural network computer?",
               answers : [
                { text : 'AN', correct : false },
                { text : 'AM', correct : false },
                { text : 'RFD', correct : false },
                { text : 'SNARC', correct : true},

               ],
            },   
            
        
  ];


  const moneylist = [
    { id: 1, money: "Rs 1,000" },
    { id: 2, money: "Rs 2,000" },
    { id: 3, money: "Rs 3,000" },
    { id: 4, money: "Rs 5,000" },
    { id: 5, money: "Rs 10,000"},
    { id: 6, money: "Rs 20,000" },
    { id: 7, money: "Rs 40,000" },
    { id: 8, money: "Rs 80,000"},
    { id: 9, money: "Rs 1,60,000"},
    { id: 10, money: "Rs 3,20,000"},
    { id: 11, money: "Rs 6,40,000"},
    { id: 12, money: "Rs 12,50,000"},
    { id: 13, money: "Rs 25,00,000"},
    { id: 14, money: "Rs 50,00,000"},
    { id: 15, money: "Rs 1 crore"},

  ].reverse();
  
  useEffect(() =>{ 
        Qnumber > 1 && 
        setEarned(moneylist.find((val) => val.id === Qnumber - 1).money);
  },[Qnumber, moneylist]);

  const handleReset = () =>{
    setTimeOut(false);
    setQnumber(1);
  }

  return (
    
    <div className="App">
      { user ? ( <>
        <div className="main">
        { timeOut? (  <>  <h1 className='earned'> {user}, You earned {earned} <div onClick={handleReset} className='reset'>PLAY AGAIN</div></h1>  </>)  : (
            <>       
           <div className="top">
           <div className="timer"> <Timer  Qnumber={Qnumber} setTimeOut={setTimeOut} /> </div>
          </div>
          <div className="bottom"> 
          <Questions
                 data={data}
                 setQnumber={setQnumber}
                 Qnumber={Qnumber}
                 setTimeOut={setTimeOut}
            /> 
            </div>
            </>   
        )
          
        }
      </div>

      <div className="side">
        <ul className="list">
          {moneylist.map((value) => (
            <li className={ Qnumber === value.id ? "item active" : "item" }>
              <span className="number">
                {value.id}
              </span>
              <span className="amount">{value.money}</span>
            </li>
          ))

          }


        </ul>
      </div>
       </>) : <Start SetUser={SetUser} /> }
     
    </div>
  
  );
}

export default App;
