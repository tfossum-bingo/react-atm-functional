import React, { useState } from 'react'

const Account = props => {
    let [amount, setAmount] = useState(0)
    let [balance, setBalance] = useState(0)
    let [depositing, setDepositing] = useState(true)

    const handleSubmit = e => {
        e.preventDefault()

        if (isNaN(amount)) {
            console.log("Not a number")
        }
        else {
            let transAmount = Math.abs(Number(amount))

            console.log('e', e.target)
            if(depositing === false){
                if(transAmount > balance){
                    transAmount = 0
                } else {
                    transAmount *= -1
                }
            }
            setBalance(balance + transAmount)
        }
        setAmount(0)
    }

    let balanceClass = 'balance'
    if (balance <= 0) {
        balanceClass += ' zero'
    }

    return (
        <div className="account">
            <h2>{props.name}</h2>
            <div className={balanceClass}>${balance}</div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="enter an amount" 
                    value={amount} 
                    onChange={ e => setAmount(e.target.value) }
                />
                <input id='deposit' type="submit" value="Deposit" onClick={e => setDepositing(true)} />
                <input id='withdraw' type="submit" value="Withdraw" onClick={e=> setDepositing(false)} />
            </form>
        </div>
    )
}

export default Account