
import { PaystackButton } from "react-paystack"
import "./paystack.scss";

interface props {
  totalAmount: number,
  Text:string
}

const Paystack = (props:props) => {

  const { totalAmount, Text } = props

  const publicKey = "pk_test_7f481456690f5eee2fe02235e437651608fea671"
  let amount = totalAmount * 100
  const email = "ezekiel@gmail.com"
  const name= "ezekiel"
  const phone = "555-555-5555"
  const text = Text

  const componentProps = {
    email,
    amount,
    name,
    phone,
   
    publicKey,
    text,
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! Don't leave :("),
  }

  return (
        <div className="paystack">
          <PaystackButton {...componentProps} />
        </div>
    
  )
}

export default Paystack