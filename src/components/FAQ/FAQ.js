import React from 'react';
import Question from './Question';

  const FAQ=(props)=> {    
    
    return (    
      <div className='section faq-div'>
        <h1 className='h1' style={{"color":"black"}}><span className='colorfull-text'>Frequently asked questions</span> about the $WSI</h1>
        <section style={{"color":"black"}}>
         {props.data.map(item => 
          <Question key={item.id} question={item.question} answer={item.answer} />)}
        </section>  
        <p className='darktext' style={{"marginLeft":"1em"}}>You still have questions about the Public Sale or Tokenomics? Drop us a line on Telegram: https://t.me/wesenditcom</p>    
      </div>
    )
  }
  export default FAQ;
  
 
  
 
  
