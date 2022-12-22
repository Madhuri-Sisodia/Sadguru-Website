import React,{useState,useEffect} from 'react';

import Question from './Question';

  
  function FAQ(props) {    
    const [searchTerm, setSearchTerm] = useState([]);
    
    
    useEffect(() => {
      const results = props.data.filter(item=>
        item.question.toLowerCase()
      );
      setSearchTerm(results);
    }, [searchTerm]);
    
    return (    
      <div className='section container'>
        <h1 className='h1'>Frequently asked questions about the $WSI</h1>
  
  
        <section>
         {searchTerm.map(item => <Question question={item.question} answer={item.answer} />)}
        </section>  
        <p>You still have questions about the Public Sale or Tokenomics? Drop us a line on Telegram: https://t.me/wesenditcom</p>    
      </div>
    )
  }
  export default FAQ;
  
 
  
 
  
