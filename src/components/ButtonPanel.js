import React, {Component } from 'react'

import {onDigitPress,onOperationPress, onClear} from '../actions/ButtonActions'
 
import Button from '../containers/ButtonContainer'
 
class ButtonPanel extends Component{
 
    render(){
        return( 
         <div  >  
       <div >
         <Button className="but" name="√" actionCreator={onOperationPress}   />  
         <Button name="%" actionCreator={onOperationPress} />
         <Button name="÷" actionCreator={onOperationPress}  />
         <Button name="AC" actionCreator={onClear}  />

       </div>
       <div>
       <Button name="cos" actionCreator={onOperationPress}  />
       <Button name="+" actionCreator={onOperationPress}  />
       <Button name="-" actionCreator={onOperationPress}  />
       <Button name="sin" actionCreator={onOperationPress}  />

         <Button name="7" actionCreator={onDigitPress} />
         <Button name="8" actionCreator={onDigitPress} />
         <Button name="9" actionCreator={onDigitPress} />
         <Button name="x" actionCreator={onOperationPress}  />

       </div>
       <div>
      
          <Button name="4" actionCreator={onDigitPress} />
          <Button name="5" actionCreator={onDigitPress} />
         <Button name="6" actionCreator={onDigitPress} />
         <Button name="Exp" actionCreator={onOperationPress}  />
            </div>
       <div>

         <Button name="1" actionCreator={onDigitPress} />
         <Button name="2" actionCreator={onDigitPress} />
         <Button name="3" actionCreator={onDigitPress} />
         <Button name="tan" actionCreator={onOperationPress}  />
   </div>
       <div>
 
        
         <Button name="0" actionCreator={onDigitPress} wide />
         <Button name="." actionCreator={onDigitPress} />
         <Button name="=" actionCreator={onOperationPress}   />
         <Button name="Log" actionCreator={onOperationPress}   />

       </div>
     </div>
        );
    }
}
 

export default ButtonPanel;